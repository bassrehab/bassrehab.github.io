---
layout: page
permalink: /cv/
title: cv
description:
nav: true
nav_order: 5
---

<style>
@media print {
  /* Hide navigation and UI elements */
  header.header,
  nav,
  .header,
  .cv-download,
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
    margin-bottom: 0.5rem;
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
</style>

<div class="cv-editorial">
  
  <!-- Hero Section -->
  <div class="cv-hero">
    <div class="cv-hero-content">
      <h1>Curriculum Vitae</h1>
      <p class="subtitle">Engineering Leader & AI Systems Architect</p>
      <a href="/assets/pdf/cv.pdf" class="cv-download" download>
        <i class="fas fa-download"></i>
        Download PDF
      </a>
      <div class="cv-meta">
        <div class="cv-meta-item">
          <i class="fas fa-map-marker-alt"></i>
          Singapore
        </div>
        <div class="cv-meta-item">
          <i class="fas fa-envelope"></i>
          <a href="mailto:contact@subhadipmitra.com" style="color: inherit; text-decoration: none;">contact@subhadipmitra.com</a>
        </div>
        <div class="cv-meta-item">
          <i class="fab fa-linkedin"></i>
          <a href="https://www.linkedin.com/in/subhadip-mitra/" style="color: inherit; text-decoration: none;" target="_blank">LinkedIn</a>
        </div>
        <div class="cv-meta-item">
          <i class="fas fa-calendar"></i>
          <a href="https://calendly.com/contact-x9nm/30min" style="color: inherit; text-decoration: none;" target="_blank">Schedule a Call</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Privacy Notice -->
  <div class="privacy-notice">
    <p>
      <strong>Note:</strong> This is a public version with certain details removed for privacy. For a comprehensive resume including specific project metrics and contact details, please reach out via <a href="mailto:contact@subhadipmitra.com">email</a> or <a href="https://www.linkedin.com/in/subhadip-mitra/" target="_blank">LinkedIn</a>.
    </p>
  </div>

  <!-- Summary Section -->
  <section class="cv-section">
    <div class="section-label">Summary</div>
 <p>
 Senior Engineering Leader with 15+ years of experience bridging <b>fundamental AI research</b> and <b>enterprise-scale system delivery</b>. Currently leading Google Cloud’s Data & Analytics practice for Southeast Asia while driving internal innovations on <b>LLM inference efficiency</b> and <b>multi-agent systems</b>. <br /> <br />
 Proven track record of operating as a "Player-Coach": managing regional engineering portfolios while simultaneously architecting and patenting novel frameworks (<abbr title="Unified Plan Intermediate Representation - Automated synthesis and verification of distributed systems">UPIR</abbr>, <abbr title="Adaptive Reasoning and Evaluation Framework for Multi-agent Intelligent Systems">ARTEMIS</abbr>, <abbr title="Field-Theoretic Context System - Mathematical framework for LLM context management">FTCS</abbr>, <abbr title="Inference optimization technique for large language models">Speculative Decoding</abbr>).
 </p>
  </section>

  <!-- Experience Section -->
  <section class="cv-section">
    <div class="section-label">Professional Journey</div>
    <h2 class="section-title">Work Experience</h2>
    
    <div class="timeline">
      <!-- Current Role -->
      <article class="timeline-item current">
        <div class="job-header">
          <h3 class="job-title">
            <a href="https://cloud.google.com" target="_blank">Data & Analytics Manager | Site Lead, PSO Southeast Asia</a>
          </h3>
          <div class="job-company">Google Cloud - Professional Services Organization</div>
          <div class="job-period">January 2021 - Present</div>
        </div>
        <p class="job-description">
          Dual-track role combining technical innovation leadership with regional delivery management. Built Google Cloud's Data Analytics practice across Southeast Asia while serving as Site Lead overseeing cross-practice operations. Member of <a href="https://cloud.google.com/consulting/innovation-and-transformation" target="_blank">delta</a> - Google Cloud's innovation and transformation team architecting enterprise AI solutions at scale.
        </p>

        <!-- Strategic Leadership & Delivery -->
        <div class="role-section" style="margin-top: 1.5rem;">
          <h4 style="font-size: 1.125rem; font-weight: 700; color: var(--global-text-color); margin-bottom: 0.75rem; border-left: 3px solid var(--global-theme-color); padding-left: 0.75rem;">
            Strategic Leadership & Delivery
          </h4>
          <div class="job-highlights">
            <ul>
              <li><strong>Practice Leadership:</strong> Built Data Analytics practice for Southeast Asia from 0 to 1, establishing the region's premier capability serving 7 countries with strategic enterprise clients.</li>
              <li><strong>Regional Operations:</strong> Serve as Site Lead overseeing PSO Southeast Asia delivery operations, directing cross-functional teams while maintaining 97% CSAT and contributing to 100% annual revenue target attainment.</li>
              <li><strong>Portfolio Management:</strong> Direct \$ XXM+ Data Analytics delivery portfolio across JAPAC while simultaneously overseeing \$ XXM+ cross-practice portfolio as regional Site Lead.</li>
              <li><strong>Strategic Interventions:</strong> Led critical engagements for JAPAC strategic accounts including major financial services institutions and consumer electronics manufacturers, ensuring delivery excellence and client success.</li>
              <li><strong>Enterprise Delivery:</strong> Executed high-impact projects including 12K+ user analytics migrations, first Data & AI Centers of Excellence, Data Monetization Platforms, and petabyte-scale data platform modernizations.</li>
              <li><strong>Executive Advisory:</strong> Partner with C-level stakeholders (CTOs, CDOs) to define data modernization and AI transformation roadmaps, translating technical capabilities into business outcomes.</li>
              <li><strong>Agentic AI Transformation:</strong> Pioneered organization-wide adoption of agentic AI across PSO JAPAC for both customer solutions and internal productivity, including autonomous data engineering agents.</li>
            </ul>
          </div>
        </div>

        <!-- Technical Innovation & Research -->
        <div class="role-section" style="margin-top: 1.5rem;">
          <h4 style="font-size: 1.125rem; font-weight: 700; color: var(--global-text-color); margin-bottom: 0.75rem; border-left: 3px solid var(--global-theme-color); padding-left: 0.75rem;">
            Technical Innovation & Research (Official IP)
          </h4>
          <div class="job-highlights">
            <ul>
              <li><strong>LLM Inference Efficiency:</strong> Research on speculative decoding, custom Triton kernels, and KV-cache compression strategies. Filed Google Technical Disclosure on hybrid compression systems for multi-tenant serving optimization.</li>
              <li><strong>Distributed Systems Synthesis (UPIR):</strong> Invented neuro-symbolic framework combining formal verification and reinforcement learning to automate distributed system generation - achieved 274x speedup in synthesis with 60% latency reduction.</li>
              <li><strong>Context Architecture (FTCS):</strong> Designed Field-Theoretic Context System modeling context as continuous fields to address long-horizon memory fragmentation in AI agents. Published as Google Technical Disclosure.</li>
              <li><strong>Data Processing for GenAI (ETLC):</strong> Authored whitepaper introducing Extract, Transform, Load, Contextualize framework adding semantic, relational, and behavioral context to data pipelines for RAG and agentic systems.</li>
              <li><strong>Multi-Agent Framework (ARTEMIS):</strong> Created adaptive debate-driven decision framework for enterprise multi-agent systems. Published as Google Technical Disclosure.</li>
              <li><strong>Intelligent Trust Engine (CatchMe):</strong> Developed industry-agnostic agentic AI system for enterprise-scale trust decisions across Finance, Healthcare, Insurance, Cybersecurity, and Supply Chain. Features APLS (self-learning pattern synthesis) and five-level cascade routing achieving 86% cost reduction with sub-50ms latency. Won Google Cloud PSO Hackathon JAPAC Regionals, qualified for World Finals. Two pending Google Technical Disclosures.</li>
            </ul>
          </div>
        </div>
      </article>

      <!-- Standard Chartered -->
      <article class="timeline-item">
        <div class="job-header">
          <h3 class="job-title">
            <a href="https://www.sc.com" target="_blank">Principal Engineer - Data & Analytics Transformation</a>
          </h3>
          <div class="job-company">Standard Chartered Bank</div>
          <div class="job-period">January 2019 - January 2021</div>
        </div>
        <p class="job-description">
          Led enterprise-wide AI and data platform development serving 11 markets and 1200+ global users, delivering technical excellence while influencing C-suite data strategy.
        </p>
        <div class="job-highlights">
          <ul>
            <li>Delivered a Self-Service ML Platform that reduced model development time from 6 months to 1 week</li>
            <li>Designed credit risk AI models integrating alternative data sources, improving accuracy by 15%</li>
            <li>Modernized MarTech infrastructure, driving 30% increase in customer acquisition</li>
          </ul>
        </div>
      </article>

      <!-- Think Big Analytics -->
      <article class="timeline-item">
        <div class="job-header">
          <h3 class="job-title">
            <a href="https://www.teradata.com" target="_blank">Principal Data Engineer / Solution Architect</a>
          </h3>
          <div class="job-company">Think Big Analytics (a Teradata company)</div>
          <div class="job-period">January 2017 - January 2019</div>
        </div>
        <p class="job-description">
          Architected enterprise-scale data solutions for Fortune 500 clients across APAC, designing scalable platforms with measurable business impact.
        </p>
        <div class="job-highlights">
          <ul>
            <li>Engineered 5 high-performance data lakes processing 1.2 PB/hour, achieving 20% optimization</li>
            <li>Built real-time fraud detection systems, reducing false positives by 60% and saving $XM annually</li>
            <li>Designed enterprise architectures supporting global Fortune 500 clients across APAC</li>
          </ul>
        </div>
      </article>

      <!-- Earlier Roles -->
      <article class="timeline-item">
        <div class="job-header">
          <h3 class="job-title">Software Engineering, Architecture and Technical Consulting Roles</h3>
          <div class="job-company">Various Companies</div>
          <div class="job-period">January 2010 - January 2017</div>
        </div>
        <p class="job-description">
          Progressively advanced through roles in software development, systems integration, and technical consulting within financial services and algorithmic trading domains.
        </p>
      </article>
    </div>

  </section>

  <!-- Research & Open Source Engineering Section -->
  <section class="cv-section">
    <div class="section-label">Technical Innovation</div>
    <h2 class="section-title">Research & Open Source Engineering</h2>

    <div class="research-projects">
      <article class="research-project-card">
        <div class="project-period">2025 - Present</div>
        <h3 class="project-title">LLM Inference Efficiency Research</h3>
        <div class="project-status" style="font-size: 0.875rem; color: var(--global-theme-color); font-weight: 600; margin-bottom: 0.75rem;">
          Google Technical Disclosure - Pending
        </div>
        <p class="project-description">
          Research implementations addressing the fundamental bottleneck in LLM inference: memory-bandwidth constraints rather than compute limits. Explores acceleration through speculative decoding, custom GPU kernels, and quantization strategies.
        </p>
        <div class="project-highlights">
          <ul>
            <li><strong>Speculative Decoding Suite:</strong> Six techniques including standard speculation, tree speculation, EAGLE-style drafting, Medusa multi-head, KV-cache compression (8x compression via INT8/INT4 quantization + H2O eviction), and diffusion efficiency optimizations. Production systems report 2-3x inference speedup.</li>
            <li><strong>Custom Triton Kernels:</strong> High-performance GPU kernels for transformer operations - RMSNorm (8.1x faster, 88% peak bandwidth), fused RMSNorm+Residual (6.0x speedup), SwiGLU (1.6x), INT8 GEMM (2x memory savings). Demonstrates memory-bandwidth optimization from 11% to 88% of A100 peak.</li>
            <li><strong>Device-Agnostic Implementation:</strong> Supports CUDA, Apple Silicon (MPS), and CPU with full KV-cache integration reducing complexity from O(seq²) to O(seq).</li>
          </ul>
        </div>
        <div class="project-links" style="margin-top: 1rem; display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <a href="https://github.com/bassrehab/speculative-decoding" target="_blank" style="color: var(--global-theme-color); text-decoration: none; font-size: 0.875rem; font-weight: 600;">
            <i class="fab fa-github"></i> speculative-decoding
          </a>
          <span style="color: var(--global-text-color-light);">•</span>
          <a href="https://github.com/bassrehab/triton-kernels" target="_blank" style="color: var(--global-theme-color); text-decoration: none; font-size: 0.875rem; font-weight: 600;">
            <i class="fab fa-github"></i> triton-kernels
          </a>
        </div>
      </article>

      <article class="research-project-card">
        <div class="project-period">2025 - Present</div>
        <h3 class="project-title">
          <a href="https://ai-metacognition-toolkit.subhadipmitra.com/" target="_blank">AI Metacognition Toolkit</a>
        </h3>
        <p class="project-description">
          Activation-level detection of sandbagging, deception, and situational awareness in LLMs. Linear probes achieve 90-96% accuracy across Mistral, Gemma, and Qwen models. Includes steering vectors for runtime behavior control.
        </p>
        <div class="project-highlights">
          <ul>
            <li><strong>Sandbagging Detection:</strong> Linear probes trained on activation differences detect sandbagging intent with 90-96% accuracy. Model-specific representations - no cross-model transfer.</li>
            <li><strong>Steering Vectors:</strong> Activation steering reduces sandbagging behavior by 20% in Gemma models without retraining.</li>
            <li><strong>Bayesian Situational Awareness:</strong> KL-divergence based detection of behavioral changes and "Observer Effects" during interaction.</li>
            <li><strong>Engineering Rigor:</strong> 275 test cases, 95% code coverage, type-safe implementation, published on PyPI.</li>
          </ul>
        </div>
        <div class="project-links" style="margin-top: 1rem; display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <a href="https://pypi.org/project/ai-metacognition-toolkit/" target="_blank" style="color: var(--global-theme-color); text-decoration: none; font-size: 0.875rem; font-weight: 600;">
            <i class="fas fa-cube"></i> PyPI Package
          </a>
          <span style="color: var(--global-text-color-light);">•</span>
          <a href="https://github.com/bassrehab/ai-metacognition-toolkit" target="_blank" style="color: var(--global-theme-color); text-decoration: none; font-size: 0.875rem; font-weight: 600;">
            <i class="fab fa-github"></i> GitHub
          </a>
          <span style="color: var(--global-text-color-light);">•</span>
          <a href="https://ai-metacognition-toolkit.subhadipmitra.com/" target="_blank" style="color: var(--global-theme-color); text-decoration: none; font-size: 0.875rem; font-weight: 600;">
            <i class="fas fa-book"></i> Documentation
          </a>
          <span style="color: var(--global-text-color-light);">•</span>
          <a href="/blog/2025/detecting-ai-sandbagging/" style="color: var(--global-theme-color); text-decoration: none; font-size: 0.875rem; font-weight: 600;">
            <i class="fas fa-pen"></i> Blog
          </a>
        </div>
      </article>

      <article class="research-project-card">
        <div class="project-period">2025</div>
        <h3 class="project-title">
          <a href="https://www.tdcommons.org/dpubs_series/8852/" target="_blank">UPIR - Distributed Systems Synthesis</a>
        </h3>
        <p class="project-description">
          Neuro-symbolic framework combining formal verification, program synthesis, and reinforcement learning to automatically generate verified distributed system implementations from specifications.
        </p>
        <div class="project-highlights">
          <ul>
            <li><strong>Compositional Verification:</strong> SMT-based verification engine with proof caching achieving 274x speedup for 64-component systems.</li>
            <li><strong>CEGIS Synthesis:</strong> Counterexample-guided inductive synthesis with constrained PPO optimization preserving formal guarantees.</li>
            <li><strong>Performance:</strong> 60.1% latency reduction, 194.5% throughput increase, 89.9% pattern reuse potential in benchmark tests.</li>
          </ul>
        </div>
        <div class="project-links" style="margin-top: 1rem; display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <a href="https://www.tdcommons.org/dpubs_series/8852/" target="_blank" style="color: var(--global-theme-color); text-decoration: none; font-size: 0.875rem; font-weight: 600;">
            <i class="fas fa-file-alt"></i> Technical Disclosure
          </a>
          <span style="color: var(--global-text-color-light);">•</span>
          <a href="https://github.com/bassrehab/upir" target="_blank" style="color: var(--global-theme-color); text-decoration: none; font-size: 0.875rem; font-weight: 600;">
            <i class="fab fa-github"></i> GitHub Repository
          </a>
        </div>
      </article>

      <article class="research-project-card">
        <div class="project-period">2025</div>
        <h3 class="project-title">
          <a href="https://github.com/bassrehab/steering-vectors-agents" target="_blank">Steering Vectors for Agent Behavior Control</a>
        </h3>
        <p class="project-description">
          Runtime control of LLM agent behaviors through activation steering vectors - modifying model outputs at inference time without retraining. Demonstrates more calibrated control than traditional prompting approaches with LangChain integration.
        </p>
        <div class="project-highlights">
          <ul>
            <li><strong>Contrastive Activation Addition:</strong> Extract steering vectors from contrast pairs and inject into model activations for behavior modification.</li>
            <li><strong>Uncertainty Calibration:</strong> Achieves 65% uncertainty detection on ambiguous questions while maintaining 100% confidence on factual ones - superior to prompting which causes indiscriminate hedging.</li>
            <li><strong>Multi-Vector Composition:</strong> Dynamic strength adjustment per-request with interference mitigation for combining multiple behavioral controls.</li>
            <li><strong>Production Ready:</strong> LangChain integration, tested on Mistral-7B, Gemma-2-9B, and Qwen3-8B models.</li>
          </ul>
        </div>
        <div class="project-links" style="margin-top: 1rem; display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <a href="https://github.com/bassrehab/steering-vectors-agents" target="_blank" style="color: var(--global-theme-color); text-decoration: none; font-size: 0.875rem; font-weight: 600;">
            <i class="fab fa-github"></i> GitHub Repository
          </a>
          <span style="color: var(--global-text-color-light);">•</span>
          <a href="/blog/2025/steering-vectors-agents/" style="color: var(--global-theme-color); text-decoration: none; font-size: 0.875rem; font-weight: 600;">
            <i class="fas fa-pen"></i> Blog Post
          </a>
        </div>
      </article>

      <article class="research-project-card">
        <div class="project-period">2025</div>
        <h3 class="project-title">
          <a href="https://github.com/bassrehab/spark-llm-eval" target="_blank">Spark LLM Eval - Distributed Evaluation Framework</a>
        </h3>
        <p class="project-description">
          Distributed LLM evaluation framework built on Apache Spark for enterprise-scale model assessment. Addresses the gap in evaluating LLMs at scale with statistical rigor, integrating seamlessly with Databricks infrastructure.
        </p>
        <div class="project-highlights">
          <ul>
            <li><strong>Distributed Processing:</strong> Pandas UDFs with Arrow for efficient batching, scales linearly across Spark executors for millions of examples.</li>
            <li><strong>Statistical Rigor:</strong> Bootstrap confidence intervals, paired significance tests (t-tests, McNemar's, Wilcoxon signed-rank), and effect size calculations.</li>
            <li><strong>Multi-Provider Support:</strong> Works with OpenAI, Anthropic Claude, Google Gemini, and vLLM with smart rate limiting (token bucket algorithms).</li>
            <li><strong>Enterprise Integration:</strong> MLflow experiment tracking, Delta Lake versioning, and comprehensive metrics (lexical, semantic, LLM-as-judge).</li>
          </ul>
        </div>
        <div class="project-links" style="margin-top: 1rem; display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <a href="https://github.com/bassrehab/spark-llm-eval" target="_blank" style="color: var(--global-theme-color); text-decoration: none; font-size: 0.875rem; font-weight: 600;">
            <i class="fab fa-github"></i> GitHub Repository
          </a>
          <span style="color: var(--global-text-color-light);">•</span>
          <a href="/blog/2025/building-spark-llm-eval/" style="color: var(--global-theme-color); text-decoration: none; font-size: 0.875rem; font-weight: 600;">
            <i class="fas fa-pen"></i> Blog Post
          </a>
        </div>
      </article>

      <article class="research-project-card">
        <div class="project-period">2025</div>
        <h3 class="project-title">CatchMe - Intelligent Trust Engine</h3>
        <div class="project-status" style="font-size: 0.875rem; color: var(--global-theme-color); font-weight: 600; margin-bottom: 0.75rem;">
          Google Technical Disclosures - Pending: APLS & Cascade Routing
        </div>
        <p class="project-description">
          Industry-agnostic agentic AI system for enterprise-scale trust decisions across Finance, Healthcare, Insurance, Cybersecurity, and Supply Chain. Uses adversarial debate protocols (prosecutor/defense/judge) to filter hallucinations and build audit trails for regulated environments.
        </p>
        <div class="project-highlights">
          <ul>
            <li><strong>APLS (Automated Pattern Learning System):</strong> Self-learning system that observes expensive AI decisions and automatically synthesizes cheaper deterministic rules over time. Achieves 76% cost reduction after 6 months of pattern learning.</li>
            <li><strong>Five-Level Cascade Routing:</strong> Intelligent transaction routing based on cost-benefit analysis. Automatically escalates high-value/high-risk decisions to AI reasoning while routing routine cases through deterministic rules (e.g., $50K wire with 75% confidence → AI escalation with ROI 1,250,000x). Sub-50ms latency for most transactions.</li>
            <li><strong>Multi-Agent Consensus:</strong> Adversarial debate system where agents act as prosecutor, defense, and judge to ensure decision quality and create compliance audit trails for regulated industries.</li>
            <li><strong>Production Impact:</strong> 86% cost reduction vs AI-only approaches ($20.7K vs $150K for 10M monthly transactions), serving Finance (fraud detection), Healthcare (claims processing), Insurance (policy validation), Cybersecurity (anomaly detection), and Supply Chain (verification).</li>
            <li><strong>Recognition:</strong> Winner - Google Cloud PSO Hackathon JAPAC Regionals, Qualified for World Finals. Built on Vertex AI, Gemini 2.x, BigQuery ML, Cloud Run.</li>
          </ul>
        </div>
      </article>
    </div>

  </section>

  <!-- Education Section -->
  <section class="cv-section">
    <div class="section-label">Academic Background</div>
    <h2 class="section-title">Education</h2>
    
    <div class="education-grid">
      <div class="education-card">
        <div class="education-degree">MBA, Business Analytics</div>
        <div class="education-school">
          <a href="https://bits-pilani.ac.in" target="_blank">Birla Institute of Technology and Science, Pilani</a>
        </div>
        <div class="education-period">2021 - 2023 • Pilani, India</div>
        <div class="education-courses">
          <span class="course-tag">Financial Risk Analytics</span>
          <span class="course-tag">Marketing Models</span>
          <span class="course-tag">Strategic Management</span>
          <span class="course-tag">Predictive Analytics</span>
          <span class="course-tag">Operations Management</span>
        </div>
      </div>

      <div class="education-card">
        <div class="education-degree">MTech, Software Systems</div>
        <div class="education-school">
          <a href="https://bits-pilani.ac.in" target="_blank">Birla Institute of Technology and Science, Pilani</a>
        </div>
        <div class="education-period">2017 - 2020 • Pilani, India</div>
        <div class="education-courses">
          <span class="course-tag">Algorithms</span>
          <span class="course-tag">Distributed Systems</span>
          <span class="course-tag">Deep Learning</span>
          <span class="course-tag">NLP</span>
          <span class="course-tag">Machine Learning</span>
          <span class="course-tag">Artificial Intelligence</span>
        </div>
      </div>
    </div>

  </section>

  <!-- Publications Section -->
  <section class="cv-section">
    <div class="section-label">Research & Innovation</div>
    <h2 class="section-title">Publications & Technical Disclosures</h2>
    
    <div class="publications-grid">
      <article class="publication-card">
        <div class="publication-date">November 2025</div>
        <h3 class="publication-title">
          <a href="https://www.tdcommons.org/dpubs_series/8852/" target="_blank">UPIR: Automated Synthesis and Verification of Distributed Systems</a>
        </h3>
        <div class="publication-venue">Google, Technical Disclosure Commons</div>
        <p class="publication-description">
          Framework combining formal verification, program synthesis, and machine learning to automatically generate verified distributed system implementations. Achieves 274x speedup with 60% latency reduction through compositional verification and proof caching.
        </p>
        <div class="project-links" style="margin-top: 0.5rem;">
          <a href="https://github.com/bassrehab/upir" target="_blank" style="color: var(--global-theme-color); text-decoration: none; font-size: 0.875rem;">
            <i class="fab fa-github"></i> GitHub Repository
          </a>
        </div>
      </article>

      <article class="publication-card">
        <div class="publication-date">May 2025</div>
        <h3 class="publication-title">
          <a href="https://services.google.com/fh/files/blogs/etlc_full_paper.pdf" target="_blank">ETLC: A Context-First Approach to Data Processing in the Generative AI Era</a>
        </h3>
        <div class="publication-venue">Google Cloud</div>
        <p class="publication-description">
          A comprehensive whitepaper introducing ETLC (Extract, Transform, Load, Contextualize), adding semantic, relational, operational, environmental, and behavioral context to data pipelines.
        </p>
      </article>

      <article class="publication-card">
        <div class="publication-date">May 2025</div>
        <h3 class="publication-title">
          <a href="https://www.tdcommons.org/dpubs_series/8022/" target="_blank">Field-Theoretic Context System (FTCS)</a>
        </h3>
        <div class="publication-venue">Google, Technical Disclosure Commons</div>
        <p class="publication-description">
          An innovative approach modeling context as interacting fields rather than discrete states, enabling natural context flow and dynamic evolution through partial differential equations.
        </p>
      </article>

      <article class="publication-card">
        <div class="publication-date">January 2025</div>
        <h3 class="publication-title">
          <a href="https://www.tdcommons.org/dpubs_series/7729/" target="_blank">ARTEMIS - Adaptive Multi-agent Debate Framework</a>
        </h3>
        <div class="publication-venue">Google, Technical Disclosure Commons</div>
        <p class="publication-description">
          Technical disclosure on an adaptive framework for multi-agent decision systems using structured debate protocols to enhance enterprise decision-making.
        </p>
      </article>

      <article class="publication-card">
        <div class="publication-date">December 2023</div>
        <h3 class="publication-title">
          <a href="https://www.researchgate.net/publication/376557741_Data_Monetization_Strategy_for_Enterprises" target="_blank">Data Monetization Strategy for Enterprises</a>
        </h3>
        <div class="publication-venue">BITS Pilani</div>
        <p class="publication-description">
          A comprehensive framework for enterprises to transform data into economic value, establishing methodologies now implemented across multiple JAPAC organizations.
        </p>
      </article>

      <article class="publication-card">
        <div class="publication-date">December 2021</div>
        <h3 class="publication-title">
          <a href="https://arxiv.org/abs/2201.01326" target="_blank">OConsent: Open Consent Protocol for Privacy and Consent Management with Blockchain</a>
        </h3>
        <div class="publication-venue">BITS Pilani</div>
        <p class="publication-description">
          A blockchain-based protocol for transparent personal data processing, enhancing user control and compliance with data privacy regulations.
        </p>
      </article>
    </div>

  </section>

  <!-- Skills Section -->
  <section class="cv-section">
    <div class="section-label">Technical Expertise</div>
    <h2 class="section-title">Skills & Technologies</h2>
    
    <div class="skills-section">
      <div class="skill-category">
        <h3 class="skill-category-title">
          <i class="fas fa-brain"></i>
          Technology Leadership & Strategy
        </h3>
        <div class="skill-tags">
          <span class="skill-tag">Enterprise Architecture</span>
          <span class="skill-tag">Technical Vision & Roadmaps</span>
          <span class="skill-tag">Digital Transformation</span>
          <span class="skill-tag">AI & Data Strategy</span>
          <span class="skill-tag">Cloud Architecture</span>
          <span class="skill-tag">C-Suite Advisory</span>
          <span class="skill-tag">Innovation Leadership</span>
          <span class="skill-tag">Strategic Planning</span>
        </div>
      </div>

      <div class="skill-category">
        <h3 class="skill-category-title">
          <i class="fas fa-database"></i>
          Data Engineering & Architecture
        </h3>
        <div class="skill-tags">
          <span class="skill-tag">Petabyte-Scale Data Platforms</span>
          <span class="skill-tag">Data Pipelines</span>
          <span class="skill-tag">Real-Time Processing</span>
          <span class="skill-tag">Data Mesh & Fabric</span>
          <span class="skill-tag">Apache Spark</span>
          <span class="skill-tag">Apache Hadoop</span>
          <span class="skill-tag">Apache HBase</span>
          <span class="skill-tag">Apache Flink</span>
          <span class="skill-tag">Apache Kafka</span>
          <span class="skill-tag">Apache Iceberg</span>
        </div>
      </div>

      <div class="skill-category">
        <h3 class="skill-category-title">
          <i class="fas fa-robot"></i>
          Generative AI & Machine Learning
        </h3>
        <div class="skill-tags">
          <span class="skill-tag">Multi-Agent Systems</span>
          <span class="skill-tag">Large Language Models</span>
          <span class="skill-tag">RAG Architecture</span>
          <span class="skill-tag">Vector Databases</span>
          <span class="skill-tag">PyTorch</span>
          <span class="skill-tag">LangChain</span>
          <span class="skill-tag">LangGraph</span>
          <span class="skill-tag">LlamaIndex</span>
          <span class="skill-tag">Google ADK</span>
          <span class="skill-tag">MCP</span>
          <span class="skill-tag">A2A Protocol</span>
          <span class="skill-tag">MLflow</span>
          <span class="skill-tag">LLMOps</span>
        </div>
      </div>

      <div class="skill-category">
        <h3 class="skill-category-title">
          <i class="fas fa-cloud"></i>
          Cloud Platforms & Infrastructure
        </h3>
        <div class="skill-tags">
          <span class="skill-tag">Google Cloud Platform</span>
          <span class="skill-tag">BigQuery</span>
          <span class="skill-tag">Vertex AI</span>
          <span class="skill-tag">Dataflow</span>
          <span class="skill-tag">Cloud Composer</span>
          <span class="skill-tag">GKE</span>
          <span class="skill-tag">Terraform</span>
          <span class="skill-tag">Kubernetes</span>
        </div>
      </div>

      <div class="skill-category">
        <h3 class="skill-category-title">
          <i class="fas fa-code"></i>
          Programming & Development
        </h3>
        <div class="skill-tags">
          <span class="skill-tag">Python</span>
          <span class="skill-tag">SQL</span>
          <span class="skill-tag">Scala</span>
          <span class="skill-tag">Triton</span>
          <span class="skill-tag">CUDA</span>
          <span class="skill-tag">Algorithm Design</span>
          <span class="skill-tag">Formal Verification</span>
          <span class="skill-tag">Program Synthesis</span>
          <span class="skill-tag">Distributed Systems</span>
        </div>
      </div>
    </div>

  </section>

  <!-- Projects Section -->
  <section class="cv-section">
    <div class="section-label">Open Source & Side Projects</div>
    <h2 class="section-title">Notable Projects</h2>
    
    <div class="projects-grid">
    <article class="project-card">
        <div class="project-period">2025 - Present</div>
        <h3 class="project-title">
            <a href="https://ai-metacognition-toolkit.subhadipmitra.com/" target="_blank">AI Metacognition Toolkit</a>
        </h3>
        <p class="project-description">
            Activation-level detection of sandbagging, deception, and situational awareness in LLMs. Linear probes achieve 90-96% accuracy across Mistral, Gemma, and Qwen models. Includes steering vectors for runtime behavior control.
        </p>
        <div class="project-highlights">
            <ul>
            <li>Sandbagging detection via linear probes with 90-96% accuracy</li>
            <li>Steering vectors reduce sandbagging behavior by 20%</li>
            <li>Bayesian situational awareness detection with KL divergence</li>
            <li>Available on PyPI • 275 tests • 95% code coverage</li>
            </ul>
        </div>
        <div class="project-links" style="margin-top: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="https://ai-metacognition-toolkit.subhadipmitra.com/"
            class="project-link-btn"
            target="_blank"
            style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: var(--global-code-bg-color, #f8f9fa); border: 1px solid var(--global-divider-color, #e5e5e5); border-radius: 8px; text-decoration: none; color: var(--global-text-color, #000); font-size: 0.875rem; font-weight: 600; transition: all 0.3s;">
            <i class="fas fa-book"></i> Documentation
            </a>
            <a href="https://pypi.org/project/ai-metacognition-toolkit/"
            class="project-link-btn"
            target="_blank"
            style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: var(--global-code-bg-color, #f8f9fa); border: 1px solid var(--global-divider-color, #e5e5e5); border-radius: 8px; text-decoration: none; color: var(--global-text-color, #000); font-size: 0.875rem; font-weight: 600; transition: all 0.3s;">
            <i class="fas fa-cube"></i> PyPI Package
            </a>
            <a href="https://github.com/bassrehab/ai-metacognition-toolkit"
            class="project-link-btn"
            target="_blank"
            style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: var(--global-code-bg-color, #f8f9fa); border: 1px solid var(--global-divider-color, #e5e5e5); border-radius: 8px; text-decoration: none; color: var(--global-text-color, #000); font-size: 0.875rem; font-weight: 600; transition: all 0.3s;">
            <i class="fab fa-github"></i> GitHub Repo
            </a>
            <a href="/blog/2025/detecting-ai-sandbagging/"
            class="project-link-btn"
            style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: var(--global-code-bg-color, #f8f9fa); border: 1px solid var(--global-divider-color, #e5e5e5); border-radius: 8px; text-decoration: none; color: var(--global-text-color, #000); font-size: 0.875rem; font-weight: 600; transition: all 0.3s;">
            <i class="fas fa-pen"></i> Blog
            </a>
        </div>
        </article>
      <article class="project-card">
        <div class="project-period">2022 - 2023</div>
        <h3 class="project-title">
          <a href="https://olp-protocol.org" target="_blank">Open Location Proof Protocol</a>
        </h3>
        <p class="project-description">
          A privacy-aware open protocol for non-repudiable location verification in physical or virtual spaces.
        </p>
        <div class="project-highlights">
          <ul>
            <li>Cryptographically secure yet privacy-preserving protocol</li>
            <li>Fully decentralized architecture resistant to tampering</li>
            <li>Published comprehensive specifications for industry adoption</li>
          </ul>
        </div>
      </article>

      <article class="project-card">
        <div class="project-period">2021 - 2022</div>
        <h3 class="project-title">
          <a href="https://oconsent.io" target="_blank">OConsent - Open Consent Protocol</a>
        </h3>
        <p class="project-description">
          An open-sourced transparent, fast, and scalable protocol for managing user consent and privacy on public blockchains.
        </p>
        <div class="project-highlights">
          <ul>
            <li>Blockchain-based solution for transparent consent management</li>
            <li>GDPR-compliant with automated audit capabilities</li>
            <li>Granular control over personal data usage</li>
          </ul>
        </div>
      </article>

      <article class="project-card">
        <div class="project-period">2016 - 2017</div>
        <h3 class="project-title">
          <a href="https://github.com/bassrehab/ISO8583-Simulator" target="_blank">ISO8583 Simulator</a>
        </h3>
        <p class="project-description">
          A high-performance Java-based simulator for ISO 8583 financial messaging, used by banks and payment processors.
        </p>
        <div class="project-highlights">
          <ul>
            <li>Supports multiple ISO 8583 versions and custom formats</li>
            <li>Advanced performance testing with configurable load profiles</li>
            <li>Modular architecture supporting multiple protocols</li>
          </ul>
        </div>
      </article>
    </div>

  </section>

</div>
