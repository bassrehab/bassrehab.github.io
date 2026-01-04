---
layout: page
permalink: /projects/
title: projects
description: Open-source frameworks and protocols advancing AI, privacy, and distributed systems
nav: true
nav_order: 4
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
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  padding: 2rem 0;
}

.projects-hero h1 {
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 900;
  line-height: 0.95;
  color: var(--global-text-color, #000);
  margin-bottom: 1rem;
  letter-spacing: -0.03em;
}

.projects-hero .subtitle {
  font-size: 1.5rem;
  line-height: 1.5;
  color: var(--global-text-color-light, #666);
  margin-bottom: 2rem;
  max-width: 800px;
  font-weight: 400;
}

/* Stats Bar */
.projects-stats {
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  padding: 1.5rem 0;
}

.project-stat {
  text-align: left;
}

.project-stat-value {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--global-theme-color, #b509ac);
  line-height: 1;
  letter-spacing: -0.02em;
}

.project-stat-label {
  font-size: 0.8rem;
  color: var(--global-text-color-light, #666);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 0.375rem;
}

/* Category Filter */
.filter-bar {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 4rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--global-divider-color, #e5e5e5);
  flex-wrap: wrap;
}

.category-filter {
  display: flex;
  gap: 0.625rem;
  flex-wrap: wrap;
}

.view-toggle {
  display: flex;
  gap: 0.25rem;
  background: var(--global-code-bg-color, #f8f9fa);
  border-radius: 8px;
  padding: 0.25rem;
  border: 1px solid var(--global-divider-color, #e5e5e5);
}

.view-toggle-btn {
  padding: 0.5rem 0.75rem;
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: var(--global-text-color-light, #666);
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.85rem;
}

.view-toggle-btn:hover {
  color: var(--global-theme-color, #b509ac);
}

.view-toggle-btn.active {
  background: var(--global-theme-color, #b509ac);
  color: white;
}

.filter-btn {
  padding: 0.65rem 1.25rem !important;
  background: var(--global-code-bg-color, #f8f9fa);
  border: 1px solid var(--global-divider-color, #e5e5e5);
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--global-text-color, #000);
  cursor: pointer;
  transition: all 0.2s;
}

.filter-btn:hover {
  border-color: var(--global-theme-color, #b509ac);
}

.filter-btn.active {
  background: var(--global-theme-color, #b509ac);
  color: white;
  border-color: var(--global-theme-color, #b509ac);
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
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1.25rem;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem;
  background: var(--global-code-bg-color, #f8f9fa);
  border: 1px solid var(--global-divider-color, #e5e5e5);
  border-radius: 6px;
  text-decoration: none;
  color: var(--global-text-color, #000);
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s;
}

.project-link:hover {
  background: var(--global-theme-color, #b509ac);
  color: white;
  border-color: var(--global-theme-color, #b509ac);
}

.project-link.primary {
  background: var(--global-theme-color, #b509ac);
  color: white;
  border-color: var(--global-theme-color, #b509ac);
}

.project-link.primary:hover {
  background: var(--global-text-color, #000);
  border-color: var(--global-text-color, #000);
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
  margin: 4rem 0 3rem 0;
  padding: 2.5rem 2rem;
  background: var(--global-code-bg-color, #f8f9fa);
  border-radius: 8px;
  text-align: center;
  border: 1px solid var(--global-divider-color, #e5e5e5);
}

.contribute-cta h2 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--global-text-color, #000);
}

.contribute-cta p {
  font-size: 1.05rem;
  color: var(--global-text-color-light, #666);
  margin-bottom: 1.75rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  padding: 0.75rem 1.75rem;
  background: var(--global-theme-color, #b509ac);
  color: white;
  text-decoration: none;
  font-weight: 600;
  border-radius: 6px;
  font-size: 0.95rem;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid var(--global-theme-color, #b509ac);
}

.btn-primary:hover {
  background: var(--global-text-color, #000);
  border-color: var(--global-text-color, #000);
  color: white;
}

.btn-secondary {
  padding: 0.75rem 1.75rem;
  background: transparent;
  color: var(--global-text-color, #000);
  border: 1px solid var(--global-divider-color, #e5e5e5);
  text-decoration: none;
  font-weight: 600;
  border-radius: 6px;
  font-size: 0.95rem;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-secondary:hover {
  border-color: var(--global-theme-color, #b509ac);
  color: var(--global-theme-color, #b509ac);
}

/* List View Styles */
.projects-grid.list-view {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.projects-grid.list-view .project-card {
  padding: 1.5rem 2rem;
  border-radius: 12px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto auto;
  gap: 0.5rem 2rem;
  align-items: start;
}

.projects-grid.list-view .project-card:hover {
  transform: translateY(-2px);
}

.projects-grid.list-view .project-card::before {
  display: none;
}

.projects-grid.list-view .project-status {
  grid-column: 1;
  grid-row: 1;
  margin-bottom: 0;
  width: fit-content;
}

.projects-grid.list-view .project-title {
  grid-column: 1;
  grid-row: 2;
  font-size: 1.25rem;
  margin-bottom: 0;
}

.projects-grid.list-view .project-description {
  grid-column: 1 / -1;
  grid-row: 3;
  margin-bottom: 0.5rem;
}

.projects-grid.list-view .project-highlights {
  display: none;
}

.projects-grid.list-view .tech-stack {
  grid-column: 1;
  grid-row: 4;
  margin: 0.5rem 0;
}

.projects-grid.list-view .tech-tag {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
}

.projects-grid.list-view .project-links {
  grid-column: 2;
  grid-row: 1 / 3;
  margin-top: 0;
  justify-self: end;
  align-self: center;
}

.projects-grid.list-view .project-link {
  padding: 0.4rem 0.75rem;
  font-size: 0.8rem;
}

.projects-grid.list-view .impact-metrics {
  display: none;
}

/* Responsive */
@media (max-width: 768px) {
  .projects-hero {
    margin-bottom: 3rem;
    padding: 1rem 0;
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
    gap: 1.5rem;
  }

  .project-card {
    padding: 1.5rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .impact-metrics {
    flex-wrap: wrap;
    gap: 1rem;
  }

  .contribute-cta {
    padding: 2rem 1.5rem;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }

  .filter-bar {
    flex-direction: column;
    align-items: stretch;
  }

  .view-toggle {
    align-self: flex-end;
  }

  /* List view on mobile */
  .projects-grid.list-view .project-card {
    grid-template-columns: 1fr;
    padding: 1.25rem;
  }

  .projects-grid.list-view .project-links {
    grid-column: 1;
    grid-row: auto;
    justify-self: start;
    margin-top: 0.75rem;
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
        <div class="project-stat-value">13</div>
        <div class="project-stat-label">Active Projects</div>
      </div>
      <div class="project-stat">
        <div class="project-stat-value">5</div>
        <div class="project-stat-label">Technical Disclosures</div>
      </div>
      <div class="project-stat">
        <div class="project-stat-value">6</div>
        <div class="project-stat-label">Published Packages</div>
      </div>
    </div>
  </div>

  <!-- Category Filter & View Toggle -->
  <div class="filter-bar">
    <div class="category-filter">
      <button class="filter-btn active" data-filter="all">All Projects</button>
      <button class="filter-btn" data-filter="ai">AI & Safety</button>
      <button class="filter-btn" data-filter="privacy">Privacy & Consent</button>
      <button class="filter-btn" data-filter="protocols">Protocols</button>
      <button class="filter-btn" data-filter="distributed-systems">Distributed Systems</button>
    </div>
    <div class="view-toggle">
      <button class="view-toggle-btn active" data-view="grid" title="Grid view">
        <i class="fas fa-th-large"></i>
      </button>
      <button class="view-toggle-btn" data-view="list" title="List view">
        <i class="fas fa-list"></i>
      </button>
    </div>
  </div>

  <!-- Featured Projects -->
  <section class="featured-projects">
    <div class="section-label">
      <i class="fas fa-star"></i>
      Featured Projects
    </div>
    <h2 class="section-title">Production-Ready Frameworks</h2>
    
    <div class="projects-grid">

      <!-- UPIR -->
      <article class="project-card" data-category="protocols distributed-systems">
        <span class="project-status">Active</span>
        <h3 class="project-title">
          <a href="https://www.tdcommons.org/dpubs_series/8852/" target="_blank">
            UPIR: Universal Plan Intermediate Representation
          </a>
        </h3>
        <p class="project-description">
          Framework for automated synthesis and verification of distributed systems - bridging the gap between high-level specifications and provably correct implementations.
        </p>

        <ul class="project-highlights">
          <li>Compositional verification with proof caching (274x speedup)</li>
          <li>CEGIS-based synthesis for automated implementation generation</li>
          <li>Constrained RL with PPO for optimization under correctness guarantees</li>
          <li>First framework to unify synthesis, verification, and optimization</li>
        </ul>

        <div class="tech-stack">
          <span class="tech-tag">Python</span>
          <span class="tech-tag">Formal Verification</span>
          <span class="tech-tag">Z3 Solver</span>
          <span class="tech-tag">Reinforcement Learning</span>
          <span class="tech-tag">Distributed Systems</span>
        </div>

        <div class="project-links">
          <a href="https://www.tdcommons.org/dpubs_series/8852/" class="project-link primary" target="_blank">
            <i class="fas fa-file-pdf"></i> Technical Disclosure
          </a>
          <a href="https://pypi.org/project/upir/" class="project-link" target="_blank">
            <i class="fas fa-cube"></i> PyPI
          </a>
          <a href="https://github.com/bassrehab/upir" class="project-link" target="_blank">
            <i class="fab fa-github"></i> GitHub
          </a>
        </div>

        <div class="impact-metrics">
          <div class="metric">
            <div class="metric-value">2025</div>
            <div class="metric-label">Released</div>
          </div>
          <div class="metric">
            <div class="metric-value">274x</div>
            <div class="metric-label">Speedup</div>
          </div>
          <div class="metric">
            <div class="metric-value">Open Source</div>
            <div class="metric-label">Implementation</div>
          </div>
        </div>
      </article>

      <!-- AI Metacognition Toolkit -->
      <article class="project-card" data-category="ai">
        <span class="project-status">Active</span>
        <h3 class="project-title">
          <a href="https://ai-metacognition-toolkit.subhadipmitra.com/" target="_blank">
            AI Metacognition Toolkit
          </a>
        </h3>
        <p class="project-description">
          Activation-level detection of sandbagging, deception, and situational awareness in LLMs. Linear probes achieve 90-96% accuracy across Mistral, Gemma, and Qwen models. Includes steering vectors for runtime behavior control.
        </p>

        <ul class="project-highlights">
          <li>Sandbagging detection via linear probes with 90-96% accuracy</li>
          <li>Steering vectors reduce sandbagging behavior by 20%</li>
          <li>Bayesian situational awareness detection with KL divergence</li>
          <li>275 tests, 95% code coverage, production-hardened</li>
        </ul>

        <div class="tech-stack">
          <span class="tech-tag">Python</span>
          <span class="tech-tag">PyTorch</span>
          <span class="tech-tag">Transformers</span>
          <span class="tech-tag">Activation Probing</span>
          <span class="tech-tag">AI Safety</span>
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
          <a href="/blog/2025/detecting-ai-sandbagging/" class="project-link" target="_blank">
            <i class="fas fa-pen"></i> Blog
          </a>
        </div>

        <div class="impact-metrics">
          <div class="metric">
            <div class="metric-value">90-96%</div>
            <div class="metric-label">Probe Accuracy</div>
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

      <!-- ARTEMIS Agents -->
      <article class="project-card" data-category="ai">
        <span class="project-status">Active</span>
        <h3 class="project-title">
          <a href="https://artemis.subhadipmitra.com" target="_blank">
            ARTEMIS: Multi-Agent Debate Framework
          </a>
        </h3>
        <p class="project-description">
          Production-ready multi-agent debate framework implementing Adaptive Reasoning Through Evaluation of Multi-agent Intelligent Systems. Orchestrates structured debates between AI agents with hierarchical argument generation, jury-based evaluation, and integrated safety monitoring.
        </p>

        <ul class="project-highlights">
          <li>H-L-DAG: Hierarchical argument synthesis at strategic, tactical, and operational levels</li>
          <li>L-AE-CR: Adaptive evaluation with causal reasoning and jury scoring mechanism</li>
          <li>Built-in safety: sandbagging detection, deception monitoring, behavioral drift tracking</li>
          <li>Native support for reasoning models (o1, R1, Gemini 2.5) and multimodal evidence</li>
        </ul>

        <div class="tech-stack">
          <span class="tech-tag">Python</span>
          <span class="tech-tag">LangChain</span>
          <span class="tech-tag">LangGraph</span>
          <span class="tech-tag">CrewAI</span>
          <span class="tech-tag">MCP</span>
          <span class="tech-tag">AI Safety</span>
        </div>

        <div class="project-links">
          <a href="https://artemis.subhadipmitra.com" class="project-link primary" target="_blank">
            <i class="fas fa-book"></i> Documentation
          </a>
          <a href="https://pypi.org/project/artemis-agents/" class="project-link" target="_blank">
            <i class="fas fa-cube"></i> PyPI
          </a>
          <a href="https://github.com/bassrehab/artemis-agents" class="project-link" target="_blank">
            <i class="fab fa-github"></i> GitHub
          </a>
        </div>

        <div class="impact-metrics">
          <div class="metric">
            <div class="metric-value">86%</div>
            <div class="metric-label">Decision Accuracy</div>
          </div>
          <div class="metric">
            <div class="metric-value">102s</div>
            <div class="metric-label">Avg Debate Time</div>
          </div>
          <div class="metric">
            <div class="metric-value">Apache 2.0</div>
            <div class="metric-label">License</div>
          </div>
        </div>
      </article>

      <!-- Speculative Decoding -->
      <article class="project-card" data-category="ai">
        <span class="project-status">Active</span>
        <h3 class="project-title">
          <a href="https://github.com/bassrehab/speculative-decoding" target="_blank">
            Speculative Decoding
          </a>
        </h3>
        <p class="project-description">
          Reference implementation of LLM inference acceleration techniques - achieving faster generation through speculative decoding, tree speculation, EAGLE, Medusa, KV-cache compression, and diffusion efficiency optimizations.
        </p>

        <ul class="project-highlights">
          <li>1.10x speedup with exact target distribution guarantee</li>
          <li>Six major techniques: speculative decoding, tree speculation, EAGLE, Medusa</li>
          <li>KV-cache compression with H2O, sliding window, and INT8/INT4 quantization</li>
          <li>Production-quality code with comprehensive benchmarks and interactive demos</li>
        </ul>

        <div class="tech-stack">
          <span class="tech-tag">Python</span>
          <span class="tech-tag">PyTorch</span>
          <span class="tech-tag">LLM Inference</span>
          <span class="tech-tag">Optimization</span>
          <span class="tech-tag">Diffusion Models</span>
        </div>

        <div class="project-links">
          <a href="https://github.com/bassrehab/speculative-decoding" class="project-link primary" target="_blank">
            <i class="fab fa-github"></i> GitHub
          </a>
        </div>

        <div class="impact-metrics">
          <div class="metric">
            <div class="metric-value">2025</div>
            <div class="metric-label">Released</div>
          </div>
          <div class="metric">
            <div class="metric-value">1.10x</div>
            <div class="metric-label">Speedup</div>
          </div>
          <div class="metric">
            <div class="metric-value">MIT</div>
            <div class="metric-label">License</div>
          </div>
        </div>
      </article>

      <!-- Triton Kernels -->
      <article class="project-card" data-category="ai">
        <span class="project-status">Active</span>
        <h3 class="project-title">
          <a href="https://github.com/bassrehab/triton-kernels" target="_blank">
            Triton Kernels for LLM Inference
          </a>
        </h3>
        <p class="project-description">
          High-performance GPU kernels for LLM inference operations using OpenAI Triton. Educational implementations demonstrating memory-bandwidth optimization techniques for transformer operations on A100 GPUs.
        </p>

        <ul class="project-highlights">
          <li>RMSNorm kernel: 8.1x faster than PyTorch, achieving 88% of A100 peak bandwidth (1365 GB/s)</li>
          <li>Fused RMSNorm+Residual: 6.0x speedup through operation fusion</li>
          <li>SwiGLU activation: 1.6x improvement with custom kernel</li>
          <li>INT8 GEMM: 2x memory savings through weight quantization</li>
        </ul>

        <div class="tech-stack">
          <span class="tech-tag">Python</span>
          <span class="tech-tag">Triton</span>
          <span class="tech-tag">CUDA</span>
          <span class="tech-tag">PyTorch</span>
          <span class="tech-tag">GPU Optimization</span>
        </div>

        <div class="project-links">
          <a href="https://github.com/bassrehab/triton-kernels" class="project-link primary" target="_blank">
            <i class="fab fa-github"></i> GitHub
          </a>
        </div>

        <div class="impact-metrics">
          <div class="metric">
            <div class="metric-value">2025</div>
            <div class="metric-label">Released</div>
          </div>
          <div class="metric">
            <div class="metric-value">8.1x</div>
            <div class="metric-label">RMSNorm Speedup</div>
          </div>
          <div class="metric">
            <div class="metric-value">88%</div>
            <div class="metric-label">Peak Bandwidth</div>
          </div>
        </div>
      </article>

      <!-- Steering Vectors Agents -->
      <article class="project-card" data-category="ai">
        <span class="project-status">Active</span>
        <h3 class="project-title">
          <a href="https://github.com/bassrehab/steering-vectors-agents" target="_blank">
            Steering Vectors for Agent Behavior Control
          </a>
        </h3>
        <p class="project-description">
          Runtime control of LLM agent behaviors through activation steering vectors - modifying model outputs at inference time without retraining. Demonstrates more calibrated control than traditional prompting approaches.
        </p>

        <ul class="project-highlights">
          <li>Contrastive Activation Addition (CAA) for steering vector extraction</li>
          <li>Dynamic strength adjustment per-request for behavior intensity control</li>
          <li>Multi-vector composition with interference mitigation</li>
          <li>LangChain integration for production deployment</li>
        </ul>

        <div class="tech-stack">
          <span class="tech-tag">Python</span>
          <span class="tech-tag">PyTorch</span>
          <span class="tech-tag">LangChain</span>
          <span class="tech-tag">Transformers</span>
          <span class="tech-tag">AI Safety</span>
        </div>

        <div class="project-links">
          <a href="https://github.com/bassrehab/steering-vectors-agents" class="project-link primary" target="_blank">
            <i class="fab fa-github"></i> GitHub
          </a>
          <a href="https://subhadipmitra.com/blog/2025/steering-vectors-agents/" class="project-link" target="_blank">
            <i class="fas fa-pen"></i> Blog Post
          </a>
        </div>

        <div class="impact-metrics">
          <div class="metric">
            <div class="metric-value">2025</div>
            <div class="metric-label">Released</div>
          </div>
          <div class="metric">
            <div class="metric-value">65%</div>
            <div class="metric-label">Uncertainty Detection</div>
          </div>
          <div class="metric">
            <div class="metric-value">MIT</div>
            <div class="metric-label">License</div>
          </div>
        </div>
      </article>

      <!-- Spark LLM Eval -->
      <article class="project-card" data-category="ai distributed-systems">
        <span class="project-status">Active</span>
        <h3 class="project-title">
          <a href="https://github.com/bassrehab/spark-llm-eval" target="_blank">
            Spark LLM Eval
          </a>
        </h3>
        <p class="project-description">
          Distributed LLM evaluation framework built on Apache Spark for enterprise-scale model assessment. Handles millions of examples with statistical rigor, integrating seamlessly with Databricks infrastructure.
        </p>

        <ul class="project-highlights">
          <li>Pandas UDFs with Arrow for efficient distributed batching</li>
          <li>Bootstrap confidence intervals and statistical significance testing</li>
          <li>Multi-provider support: OpenAI, Anthropic Claude, Google Gemini</li>
          <li>LLM-as-judge evaluation patterns with agent trajectory support</li>
        </ul>

        <div class="tech-stack">
          <span class="tech-tag">Python</span>
          <span class="tech-tag">Apache Spark</span>
          <span class="tech-tag">Databricks</span>
          <span class="tech-tag">MLflow</span>
          <span class="tech-tag">Delta Lake</span>
        </div>

        <div class="project-links">
          <a href="https://github.com/bassrehab/spark-llm-eval" class="project-link primary" target="_blank">
            <i class="fab fa-github"></i> GitHub
          </a>
          <a href="https://pypi.org/project/spark-llm-eval/" class="project-link" target="_blank">
            <i class="fas fa-cube"></i> PyPI
          </a>
          <a href="https://subhadipmitra.com/blog/2025/building-spark-llm-eval/" class="project-link" target="_blank">
            <i class="fas fa-pen"></i> Blog Post
          </a>
        </div>

        <div class="impact-metrics">
          <div class="metric">
            <div class="metric-value">2025</div>
            <div class="metric-label">Released</div>
          </div>
          <div class="metric">
            <div class="metric-value">Spark 3.5+</div>
            <div class="metric-label">Compatible</div>
          </div>
          <div class="metric">
            <div class="metric-value">Apache 2.0</div>
            <div class="metric-label">License</div>
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
          <a href="https://subhadipmitra.com/blog/2025/building-consent-layer-for-ai/" class="project-link" target="_blank">
            <i class="fas fa-pen"></i> Blog Post
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

      <!-- SMPP Gateway -->
      <article class="project-card" data-category="protocols distributed-systems">
        <span class="project-status">Active</span>
        <h3 class="project-title">
          <a href="https://smppgateway.io" target="_blank">SMPP Gateway</a>
        </h3>
        <p class="project-description">
          Modern Java 21 implementation of the SMPP protocol - the actively maintained replacement for Cloudhopper. Built on Netty with virtual threads for high-performance SMS messaging at scale.
        </p>

        <ul class="project-highlights">
          <li>Java 21 virtual threads, records, and sealed interfaces for clean APIs</li>
          <li>1.8M PDU decodes/sec, 1.5M encodes/sec, 25K network round-trips/sec</li>
          <li>Complete SMPP 3.3, 3.4, and 5.0 protocol support</li>
          <li>Modular architecture: core, netty transport, server, client, metrics</li>
        </ul>

        <div class="tech-stack">
          <span class="tech-tag">Java 21</span>
          <span class="tech-tag">Netty</span>
          <span class="tech-tag">Virtual Threads</span>
          <span class="tech-tag">Micrometer</span>
          <span class="tech-tag">SMPP Protocol</span>
        </div>

        <div class="project-links">
          <a href="https://smppgateway.io" class="project-link primary" target="_blank">
            <i class="fas fa-globe"></i> Website
          </a>
          <a href="https://central.sonatype.com/artifact/io.smppgateway/smpp-core" class="project-link" target="_blank">
            <i class="fas fa-cube"></i> Maven
          </a>
          <a href="https://docs.smppgateway.io" class="project-link" target="_blank">
            <i class="fas fa-book"></i> Documentation
          </a>
          <a href="https://github.com/bassrehab/smpp-core" class="project-link" target="_blank">
            <i class="fab fa-github"></i> GitHub
          </a>
          <a href="/blog/2025/why-i-built-modern-java-smpp-library/" class="project-link" target="_blank">
            <i class="fas fa-pen"></i> Blog
          </a>
        </div>

        <div class="impact-metrics">
          <div class="metric">
            <div class="metric-value">2025</div>
            <div class="metric-label">Released</div>
          </div>
          <div class="metric">
            <div class="metric-value">1.8M/s</div>
            <div class="metric-label">PDU Decoding</div>
          </div>
          <div class="metric">
            <div class="metric-value">Apache 2.0</div>
            <div class="metric-label">License</div>
          </div>
        </div>
      </article>

      <!-- SMPP Kafka Producer -->
      <article class="project-card" data-category="protocols distributed-systems">
        <span class="project-status">Active</span>
        <h3 class="project-title">
          <a href="https://github.com/bassrehab/smpp-kafka-producer" target="_blank">SMPP Kafka Producer</a>
        </h3>
        <p class="project-description">
          Production-ready bridge between SMPP protocol and Apache Kafka - receives SMS messages via SMPP and publishes to Kafka topics. Features HTTP/2 REST API aligned with 3GPP TS 29.540 SMSF standards for 5G compatibility.
        </p>

        <ul class="project-highlights">
          <li>Dual protocol support: SMPP 3.x/5.x and HTTP/2 REST API</li>
          <li>Java 21 virtual threads for high-throughput async processing</li>
          <li>Prometheus metrics and health check endpoints</li>
          <li>Cloud-native: Docker, Kubernetes manifests, and Helm charts</li>
        </ul>

        <div class="tech-stack">
          <span class="tech-tag">Java 21</span>
          <span class="tech-tag">Apache Kafka</span>
          <span class="tech-tag">SMPP</span>
          <span class="tech-tag">HTTP/2</span>
          <span class="tech-tag">Kubernetes</span>
        </div>

        <div class="project-links">
          <a href="https://github.com/bassrehab/smpp-kafka-producer" class="project-link primary" target="_blank">
            <i class="fab fa-github"></i> GitHub
          </a>
        </div>

        <div class="impact-metrics">
          <div class="metric">
            <div class="metric-value">2024</div>
            <div class="metric-label">Released</div>
          </div>
          <div class="metric">
            <div class="metric-value">5G Ready</div>
            <div class="metric-label">3GPP Aligned</div>
          </div>
          <div class="metric">
            <div class="metric-value">Apache 2.0</div>
            <div class="metric-label">License</div>
          </div>
        </div>
      </article>

      <!-- ISO8583 Simulator -->
      <article class="project-card" data-category="protocols distributed-systems">
        <span class="project-status">Active</span>
        <h3 class="project-title">
          <a href="https://iso8583.subhadipmitra.com" target="_blank">ISO8583 Simulator</a>
        </h3>
        <p class="project-description">
          High-performance financial message processing tool for ISO 8583 payment protocol. Features CLI, Python SDK, and AI-powered message explanation. Supports VISA, Mastercard, AMEX, Discover, JCB, and UnionPay networks.
        </p>

        <ul class="project-highlights">
          <li>180k+ TPS message parsing with Cython optimization</li>
          <li>LLM integration: explain messages in plain English, generate from natural language</li>
          <li>Multi-provider AI: OpenAI, Anthropic, Google, local Ollama</li>
          <li>Native EMV/chip card data support (Field 55)</li>
        </ul>

        <div class="tech-stack">
          <span class="tech-tag">Python</span>
          <span class="tech-tag">Cython</span>
          <span class="tech-tag">ISO 8583</span>
          <span class="tech-tag">LLM Integration</span>
          <span class="tech-tag">Financial Protocols</span>
        </div>

        <div class="project-links">
          <a href="https://iso8583.subhadipmitra.com" class="project-link primary" target="_blank">
            <i class="fas fa-book"></i> Documentation
          </a>
          <a href="https://pypi.org/project/iso8583sim/" class="project-link" target="_blank">
            <i class="fas fa-cube"></i> PyPI
          </a>
          <a href="https://github.com/bassrehab/ISO8583-Simulator" class="project-link" target="_blank">
            <i class="fab fa-github"></i> GitHub
          </a>
        </div>

        <div class="impact-metrics">
          <div class="metric">
            <div class="metric-value">180k+</div>
            <div class="metric-label">TPS Parsing</div>
          </div>
          <div class="metric">
            <div class="metric-value">6</div>
            <div class="metric-label">Card Networks</div>
          </div>
          <div class="metric">
            <div class="metric-value">MIT</div>
            <div class="metric-label">License</div>
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
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const viewToggleButtons = document.querySelectorAll('.view-toggle-btn');
  const projectsGrids = document.querySelectorAll('.projects-grid');

  // Restore saved view preference
  const savedView = localStorage.getItem('projects-view') || 'grid';
  if (savedView === 'list') {
    projectsGrids.forEach(grid => grid.classList.add('list-view'));
    viewToggleButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === 'list');
    });
  }

  // Category filter functionality
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // Filter projects
      projectCards.forEach(card => {
        if (filter === 'all') {
          card.style.display = '';
        } else {
          const categories = card.getAttribute('data-category');
          if (categories && categories.includes(filter)) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });

  // View toggle functionality
  viewToggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      const view = this.dataset.view;

      // Update active button
      viewToggleButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // Toggle view class on grids
      projectsGrids.forEach(grid => {
        grid.classList.toggle('list-view', view === 'list');
      });

      // Save preference
      localStorage.setItem('projects-view', view);
    });
  });
});
</script>
