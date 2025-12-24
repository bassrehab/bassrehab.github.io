---
layout: page
permalink: /repositories/
title: "repositories"
description: "Explore my open source contributions and projects on GitHub"
nav: true
nav_order: 6
---

<style>
header.post-header {
  display: none;
}
</style>

<div class="repositories-page-modern">
  <!-- Hero Section -->
  <div class="repos-hero">
    <div class="repos-label">Open Source</div>
    <h1 class="hero-title">Repositories</h1>
    <p class="hero-description">
      Building tools and sharing knowledge through open source. Explore my projects, fork them, and contribute.
    </p>
  </div>

  {% if site.data.repositories.github_users %}
  <!-- GitHub Stats Section -->
  <div class="stats-section">
    <div class="section-header">
      <i class="fa-solid fa-chart-line"></i>
      <h2>GitHub Statistics</h2>
    </div>

    <div id="github-stats-container" class="custom-stats-grid">
      <!-- Loading skeletons -->
      <div class="stat-card-skeleton">
        <div class="skeleton-stat-icon"></div>
        <div class="skeleton-stat-value"></div>
        <div class="skeleton-stat-label"></div>
      </div>
      <div class="stat-card-skeleton">
        <div class="skeleton-stat-icon"></div>
        <div class="skeleton-stat-value"></div>
        <div class="skeleton-stat-label"></div>
      </div>
      <div class="stat-card-skeleton">
        <div class="skeleton-stat-icon"></div>
        <div class="skeleton-stat-value"></div>
        <div class="skeleton-stat-label"></div>
      </div>
      <div class="stat-card-skeleton">
        <div class="skeleton-stat-icon"></div>
        <div class="skeleton-stat-value"></div>
        <div class="skeleton-stat-label"></div>
      </div>
    </div>

    <!-- GitHub Achievements -->
    <div id="achievements-section" class="achievements-section">
      <h3 class="achievements-title">
        <i class="fa-solid fa-trophy"></i>
        GitHub Achievements
      </h3>
      <div id="achievements-grid" class="achievements-grid">
        <!-- Achievement badges will be generated here -->
      </div>
    </div>

    <!-- Store username as data attribute -->
    <div id="github-username" data-username="{{ site.data.repositories.github_users | first }}" style="display: none;"></div>
  </div>
  {% endif %}

  {% if site.data.repositories.github_repos %}
  <!-- Repositories Grid -->
  <div class="repos-section">
    <div class="section-header">
      <i class="fa-solid fa-folder-open"></i>
      <h2>Featured Repositories</h2>
    </div>

    <div id="repos-grid" class="repos-grid">
      <!-- Loading skeletons - will be replaced by actual repo cards -->
      {% for repo in site.data.repositories.github_repos %}
        <div class="repo-card-skeleton">
          <div class="skeleton-header">
            <div class="skeleton-icon"></div>
            <div class="skeleton-title"></div>
          </div>
          <div class="skeleton-description"></div>
          <div class="skeleton-description short"></div>
          <div class="skeleton-footer">
            <div class="skeleton-stat"></div>
            <div class="skeleton-stat"></div>
            <div class="skeleton-stat"></div>
          </div>
        </div>
      {% endfor %}
    </div>

    <!-- Store repo list as data attribute -->
    <div id="repo-data" data-repos='{{ site.data.repositories.github_repos | jsonify }}' style="display: none;"></div>
  </div>

  <!-- Collaboration CTA -->
  <div class="collaboration-cta">
    <div class="cta-icon">
      <i class="fa-solid fa-handshake"></i>
    </div>
    <h3>Let's Collaborate!</h3>
    <p>
      I'm always open to collaborating with passionate developers.
      Feel free to fork any repository, submit pull requests, or reach out with ideas and suggestions.
    </p>
    <div class="cta-actions">
      <a href="https://github.com/bassrehab" target="_blank" class="btn-primary">
        <i class="fa-brands fa-github"></i>
        Follow on GitHub
      </a>
      <a href="{{ '/contact/' | relative_url }}" class="btn-secondary">
        <i class="fa-solid fa-envelope"></i>
        Get in Touch
      </a>
    </div>
  </div>
  {% endif %}
</div>

<style>
.repositories-page-modern {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 0;
}

/* Hero Section */
.repos-hero {
  margin-bottom: 4rem;
  padding: 2rem 0;
}

.repos-label {
  font-size: 0.875rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--global-theme-color);
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 900;
  line-height: 0.95;
  color: var(--global-text-color);
  margin-bottom: 1rem;
  letter-spacing: -0.03em;
}

.hero-description {
  font-size: 1.5rem;
  line-height: 1.5;
  color: var(--global-text-color-light);
  max-width: 700px;
  margin: 0 0 2rem 0;
  font-weight: 400;
}

/* Section Headers */
.section-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.section-header i {
  font-size: 1.25rem;
  color: var(--global-theme-color);
}

.section-header h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--global-text-color);
  margin: 0;
  letter-spacing: -0.01em;
}

/* Stats Section */
.stats-section {
  margin-bottom: 3rem;
}

.custom-stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.custom-stat-card {
  background: var(--global-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 6px;
  padding: 1.5rem 1rem;
  text-align: center;
  transition: border-color 0.2s ease;
}

.custom-stat-card:hover {
  border-color: var(--global-theme-color);
}

.stat-icon {
  width: 40px;
  height: 40px;
  margin: 0 auto 1rem auto;
  background: var(--global-code-bg-color);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: var(--global-theme-color);
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--global-text-color);
  margin-bottom: 0.25rem;
  line-height: 1;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--global-text-color-light);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

/* GitHub Achievements */
.achievements-section {
  background: var(--global-code-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 6px;
  padding: 1.5rem;
  margin-top: 2rem;
}

.achievements-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--global-text-color);
  margin: 0 0 1rem 0;
}

.achievements-title i {
  color: var(--global-theme-color);
  font-size: 1rem;
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 0.75rem;
  margin-top: 1rem;
}

.achievement-badge {
  background: var(--global-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 6px;
  padding: 1rem 0.75rem;
  text-align: center;
  transition: border-color 0.2s ease;
}

.achievement-badge:hover {
  border-color: var(--global-theme-color);
}

.achievement-icon {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
}

.achievement-name {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--global-text-color);
  margin-bottom: 0.25rem;
}

.achievement-description {
  font-size: 0.7rem;
  color: var(--global-text-color-light);
  line-height: 1.3;
}

.achievement-tier {
  display: inline-block;
  padding: 0.125rem 0.375rem;
  border-radius: 3px;
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 0.375rem;
  letter-spacing: 0.03em;
  background: var(--global-code-bg-color);
  color: var(--global-text-color-light);
  border: 1px solid var(--global-divider-color);
}

.tier-bronze {
  background: var(--global-code-bg-color);
  color: #8b5a2b;
  border-color: #cd7f32;
}

.tier-silver {
  background: var(--global-code-bg-color);
  color: #666;
  border-color: #999;
}

.tier-gold {
  background: var(--global-code-bg-color);
  color: #b8860b;
  border-color: #daa520;
}

.tier-platinum {
  background: var(--global-code-bg-color);
  color: #666;
  border-color: #999;
}

.tier-diamond {
  background: var(--global-code-bg-color);
  color: #0369a1;
  border-color: #7dd3fc;
}

/* Stat Card Skeletons */
.stat-card-skeleton {
  background: var(--global-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 6px;
  padding: 1.5rem 1rem;
  text-align: center;
  animation: pulse 1.5s ease-in-out infinite;
}

.skeleton-stat-icon {
  width: 40px;
  height: 40px;
  margin: 0 auto 1rem auto;
  background: var(--global-code-bg-color);
  border-radius: 6px;
}

.skeleton-stat-value {
  height: 40px;
  background: var(--global-code-bg-color);
  border-radius: 8px;
  margin: 0 auto 0.5rem auto;
  max-width: 120px;
}

.skeleton-stat-label {
  height: 16px;
  background: var(--global-code-bg-color);
  border-radius: 6px;
  margin: 0 auto;
  max-width: 100px;
}

/* Repositories Grid */
.repos-section {
  margin-bottom: 3rem;
}

.repos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 1rem;
}

/* Custom Repo Cards */
.custom-repo-card {
  background: var(--global-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 6px;
  padding: 1.5rem;
  transition: border-color 0.2s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: var(--global-text-color);
}

.custom-repo-card:hover {
  border-color: var(--global-theme-color);
  text-decoration: none;
  color: var(--global-text-color);
}

.repo-header {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.repo-icon {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  background: var(--global-code-bg-color);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  color: var(--global-theme-color);
}

.repo-title-section {
  flex: 1;
  min-width: 0;
}

.repo-name {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--global-text-color);
  margin: 0 0 0.125rem 0;
  word-wrap: break-word;
}

.repo-owner {
  font-size: 0.8rem;
  color: var(--global-text-color-light);
  margin: 0;
}

.repo-description {
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--global-text-color-light);
  margin-bottom: 1rem;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.repo-stats {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  padding-top: 0.75rem;
  border-top: 1px solid var(--global-divider-color);
}

.repo-stat {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.85rem;
  color: var(--global-text-color-light);
}

.repo-stat i {
  color: var(--global-text-color-light);
  font-size: 0.75rem;
}

.repo-language {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.85rem;
  color: var(--global-text-color);
  font-weight: 500;
}

/* Loading Skeletons for Custom Cards */
.repo-card-skeleton {
  background: var(--global-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 6px;
  padding: 1.5rem;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}

.skeleton-header {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.skeleton-icon {
  width: 36px;
  height: 36px;
  background: var(--global-code-bg-color);
  border-radius: 6px;
}

.skeleton-title {
  flex: 1;
  height: 24px;
  background: var(--global-code-bg-color);
  border-radius: 6px;
}

.skeleton-description {
  height: 16px;
  background: var(--global-code-bg-color);
  border-radius: 6px;
  margin-bottom: 0.75rem;
}

.skeleton-description.short {
  width: 70%;
}

.skeleton-footer {
  display: flex;
  gap: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--global-divider-color);
}

.skeleton-stat {
  height: 16px;
  width: 60px;
  background: var(--global-code-bg-color);
  border-radius: 6px;
}

/* Loading Skeletons */
.loading-skeleton {
  position: absolute;
  top: 1rem;
  left: 1rem;
  right: 1rem;
  background: linear-gradient(
    90deg,
    var(--global-code-bg-color) 25%,
    var(--global-divider-color) 50%,
    var(--global-code-bg-color) 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 8px;
  z-index: 1;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.stat-skeleton {
  height: 195px;
}

.repo-skeleton {
  height: 120px;
}

/* Hide skeleton when images load */
.repo img {
  display: block;
}

.repo img:not([src=""]) ~ .loading-skeleton,
img[src]:not([src=""]) + .loading-skeleton {
  display: none;
}

/* Collaboration CTA */
.collaboration-cta {
  background: var(--global-code-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 6px;
  padding: 2rem;
  text-align: center;
  margin-top: 3rem;
}

.cta-icon {
  font-size: 2rem;
  color: var(--global-theme-color);
  margin-bottom: 0.75rem;
}

.collaboration-cta h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--global-text-color);
  margin-bottom: 0.75rem;
}

.collaboration-cta p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--global-text-color-light);
  max-width: 600px;
  margin: 0 auto 1.5rem auto;
}

.cta-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 0.95rem;
}

.btn-primary {
  background: var(--global-theme-color);
  color: white;
  border: 1px solid var(--global-theme-color);
}

.btn-primary:hover {
  background: var(--global-text-color);
  color: white;
}

.btn-secondary {
  background: transparent;
  color: var(--global-text-color);
  border: 1px solid var(--global-divider-color);
}

.btn-secondary:hover {
  border-color: var(--global-theme-color);
  color: var(--global-theme-color);
}

/* Responsive */
@media (max-width: 1024px) {
  .repos-grid {
    grid-template-columns: 1fr;
  }

  .custom-stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .repositories-page-modern {
    padding: 1rem 0;
  }

  .repos-hero {
    margin-bottom: 3rem;
    padding: 1rem 0;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1.125rem;
  }

  .section-header h2 {
    font-size: 1.25rem;
  }

  .custom-stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }

  .custom-stat-card {
    padding: 1.25rem 0.875rem;
  }

  .stat-icon {
    width: 36px;
    height: 36px;
    font-size: 1.125rem;
  }

  .stat-value {
    font-size: 1.75rem;
  }

  .stat-label {
    font-size: 0.8rem;
  }

  .achievements-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 0.625rem;
  }

  .achievement-badge {
    padding: 0.875rem 0.625rem;
  }

  .achievement-icon {
    font-size: 1.5rem;
  }

  .language-section {
    padding: 1.5rem;
  }

  .language-title {
    font-size: 1.25rem;
  }

  .language-info {
    min-width: 100px;
  }

  .language-bar-wrapper {
    height: 28px;
  }

  .repos-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .collaboration-cta {
    padding: 1.75rem 1.25rem;
  }

  .collaboration-cta h3 {
    font-size: 1.25rem;
  }

  .cta-actions {
    flex-direction: column;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .custom-stats-grid {
    grid-template-columns: 1fr;
  }

  .achievements-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }

  .achievement-badge {
    padding: 0.75rem 0.5rem;
  }

  .achievement-icon {
    font-size: 1.5rem;
    margin-bottom: 0.375rem;
  }

  .achievement-name {
    font-size: 0.75rem;
  }

  .achievement-description {
    font-size: 0.65rem;
  }

  .language-bar-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .language-bar-wrapper {
    width: 100%;
  }
}
</style>

<script>
// Language colors from GitHub (used in repo cards)
const languageColors = {
  'JavaScript': '#f1e05a',
  'Python': '#3572A5',
  'Java': '#b07219',
  'TypeScript': '#2b7489',
  'C++': '#f34b7d',
  'C': '#555555',
  'Ruby': '#701516',
  'Go': '#00ADD8',
  'Rust': '#dea584',
  'PHP': '#4F5D95',
  'Swift': '#ffac45',
  'Kotlin': '#F18E33',
  'Shell': '#89e051',
  'HTML': '#e34c26',
  'CSS': '#563d7c',
  'SCSS': '#c6538c',
  'Vue': '#41b883',
  'Dart': '#00B4AB',
  'Solidity': '#AA6746'
};

// Global cache for fetched repos
let allReposCache = null;

// Cache keys
const CACHE_KEY_REPOS = 'github_repos_cache';
const CACHE_KEY_STATS = 'github_stats_cache';
const CACHE_KEY_LANGUAGES = 'github_languages_cache';
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

// Helper to get cached data
function getCachedData(key) {
  try {
    const cached = localStorage.getItem(key);
    if (!cached) return null;

    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp > CACHE_DURATION) {
      localStorage.removeItem(key);
      return null;
    }
    return data;
  } catch (e) {
    return null;
  }
}

// Helper to set cached data
function setCachedData(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify({
      data,
      timestamp: Date.now()
    }));
  } catch (e) {
    console.warn('Failed to cache data:', e);
  }
}

// Fetch and render GitHub statistics
document.addEventListener('DOMContentLoaded', async function() {
  // Load GitHub data from static JSON file (generated at build time)
  const usernameEl = document.getElementById('github-username');
  if (usernameEl) {
    await loadGitHubDataFromStatic();
  }

  // Render repositories using cached data
  const repoDataEl = document.getElementById('repo-data');
  if (!repoDataEl) {
    console.log('No repo-data element found');
    return;
  }

  const featuredRepoNames = JSON.parse(repoDataEl.dataset.repos);
  console.log('Featured repositories:', featuredRepoNames);
  const grid = document.getElementById('repos-grid');

  if (!grid) {
    console.error('repos-grid element not found');
    return;
  }

  try {
    // Wait for cache to be populated
    let attempts = 0;
    while (!allReposCache && attempts < 50) {
      await new Promise(resolve => setTimeout(resolve, 100));
      attempts++;
    }

    if (!allReposCache || !Array.isArray(allReposCache)) {
      throw new Error('Failed to fetch repository data');
    }

    console.log('Using cached repo data:', allReposCache.length, 'repos');

    // Clear skeleton loaders
    grid.innerHTML = '';

    // Filter and render featured repos from cache
    let renderedCount = 0;
    featuredRepoNames.forEach(repoPath => {
      const [owner, repoName] = repoPath.split('/');
      const repoData = allReposCache.find(r =>
        r.owner.login.toLowerCase() === owner.toLowerCase() &&
        r.name.toLowerCase() === repoName.toLowerCase()
      );

      if (repoData) {
        console.log(`Rendering repo: ${repoData.name}`);
        grid.appendChild(createRepoCard(repoData));
        renderedCount++;
      } else {
        console.warn(`Repo not found in cache: ${repoPath}`);
      }
    });

    console.log(`Rendered ${renderedCount} out of ${featuredRepoNames.length} repositories`);

    if (renderedCount === 0) {
      grid.innerHTML = '<p style="text-align: center; color: var(--global-text-color-light); grid-column: 1/-1;">No repositories found.</p>';
    }
  } catch (error) {
    console.error('Error rendering repositories:', error);

    // Show rate limit message
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 2rem;">
        <i class="fa-solid fa-clock" style="font-size: 3rem; color: var(--global-theme-color); margin-bottom: 1rem;"></i>
        <h3 style="color: var(--global-text-color); margin-bottom: 0.5rem;">GitHub API Rate Limit Reached</h3>
        <p style="color: var(--global-text-color-light); margin-bottom: 1rem;">
          Please wait about an hour for the rate limit to reset, or check back later.
        </p>
        <a href="https://github.com/bassrehab" target="_blank" class="btn-primary" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.5rem; background: var(--global-theme-color); color: white; text-decoration: none; border-radius: 8px;">
          <i class="fa-brands fa-github"></i>
          View on GitHub Instead
        </a>
      </div>
    `;
  }
});

// Load GitHub data from static JSON file (generated at build time)
async function loadGitHubDataFromStatic() {
  try {
    console.log('Loading GitHub data from static file...');

    // Fetch the static JSON file generated at build time
    const response = await fetch('/assets/data/github-data.json');

    if (!response.ok) {
      throw new Error(`Failed to load static data: ${response.status}`);
    }

    const data = await response.json();

    console.log('✓ Loaded static GitHub data');
    console.log('  - Last updated:', new Date(data.updated_at * 1000).toLocaleString());

    // Store repos in cache for featured repos section
    allReposCache = data.repositories;

    // Render stats
    renderGitHubStats(data.stats);

    // Render achievements
    renderAchievements(data.stats, data.user);

  } catch (error) {
    console.error('Error loading GitHub data:', error);

    // Fallback message
    document.getElementById('github-stats-container').innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 2rem;">
        <i class="fa-solid fa-exclamation-triangle" style="font-size: 3rem; color: var(--global-theme-color); margin-bottom: 1rem;"></i>
        <h3 style="color: var(--global-text-color); margin-bottom: 0.5rem;">Unable to Load GitHub Data</h3>
        <p style="color: var(--global-text-color-light);">
          The data file couldn't be loaded. Please rebuild the site.
        </p>
      </div>
    `;
  }
}

function renderGitHubStats(stats) {
  const container = document.getElementById('github-stats-container');
  container.innerHTML = '';

  const statCards = [
    {
      icon: 'fa-solid fa-book',
      value: stats.repos,
      label: 'Repositories'
    },
    {
      icon: 'fa-solid fa-star',
      value: formatNumber(stats.stars),
      label: 'Total Stars'
    },
    {
      icon: 'fa-solid fa-code-fork',
      value: formatNumber(stats.forks),
      label: 'Total Forks'
    },
    {
      icon: 'fa-solid fa-users',
      value: formatNumber(stats.followers),
      label: 'Followers'
    }
  ];

  statCards.forEach(stat => {
    const card = document.createElement('div');
    card.className = 'custom-stat-card';
    card.innerHTML = `
      <div class="stat-icon">
        <i class="${stat.icon}"></i>
      </div>
      <div class="stat-value">${stat.value}</div>
      <div class="stat-label">${stat.label}</div>
    `;
    container.appendChild(card);
  });
}

function createRepoCard(repo) {
  const card = document.createElement('a');
  card.href = repo.html_url;
  card.target = '_blank';
  card.className = 'custom-repo-card';

  const owner = repo.owner.login;
  const name = repo.name;
  const description = repo.description || 'No description available';
  const language = repo.language;
  const stars = repo.stargazers_count;
  const forks = repo.forks_count;
  const watchers = repo.watchers_count;

  // Get language color
  const languageColor = languageColors[language] || '#858585';

  card.innerHTML = `
    <div class="repo-header">
      <div class="repo-icon">
        <i class="fa-brands fa-github"></i>
      </div>
      <div class="repo-title-section">
        <h3 class="repo-name">${name}</h3>
        <p class="repo-owner">${owner}</p>
      </div>
    </div>

    <p class="repo-description">${description}</p>

    <div class="repo-stats">
      ${language ? `
        <div class="repo-language">
          <span class="language-dot" style="background-color: ${languageColor};"></span>
          ${language}
        </div>
      ` : ''}
      <div class="repo-stat">
        <i class="fa-solid fa-star"></i>
        ${formatNumber(stars)}
      </div>
      <div class="repo-stat">
        <i class="fa-solid fa-code-fork"></i>
        ${formatNumber(forks)}
      </div>
      <div class="repo-stat">
        <i class="fa-solid fa-eye"></i>
        ${formatNumber(watchers)}
      </div>
    </div>
  `;

  return card;
}

function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
}

// Achievement definitions
const achievements = [
  {
    id: 'repos-10',
    name: 'Creator',
    description: '10+ repositories',
    icon: '📦',
    tier: 'bronze',
    color: '#cd7f32',
    check: (stats) => stats.repos >= 10
  },
  {
    id: 'repos-25',
    name: 'Builder',
    description: '25+ repositories',
    icon: '🏗️',
    tier: 'silver',
    color: '#c0c0c0',
    check: (stats) => stats.repos >= 25
  },
  {
    id: 'repos-50',
    name: 'Architect',
    description: '50+ repositories',
    icon: '🏛️',
    tier: 'gold',
    color: '#ffd700',
    check: (stats) => stats.repos >= 50
  },
  {
    id: 'stars-50',
    name: 'Rising Star',
    description: '50+ total stars',
    icon: '⭐',
    tier: 'bronze',
    color: '#cd7f32',
    check: (stats) => stats.stars >= 50
  },
  {
    id: 'stars-100',
    name: 'Star Collector',
    description: '100+ total stars',
    icon: '🌟',
    tier: 'silver',
    color: '#c0c0c0',
    check: (stats) => stats.stars >= 100
  },
  {
    id: 'stars-250',
    name: 'Stellar',
    description: '250+ total stars',
    icon: '✨',
    tier: 'gold',
    color: '#ffd700',
    check: (stats) => stats.stars >= 250
  },
  {
    id: 'followers-10',
    name: 'Influencer',
    description: '10+ followers',
    icon: '👥',
    tier: 'bronze',
    color: '#cd7f32',
    check: (stats) => stats.followers >= 10
  },
  {
    id: 'followers-25',
    name: 'Community Leader',
    description: '25+ followers',
    icon: '👨‍👩‍👧‍👦',
    tier: 'silver',
    color: '#c0c0c0',
    check: (stats) => stats.followers >= 25
  },
  {
    id: 'followers-50',
    name: 'Trendsetter',
    description: '50+ followers',
    icon: '🎯',
    tier: 'gold',
    color: '#ffd700',
    check: (stats) => stats.followers >= 50
  },
  {
    id: 'forks-10',
    name: 'Forked',
    description: '10+ total forks',
    icon: '🍴',
    tier: 'bronze',
    color: '#cd7f32',
    check: (stats) => stats.forks >= 10
  },
  {
    id: 'forks-25',
    name: 'Fork Master',
    description: '25+ total forks',
    icon: '🔱',
    tier: 'silver',
    color: '#c0c0c0',
    check: (stats) => stats.forks >= 25
  },
  {
    id: 'forks-50',
    name: 'Fork Legend',
    description: '50+ total forks',
    icon: '⚡',
    tier: 'gold',
    color: '#ffd700',
    check: (stats) => stats.forks >= 50
  },
  {
    id: 'veteran-5',
    name: 'Veteran',
    description: '5+ years on GitHub',
    icon: '🎖️',
    tier: 'bronze',
    color: '#cd7f32',
    check: (stats, user) => {
      const years = (new Date() - new Date(user.created_at)) / (1000 * 60 * 60 * 24 * 365);
      return years >= 5;
    }
  },
  {
    id: 'veteran-10',
    name: 'Decade',
    description: '10+ years on GitHub',
    icon: '🏆',
    tier: 'gold',
    color: '#ffd700',
    check: (stats, user) => {
      const years = (new Date() - new Date(user.created_at)) / (1000 * 60 * 60 * 24 * 365);
      return years >= 10;
    }
  },
  {
    id: 'gists-5',
    name: 'Snippet Sharer',
    description: '5+ public gists',
    icon: '📝',
    tier: 'bronze',
    color: '#cd7f32',
    check: (stats, user) => user.public_gists >= 5
  }
];

function renderAchievements(stats, user) {
  const container = document.getElementById('achievements-grid');
  if (!container) return;

  container.innerHTML = '';

  // Filter earned achievements
  const earnedAchievements = achievements.filter(achievement =>
    achievement.check(stats, user)
  );

  // Sort by tier (diamond > platinum > gold > silver > bronze)
  const tierOrder = { 'diamond': 5, 'platinum': 4, 'gold': 3, 'silver': 2, 'bronze': 1 };
  earnedAchievements.sort((a, b) => tierOrder[b.tier] - tierOrder[a.tier]);

  // Render each achievement
  earnedAchievements.forEach(achievement => {
    const badge = document.createElement('div');
    badge.className = 'achievement-badge';
    badge.style.setProperty('--achievement-color', achievement.color);

    badge.innerHTML = `
      <div class="achievement-icon">${achievement.icon}</div>
      <div class="achievement-name">${achievement.name}</div>
      <div class="achievement-description">${achievement.description}</div>
      <div class="achievement-tier tier-${achievement.tier}">${achievement.tier}</div>
    `;

    container.appendChild(badge);
  });

  console.log(`Rendered ${earnedAchievements.length} achievements`);
}
</script>
