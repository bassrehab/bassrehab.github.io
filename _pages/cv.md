---
layout: page
permalink: /cv/
title: cv
description:
nav: true
nav_order: 5
math: false
---

<style>
@media print {
  /* Hide navigation and UI elements */
  header.header,
  nav,
  .header,
  .cv-download,
  .cv-download-group,
  .cv-last-updated,
  .privacy-notice,
  footer,
  .social,
  .back-to-top {
    display: none !important;
  }

  /* Optimize page layout */
  body {
    background: white !important;
    color: black !important;
    font-size: 11pt;
    line-height: 1.4;
  }

  .cv-editorial {
    max-width: 100%;
    margin: 0;
    padding: 0;
  }

  /* Hero section optimization */
  .cv-hero {
    margin-bottom: 1.5rem;
    padding: 1rem 0;
    background: white !important;
  }

  .cv-hero-content h1 {
    font-size: 24pt;
    margin-bottom: 0.5rem;
    color: black !important;
  }

  .subtitle {
    font-size: 12pt;
    color: #333 !important;
    margin-bottom: 0.5rem;
  }

  .cv-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 9pt;
    color: #333 !important;
  }

  /* Section styling */
  .cv-section {
    page-break-inside: avoid;
    margin-bottom: 1.5rem;
  }

  .section-label {
    font-size: 8pt;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #666 !important;
    margin-bottom: 0.25rem;
  }

  .section-title {
    font-size: 16pt;
    margin-bottom: 1rem;
    color: black !important;
  }

  /* Timeline items */
  .timeline-item {
    page-break-inside: avoid;
    margin-bottom: 1.5rem;
    border-left: 2px solid #ddd;
    padding-left: 1rem;
  }

  .job-title {
    font-size: 12pt;
    margin-bottom: 0.25rem;
    color: black !important;
  }

  .job-company {
    font-size: 10pt;
    color: #333 !important;
  }

  .job-period {
    font-size: 9pt;
    color: #666 !important;
    margin-bottom: 0.5rem;
  }

  .job-description {
    font-size: 10pt;
    line-height: 1.5;
    margin-bottom: 0.75rem;
    color: black !important;
  }

  .job-highlights ul {
    margin: 0;
    padding-left: 1.5rem;
  }

  .job-highlights li {
    font-size: 9pt;
    line-height: 1.4;
    margin-bottom: 0.5rem;
    color: black !important;
  }

  /* Publications */
  .publications-grid {
    display: block;
  }

  .publication-card {
    page-break-inside: avoid;
    margin-bottom: 1rem;
    padding: 0.75rem;
    border: 1px solid #ddd;
  }

  .publication-date {
    font-size: 8pt;
    color: #666 !important;
  }

  .publication-title {
    font-size: 10pt;
    margin: 0.25rem 0;
    color: black !important;
  }

  .publication-venue {
    font-size: 9pt;
    color: #333 !important;
  }

  .publication-description {
    font-size: 9pt;
    line-height: 1.4;
    color: black !important;
  }

  /* Skills */
  .skill-category {
    page-break-inside: avoid;
    margin-bottom: 1rem;
  }

  .skill-category-title {
    font-size: 11pt;
    margin-bottom: 1.5rem;
    color: black !important;
  }

  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
  }

  .skill-tag {
    font-size: 8pt;
    padding: 0.25rem 0.5rem;
    border: 1px solid #ddd;
    background: white !important;
    color: black !important;
  }

  /* Links */
  a {
    color: black !important;
    text-decoration: none;
  }

  a[href^="http"]:after {
    content: "";
  }

  /* Ensure proper page breaks */
  h2, h3 {
    page-break-after: avoid;
  }

  /* Remove extra spacing */
  .stats-strip,
  .cta-section,
  .testimonials {
    display: none !important;
  }
}

/* Research project cards spacing */
article.research-project-card {
  margin-bottom: 3rem;
}

/* Job highlights - improved readability */
.job-highlights ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.job-highlights li {
  position: relative;
  padding: 0.875rem 0 0.875rem 1.25rem;
  margin-bottom: 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--global-text-color-light);
  border-bottom: 1px solid var(--global-divider-color);
}

.job-highlights li:last-child {
  border-bottom: none;
}

.job-highlights li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 1.1rem;
  width: 6px;
  height: 6px;
  background: var(--global-theme-color);
  border-radius: 50%;
  opacity: 0.5;
}

.job-highlights li strong {
  color: var(--global-text-color);
  font-weight: 600;
  font-size: 0.875rem;
}

/* Project highlights - same treatment */
.project-highlights ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.project-highlights li {
  position: relative;
  padding: 0.75rem 0 0.75rem 1.25rem;
  margin-bottom: 0;
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--global-text-color-light);
  border-bottom: 1px solid var(--global-divider-color);
}

.project-highlights li:last-child {
  border-bottom: none;
}

.project-highlights li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 1rem;
  width: 5px;
  height: 5px;
  background: var(--global-theme-color);
  border-radius: 50%;
  opacity: 0.5;
}

.project-highlights li strong {
  color: var(--global-text-color);
  font-weight: 600;
}

/* Role section header refinement */
.role-section h4 {
  font-size: 1rem !important;
  font-weight: 600 !important;
  margin-bottom: 0.5rem !important;
}
</style>

<script>
// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
  const group = document.querySelector('.cv-download-group');
  if (group && !group.contains(e.target)) {
    group.classList.remove('open');
  }
});

// Close dropdown after selecting an option
document.querySelectorAll('.cv-download-menu a').forEach(function(link) {
  link.addEventListener('click', function() {
    this.closest('.cv-download-group').classList.remove('open');
  });
});
</script>

{% assign cv = site.data.cv_data %}

<div class="cv-editorial">

  <!-- Hero Section -->
  <div class="cv-hero">
    <div class="cv-hero-content">
      <h1>Curriculum Vitae</h1>
      <p class="subtitle">{{ cv.basics.title }}</p>
      <!-- Split Download Button with Dropdown -->
      <div class="cv-download-group">
        <a href="/assets/cv/cv.pdf" class="cv-download-main" download>
          <i class="fas fa-download"></i>
          Download CV
        </a>
        <button class="cv-download-toggle" aria-label="More download options" onclick="this.parentElement.classList.toggle('open')">
          <i class="fas fa-chevron-down"></i>
        </button>
        <div class="cv-download-menu">
          <div class="cv-download-menu-section">
            <div class="cv-download-menu-label">Full CV</div>
            <a href="/assets/cv/cv.pdf" download><i class="fas fa-file-pdf"></i> PDF (3 pages)</a>
            <a href="/assets/cv/cv.docx" download><i class="fas fa-file-word"></i> Word Document</a>
          </div>
          <div class="cv-download-menu-divider"></div>
          <div class="cv-download-menu-section">
            <div class="cv-download-menu-label">1-Page Summary</div>
            <a href="/assets/cv/cv-onepage.pdf" download><i class="fas fa-file-pdf"></i> PDF (1 page)</a>
          </div>
        </div>
      </div>
      <div class="cv-last-updated">
        <i class="fas fa-clock"></i>
        Last updated: {{ site.time | date: "%B %Y" }}
      </div>
      <div class="cv-meta">
        <div class="cv-meta-item">
          <i class="fas fa-map-marker-alt"></i>
          {{ cv.basics.location }}
        </div>
        <div class="cv-meta-item">
          <i class="fas fa-envelope"></i>
          <a href="mailto:{{ cv.basics.email }}" style="color: inherit; text-decoration: none;">{{ cv.basics.email }}</a>
        </div>
        <div class="cv-meta-item">
          <i class="fab fa-linkedin"></i>
          <a href="{{ cv.basics.linkedin }}" style="color: inherit; text-decoration: none;" target="_blank">LinkedIn</a>
        </div>
        <div class="cv-meta-item">
          <i class="fas fa-calendar"></i>
          <a href="{{ cv.basics.calendly }}" style="color: inherit; text-decoration: none;" target="_blank">Schedule a Call</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Privacy Notice -->
  <div class="privacy-notice">
    <p>
      <strong>Note:</strong> This is a public version with certain details removed for privacy. For a comprehensive resume including specific project metrics and contact details, please reach out via <a href="mailto:{{ cv.basics.email }}">email</a> or <a href="{{ cv.basics.linkedin }}" target="_blank">LinkedIn</a>.
    </p>
  </div>

  <!-- Summary Section -->
  <section class="cv-section">
    <div class="section-label">Summary</div>
    <p>
      {{ cv.basics.summary | newline_to_br }}
    </p>
  </section>

  <!-- Experience Section -->
  <section class="cv-section">
    <div class="section-label">Professional Journey</div>
    <h2 class="section-title">Work Experience</h2>

    <div class="timeline">
      {% for job in cv.experience %}
      <article class="timeline-item{% if job.current %} current{% endif %}">
        <div class="job-header">
          <h3 class="job-title">
            {% if job.url %}
            <a href="{{ job.url }}" target="_blank">{{ job.role }}</a>
            {% else %}
            {{ job.role }}
            {% endif %}
          </h3>
          <div class="job-company">{{ job.company }}</div>
          <div class="job-period">
            {% assign start_parts = job.start_date | split: "-" %}
            {% assign months = "January,February,March,April,May,June,July,August,September,October,November,December" | split: "," %}
            {% if start_parts.size > 1 %}
              {% assign month_index = start_parts[1] | plus: 0 | minus: 1 %}
              {{ months[month_index] }} {{ start_parts[0] }}
            {% else %}
              {{ job.start_date }}
            {% endif %}
            -
            {% if job.end_date == "present" %}
              Present
            {% else %}
              {% assign end_parts = job.end_date | split: "-" %}
              {% if end_parts.size > 1 %}
                {% assign end_month_index = end_parts[1] | plus: 0 | minus: 1 %}
                {{ months[end_month_index] }} {{ end_parts[0] }}
              {% else %}
                {{ job.end_date }}
              {% endif %}
            {% endif %}
          </div>
        </div>

        <p class="job-description">{{ job.description | strip_newlines | strip }}</p>

        {% if job.sections %}
          {% for section in job.sections %}
          <div class="role-section" style="margin-top: 1.5rem;">
            <h4 style="font-size: 1.125rem; font-weight: 700; color: var(--global-text-color); margin-bottom: 0.75rem; border-left: 3px solid var(--global-theme-color); padding-left: 0.75rem;">
              {{ section.title }}
            </h4>
            <div class="job-highlights">
              <ul>
                {% for item in section.highlights %}
                <li><strong>{{ item.title }}:</strong> {{ item.description }}</li>
                {% endfor %}
              </ul>
            </div>
          </div>
          {% endfor %}
        {% elsif job.highlights %}
          <div class="job-highlights">
            <ul>
              {% for highlight in job.highlights %}
              <li>{{ highlight }}</li>
              {% endfor %}
            </ul>
          </div>
        {% endif %}
      </article>
      {% endfor %}
    </div>

  </section>

  <!-- Research & Open Source Engineering Section -->
  <section class="cv-section">
    <div class="section-label">Technical Innovation</div>
    <h2 class="section-title">Research & Open Source Engineering</h2>

    <div class="research-projects">
      {% for project in cv.research %}
      <article class="research-project-card">
        <div class="project-period">{{ project.period }}</div>
        <h3 class="project-title">
          {% if project.url %}
          <a href="{{ project.url }}" target="_blank">{{ project.title }}</a>
          {% else %}
          {{ project.title }}
          {% endif %}
        </h3>
        {% if project.status %}
        <div class="project-status" style="font-size: 0.875rem; color: var(--global-theme-color); font-weight: 600; margin-bottom: 0.75rem;">
          {{ project.status }}
        </div>
        {% endif %}
        <p class="project-description">{{ project.description | strip_newlines | strip }}</p>

        {% if project.highlights %}
        <div class="project-highlights">
          <ul>
            {% for item in project.highlights %}
            <li><strong>{{ item.title }}:</strong> {{ item.description }}</li>
            {% endfor %}
          </ul>
        </div>
        {% endif %}

        {% if project.links %}
        <div class="project-links" style="margin-top: 1rem; display: flex; gap: 0.75rem; flex-wrap: wrap;">
          {% for link in project.links %}
          {% if forloop.first == false %}
          <span style="color: var(--global-text-color-light);">•</span>
          {% endif %}
          <a href="{{ link.url }}" {% if link.url contains "http" %}target="_blank"{% endif %} style="color: var(--global-theme-color); text-decoration: none; font-size: 0.875rem; font-weight: 600;">
            {% if link.type == "github" %}<i class="fab fa-github"></i>
            {% elsif link.type == "pypi" %}<i class="fas fa-cube"></i>
            {% elsif link.type == "docs" %}<i class="fas fa-book"></i>
            {% elsif link.type == "blog" %}<i class="fas fa-pen"></i>
            {% elsif link.type == "paper" %}<i class="fas fa-file-alt"></i>
            {% endif %}
            {{ link.label }}
          </a>
          {% endfor %}
        </div>
        {% endif %}
      </article>
      {% endfor %}
    </div>

  </section>

  <!-- Education Section -->
  <section class="cv-section">
    <div class="section-label">Academic Background</div>
    <h2 class="section-title">Education</h2>

    <div class="education-grid">
      {% for edu in cv.education %}
      <div class="education-card">
        <div class="education-degree">{{ edu.degree }}</div>
        <div class="education-school">
          <a href="{{ edu.url }}" target="_blank">{{ edu.institution }}</a>
        </div>
        <div class="education-period">{{ edu.start_date }} - {{ edu.end_date }} • {{ edu.location }}</div>
        <div class="education-courses">
          {% for course in edu.courses %}
          <span class="course-tag">{{ course }}</span>
          {% endfor %}
        </div>
      </div>
      {% endfor %}
    </div>

  </section>

  <!-- Publications Section -->
  <section class="cv-section">
    <div class="section-label">Research & Innovation</div>
    <h2 class="section-title">Publications & Technical Disclosures</h2>

    <div class="publications-grid">
      {% for pub in cv.publications %}
      <article class="publication-card">
        <div class="publication-content">
          <div class="publication-date">
            {% assign date_parts = pub.date | split: "-" %}
            {% assign pub_months = "January,February,March,April,May,June,July,August,September,October,November,December" | split: "," %}
            {% assign pub_month_index = date_parts[1] | plus: 0 | minus: 1 %}
            {{ pub_months[pub_month_index] }} {{ date_parts[0] }}
          </div>
          <h3 class="publication-title">
            <a href="{{ pub.url }}" target="_blank">{{ pub.title }}</a>
          </h3>
          <div class="publication-venue">{{ pub.venue }}</div>
          <p class="publication-description">{{ pub.description | strip_newlines | strip }}</p>
          {% if pub.github %}
          <div class="project-links" style="margin-top: 0.5rem;">
            <a href="{{ pub.github }}" target="_blank" style="color: var(--global-theme-color); text-decoration: none; font-size: 0.875rem;">
              <i class="fab fa-github"></i> GitHub Repository
            </a>
          </div>
          {% endif %}
        </div>
      </article>
      {% endfor %}
    </div>

  </section>

  <!-- Skills Section -->
  <section class="cv-section">
    <div class="section-label">Technical Expertise</div>
    <h2 class="section-title">Skills & Technologies</h2>

    <div class="skills-section">
      {% for skill in cv.skills %}
      <div class="skill-category">
        <h3 class="skill-category-title">
          <i class="{{ skill.icon }}"></i>
          {{ skill.category }}
        </h3>
        <div class="skill-tags">
          {% for item in skill.items %}
          <span class="skill-tag">{{ item }}</span>
          {% endfor %}
        </div>
      </div>
      {% endfor %}
    </div>

  </section>

  <!-- Projects Section -->
  <section class="cv-section">
    <div class="section-label">Open Source & Side Projects</div>
    <h2 class="section-title">Notable Projects</h2>

    <div class="projects-grid">
      {% for project in cv.projects %}
      <article class="project-card">
        <div class="project-period">{{ project.period }}</div>
        <h3 class="project-title">
          {% if project.url %}
          <a href="{{ project.url }}" target="_blank">{{ project.title }}</a>
          {% else %}
          {{ project.title }}
          {% endif %}
        </h3>
        <p class="project-description">{{ project.description | strip_newlines | strip }}</p>

        {% if project.highlights %}
        <div class="project-highlights">
          <ul>
            {% for highlight in project.highlights %}
            <li>{{ highlight }}</li>
            {% endfor %}
          </ul>
        </div>
        {% endif %}

        {% if project.links %}
        <div class="project-links" style="margin-top: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
          {% for link in project.links %}
          <a href="{{ link.url }}"
            class="project-link-btn"
            {% if link.url contains "http" %}target="_blank"{% endif %}
            style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: var(--global-code-bg-color, #f8f9fa); border: 1px solid var(--global-divider-color, #e5e5e5); border-radius: 8px; text-decoration: none; color: var(--global-text-color, #000); font-size: 0.875rem; font-weight: 600; transition: all 0.3s;">
            {% if link.type == "github" %}<i class="fab fa-github"></i>
            {% elsif link.type == "pypi" %}<i class="fas fa-cube"></i>
            {% elsif link.type == "docs" %}<i class="fas fa-book"></i>
            {% elsif link.type == "blog" %}<i class="fas fa-pen"></i>
            {% endif %}
            {{ link.label }}
          </a>
          {% endfor %}
        </div>
        {% endif %}
      </article>
      {% endfor %}
    </div>

  </section>

</div>
