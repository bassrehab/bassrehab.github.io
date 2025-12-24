---
layout: page
title: Reading List
permalink: /reading-list/
description: A curated collection of research papers, tech blogs, videos, and resources
nav: false
---

<style>
.reading-list-header {
  margin-bottom: 2rem;
}

.reading-list-header p {
  color: var(--global-text-color-light);
  margin-bottom: 1.5rem;
}

.reading-list-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--global-code-bg-color);
  border-radius: 8px;
  font-size: 0.9rem;
}

.stat-card i {
  opacity: 0.7;
}

.stat-count {
  font-weight: 600;
  color: var(--global-theme-color);
}

.reading-list-controls {
  position: sticky;
  top: 0;
  background: var(--global-bg-color);
  padding: 1rem 0;
  z-index: 100;
  border-bottom: 1px solid var(--global-divider-color);
  margin-bottom: 1rem;
}

.search-container {
  position: relative;
  margin-bottom: 1rem;
}

.reading-list-search {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid var(--global-divider-color);
  border-radius: 8px;
  font-size: 1rem;
  background: var(--global-bg-color);
  color: var(--global-text-color);
}

.search-icon {
  position: absolute;
  left: 0.85rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--global-text-color-light);
  pointer-events: none;
}

.search-shortcut {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.15rem 0.5rem;
  background: var(--global-code-bg-color);
  border-radius: 4px;
  font-size: 0.75rem;
  color: var(--global-text-color-light);
  font-family: monospace;
}

.reading-list-search:focus {
  outline: none;
  border-color: var(--global-theme-color);
}

.reading-list-search:focus + .search-icon {
  color: var(--global-theme-color);
}

.reading-list-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}

.filter-btn {
  padding: 0.4rem 0.9rem;
  border: 1px solid var(--global-divider-color);
  border-radius: 20px;
  background: var(--global-bg-color);
  color: var(--global-text-color);
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.filter-btn i {
  font-size: 0.8rem;
}

.filter-btn:hover {
  border-color: var(--global-theme-color);
  color: var(--global-theme-color);
}

.filter-btn.active {
  background: var(--global-theme-color);
  border-color: var(--global-theme-color);
  color: white;
}

.filter-btn .filter-count {
  font-size: 0.75rem;
  opacity: 0.8;
}

.sort-select {
  margin-left: auto;
  padding: 0.4rem 0.75rem;
  border: 1px solid var(--global-divider-color);
  border-radius: 8px;
  background: var(--global-bg-color);
  color: var(--global-text-color);
  font-size: 0.85rem;
  cursor: pointer;
}

.tag-cloud-container {
  margin-bottom: 1.5rem;
}

.tag-cloud-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  cursor: pointer;
  color: var(--global-text-color-light);
  font-size: 0.9rem;
  user-select: none;
}

.tag-cloud-toggle:hover {
  color: var(--global-theme-color);
}

.tag-cloud-toggle i {
  transition: transform 0.2s ease;
}

.tag-cloud-toggle.expanded i {
  transform: rotate(90deg);
}

.tag-cloud {
  display: none;
  flex-wrap: wrap;
  gap: 0.4rem;
  padding: 1rem;
  background: var(--global-code-bg-color);
  border-radius: 8px;
  margin-top: 0.5rem;
}

.tag-cloud.visible {
  display: flex;
}

.tag-chip {
  padding: 0.25rem 0.6rem;
  border-radius: 12px;
  font-size: 0.75rem;
  background: var(--global-bg-color);
  color: var(--global-text-color);
  border: 1px solid var(--global-divider-color);
  cursor: pointer;
  transition: all 0.2s ease;
}

.tag-chip:hover {
  border-color: var(--global-theme-color);
  color: var(--global-theme-color);
}

.tag-chip.active {
  background: var(--global-theme-color);
  border-color: var(--global-theme-color);
  color: white;
}

.tag-chip .count {
  opacity: 0.7;
  margin-left: 0.25rem;
}

.active-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1rem;
}

.active-filter {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.2rem 0.5rem;
  background: var(--global-theme-color);
  color: white;
  border-radius: 12px;
  font-size: 0.75rem;
}

.active-filter .remove {
  cursor: pointer;
  opacity: 0.8;
}

.active-filter .remove:hover {
  opacity: 1;
}

.reading-list-results {
  margin-top: 1rem;
}

.results-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.results-count {
  color: var(--global-text-color-light);
  font-size: 0.9rem;
}

.clear-filters {
  font-size: 0.85rem;
  color: var(--global-theme-color);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
}

.clear-filters:hover {
  text-decoration: underline;
}

.reading-cards {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.reading-card {
  padding: 1rem 1.25rem;
  border: 1px solid var(--global-divider-color);
  border-radius: 8px;
  background: var(--global-bg-color);
  transition: all 0.2s ease;
}

.reading-card:hover {
  border-color: var(--global-theme-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.reading-card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.reading-card-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.4;
  flex: 1;
}

.reading-card-title a {
  color: var(--global-text-color);
  text-decoration: none;
}

.reading-card-title a:hover {
  color: var(--global-theme-color);
}

.reading-card-type {
  font-size: 0.65rem;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 600;
  white-space: nowrap;
  flex-shrink: 0;
  letter-spacing: 0.5px;
}

.type-paper { background: #e3f2fd; color: #1565c0; }
.type-blog { background: #f3e5f5; color: #7b1fa2; }
.type-video { background: #ffebee; color: #c62828; }
.type-resource { background: #e8f5e9; color: #2e7d32; }

html[data-theme="dark"] .type-paper { background: #1565c0; color: #e3f2fd; }
html[data-theme="dark"] .type-blog { background: #7b1fa2; color: #f3e5f5; }
html[data-theme="dark"] .type-video { background: #c62828; color: #ffebee; }
html[data-theme="dark"] .type-resource { background: #2e7d32; color: #e8f5e9; }

.reading-card-body {
  margin-top: 0.5rem;
}

.reading-card-description {
  font-size: 0.9rem;
  color: var(--global-text-color-light);
  margin: 0;
  line-height: 1.5;
}

.reading-card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.75rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.reading-card-url {
  font-size: 0.75rem;
  color: var(--global-text-color-light);
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.reading-card-url i {
  font-size: 0.7rem;
}

.reading-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.reading-card-tag {
  font-size: 0.7rem;
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  background: var(--global-code-bg-color);
  color: var(--global-text-color-light);
  cursor: pointer;
  transition: all 0.15s ease;
}

.reading-card-tag:hover {
  background: var(--global-theme-color);
  color: white;
}

.no-results {
  text-align: center;
  padding: 3rem;
  color: var(--global-text-color-light);
}

.no-results i {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: block;
}

@media (max-width: 768px) {
  .reading-card-header {
    flex-direction: column-reverse;
    gap: 0.5rem;
  }

  .reading-card-type {
    align-self: flex-start;
  }

  .reading-list-filters {
    gap: 0.4rem;
  }

  .filter-btn {
    padding: 0.35rem 0.7rem;
    font-size: 0.8rem;
  }

  .sort-select {
    width: 100%;
    margin-left: 0;
    margin-top: 0.5rem;
  }

  .search-shortcut {
    display: none;
  }
}
</style>

<div class="reading-list-header">
  <p>A curated collection of research papers, engineering blogs, video tutorials, and resources I find valuable. Use the filters and search to explore.</p>

  <div class="reading-list-stats" id="stats"></div>
</div>

<div class="reading-list-controls">
  <div class="search-container">
    <input type="text" class="reading-list-search" placeholder="Search titles and descriptions..." id="reading-search">
    <i class="fa-solid fa-search search-icon"></i>
    <span class="search-shortcut">/</span>
  </div>

  <div class="reading-list-filters" id="type-filters">
    <button class="filter-btn active" data-type="all">
      <i class="fa-solid fa-layer-group"></i>
      All <span class="filter-count" id="count-all"></span>
    </button>
    <button class="filter-btn" data-type="paper">
      <i class="fa-solid fa-file-lines"></i>
      Papers <span class="filter-count" id="count-paper"></span>
    </button>
    <button class="filter-btn" data-type="blog">
      <i class="fa-solid fa-blog"></i>
      Blogs <span class="filter-count" id="count-blog"></span>
    </button>
    <button class="filter-btn" data-type="video">
      <i class="fa-solid fa-video"></i>
      Videos <span class="filter-count" id="count-video"></span>
    </button>
    <button class="filter-btn" data-type="resource">
      <i class="fa-solid fa-bookmark"></i>
      Resources <span class="filter-count" id="count-resource"></span>
    </button>
    <select class="sort-select" id="sort-select">
      <option value="default">Default order</option>
      <option value="alpha">A-Z</option>
      <option value="alpha-desc">Z-A</option>
      <option value="type">Group by type</option>
    </select>
  </div>
</div>

<div class="tag-cloud-container">
  <div class="tag-cloud-toggle" id="tag-toggle">
    <i class="fa-solid fa-chevron-right"></i>
    <span>Filter by tags</span>
    <span id="tag-count-label"></span>
  </div>
  <div class="tag-cloud" id="tag-cloud"></div>
</div>

<div class="active-filters" id="active-filters"></div>

<div class="reading-list-results">
  <div class="results-header">
    <span class="results-count" id="results-count"></span>
    <button class="clear-filters" id="clear-all" style="display: none;">Clear all filters</button>
  </div>
  <div class="reading-cards" id="reading-cards"></div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const readingList = [
    {% for item in site.data.reading_list %}
    {
      title: {{ item.title | jsonify }},
      url: {{ item.url | jsonify }},
      description: {{ item.description | jsonify }},
      type: {{ item.type | jsonify }},
      tags: {{ item.tags | jsonify }}
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  let activeType = 'all';
  let activeTags = new Set();
  let searchQuery = '';
  let sortOrder = 'default';

  // Calculate stats
  function updateStats() {
    const counts = { paper: 0, blog: 0, video: 0, resource: 0 };
    readingList.forEach(item => counts[item.type]++);

    document.getElementById('count-all').textContent = `(${readingList.length})`;
    document.getElementById('count-paper').textContent = `(${counts.paper})`;
    document.getElementById('count-blog').textContent = `(${counts.blog})`;
    document.getElementById('count-video').textContent = `(${counts.video})`;
    document.getElementById('count-resource').textContent = `(${counts.resource})`;

    const statsHtml = `
      <div class="stat-card"><i class="fa-solid fa-file-lines"></i> <span class="stat-count">${counts.paper}</span> papers</div>
      <div class="stat-card"><i class="fa-solid fa-blog"></i> <span class="stat-count">${counts.blog}</span> blogs</div>
      <div class="stat-card"><i class="fa-solid fa-video"></i> <span class="stat-count">${counts.video}</span> videos</div>
      <div class="stat-card"><i class="fa-solid fa-bookmark"></i> <span class="stat-count">${counts.resource}</span> resources</div>
    `;
    document.getElementById('stats').innerHTML = statsHtml;
  }

  // Build tag cloud
  function buildTagCloud() {
    const tagCounts = {};
    readingList.forEach(item => {
      (item.tags || []).forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    });

    const sortedTags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);
    const tagCloud = document.getElementById('tag-cloud');

    document.getElementById('tag-count-label').textContent = `(${sortedTags.length} tags)`;

    tagCloud.innerHTML = sortedTags.map(([tag, count]) =>
      `<span class="tag-chip" data-tag="${tag}">${tag} <span class="count">(${count})</span></span>`
    ).join('');

    tagCloud.querySelectorAll('.tag-chip').forEach(chip => {
      chip.addEventListener('click', () => toggleTag(chip.dataset.tag));
    });
  }

  function toggleTag(tag) {
    if (activeTags.has(tag)) {
      activeTags.delete(tag);
    } else {
      activeTags.add(tag);
    }
    updateTagUI();
    renderCards();
  }

  function updateTagUI() {
    document.querySelectorAll('.tag-chip').forEach(chip => {
      chip.classList.toggle('active', activeTags.has(chip.dataset.tag));
    });

    // Update active filters display
    const activeFiltersEl = document.getElementById('active-filters');
    if (activeTags.size > 0) {
      activeFiltersEl.innerHTML = Array.from(activeTags).map(tag =>
        `<span class="active-filter">${tag} <span class="remove" data-tag="${tag}">&times;</span></span>`
      ).join('');
      activeFiltersEl.querySelectorAll('.remove').forEach(btn => {
        btn.addEventListener('click', () => toggleTag(btn.dataset.tag));
      });
    } else {
      activeFiltersEl.innerHTML = '';
    }
  }

  function filterItems() {
    return readingList.filter(item => {
      if (activeType !== 'all' && item.type !== activeType) return false;
      if (activeTags.size > 0) {
        const itemTags = new Set(item.tags || []);
        for (const tag of activeTags) {
          if (!itemTags.has(tag)) return false;
        }
      }
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const inTitle = item.title.toLowerCase().includes(query);
        const inDesc = (item.description || '').toLowerCase().includes(query);
        const inTags = (item.tags || []).some(t => t.toLowerCase().includes(query));
        if (!inTitle && !inDesc && !inTags) return false;
      }
      return true;
    });
  }

  function sortItems(items) {
    const sorted = [...items];
    switch (sortOrder) {
      case 'alpha':
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'alpha-desc':
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'type':
        const typeOrder = { paper: 0, blog: 1, video: 2, resource: 3 };
        sorted.sort((a, b) => typeOrder[a.type] - typeOrder[b.type]);
        break;
    }
    return sorted;
  }

  function renderCards() {
    const filtered = sortItems(filterItems());
    const container = document.getElementById('reading-cards');
    const countEl = document.getElementById('results-count');
    const clearBtn = document.getElementById('clear-all');

    const hasFilters = activeTags.size > 0 || activeType !== 'all' || searchQuery;
    countEl.textContent = `Showing ${filtered.length} of ${readingList.length} items`;
    clearBtn.style.display = hasFilters ? 'block' : 'none';

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="no-results">
          <i class="fa-solid fa-search"></i>
          No items match your filters.<br>Try adjusting your search or filters.
        </div>`;
      return;
    }

    container.innerHTML = filtered.map(item => {
      const typeClass = `type-${item.type}`;
      const tags = (item.tags || []).map(t =>
        `<span class="reading-card-tag" data-tag="${t}">${t}</span>`
      ).join('');

      let domain = '';
      try {
        domain = new URL(item.url).hostname.replace('www.', '');
      } catch (e) {
        domain = item.url;
      }

      return `
        <div class="reading-card" data-type="${item.type}">
          <div class="reading-card-header">
            <h3 class="reading-card-title">
              <a href="${item.url}" target="_blank" rel="noopener">${item.title}</a>
            </h3>
            <span class="reading-card-type ${typeClass}">${item.type}</span>
          </div>
          <div class="reading-card-body">
            ${item.description ? `<p class="reading-card-description">${item.description}</p>` : ''}
            <div class="reading-card-meta">
              <span class="reading-card-url"><i class="fa-solid fa-link"></i> ${domain}</span>
              ${tags ? `<div class="reading-card-tags">${tags}</div>` : ''}
            </div>
          </div>
        </div>`;
    }).join('');

    // Add tag click handlers on cards
    container.querySelectorAll('.reading-card-tag').forEach(tag => {
      tag.addEventListener('click', (e) => {
        e.preventDefault();
        toggleTag(tag.dataset.tag);
        // Expand tag cloud if collapsed
        const tagCloud = document.getElementById('tag-cloud');
        const toggle = document.getElementById('tag-toggle');
        if (!tagCloud.classList.contains('visible')) {
          tagCloud.classList.add('visible');
          toggle.classList.add('expanded');
        }
      });
    });
  }

  function clearAllFilters() {
    activeType = 'all';
    activeTags.clear();
    searchQuery = '';
    sortOrder = 'default';

    document.getElementById('reading-search').value = '';
    document.getElementById('sort-select').value = 'default';
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.type === 'all');
    });

    updateTagUI();
    renderCards();
  }

  // Event listeners
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeType = btn.dataset.type;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCards();
    });
  });

  document.getElementById('sort-select').addEventListener('change', (e) => {
    sortOrder = e.target.value;
    renderCards();
  });

  const searchInput = document.getElementById('reading-search');
  let searchTimeout;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      searchQuery = e.target.value;
      renderCards();
    }, 150);
  });

  // Keyboard shortcut for search
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
    if (e.key === 'Escape' && document.activeElement === searchInput) {
      searchInput.blur();
    }
  });

  // Tag cloud toggle
  const tagToggle = document.getElementById('tag-toggle');
  const tagCloud = document.getElementById('tag-cloud');
  tagToggle.addEventListener('click', () => {
    tagCloud.classList.toggle('visible');
    tagToggle.classList.toggle('expanded');
  });

  // Clear all button
  document.getElementById('clear-all').addEventListener('click', clearAllFilters);

  // Initialize
  updateStats();
  buildTagCloud();
  renderCards();
});
</script>
