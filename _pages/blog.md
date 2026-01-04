---
layout: default
permalink: /blog/
title: blog
nav: true
nav_order: 1
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1
    after: 3
---

<style>
/* Editorial Blog Page */
.blog-editorial {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
}

/* Hero Section */
.blog-hero {
  min-height: 30vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 4rem;
  padding: 2rem 0;
}

.blog-hero h1 {
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 900;
  line-height: 0.95;
  color: var(--global-text-color, #000);
  margin-bottom: 1rem;
  letter-spacing: -0.03em;
}

.blog-hero h2 {
  font-size: 1.5rem;
  line-height: 1.5;
  color: var(--global-text-color-light, #666);
  margin-bottom: 2rem;
  max-width: 700px;
  font-weight: 400;
}

/* Tag/Category Pills */
.tag-category-list {
    margin-top: 2rem;
    border-bottom: none!important;
}

.tag-category-list ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.tag-category-list li {
  display: inline-block;
  padding: 0.65rem 1.25rem !important;
  background: var(--global-code-bg-color, #f8f9fa);
  border: 1px solid var(--global-divider-color, #e5e5e5);
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.tag-category-list li:hover {
  background: var(--global-theme-color, #b509ac);
  border-color: var(--global-theme-color, #b509ac);
  transform: translateY(-2px);
}

.tag-category-list li:hover a,
.tag-category-list li:hover i {
  color: white !important;
}

.tag-category-list a {
  color: var(--global-text-color, #000);
  text-decoration: none;
  transition: color 0.3s;
}

.tag-category-list p {
  display: none; /* Hide bullets between tags */
}

/* Featured Posts Section */
.featured-posts {
  margin-bottom: 6rem;
}

.featured-section-label {
  font-size: 0.875rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--global-theme-color, #b509ac);
  font-weight: 700;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.featured-card {
  background: var(--global-card-bg-color, #fff);
  border: 2px solid var(--global-theme-color, #b509ac);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.featured-card::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  background: var(--global-theme-color, #b509ac);
  opacity: 0.05;
  border-radius: 0 0 0 100%;
}

.featured-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(181, 9, 172, 0.15);
}

.featured-pin {
  position: absolute;
  top: 2rem;
  right: 2rem;
  color: var(--global-theme-color, #b509ac);
  font-size: 1.25rem;
}

.featured-card h3 {
  font-size: 1.75rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.featured-card h3 a {
  color: var(--global-text-color, #000);
  text-decoration: none;
  transition: color 0.3s;
}

.featured-card h3 a:hover {
  color: var(--global-theme-color, #b509ac);
}

.featured-card p {
  color: var(--global-text-color-light, #666);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.featured-card .post-meta {
  font-size: 0.875rem;
  color: var(--global-text-color-light, #666);
  font-weight: 600;
}

/* All Posts Section */
.all-posts-section {
  margin-top: 4rem;
  padding-top: 1.5rem;
  border-top: 2px solid var(--global-divider-color, #e5e5e5);
}

.section-header {
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 3rem;
  color: var(--global-text-color, #000);
  letter-spacing: -0.02em;
}

.post-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.post-list > li {
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--global-divider-color, #e5e5e5);
}

.post-list > li:last-child {
  border-bottom: none;
}

/* Post Card in List */
.post-item {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.post-item.with-thumbnail {
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

.post-item h3 {
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.post-item h3 a {
  color: var(--global-text-color, #000);
  text-decoration: none;
  transition: color 0.3s;
}

.post-item h3 a:hover {
  color: var(--global-theme-color, #b509ac);
}

.post-item .post-description {
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--global-text-color-light, #666);
  margin-bottom: 1rem;
}

.post-item .post-meta {
  font-size: 0.875rem;
  color: var(--global-text-color-light, #666);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.post-item .post-tags {
  font-size: 0.875rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}

.post-item .post-tags a {
  color: var(--global-text-color-light, #666);
  text-decoration: none;
  transition: color 0.3s;
}

.post-item .post-tags a:hover {
  color: var(--global-theme-color, #b509ac);
}

.post-thumbnail {
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
  min-height: 200px;
  max-height: 280px;
}

.post-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.4s;
}

.post-item:hover .post-thumbnail img {
  transform: scale(1.05);
}

/* External link icon */
.external-link-icon {
  display: inline-block;
  margin-left: 0.5rem;
  opacity: 0.6;
}

/* Responsive */
@media (max-width: 1024px) {
  .featured-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .blog-hero {
    min-height: auto;
    margin-bottom: 3rem;
  }
  
  .blog-hero h1 {
    font-size: 2.5rem;
  }
  
  .blog-hero h2 {
    font-size: 1.125rem;
  }
  
  .featured-card {
    padding: 2rem;
  }
  
  .featured-card h3 {
    font-size: 1.5rem;
  }
  
  .post-item.with-thumbnail {
    grid-template-columns: 1fr;
  }
  
  .post-item h3 {
    font-size: 1.5rem;
  }
  
  .all-posts-section {
    margin-top: 3rem;
    padding-top: 3rem;
  }
  
  .section-header {
    font-size: 1.75rem;
  }
}
</style>

<div class="blog-editorial">
  
  <!-- Hero Section -->
  <div class="blog-hero">
    {% assign blog_name_size = site.blog_name | size %}
    {% assign blog_description_size = site.blog_description | size %}
    
    {% if blog_name_size > 0 %}
      <h1>{{ site.blog_name }}</h1>
    {% else %}
      <h1>Technical Insights</h1>
    {% endif %}
    
    {% if blog_description_size > 0 %}
      <h2>{{ site.blog_description }}</h2>
    {% else %}
      <h2>Deep dives into Data, AI, and Cloud architecture from the field</h2>
    {% endif %}
    
    <!-- Tag/Category Pills -->
    {% if site.display_tags and site.display_tags.size > 0 or site.display_categories and site.display_categories.size > 0 %}
    <div class="tag-category-list">
      <ul>
        {% for tag in site.display_tags %}
          <li>
            <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">
              <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}
            </a>
          </li>
        {% endfor %}
        {% for category in site.display_categories %}
          <li>
            <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">
              <i class="fa-solid fa-tag fa-sm"></i> {{ category }}
            </a>
          </li>
        {% endfor %}
      </ul>
    </div>
    {% endif %}
  </div>

  <!-- Featured Posts -->

{% assign featured_posts = site.posts | where: "featured", "true" %}
{% if featured_posts.size > 0 %}

  <div class="featured-posts">
    <div class="featured-section-label">
      <i class="fa-solid fa-star"></i>
      Featured Articles
    </div>
    
    <div class="featured-grid">
      {% for post in featured_posts %}
      <article class="featured-card">
        <div class="featured-pin">
          <i class="fa-solid fa-thumbtack"></i>
        </div>
        
        <h3>
          {% if post.redirect == blank %}
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          {% elsif post.redirect contains '://' %}
            <a href="{{ post.redirect }}" target="_blank">{{ post.title }}</a>
          {% else %}
            <a href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
          {% endif %}
        </h3>
        
        <p>{{ post.description }}</p>
        
        {% if post.external_source == blank %}
          {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
        {% else %}
          {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
        {% endif %}
        {% assign year = post.date | date: "%Y" %}
        
        <p class="post-meta">
          {{ read_time }} min read &nbsp; · &nbsp;
          {{ post.date | date: '%B %d, %Y' }}
        </p>
      </article>
      {% endfor %}
    </div>
  </div>
  {% endif %}

  <!-- All Posts Section -->
  <div class="all-posts-section">
    <h2 class="section-header">All Articles</h2>
    
    <ul class="post-list">
      {% if page.pagination.enabled %}
        {% assign postlist = paginator.posts %}
      {% else %}
        {% assign postlist = site.posts %}
      {% endif %}

      {% for post in postlist %}
        {% if post.external_source == blank %}
          {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
        {% else %}
          {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
        {% endif %}
        {% assign year = post.date | date: "%Y" %}
        {% assign tags = post.tags | join: "" %}
        {% assign categories = post.categories | join: "" %}

        <li>
          <article class="post-item {% if post.thumbnail %}with-thumbnail{% endif %}">
            <div class="post-content">
              <h3>
                {% if post.redirect == blank %}
                  <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                {% elsif post.redirect contains '://' %}
                  <a href="{{ post.redirect }}" target="_blank">{{ post.title }}</a>
                  <svg class="external-link-icon" width="1.5rem" height="1.5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                {% else %}
                  <a href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
                {% endif %}
              </h3>

              <p class="post-description">{{ post.description }}</p>

              <p class="post-meta">
                {{ read_time }} min read &nbsp; · &nbsp;
                {{ post.date | date: '%B %d, %Y' }}
                {% if post.external_source %}
                  &nbsp; · &nbsp; {{ post.external_source }}
                {% endif %}
              </p>

              <div class="post-tags">
                <a href="{{ year | prepend: '/blog/' | relative_url }}">
                  <i class="fa-solid fa-calendar fa-sm"></i> {{ year }}
                </a>

                {% if tags != "" %}
                  {% for tag in post.tags %}
                    <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">
                      <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}
                    </a>
                  {% endfor %}
                {% endif %}

                {% if categories != "" %}
                  {% for category in post.categories %}
                    <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">
                      <i class="fa-solid fa-tag fa-sm"></i> {{ category }}
                    </a>
                  {% endfor %}
                {% endif %}
              </div>
            </div>

            {% if post.thumbnail %}
            <div class="post-thumbnail">
              <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}">
            </div>
            {% endif %}
          </article>
        </li>
      {% endfor %}
    </ul>

    {% if page.pagination.enabled %}
      {% include pagination.liquid %}
    {% endif %}

  </div>

</div>
