# frozen_string_literal: true

require 'net/http'
require 'json'
require 'uri'

module Jekyll
  class GitHubDataGenerator < Generator
    safe true
    priority :high

    def generate(site)
      return unless site.data['repositories'] && site.data['repositories']['github_users']

      username = site.data['repositories']['github_users'].first
      return unless username

      Jekyll.logger.info "GitHub Data Fetcher:", "Fetching data for #{username}..."

      begin
        # Fetch user data
        user_data = fetch_json("https://api.github.com/users/#{username}")

        # Fetch repositories
        repos_data = fetch_json("https://api.github.com/users/#{username}/repos?per_page=100&sort=updated")

        # Calculate stats
        stats = calculate_stats(user_data, repos_data)

        # Fetch language data for top repos (limit to avoid rate limiting)
        languages = fetch_language_data(repos_data.first(20))

        # Store in site data
        site.data['github_stats'] = {
          'user' => user_data,
          'stats' => stats,
          'repositories' => repos_data,
          'languages' => languages,
          'updated_at' => Time.now.to_i
        }

        # Also write to a JSON file for JavaScript to use
        write_json_file(site, 'github-data.json', site.data['github_stats'])

        Jekyll.logger.info "GitHub Data Fetcher:", "✓ Successfully fetched data for #{username}"
        Jekyll.logger.info "GitHub Data Fetcher:", "  - #{repos_data.length} repositories"
        Jekyll.logger.info "GitHub Data Fetcher:", "  - #{stats['stars']} total stars"
      rescue StandardError => e
        Jekyll.logger.warn "GitHub Data Fetcher:", "Failed to fetch GitHub data: #{e.message}"
        Jekyll.logger.warn "GitHub Data Fetcher:", "Using cached data if available"
        load_cached_data(site)
      end
    end

    private

    def fetch_json(url)
      uri = URI(url)
      http = Net::HTTP.new(uri.host, uri.port)
      http.use_ssl = true
      http.read_timeout = 10

      request = Net::HTTP::Get.new(uri)

      # Set required GitHub API headers
      request['Accept'] = 'application/vnd.github+json'
      request['X-GitHub-Api-Version'] = '2022-11-28'

      # Use GitHub token if available (set in environment or config)
      token = ENV['GITHUB_TOKEN'] || ENV['GH_TOKEN']
      request['Authorization'] = "Bearer #{token}" if token

      response = http.request(request)

      raise "HTTP #{response.code}: #{response.message}" unless response.code == '200'

      JSON.parse(response.body)
    end

    def calculate_stats(user_data, repos_data)
      total_stars = repos_data.sum { |repo| repo['stargazers_count'] || 0 }
      total_forks = repos_data.sum { |repo| repo['forks_count'] || 0 }

      {
        'repos' => user_data['public_repos'],
        'followers' => user_data['followers'],
        'stars' => total_stars,
        'forks' => total_forks
      }
    end

    def fetch_language_data(repos)
      language_bytes = {}

      repos.each do |repo|
        next unless repo['languages_url']

        begin
          languages = fetch_json(repo['languages_url'])
          languages.each do |lang, bytes|
            language_bytes[lang] = (language_bytes[lang] || 0) + bytes
          end
        rescue StandardError => e
          Jekyll.logger.warn "GitHub Data Fetcher:", "Failed to fetch languages for #{repo['name']}: #{e.message}"
        end
      end

      # Sort by bytes and return top 5
      language_bytes.sort_by { |_, bytes| -bytes }.first(5).to_h
    end

    def write_json_file(site, filename, data)
      dir = File.join(site.source, 'assets', 'data')
      FileUtils.mkdir_p(dir)

      file_path = File.join(dir, filename)
      File.write(file_path, JSON.pretty_generate(data))

      Jekyll.logger.info "GitHub Data Fetcher:", "✓ Wrote data to #{file_path}"
    end

    def load_cached_data(site)
      cache_file = File.join(site.source, 'assets', 'data', 'github-data.json')

      if File.exist?(cache_file)
        site.data['github_stats'] = JSON.parse(File.read(cache_file))
        Jekyll.logger.info "GitHub Data Fetcher:", "✓ Loaded cached data"
      end
    end
  end
end
