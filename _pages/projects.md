---
layout: page
permalink: /projects/
title: projects
description: Open-source frameworks and protocols advancing AI, privacy, and distributed systems
nav: true
nav_order: 3
---

<style>
header.post-header {
    display: none !important;
}
/* Editorial Projects Page */
.projects-editorial {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
}

/* Hero Section */
.projects-hero {
  min-height: 40vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem 0;
}

.projects-hero h1 {
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 900;
  line-height: 0.95;
  color: var(--global-text-color, #000);
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
}

.projects-hero .subtitle {
  font-size: 1.5rem;
  line-height: 1.5;
  color: var(--global-text-color-light, #666);
  margin-bottom: 2.5rem;
  max-width: 800px;
  font-weight: 400;
}

/* Stats Bar */
.projects-stats {
  display: flex;
  gap: 4rem;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem 0;
}

.project-stat {
  text-align: center;
}

.project-stat-value {
  font-size: 3rem;
  font-weight: 900;
  color: var(--global-theme-color, #b509ac);
  line-height: 1;
  letter-spacing: -0.02em;
}

.project-stat-label {
  font-size: 0.875rem;
  color: var(--global-text-color-light, #666);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 0.5rem;
}

/* Category Filter */
.category-filter {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
  padding-bottom: 3rem;
  border-bottom: 2px solid var(--global-divider-color, #e5e5e5);
}

.filter-btn {
  padding: 0.75rem 1.5rem;
  background: var(--global-code-bg-color, #f8f9fa);
  border: 1px solid var(--global-divider-color, #e5e5e5);
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--global-text-color, #000);
  cursor: pointer;
  transition: all 0.3s;
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--global-theme-color, #b509ac);
  color: white;
  border-color: var(--global-theme-color, #b509ac);
  transform: translateY(-2px);
}

/* Section Headers */
.section-label {
  font-size: 0.875rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--global-theme-color, #b509ac);
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 3rem;
  color: var(--global-text-color, #000);
  letter-spacing: -0.02em;
}

/* Featured Projects Grid */
.featured-projects {
  margin-bottom: 6rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--global-card-bg-color, #fff);
  border: 2px solid var(--global-theme-color, #b509ac);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;
  height: 150px;
  background: var(--global-theme-color, #b509ac);
  opacity: 0.05;
  border-radius: 0 0 0 100%;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(181, 9, 172, 0.15);
}

.project-status {
  display: inline-block;
  padding: 0.4rem 0.75rem;
  background: #10b981;
  color: white;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.project-status.archived {
  background: var(--global-text-color-light, #666);
}

.project-status.research {
  background: #f59e0b;
}

.project-title {
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
  line-height: 1.2;
  color: var(--global-text-color, #000);
  letter-spacing: -0.02em;
}

.project-title a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s;
}

.project-title a:hover {
  color: var(--global-theme-color, #b509ac);
}

.project-description {
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--global-text-color-light, #666);
  margin-bottom: 1.5rem;
}

.project-highlights {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.project-highlights li {
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  position: relative;
  line-height: 1.5;
  color: var(--global-text-color, #000);
  font-size: 0.95rem;
}

.project-highlights li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--global-theme-color, #b509ac);
  font-weight: 700;
}

/* Tech Stack */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1.5rem 0;
}

.tech-tag {
  padding: 0.4rem 0.75rem;
  background: var(--global-code-bg-color, #f8f9fa);
  border-radius: 6px;
  font-size: 0.8rem;
  color: var(--global-text-color, #000);
  font-weight: 600;
}

/* Project Links */
.project-links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.25rem;
  background: var(--global-code-bg-color, #f8f9fa);
  border: 1px solid var(--global-divider-color, #e5e5e5);
  border-radius: 8px;
  text-decoration: none;
  color: var(--global-text-color, #000);
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.3s;
}

.project-link:hover {
  background: var(--global-theme-color, #b509ac);
  color: white;
  border-color: var(--global-theme-color, #b509ac);
  transform: translateY(-2px);
}

.project-link.primary {
  background: var(--global-theme-color, #b509ac);
  color: white;
  border-color: var(--global-theme-color, #b509ac);
}

.project-link.primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(181, 9, 172, 0.3);
}

/* Impact Metrics */
.impact-metrics {
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--global-divider-color, #e5e5e5);
}

.metric {
  display: flex;
  flex-direction: column;
}

.metric-value {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--global-theme-color, #b509ac);
  line-height: 1;
}

.metric-label {
  font-size: 0.8rem;
  color: var(--global-text-color-light, #666);
  margin-top: 0.25rem;
}

/* CTA Section */
.contribute-cta {
  margin: 6rem 0 4rem 0;
  padding: 4rem 3rem;
  background: var(--global-code-bg-color, #f8f9fa);
  border-radius: 24px;
  text-align: center;
}

.contribute-cta h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--global-text-color, #000);
}

.contribute-cta p {
  font-size: 1.25rem;
  color: var(--global-text-color-light, #666);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  padding: 1rem 2.5rem;
  background: var(--global-theme-color, #b509ac);
  color: white;
  text-decoration: none;
  font-weight: 700;
  border-radius: 12px;
  font-size: 1.125rem;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(181, 9, 172, 0.3);
  color: white;
}

.btn-secondary {
  padding: 1rem 2.5rem;
  background: transparent;
  color: var(--global-text-color, #000);
  border: 2px solid var(--global-theme-color, #b509ac);
  text-decoration: none;
  font-weight: 700;
  border-radius: 12px;
  font-size: 1.125rem;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-secondary:hover {
  background: var(--global-theme-color, #b509ac);
  color: white;
}

/* Responsive */
@media (max-width: 768px) {
  .projects-hero {
    min-height: auto;
    margin-bottom: 3rem;
  }
  
  .projects-hero h1 {
    font-size: 2.5rem;
  }
  
  .projects-hero .subtitle {
    font-size: 1.125rem;
  }
  
  .projects-stats {
    gap: 2rem;
  }
  
  .project-stat-value {
    font-size: 2rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-card {
    padding: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .impact-metrics {
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .contribute-cta {
    padding: 3rem 2rem;
  }
}
</style>

<div class="projects-editorial">
  
  <!-- Hero Section -->
  <div class="projects-hero">
    <h1>Open Source Projects</h1>
    <p class="subtitle">
      Building frameworks and protocols that advance AI safety, privacy engineering, and distributed systems
    </p>
    
    <!-- Stats -->
    <div class="projects-stats">
      <div class="project-stat">
        <div class="project-stat-value">4</div>
        <div class="project-stat-label">Active Projects</div>
      </div>
      <div class="project-stat">
        <div class="project-stat-value">3</div>
        <div class="project-stat-label">Published Protocols</div>
      </div>
      <div class="project-stat">
        <div class="project-stat-value">3</div>
        <div class="project-stat-label">PyPI Package</div>
      </div>
    </div>
  </div>

  <!-- Category Filter -->
  <div class="category-filter">
    <button class="filter-btn active" data-filter="all">All Projects</button>
    <button class="filter-btn" data-filter="ai">AI & Safety</button>
    <button class="filter-btn" data-filter="privacy">Privacy & Consent</button>
    <button class="filter-btn" data-filter="protocols">Protocols</button>
  </div>

  <!-- Featured Projects -->
  <section class="featured-projects">
    <div class="section-label">
      <i class="fas fa-star"></i>
      Featured Projects
    </div>
    <h2 class="section-title">Production-Ready Frameworks</h2>
    
    <div class="projects-grid">
      
      <!-- AI Metacognition Toolkit -->
      <article class="project-card" data-category="ai">
        <span class="project-status">Active</span>
        <h3 class="project-title">
          <a href="https://ai-metacognition-toolkit.subhadipmitra.com/" target="_blank">
            AI Metacognition Toolkit
          </a>
        </h3>
        <p class="project-description">
          Production-ready Python framework for detecting and analyzing metacognitive capabilities in AI systems - enabling transparent, systematic reasoning at scale.
        </p>
        
        <ul class="project-highlights">
          <li>Bayesian situational awareness detection with KL divergence measures</li>
          <li>Counterfactual chain-of-thought analysis for causal attribution</li>
          <li>Real-time production monitoring with automated alerting</li>
          <li>275 tests, 95% code coverage, production-hardened</li>
        </ul>
        
        <div class="tech-stack">
          <span class="tech-tag">Python</span>
          <span class="tech-tag">NumPy</span>
          <span class="tech-tag">SciPy</span>
          <span class="tech-tag">Bayesian Inference</span>
          <span class="tech-tag">Statistical Monitoring</span>
        </div>
        
        <div class="project-links">
          <a href="https://ai-metacognition-toolkit.subhadipmitra.com/" class="project-link primary" target="_blank">
            <i class="fas fa-book"></i> Documentation
          </a>
          <a href="https://pypi.org/project/ai-metacognition-toolkit/" class="project-link" target="_blank">
            <i class="fas fa-cube"></i> PyPI
          </a>
          <a href="https://github.com/bassrehab/ai-metacognition-toolkit" class="project-link" target="_blank">
            <i class="fab fa-github"></i> GitHub
          </a>
        </div>
        
        <div class="impact-metrics">
          <div class="metric">
            <div class="metric-value">2025</div>
            <div class="metric-label">Released</div>
          </div>
          <div class="metric">
            <div class="metric-value">PyPI</div>
            <div class="metric-label">Published</div>
          </div>
          <div class="metric">
            <div class="metric-value">95%</div>
            <div class="metric-label">Coverage</div>
          </div>
        </div>
      </article>

      <!-- LLMConsent -->
      <article class="project-card" data-category="privacy ai">
        <span class="project-status">Active</span>
        <h3 class="project-title">
          <a href="https://llmconsent.org" target="_blank">LLMConsent</a>
        </h3>
        <p class="project-description">
          Privacy-preserving consent management protocol for LLM training data - enabling transparent opt-in/opt-out mechanisms with cryptographic verification.
        </p>
        
        <ul class="project-highlights">
          <li>Decentralized consent registry on public blockchain</li>
          <li>Cryptographic proof of consent status</li>
          <li>Real-time opt-out enforcement for AI training</li>
          <li>GDPR-compliant privacy controls for GenAI era</li>
        </ul>
        
        <div class="tech-stack">
          <span class="tech-tag">Blockchain</span>
          <span class="tech-tag">Smart Contracts</span>
          <span class="tech-tag">Cryptography</span>
          <span class="tech-tag">Privacy Engineering</span>
        </div>
        
        <div class="project-links">
          <a href="https://llmconsent.org" class="project-link primary" target="_blank">
            <i class="fas fa-globe"></i> Visit Site
          </a>
          <a href="https://github.com/llmconsent" class="project-link" target="_blank">
            <i class="fab fa-github"></i> GitHub
          </a>
        </div>
        
        <div class="impact-metrics">
          <div class="metric">
            <div class="metric-value">2024</div>
            <div class="metric-label">Launched</div>
          </div>
          <div class="metric">
            <div class="metric-value">Active</div>
            <div class="metric-label">Development</div>
          </div>
        </div>
      </article>

      <!-- OConsent -->
      <article class="project-card" data-category="privacy protocols">
        <span class="project-status">Active</span>
        <h3 class="project-title">
          <a href="https://oconsent.io" target="_blank">OConsent Protocol</a>
        </h3>
        <p class="project-description">
          Open-source blockchain-based protocol for transparent personal data consent management - enabling granular control and tamper-proof audit trails.
        </p>
        
        <ul class="project-highlights">
          <li>Published research paper (2021, BITS Pilani)</li>
          <li>Transparent consent lifecycle management</li>
          <li>GDPR-compliant with automated compliance reporting</li>
          <li>Real-time privacy breach alerts</li>
        </ul>
        
        <div class="tech-stack">
          <span class="tech-tag">Blockchain</span>
          <span class="tech-tag">Smart Contracts</span>
          <span class="tech-tag">Privacy by Design</span>
          <span class="tech-tag">GDPR</span>
        </div>
        
        <div class="project-links">
          <a href="https://oconsent.io" class="project-link primary" target="_blank">
            <i class="fas fa-globe"></i> Visit Site
          </a>
          <a href="https://arxiv.org/abs/2201.01326" class="project-link" target="_blank">
            <i class="fas fa-file-pdf"></i> Paper
          </a>
        </div>
        
        <div class="impact-metrics">
          <div class="metric">
            <div class="metric-value">2021</div>
            <div class="metric-label">Published</div>
          </div>
          <div class="metric">
            <div class="metric-value">arXiv</div>
            <div class="metric-label">Research</div>
          </div>
        </div>
      </article>

      <!-- Open Location Proof -->
      <article class="project-card" data-category="protocols">
        <span class="project-status">Active</span>
        <h3 class="project-title">
          <a href="https://olpprotocol.com/" target="_blank">Open Location Proof Protocol</a>
        </h3>
        <p class="project-description">
          Privacy-aware open protocol for non-repudiable location verification in physical or virtual spaces - with cryptographic proof and decentralized architecture.
        </p>
        
        <ul class="project-highlights">
          <li>Cryptographically secure location attestation</li>
          <li>Privacy-preserving proof mechanisms</li>
          <li>Fully decentralized, tamper-resistant</li>
          <li>Complete technical specifications published</li>
        </ul>
        
        <div class="tech-stack">
          <span class="tech-tag">Cryptography</span>
          <span class="tech-tag">Distributed Systems</span>
          <span class="tech-tag">GPS</span>
          <span class="tech-tag">Zero-Knowledge Proofs</span>
        </div>
        
        <div class="project-links">
          <a href="https://olpprotocol.com/" class="project-link primary" target="_blank">
            <i class="fas fa-globe"></i> Protocol Site
          </a>
          <a href="https://www.researchgate.net/publication/387802463" class="project-link" target="_blank">
            <i class="fas fa-file-pdf"></i> Paper
          </a>
        </div>
        
        <div class="impact-metrics">
          <div class="metric">
            <div class="metric-value">2022</div>
            <div class="metric-label">Released</div>
          </div>
          <div class="metric">
            <div class="metric-value">Protocol</div>
            <div class="metric-label">Specification</div>
          </div>
        </div>
      </article>

    </div>
  </section>

  <!-- CTA Section -->
  <section class="contribute-cta">
    <h2>Want to Contribute?</h2>
    <p>
      These projects are open source and welcome contributions. Whether you want to report issues, suggest features, or submit pull requests - your input helps advance the field.
    </p>
    <div class="cta-buttons">
      <a href="https://github.com/bassrehab" class="btn-primary" target="_blank">
        <i class="fab fa-github"></i> View All on GitHub
      </a>
      <a href="mailto:contact@subhadipmitra.com" class="btn-secondary">
        <i class="fas fa-envelope"></i> Discuss Collaboration
      </a>
    </div>
  </section>

</div>

<script>
// Category filter functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter projects
      projectCards.forEach(card => {
        if (filter === 'all') {
          card.style.display = 'block';
        } else {
          const categories = card.getAttribute('data-category');
          if (categories && categories.includes(filter)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });
});
</script>