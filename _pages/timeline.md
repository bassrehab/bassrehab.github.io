---
layout: page
permalink: /timeline/
title: timeline
description: A journey through 15+ years of engineering, research, and leadership.
nav: false
---

{% assign cv = site.data.cv_data %}

<style>
.timeline-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.timeline-header {
  text-align: center;
  margin-bottom: 3rem;
}

.timeline-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: var(--global-text-color);
}

.timeline-header p {
  color: var(--global-text-color-light);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

/* Stats */
.timeline-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--global-theme-color);
}

.stat-label {
  font-size: 0.8rem;
  color: var(--global-text-color-light);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Filter */
.timeline-filter {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.5rem 1.25rem;
  border: 1px solid var(--global-divider-color);
  background: transparent;
  border-radius: 25px;
  cursor: pointer;
  font-size: 0.875rem;
  color: var(--global-text-color);
  transition: all 0.2s ease;
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

/* Timeline Container */
.timeline {
  position: relative;
  padding: 1rem 0;
}

/* Central line */
.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: var(--global-divider-color);
}

@media (max-width: 768px) {
  .timeline::before {
    left: 24px;
  }
}

/* Year Marker */
.year-marker {
  position: relative;
  text-align: center;
  margin: 2rem 0;
  z-index: 5;
}

.year-marker span {
  display: inline-block;
  background: var(--global-theme-color);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
}

@media (max-width: 768px) {
  .year-marker {
    text-align: left;
    padding-left: 60px;
  }
}

/* Timeline Item */
.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  display: flex;
  justify-content: flex-end;
  padding-right: calc(50% + 30px);
}

.timeline-item:nth-child(even) {
  justify-content: flex-start;
  padding-right: 0;
  padding-left: calc(50% + 30px);
}

@media (max-width: 768px) {
  .timeline-item,
  .timeline-item:nth-child(even) {
    padding-left: 60px;
    padding-right: 0;
    justify-content: flex-start;
  }
}

/* Timeline Dot */
.timeline-dot {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--global-bg-color);
  border: 3px solid var(--global-theme-color);
  z-index: 10;
  top: 1.5rem;
}

.timeline-item.work .timeline-dot { border-color: #2196F3; }
.timeline-item.education .timeline-dot { border-color: #4CAF50; }
.timeline-item.publication .timeline-dot { border-color: #9C27B0; }
.timeline-item.research .timeline-dot { border-color: #FF9800; }

@media (max-width: 768px) {
  .timeline-dot {
    left: 24px;
  }
}

/* Card */
.timeline-card {
  background: var(--global-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  max-width: 400px;
  width: 100%;
  transition: all 0.3s ease;
  position: relative;
}

.timeline-card:hover {
  box-shadow: 0 8px 30px rgba(0,0,0,0.08);
  transform: translateY(-2px);
}

.timeline-card::before {
  content: '';
  position: absolute;
  top: 1.5rem;
  width: 20px;
  height: 2px;
  background: var(--global-divider-color);
}

.timeline-item:nth-child(odd) .timeline-card::before {
  right: -20px;
}

.timeline-item:nth-child(even) .timeline-card::before {
  left: -20px;
}

@media (max-width: 768px) {
  .timeline-card::before {
    left: -20px !important;
    right: auto !important;
  }

  .timeline-card {
    max-width: 100%;
  }
}

/* Card Type Badge */
.card-type {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.card-type.work { background: rgba(33,150,243,0.12); color: #2196F3; }
.card-type.education { background: rgba(76,175,80,0.12); color: #4CAF50; }
.card-type.publication { background: rgba(156,39,176,0.12); color: #9C27B0; }
.card-type.research { background: rgba(255,152,0,0.12); color: #FF9800; }

/* Card Content */
.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--global-text-color);
  margin-bottom: 0.25rem;
  line-height: 1.3;
}

.card-title a {
  color: inherit;
  text-decoration: none;
}

.card-title a:hover {
  color: var(--global-theme-color);
}

.card-subtitle {
  font-size: 0.95rem;
  color: var(--global-theme-color);
  margin-bottom: 0.5rem;
}

.card-period {
  font-size: 0.8rem;
  color: var(--global-text-color-light);
  margin-bottom: 0.75rem;
}

.card-description {
  font-size: 0.9rem;
  color: var(--global-text-color);
  line-height: 1.6;
  margin-bottom: 0;
}

.card-highlights {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--global-divider-color);
}

.card-highlights ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.card-highlights li {
  font-size: 0.85rem;
  color: var(--global-text-color-light);
  padding-left: 1rem;
  position: relative;
  margin-bottom: 0.4rem;
}

.card-highlights li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 4px;
  height: 4px;
  background: var(--global-theme-color);
  border-radius: 50%;
}

/* Animation */
.timeline-item {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.5s ease forwards;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Staggered animation delays */
.timeline-item:nth-child(1) { animation-delay: 0.1s; }
.timeline-item:nth-child(2) { animation-delay: 0.15s; }
.timeline-item:nth-child(3) { animation-delay: 0.2s; }
.timeline-item:nth-child(4) { animation-delay: 0.25s; }
.timeline-item:nth-child(5) { animation-delay: 0.3s; }
.timeline-item:nth-child(6) { animation-delay: 0.35s; }
.timeline-item:nth-child(7) { animation-delay: 0.4s; }
.timeline-item:nth-child(8) { animation-delay: 0.45s; }
.timeline-item:nth-child(9) { animation-delay: 0.5s; }
.timeline-item:nth-child(10) { animation-delay: 0.55s; }

.year-marker {
  opacity: 0;
  animation: fadeUp 0.5s ease forwards;
}
</style>

<div class="timeline-page">
  <div class="timeline-header">
    <h1>Career Journey</h1>
    <p>From early research in physics and algorithms to leading AI innovation at Google Cloud</p>
  </div>

  <div class="timeline-stats">
    <div class="stat-item">
      <div class="stat-number">15+</div>
      <div class="stat-label">Years</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">{{ cv.experience | size }}</div>
      <div class="stat-label">Roles</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">{{ cv.publications | size }}</div>
      <div class="stat-label">Publications</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">{{ cv.research | size }}</div>
      <div class="stat-label">Projects</div>
    </div>
  </div>

  <div class="timeline-filter">
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="work">Work</button>
    <button class="filter-btn" data-filter="publication">Publications</button>
    <button class="filter-btn" data-filter="research">Research</button>
    <button class="filter-btn" data-filter="education">Education</button>
  </div>

  <div class="timeline" id="timeline">
    {% comment %} Build unified timeline data {% endcomment %}

    {% comment %} 2025 {% endcomment %}
    <div class="year-marker"><span>2025</span></div>

    {% for pub in cv.publications %}
      {% assign pub_year = pub.date | split: "-" | first %}
      {% if pub_year == "2025" %}
    <div class="timeline-item publication" data-type="publication" data-year="{{ pub_year }}">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <span class="card-type publication">Publication</span>
        <h3 class="card-title"><a href="{{ pub.url }}" target="_blank">{{ pub.title }}</a></h3>
        <div class="card-subtitle">{{ pub.venue }}</div>
        <p class="card-description">{{ pub.description | strip_newlines | truncatewords: 30 }}</p>
      </div>
    </div>
      {% endif %}
    {% endfor %}

    {% for project in cv.research %}
      {% if project.period contains "2025" %}
    <div class="timeline-item research" data-type="research" data-year="2025">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <span class="card-type research">Research</span>
        <h3 class="card-title">{% if project.links[0] %}<a href="{{ project.links[0].url }}" target="_blank">{{ project.title }}</a>{% else %}{{ project.title }}{% endif %}</h3>
        <div class="card-period">{{ project.period }}</div>
        <p class="card-description">{{ project.description | strip_newlines | truncatewords: 25 }}</p>
      </div>
    </div>
      {% endif %}
    {% endfor %}

    {% comment %} 2023 {% endcomment %}
    <div class="year-marker"><span>2023</span></div>

    {% for pub in cv.publications %}
      {% assign pub_year = pub.date | split: "-" | first %}
      {% if pub_year == "2023" %}
    <div class="timeline-item publication" data-type="publication" data-year="{{ pub_year }}">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <span class="card-type publication">Publication</span>
        <h3 class="card-title"><a href="{{ pub.url }}" target="_blank">{{ pub.title }}</a></h3>
        <div class="card-subtitle">{{ pub.venue }}</div>
        <p class="card-description">{{ pub.description | strip_newlines | truncatewords: 30 }}</p>
      </div>
    </div>
      {% endif %}
    {% endfor %}

    {% comment %} 2021 {% endcomment %}
    <div class="year-marker"><span>2021</span></div>

    {% for job in cv.experience %}
      {% assign start_year = job.start_date | split: "-" | first %}
      {% if start_year == "2021" %}
    <div class="timeline-item work" data-type="work" data-year="{{ start_year }}">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <span class="card-type work">Work</span>
        <h3 class="card-title">{{ job.role }}</h3>
        <div class="card-subtitle">{{ job.company }}</div>
        <div class="card-period">{{ start_year }} - {% if job.end_date == "present" %}Present{% else %}{{ job.end_date | split: "-" | first }}{% endif %}</div>
        <p class="card-description">{{ job.description | strip_newlines | truncatewords: 25 }}</p>
        {% if job.highlights %}
        <div class="card-highlights">
          <ul>
            {% for highlight in job.highlights limit: 2 %}
            <li>{{ highlight | truncatewords: 15 }}</li>
            {% endfor %}
          </ul>
        </div>
        {% endif %}
      </div>
    </div>
      {% endif %}
    {% endfor %}

    {% for pub in cv.publications %}
      {% assign pub_year = pub.date | split: "-" | first %}
      {% if pub_year == "2021" %}
    <div class="timeline-item publication" data-type="publication" data-year="{{ pub_year }}">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <span class="card-type publication">Publication</span>
        <h3 class="card-title"><a href="{{ pub.url }}" target="_blank">{{ pub.title }}</a></h3>
        <div class="card-subtitle">{{ pub.venue }}</div>
        <p class="card-description">{{ pub.description | strip_newlines | truncatewords: 30 }}</p>
      </div>
    </div>
      {% endif %}
    {% endfor %}

    {% for edu in cv.education %}
      {% if edu.start_date == 2021 %}
    <div class="timeline-item education" data-type="education" data-year="{{ edu.start_date }}">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <span class="card-type education">Education</span>
        <h3 class="card-title">{{ edu.degree }}</h3>
        <div class="card-subtitle">{{ edu.institution }}</div>
        <div class="card-period">{{ edu.start_date }} - {{ edu.end_date }}</div>
      </div>
    </div>
      {% endif %}
    {% endfor %}

    {% comment %} 2019 {% endcomment %}
    <div class="year-marker"><span>2019</span></div>

    {% for job in cv.experience %}
      {% assign start_year = job.start_date | split: "-" | first %}
      {% if start_year == "2019" %}
    <div class="timeline-item work" data-type="work" data-year="{{ start_year }}">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <span class="card-type work">Work</span>
        <h3 class="card-title">{{ job.role }}</h3>
        <div class="card-subtitle">{{ job.company }}</div>
        <div class="card-period">{{ start_year }} - {{ job.end_date | split: "-" | first }}</div>
        <p class="card-description">{{ job.description | strip_newlines | truncatewords: 25 }}</p>
        {% if job.highlights %}
        <div class="card-highlights">
          <ul>
            {% for highlight in job.highlights limit: 2 %}
            <li>{{ highlight | truncatewords: 15 }}</li>
            {% endfor %}
          </ul>
        </div>
        {% endif %}
      </div>
    </div>
      {% endif %}
    {% endfor %}

    {% comment %} 2017 {% endcomment %}
    <div class="year-marker"><span>2017</span></div>

    {% for job in cv.experience %}
      {% assign start_year = job.start_date | split: "-" | first %}
      {% if start_year == "2017" %}
    <div class="timeline-item work" data-type="work" data-year="{{ start_year }}">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <span class="card-type work">Work</span>
        <h3 class="card-title">{{ job.role }}</h3>
        <div class="card-subtitle">{{ job.company }}</div>
        <div class="card-period">{{ start_year }} - {{ job.end_date | split: "-" | first }}</div>
        <p class="card-description">{{ job.description | strip_newlines | truncatewords: 25 }}</p>
      </div>
    </div>
      {% endif %}
    {% endfor %}

    {% for edu in cv.education %}
      {% if edu.start_date == 2017 %}
    <div class="timeline-item education" data-type="education" data-year="{{ edu.start_date }}">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <span class="card-type education">Education</span>
        <h3 class="card-title">{{ edu.degree }}</h3>
        <div class="card-subtitle">{{ edu.institution }}</div>
        <div class="card-period">{{ edu.start_date }} - {{ edu.end_date }}</div>
      </div>
    </div>
      {% endif %}
    {% endfor %}

    {% comment %} 2016 {% endcomment %}
    <div class="year-marker"><span>2016</span></div>

    {% for job in cv.experience %}
      {% assign start_year = job.start_date | split: "-" | first %}
      {% if start_year == "2016" %}
    <div class="timeline-item work" data-type="work" data-year="{{ start_year }}">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <span class="card-type work">Work</span>
        <h3 class="card-title">{{ job.role }}</h3>
        <div class="card-subtitle">{{ job.company }}</div>
        <div class="card-period">{{ start_year }} - {{ job.end_date | split: "-" | first }}</div>
        <p class="card-description">{{ job.description | strip_newlines | truncatewords: 25 }}</p>
      </div>
    </div>
      {% endif %}
    {% endfor %}

    {% for pub in cv.publications %}
      {% assign pub_year = pub.date | split: "-" | first %}
      {% if pub_year == "2016" or pub_year == "2015" %}
    <div class="timeline-item publication" data-type="publication" data-year="{{ pub_year }}">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <span class="card-type publication">Publication</span>
        <h3 class="card-title"><a href="{{ pub.url }}" target="_blank">{{ pub.title }}</a></h3>
        <div class="card-subtitle">{{ pub.venue }}</div>
        <p class="card-description">{{ pub.description | strip_newlines | truncatewords: 30 }}</p>
      </div>
    </div>
      {% endif %}
    {% endfor %}

    {% comment %} 2014 {% endcomment %}
    <div class="year-marker"><span>2014</span></div>

    {% for job in cv.experience %}
      {% assign start_year = job.start_date | split: "-" | first %}
      {% if start_year == "2014" %}
    <div class="timeline-item work" data-type="work" data-year="{{ start_year }}">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <span class="card-type work">Work</span>
        <h3 class="card-title">{{ job.role }}</h3>
        <div class="card-subtitle">{{ job.company }}</div>
        <div class="card-period">{{ start_year }} - {{ job.end_date | split: "-" | first }}</div>
        <p class="card-description">{{ job.description | strip_newlines | truncatewords: 25 }}</p>
      </div>
    </div>
      {% endif %}
    {% endfor %}

    {% for pub in cv.publications %}
      {% assign pub_year = pub.date | split: "-" | first %}
      {% if pub_year == "2014" or pub_year == "2012" %}
    <div class="timeline-item publication" data-type="publication" data-year="{{ pub_year }}">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <span class="card-type publication">Publication</span>
        <h3 class="card-title"><a href="{{ pub.url }}" target="_blank">{{ pub.title }}</a></h3>
        <div class="card-subtitle">{{ pub.venue }}</div>
        <p class="card-description">{{ pub.description | strip_newlines | truncatewords: 30 }}</p>
      </div>
    </div>
      {% endif %}
    {% endfor %}

    {% comment %} 2010 {% endcomment %}
    <div class="year-marker"><span>2010</span></div>

    {% for job in cv.experience %}
      {% assign start_year = job.start_date | split: "-" | first %}
      {% if start_year == "2010" %}
    <div class="timeline-item work" data-type="work" data-year="{{ start_year }}">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <span class="card-type work">Work</span>
        <h3 class="card-title">{{ job.role }}</h3>
        <div class="card-subtitle">{{ job.company }}</div>
        <div class="card-period">{{ start_year }} - {{ job.end_date | split: "-" | first }}</div>
        <p class="card-description">{{ job.description | strip_newlines | truncatewords: 25 }}</p>
        {% if job.highlights %}
        <div class="card-highlights">
          <ul>
            {% for highlight in job.highlights limit: 2 %}
            <li>{{ highlight | truncatewords: 15 }}</li>
            {% endfor %}
          </ul>
        </div>
        {% endif %}
      </div>
    </div>
      {% endif %}
    {% endfor %}

    {% comment %} 2009 {% endcomment %}
    <div class="year-marker"><span>2009</span></div>

    {% for pub in cv.publications %}
      {% assign pub_year = pub.date | split: "-" | first %}
      {% if pub_year == "2009" %}
    <div class="timeline-item publication" data-type="publication" data-year="{{ pub_year }}">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <span class="card-type publication">Publication</span>
        <h3 class="card-title"><a href="{{ pub.url }}" target="_blank">{{ pub.title }}</a></h3>
        <div class="card-subtitle">{{ pub.venue }}</div>
        <p class="card-description">{{ pub.description | strip_newlines | truncatewords: 30 }}</p>
      </div>
    </div>
      {% endif %}
    {% endfor %}

    {% comment %} 2008 {% endcomment %}
    <div class="year-marker"><span>2008</span></div>

    {% for pub in cv.publications %}
      {% assign pub_year = pub.date | split: "-" | first %}
      {% if pub_year == "2008" %}
    <div class="timeline-item publication" data-type="publication" data-year="{{ pub_year }}">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <span class="card-type publication">Publication</span>
        <h3 class="card-title"><a href="{{ pub.url }}" target="_blank">{{ pub.title }}</a></h3>
        <div class="card-subtitle">{{ pub.venue }}</div>
        <p class="card-description">{{ pub.description | strip_newlines | truncatewords: 30 }}</p>
      </div>
    </div>
      {% endif %}
    {% endfor %}

    {% comment %} 2007 {% endcomment %}
    <div class="year-marker"><span>2007</span></div>

    {% for pub in cv.publications %}
      {% assign pub_year = pub.date | split: "-" | first %}
      {% if pub_year == "2007" %}
    <div class="timeline-item publication" data-type="publication" data-year="{{ pub_year }}">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <span class="card-type publication">Publication</span>
        <h3 class="card-title"><a href="{{ pub.url }}" target="_blank">{{ pub.title }}</a></h3>
        <div class="card-subtitle">{{ pub.venue }}</div>
        <p class="card-description">{{ pub.description | strip_newlines | truncatewords: 30 }}</p>
      </div>
    </div>
      {% endif %}
    {% endfor %}

    {% comment %} 2006 {% endcomment %}
    <div class="year-marker"><span>2006</span></div>

    {% for pub in cv.publications %}
      {% assign pub_year = pub.date | split: "-" | first %}
      {% if pub_year == "2006" %}
    <div class="timeline-item publication" data-type="publication" data-year="{{ pub_year }}">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <span class="card-type publication">Publication</span>
        <h3 class="card-title"><a href="{{ pub.url }}" target="_blank">{{ pub.title }}</a></h3>
        <div class="card-subtitle">{{ pub.venue }}</div>
        <p class="card-description">{{ pub.description | strip_newlines | truncatewords: 30 }}</p>
      </div>
    </div>
      {% endif %}
    {% endfor %}

  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const timelineItems = document.querySelectorAll('.timeline-item');
  const yearMarkers = document.querySelectorAll('.year-marker');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const filter = this.dataset.filter;

      // Filter items
      timelineItems.forEach(item => {
        if (filter === 'all' || item.dataset.type === filter) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });

      // Show/hide year markers based on visible items
      yearMarkers.forEach(marker => {
        const yearText = marker.querySelector('span').textContent;
        let hasVisibleItem = false;

        // Check if any visible item exists for this year
        timelineItems.forEach(item => {
          if (item.style.display !== 'none') {
            const itemYear = item.dataset.year;
            if (itemYear === yearText || (parseInt(itemYear) >= parseInt(yearText) - 1 && parseInt(itemYear) <= parseInt(yearText) + 1)) {
              hasVisibleItem = true;
            }
          }
        });

        // For simplicity, show all year markers when filtering
        marker.style.display = 'block';
      });
    });
  });
});
</script>
