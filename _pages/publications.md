---
layout: page
permalink: /publications/
title: "publications"
description: "Exploring innovations in AI, distributed systems, blockchain, and beyond"
nav: true
nav_order: 3
---

<style>
header.post-header {
  display: none;
}
</style>

<div class="publications-page-modern">
  <!-- Hero Section -->
  <div class="pubs-hero">
    <div class="pubs-label">Research</div>
    <h1 class="hero-title">Publications</h1>
    <p class="hero-description">
      Exploring artificial intelligence, distributed systems, blockchain, and algorithmic innovation - from theoretical foundations to practical implementations.
    </p>

    <!-- Research Interests Tags -->
    <div class="research-interests">
      <span class="interest-tag">Generative AI & LLMs</span>
      <span class="interest-tag">Distributed Systems</span>
      <span class="interest-tag">Privacy & Blockchain</span>
      <span class="interest-tag">Financial Technology</span>
      <span class="interest-tag">Graph Algorithms</span>
    </div>

  </div>

  <!-- Statistics Dashboard -->
  <div class="pubs-stats">
    <div class="stat-card">
      <div class="stat-icon">
        <i class="fa-solid fa-file-lines"></i>
      </div>
      <div class="stat-content">
        <div class="stat-number" id="total-pubs">14</div>
        <div class="stat-label">Publications</div>
      </div>
    </div>

    <div class="stat-card">
      <div class="stat-icon">
        <i class="fa-solid fa-calendar-days"></i>
      </div>
      <div class="stat-content">
        <div class="stat-number">18</div>
        <div class="stat-label">Years Active</div>
      </div>
    </div>

    <div class="stat-card">
      <div class="stat-icon">
        <i class="fa-solid fa-star"></i>
      </div>
      <div class="stat-content">
        <div class="stat-number" id="featured-pubs">7</div>
        <div class="stat-label">Featured Works</div>
      </div>
    </div>

    <div class="stat-card">
      <div class="stat-icon">
        <i class="fa-solid fa-building"></i>
      </div>
      <div class="stat-content">
        <div class="stat-number">5</div>
        <div class="stat-label">Institutions</div>
      </div>
    </div>

  </div>

  <!-- Filter/Search Section -->
  <div class="pubs-filter-section">
    <div class="section-header">
      <i class="fa-solid fa-filter"></i>
      <h2>Browse Publications</h2>
    </div>

    <div class="filter-controls">
      <div class="search-container">
        {% include bib_search.liquid %}
      </div>

      <div class="year-filter-buttons">
        <button class="year-filter-btn active" data-year="all">All Years</button>
        <button class="year-filter-btn" data-year="2025">2025</button>
        <button class="year-filter-btn" data-year="2023">2023</button>
        <button class="year-filter-btn" data-year="2021">2021</button>
        <button class="year-filter-btn" data-year="2020-2015">2015-2020</button>
        <button class="year-filter-btn" data-year="2014-2007">2007-2014</button>
      </div>
    </div>

  </div>

  <!-- Publications List with Timeline -->
  <div class="publications-timeline">
    <div class="publications">
      {% bibliography %}
    </div>
  </div>
</div>

<style>
.publications-page-modern {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
}

/* Hero Section */
.pubs-hero {
  margin-bottom: 4rem;
  padding: 2rem 0;
}

.pubs-label {
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
  max-width: 800px;
  margin: 0 0 2rem 0;
  font-weight: 400;
}

/* Research Interests */
.research-interests {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 2rem;
}

.interest-tag {
  display: inline-flex;
  align-items: center;
  padding: 0.65rem 1.25rem !important;
  background: var(--global-code-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--global-text-color-light);
  transition: border-color 0.2s ease;
}

.interest-tag:hover {
  border-color: var(--global-theme-color);
}

/* Statistics Dashboard */
.pubs-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-bottom: 3rem;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--global-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 6px;
  transition: border-color 0.2s ease;
}

.stat-card:hover {
  border-color: var(--global-theme-color);
}

.stat-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--global-code-bg-color);
  border-radius: 6px;
  font-size: 1.125rem;
  color: var(--global-theme-color);
}

.stat-content {
  flex: 1;
}

.stat-number {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--global-text-color);
  line-height: 1;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--global-text-color-light);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

/* Filter Section */
.pubs-filter-section {
  margin-bottom: 3rem;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.section-header i {
  font-size: 1.125rem;
  color: var(--global-theme-color);
}

.section-header h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--global-text-color);
  margin: 0;
  letter-spacing: -0.01em;
}

.filter-controls {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--global-code-bg-color);
  border-radius: 6px;
  border: 1px solid var(--global-divider-color);
}

.search-container {
  width: 100%;
}

.search-container input {
  width: 100%;
  padding: 0.75rem 1rem;
  background: var(--global-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 6px;
  font-size: 0.95rem;
  color: var(--global-text-color);
  transition: border-color 0.2s ease;
}

.search-container input:focus {
  outline: none;
  border-color: var(--global-theme-color);
}

.year-filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.year-filter-btn {
  padding: 0.5rem 1rem;
  background: var(--global-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--global-text-color);
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: "Inter", sans-serif;
}

.year-filter-btn:hover {
  border-color: var(--global-theme-color);
}

.year-filter-btn.active {
  background: var(--global-theme-color);
  color: white;
  border-color: var(--global-theme-color);
}

/* Publications Timeline */
.publications-timeline {
  position: relative;
}

/* Enhanced publication cards */
.publications .bibliography {
  list-style: none;
  padding: 0;
  margin: 0;
}

.publications .bibliography li {
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: var(--global-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 6px;
  transition: border-color 0.2s ease;
  position: relative;
}

.publications .bibliography li:hover {
  border-color: var(--global-theme-color);
}

/* Year grouping headers */
.publications .bibliography .year {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--global-theme-color);
  margin: 2.5rem 0 1.25rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--global-divider-color);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.publications .bibliography .year::before {
  content: '\f073';
  font-family: 'Font Awesome 6 Free';
  font-weight: 900;
  font-size: 1rem;
}

/* Title styling */
.publications .title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--global-text-color);
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

/* Author styling */
.publications .author {
  font-size: 0.95rem;
  color: var(--global-text-color-light);
  margin-bottom: 0.5rem;
}

.publications .author em {
  color: var(--global-theme-color);
  font-weight: 600;
  font-style: normal;
}

/* Periodical (venue/date) */
.publications .periodical {
  font-size: 0.9rem;
  color: var(--global-text-color-light);
  font-style: italic;
  margin-bottom: 0.5rem;
}

/* Abbr badge */
.publications .abbr {
  margin-bottom: 0.75rem;
}

.publications .abbr .badge {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.25rem 0.625rem;
  background: var(--global-theme-color);
  color: white;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

/* Links/Buttons */
.publications .links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-top: 0.875rem;
}

.publications .links .btn {
  padding: 0.375rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 500;
  background: var(--global-code-bg-color);
  border: 1px solid var(--global-divider-color);
  color: var(--global-text-color);
  border-radius: 4px;
  transition: all 0.2s ease;
  text-decoration: none;
}

.publications .links .btn:hover {
  background: var(--global-theme-color);
  color: white;
  border-color: var(--global-theme-color);
}

/* Abstract and BibTeX hidden blocks */
.publications .abstract.hidden,
.publications .bibtex.hidden {
  display: none;
  margin-top: 0.875rem;
  padding: 1rem;
  background: var(--global-code-bg-color);
  border-radius: 6px;
  border-left: 3px solid var(--global-theme-color);
}

.publications .abstract.open,
.publications .bibtex.open {
  display: block;
}

.publications .abstract p {
  margin: 0;
  line-height: 1.6;
  color: var(--global-text-color);
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
  .publications-page-modern {
    padding: 1rem 0;
  }

  .pubs-hero {
    margin-bottom: 3rem;
    padding: 1rem 0;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1.125rem;
  }

  .research-interests {
    gap: 0.375rem;
  }

  .interest-tag {
    font-size: 0.75rem;
    padding: 0.375rem 0.875rem;
  }

  .pubs-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }

  .stat-card {
    padding: 1rem;
  }

  .stat-icon {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }

  .stat-number {
    font-size: 1.5rem;
  }

  .filter-controls {
    padding: 1rem;
  }

  .year-filter-buttons {
    gap: 0.375rem;
  }

  .year-filter-btn {
    font-size: 0.8rem;
    padding: 0.5rem 0.875rem;
  }

  .publications .bibliography li {
    padding: 1.25rem;
    margin-bottom: 1.25rem;
  }

  .publications .title {
    font-size: 1rem;
  }

  .publications .links {
    gap: 0.325rem;
  }

  .publications .links .btn {
    font-size: 0.75rem;
    padding: 0.325rem 0.625rem;
  }
}

@media (max-width: 480px) {
  .pubs-stats {
    grid-template-columns: 1fr;
  }

  .year-filter-buttons {
    gap: 0.325rem;
  }

  .year-filter-btn {
    font-size: 0.75rem;
    padding: 0.425rem 0.75rem;
  }

  .interest-tag {
    font-size: 0.7rem;
  }
}
</style>

<script>
// Year filter functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.year-filter-btn');
  const publications = document.querySelectorAll('.publications .bibliography li');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const year = this.dataset.year;

      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // Filter publications
      publications.forEach(pub => {
        const pubYear = pub.querySelector('.periodical')?.textContent?.match(/\d{4}/)?.[0];

        if (year === 'all') {
          pub.style.display = '';
        } else if (year.includes('-')) {
          const [start, end] = year.split('-').map(Number);
          const pubYearNum = parseInt(pubYear);
          pub.style.display = (pubYearNum >= start && pubYearNum <= end) ? '' : 'none';
        } else {
          pub.style.display = pubYear === year ? '' : 'none';
        }
      });
    });
  });
});
</script>
