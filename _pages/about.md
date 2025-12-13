---
layout: about
title: about
permalink: /
subtitle:

profile:
  align: right
  image: subhadip-mitra-portrait-home-cl.png
  image_circular: false

news: false
selected_papers: false
social: false
---

<div class="editorial-home">
    <!-- Oversized Hero -->
    <section class="hero-editorial">
        <div class="hero-content">
            <div class="hero-label">Engineering Leader & AI Systems Architect</div>
            <h1 class="hero-headline">
                Architecting the
                <span class="highlight">Future of Data & Applied AI</span>
            </h1>
            <p class="hero-description">
                Leading Google Cloud's Data & Analytics practice across Southeast Asia. Building teams, pioneering frameworks, delivering transformation at petabyte-scale.
            </p>
            <div class="hero-pills">
                <span class="pill">Applied AI</span>
                <span class="pill">Inference Optimization</span>
                <span class="pill">Petabyte-Scale Systems</span>
                <span class="pill">Multi-Agent Frameworks</span>
                <span class="pill">Research to Production</span>
                <span class="pill">Open Source</span>
                <span class="pill">Cloud</span>
            </div>
        </div>
    </section>

    <!-- Bento Grid -->
    <div class="bento-grid">
        <!-- Current Role - Large -->
        <div class="bento-item bento-large">
            <div class="bento-label">Google Cloud · 2021-Present</div>
            <h2 class="bento-title">Data & Analytics Manager | Site Lead Southeast Asia</h2>
            <p class="bento-description">
                Lead Data Analytics delivery and cross-practice operations across 7 countries in Southeast Asia. Member of <a href="https://cloud.google.com/consulting/innovation-and-transformation" target="_blank"><strong>delta</strong></a> - Google Cloud's innovation and transformation team architecting enterprise AI solutions at scale. Built 0-to-1 organization establishing the region's premier Data & Analytics practice. Pioneered technical frameworks (<a href="https://www.tdcommons.org/cgi/viewcontent.cgi?article=9891&context=dpubs_series" target="_blank">FTCS</a>, <a href="https://services.google.com/fh/files/blogs/etlc_full_paper.pdf" target="_blank">ETLC</a>, <a href="https://www.tdcommons.org/dpubs_series/7729/" target="_blank">ARTEMIS</a>, <a href="https://www.tdcommons.org/dpubs_series/8852/" target="_blank">UPIR</a>) and production-ready AI agent systems for autonomous data engineering. Led critical interventions safeguarding revenue while scaling enterprise Data and AI transformation across multiple sectors.
            </p>
        </div>

        <!-- Quick Links - Small -->
        <div class="bento-item bento-small">
            <div class="bento-label">Connect</div>
            <ul class="bento-list">
                <li><a href="/now/" style="text-decoration: none; color: inherit;"><i class="fas fa-clock"></i> What I'm Doing Now</a></li>
                <li><a href="mailto:contact@subhadipmitra.com" style="text-decoration: none; color: inherit;"><i class="fas fa-envelope"></i> Email</a></li>
                <li><a href="https://calendly.com/contact-x9nm/30min" style="text-decoration: none; color: inherit;"><i class="fas fa-calendar-alt"></i> Schedule</a></li>
                <li><a href="https://linkedin.com/in/subhadip-mitra" style="text-decoration: none; color: inherit;"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
                <li><a href="https://github.com/bassrehab" style="text-decoration: none; color: inherit;"><i class="fab fa-github"></i> GitHub</a></li>
            </ul>
        </div>




        <!-- Expertise - Medium -->
        <div class="bento-item bento-medium">
            <div class="bento-label">Core Expertise</div>
            <h3 class="bento-title">What I Do Best</h3>
            <ul class="bento-list">
                <li><strong>Technical Leadership</strong> - Building high-performing engineering teams</li>
                <li><strong>Architecture</strong> - Petabyte-scale data platforms & ML systems</li>
                <li><strong>Innovation</strong> - Research that becomes competitive advantage</li>
                <li><strong>Transformation</strong> - Enterprise AI/data strategy & execution</li>
            </ul>
        </div>

        <!-- Education - Medium -->
        <div class="bento-item bento-medium">
            <div class="bento-label">Education</div>
            <h3 class="bento-title">Academic Background</h3>
            <ul class="bento-list">
                <li><strong>MBA, Business Analytics</strong> - <a href="https://www.bits-pilani.ac.in/">BITS Pilani</a></li>
                <li><strong>MTech, Software Systems</strong> - <a href="https://www.bits-pilani.ac.in/">BITS Pilani</a></li>
            </ul>
            <br>
            <div class="bento-label" style="margin-top: 1rem;">Affiliations</div>
            <p class="bento-description"><a href="https://www.iitm.ac.in/">IIT Madras</a> • <a href="https://www.ieee.org/">IEEE</a> • <a href="https://www.acm.org/">ACM</a> • <a href="https://www.scs.org.sg/">SCS</a> • <a href="https://rin.org.uk/">RIN</a></p>
        </div>

        <!-- Recent Writing - Full Width -->
        <div class="bento-item bento-blog" style="grid-column: span 12;">
            <div class="bento-label">Latest Writing</div>
            <h3 class="bento-title">Recent Posts</h3>
            <div class="posts-list">
                {% for post in site.posts limit:3 %}
                <article class="post-entry">
                    <time class="post-meta" datetime="{{ post.date }}">{{ post.date | date: "%b %d, %Y" }}</time>
                    <h4 class="post-title"><a href="{{ post.url }}">{{ post.title }}</a></h4>
                    <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 15 }}</p>
                </article>
                {% endfor %}
            </div>
            <a href="/blog" class="view-all">View all posts <i class="fas fa-arrow-right"></i></a>
        </div>
    </div>



    <!-- Stats Strip -->
    <div class="stats-strip">
        <div class="stat-block">
            <a href="/publications/" style="text-decoration: none; color: inherit;">
                {% assign total_pubs = site.bibliography.size | default: 14 %}
                <div class="stat-value">{{ total_pubs }}</div>
                <div class="stat-label">Published Works</div>
            </a>
        </div>
        <div class="stat-block">
            <a href="https://github.com/bassrehab?tab=repositories" target="_blank" style="text-decoration: none; color: inherit;">
                {% if site.data.github_stats.stats.repos %}
                    <div class="stat-value" id="github-repo-count">{{ site.data.github_stats.stats.repos }}</div>
                {% else %}
                    {% assign repo_count = site.data.repositories.github_repos.size | default: 8 %}
                    <div class="stat-value" id="github-repo-count">{{ repo_count }}</div>
                {% endif %}
                <div class="stat-label">Open Source Repos</div>
            </a>
        </div>
        <div class="stat-block">
            <a href="https://www.tdcommons.org/do/search/?q=author_lname%3A%22Mitra%22%20author_fname%3A%22Subhadip%22" target="_blank" style="text-decoration: none; color: inherit;">
                <div class="stat-value">5</div>
                <div class="stat-label">Inventions / Technical Disclosures</div>
            </a>
        </div>
        <div class="stat-block">
            <a href="https://pypi.org/user/bassrehab/" target="_blank" style="text-decoration: none; color: inherit;">
                <div class="stat-value">3</div>
                <div class="stat-label">PyPI Packages</div>
            </a>
        </div>
    </div>

    <!-- Subtle credibility line -->
    <div style="text-align: center; margin-top: 2rem; font-size: 0.95rem; color: var(--global-text-color-light, #666);">
        Recommended by leaders at Databricks, Google, and Fortune 500 clients
        <a href="https://linkedin.com/in/subhadip-mitra" target="_blank" style="color: var(--global-theme-color, #b509ac); text-decoration: none; margin-left: 0.5rem;">
            <i class="fab fa-linkedin"></i>
        </a>
    </div>

    <!-- Featured Open Source Project -->
    <div class="featured-project">
        <div class="showcase-label"><i class="fas fa-star"></i> Featured Open Source</div>
        <h2>Speculative Decoding</h2>
        <p>
            LLM inference acceleration from first principles - speculative decoding, tree speculation, KV-cache compression, and diffusion efficiency with memory-bandwidth analysis
        </p>
        <div class="featured-links">
            <a href="https://github.com/bassrehab/speculative-decoding" class="innovation-link" target="_blank"><i class="fab fa-github"></i> speculative-decoding</a>
            <span style="margin: 0 0.5rem;">•</span>
            <a href="https://github.com/bassrehab/triton-kernels" class="innovation-link" target="_blank"><i class="fab fa-github"></i> triton-kernels</a>
        </div>
    </div>

    <!-- Innovation Showcase -->
    <section class="innovation-showcase">
        <div class="showcase-header">
            <div class="showcase-label">Innovations & Research</div>
            <h2 class="showcase-title">Technical Innovations</h2>
        </div>

        <div class="innovation-timeline">
            <article class="timeline-item timeline-left">
                <div class="timeline-content">
                    <div class="innovation-year">2025</div>
                    <div class="timeline-badge">UPIR</div>
                    <h3>Automated Distributed Systems Synthesis</h3>
                    <p>
                        Revolutionary approach combining formal verification, program synthesis, and reinforcement learning to automatically generate verified implementations from specifications. Achieves 274x speedup for complex systems with 60% latency reduction.
                    </p>
                    <div style="margin-top: 0.5rem;">
                        <a href="https://www.tdcommons.org/dpubs_series/8852/" class="innovation-link" target="_blank">
                            Read Technical Disclosure <i class="fas fa-arrow-right"></i>
                        </a>
                        <span style="margin: 0 0.5rem;">•</span>
                        <a href="https://github.com/bassrehab/upir" class="innovation-link" target="_blank">
                            GitHub Repo <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </article>

            <article class="timeline-item timeline-right">
                <div class="timeline-content">
                    <div class="innovation-year">2025</div>
                    <div class="timeline-badge">FTCS</div>
                    <h3>Field-Theoretic Context System</h3>
                    <p>
                        Novel approach modeling context as interacting fields rather than discrete states, enabling natural context flow and dynamic evolution in AI systems.
                    </p>
                    <a href="https://www.tdcommons.org/dpubs_series/8022/" class="innovation-link" target="_blank">
                        Read Technical Disclosure <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </article>

            <article class="timeline-item timeline-left">
                <div class="timeline-content">
                    <div class="innovation-year">2024</div>
                    <div class="timeline-badge">ETLC</div>
                    <h3>Context-First Data Processing</h3>
                    <p>
                        Framework reimagining data integration for the GenAI era by adding semantic, relational, operational, and behavioral context to pipelines.
                    </p>
                    <a href="https://services.google.com/fh/files/blogs/etlc_full_paper.pdf" class="innovation-link" target="_blank">
                        Read Whitepaper <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </article>

            <article class="timeline-item timeline-right">
                <div class="timeline-content">
                    <div class="innovation-year">2024</div>
                    <div class="timeline-badge"><i class="fas fa-robot"></i></div>
                    <h3>ARTEMIS Multi-Agent Framework</h3>
                    <p>
                        Adaptive framework for multi-agent decision systems using structured debate protocols to enhance enterprise decision-making.
                    </p>
                    <a href="https://www.tdcommons.org/dpubs_series/7729/" class="innovation-link" target="_blank">
                        Read Technical Disclosure <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </article>

            <article class="timeline-item timeline-left">
                <div class="timeline-content">
                    <div class="innovation-year">2025</div>
                    <div class="timeline-badge"><i class="fas fa-bolt"></i></div>
                    <h3>LLM Inference Efficiency Research</h3>
                    <p>
                        Reference implementations of acceleration techniques including speculative decoding, tree speculation, EAGLE, Medusa, KV-cache compression, and custom Triton kernels. Achieves 8.1x speedup with 88% peak bandwidth utilization on A100 GPUs.
                    </p>
                    <div style="margin-top: 0.5rem;">
                        <a href="https://github.com/bassrehab/speculative-decoding" class="innovation-link" target="_blank">
                            speculative-decoding <i class="fas fa-arrow-right"></i>
                        </a>
                        <span style="margin: 0 0.5rem;">•</span>
                        <a href="https://github.com/bassrehab/triton-kernels" class="innovation-link" target="_blank">
                            triton-kernels <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </article>

            <article class="timeline-item timeline-right">
                <div class="timeline-content">
                    <div class="innovation-year">2025</div>
                    <div class="timeline-badge"><i class="fas fa-shield-alt"></i></div>
                    <h3>CatchMe - Intelligent Trust Engine</h3>
                    <p>
                        Industry-agnostic agentic AI system for enterprise-scale trust decisions across Finance, Healthcare, Insurance, Cybersecurity, and Supply Chain. Features APLS (self-learning pattern synthesis) and five-level cascade routing, achieving 86% cost reduction with sub-50ms latency. Winner - Google Cloud PSO Hackathon JAPAC Regionals, qualified for World Finals.
                    </p>
                    <div style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--global-theme-color);">
                        <strong>Google Technical Disclosures - Pending: APLS & Cascade Routing</strong>
                    </div>
                </div>
            </article>

            <article class="timeline-item timeline-left">
                <div class="timeline-content">
                    <div class="innovation-year">2021-2025</div>
                    <div class="timeline-badge"><i class="fas fa-shield-alt"></i></div>
                    <h3>Privacy & Consent Protocols</h3>
                    <p>
                        Open-source frameworks for secure data sharing and consent management. OLP & OConsent (2021-2022) focused on blockchain-based GDPR compliance. LLMConsent (2025) extends this to AI training data, agent permissions, and user sovereignty.
                    </p>
                    <div style="margin-top: 0.5rem;">
                        <a href="https://oconsent.io" class="innovation-link" target="_blank">
                            OConsent Project <i class="fas fa-arrow-right"></i>
                        </a>
                        <span style="margin: 0 0.5rem;">•</span>
                        <a href="blog/2025/building-consent-layer-for-ai/" class="innovation-link">
                            LLMConsent RFC <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </article>
        </div>
    </section>

    <!-- Research Interests -->
    <section class="research-section">
        <div class="research-header">
            <div class="showcase-label">Current Research</div>
            <h2 class="showcase-title">What I'm Exploring Now</h2>
        </div>

        <div class="research-grid">
            <article class="research-card" data-number="01">
                <h3>Contextual Representation for AI</h3>
                <p>
                    Advancing field-theoretic approaches to context processing in AI systems, focusing on efficient relationship modeling and dynamic evolution.
                </p>
            </article>

            <article class="research-card" data-number="02">
                <h3>Multi-Agent Enterprise Systems</h3>
                <p>
                    Building practical frameworks for coordinated AI agents solving complex business problems at scale with emphasis on reliability and governance.
                </p>
            </article>

            <article class="research-card" data-number="03">
                <h3>Computational Efficiency for Generative AI</h3>
                <p>
                    Exploring inference acceleration techniques for LLMs and diffusion models - speculative decoding, KV-cache optimization, kernel fusion, and hardware-aware algorithm design.
                </p>
            </article>


            <article class="research-card" data-number="04">
                <h3>Orbital Edge Intelligence Systems</h3>
                <p>
                    Advancing autonomous processing architectures for LEO satellite constellations - focusing on on-orbit analytics, inter-satellite task coordination, and distributed reinforcement learning for real-time geospatial intelligence without ground latency.
                </p>
            </article>
        </div>
    </section>

    <!-- Bold CTA -->
    <section class="cta-bold">
        <h2>Let's Build Something Extraordinary</h2>
        <p>
            Looking for technical leadership, collaboration opportunities, or just want to discuss the future of AI? I'm always open to meaningful conversations.
        </p>
        <div class="cta-buttons">
            <a href="mailto:contact@subhadipmitra.com" class="btn-primary">Get in Touch</a>
            <a href="https://calendly.com/contact-x9nm/30min" class="btn-secondary" target="_blank">Schedule a Call</a>
        </div>
    </section>

</div>

<style>
/* Innovation Timeline - Magazine Editorial Style */
.innovation-timeline {
    position: relative;
    max-width: 1200px;
    margin: 3rem auto 0;
    padding: 2rem 0;
}

/* Central vertical line */
.innovation-timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom,
        var(--global-theme-color) 0%,
        var(--global-divider-color) 50%,
        var(--global-theme-color) 100%);
    transform: translateX(-50%);
}

/* Timeline items */
.timeline-item {
    position: relative;
    margin-bottom: 3rem;
    width: 100%;
}

/* Left-aligned items */
.timeline-left {
    padding-right: 52%;
    text-align: right;
}

.timeline-left .timeline-content {
    padding-right: 2.5rem;
}

/* Right-aligned items */
.timeline-right {
    padding-left: 52%;
    text-align: left;
}

.timeline-right .timeline-content {
    padding-left: 2.5rem;
}

/* Timeline badges (dots on the central line) */
.timeline-badge {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 3.5rem;
    height: 3.5rem;
    background: var(--global-bg-color);
    border: 3px solid var(--global-theme-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.75rem;
    color: var(--global-theme-color);
    z-index: 2;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Timeline content cards */
.timeline-content {
    background: var(--global-card-bg-color, var(--global-bg-color));
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    padding: 1.5rem;
    transition: all 0.3s ease;
}

.timeline-content:hover {
    border-color: var(--global-theme-color);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.timeline-content h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0.5rem 0 0.75rem;
    color: var(--global-text-color);
}

.timeline-content p {
    margin: 0;
    color: var(--global-text-color-light);
    line-height: 1.6;
}

/* Mobile responsive - stack vertically */
@media (max-width: 768px) {
    .innovation-timeline::before {
        left: 1.75rem;
    }

    .timeline-left,
    .timeline-right {
        padding-left: 4.5rem;
        padding-right: 0;
        text-align: left;
    }

    .timeline-left .timeline-content,
    .timeline-right .timeline-content {
        padding: 1.5rem;
    }

    .timeline-badge {
        left: 1.75rem;
        width: 2.5rem;
        height: 2.5rem;
        font-size: 0.65rem;
    }
}
</style>

<script>
// Load GitHub data from static JSON file (generated at build time with token)
async function loadGitHubDataFromStatic() {
    try {
        const response = await fetch('/assets/data/github-data.json');

        if (response.ok) {
            const data = await response.json();

            // Update repo count if element exists
            const repoCountElement = document.getElementById('github-repo-count');
            if (repoCountElement && data.stats && data.stats.repos) {
                repoCountElement.textContent = data.stats.repos;
            }
        }
    } catch (error) {
        console.log('Using fallback repo count from Liquid template');
        // Fallback to Liquid-rendered count if fetch fails
    }
}

// Load data when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadGitHubDataFromStatic);
} else {
    loadGitHubDataFromStatic();
}
</script>
