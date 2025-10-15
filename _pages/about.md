---
layout: about
title: about
permalink: /
subtitle: 

profile:
  align: right
  image: subhadipmitra-white-bg.png
  image_circular: false

news: false
selected_papers: false
social: false
---

<style>
/* Unique Editorial Homepage - Bold & Asymmetric */

/* Reduce post title size */
.post-title {
    font-size: 2rem !important;
    margin-bottom: 0.5rem !important;
}

.profile img {
    border-radius: 20px!important;
}

.editorial-home {
    --accent: var(--global-theme-color, #b509ac);
    --text: var(--global-text-color, #000);
    --text-light: var(--global-text-color-light, #666);
    --bg: var(--global-bg-color, #fff);
    --card-bg: var(--global-card-bg-color, #fff);
    --border: var(--global-divider-color, #e5e5e5);
    max-width: 1400px;
    margin: 0 auto;
    padding: 0;
}

/* Oversized Hero */
.hero-editorial {
    min-height: 42vh;
    display: flex;
    align-items: flex-start;
    margin-bottom: 6rem;
    position: relative;
}

.hero-content {
    max-width: 800px;
}

.hero-label {
    font-size: 0.875rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--accent);
    font-weight: 700;
    margin-bottom: 1.5rem;
}

.hero-headline {
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 900;
    line-height: 0.95;
    color: var(--text);
    margin-bottom: 2rem;
    letter-spacing: -0.03em;
}

.hero-headline .highlight {
    color: var(--accent);
    display: block;
}

.hero-description {
    font-size: 1.5rem;
    line-height: 1.5;
    color: var(--text-light);
    margin-bottom: 2.5rem;
    max-width: 600px;
}

/* Hero Pills */
.hero-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    max-width: 700px;
}

.pill {
    display: inline-block;
    padding: 0.65rem 1.25rem;
    background: var(--global-code-bg-color);
    border: 1px solid var(--border);
    border-radius: 50px;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text);
    white-space: nowrap;
    transition: all 0.3s ease;
}

.pill:hover {
    background: var(--accent);
    color: white;
    border-color: var(--accent);
    transform: translateY(-2px);
}

/* Bento Grid Layout */
.bento-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 1.5rem;
    margin: 6rem 0;
}

.bento-item {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 24px;
    padding: 2.5rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.bento-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, var(--accent) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.4s;
    pointer-events: none;
}

.bento-item:hover::before {
    opacity: 0.05;
}

.bento-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
}

/* Bento Size Variants */
.bento-large {
    grid-column: span 8;
}

.bento-medium {
    grid-column: span 6;
}

.bento-small {
    grid-column: span 4;
}

.bento-tall {
    grid-row: span 2;
}

.bento-title {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--text);
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
}

.bento-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--accent);
    font-weight: 700;
    margin-bottom: 1rem;
}

.bento-description {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-light);
    margin-bottom: 1.5rem;
}

.bento-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.bento-list li {
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--border);
    color: var(--text-light);
    font-size: 0.95rem;
}

.bento-list li i {
    width: 20px;
    margin-right: 8px;
    color: var(--accent);
}

.bento-list li:last-child {
    border-bottom: none;
}

.bento-list strong {
    color: var(--text);
    font-weight: 600;
}

/* Stats Strip */
.stats-strip {
    display: flex;
    justify-content: space-between;
    padding: 4rem 0;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    margin: 6rem 0;
}

.stat-block {
    text-align: center;
}

.stat-value {
    font-size: 3.5rem;
    font-weight: 900;
    color: var(--accent);
    line-height: 1;
    margin-bottom: 0.5rem;
    letter-spacing: -0.02em;
}

.stat-label {
    font-size: 0.875rem;
    color: var(--text-light);
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

/* Featured Project */
.featured-project {
    background: var(--card-bg);
    border: 2px solid var(--accent);
    border-radius: 24px;
    padding: 3rem;
    margin: 4rem 0;
}

.featured-project h2 {
    font-size: 2rem;
    font-weight: 900;
    margin: 1rem 0;
    color: var(--text);
    letter-spacing: -0.02em;
}

.featured-project p {
    font-size: 1.125rem;
    color: var(--text-light);
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.featured-links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

/* Innovation Showcase - Magazine Style */
.innovation-showcase {
    margin: 8rem 0;
}

.showcase-header {
    margin-bottom: 4rem;
}

.showcase-label {
    font-size: 0.875rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--accent);
    font-weight: 700;
    margin-bottom: 1rem;
}

.showcase-label i {
    margin-right: 0.5rem;
}

.showcase-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 900;
    line-height: 1.1;
    color: var(--text);
    letter-spacing: -0.02em;
}

.innovation-grid {
    display: grid;
    gap: 2rem;
}

.innovation-feature {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    padding: 4rem 0;
    border-bottom: 1px solid var(--border);
}

.innovation-feature:last-child {
    border-bottom: none;
}

.innovation-feature:nth-child(even) {
    direction: rtl;
}

.innovation-feature:nth-child(even) > * {
    direction: ltr;
}

.innovation-visual {
    aspect-ratio: 16/10;
    background: linear-gradient(135deg, var(--accent), #764ba2);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    font-weight: 900;
    color: white;
    opacity: 0.9;
}

.innovation-visual i {
    font-size: 5rem;
}

.innovation-content h3 {
    font-size: 2rem;
    font-weight: 800;
    color: var(--text);
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
}

.innovation-year {
    font-size: 0.875rem;
    color: var(--accent);
    font-weight: 700;
    margin-bottom: 1rem;
}

.innovation-content p {
    font-size: 1.125rem;
    line-height: 1.6;
    color: var(--text-light);
    margin-bottom: 1.5rem;
}

.innovation-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 700;
    color: var(--text);
    text-decoration: none;
    font-size: 1rem;
    transition: gap 0.3s;
}

.innovation-link i {
    transition: transform 0.3s;
}

.innovation-link:hover {
    gap: 1rem;
    color: var(--accent);
}

.innovation-link:hover i {
    transform: translateX(4px);
}

/* Research Section - Split Design */
.research-section {
    margin: 8rem 0;
}

.research-header {
    margin-bottom: 3rem;
}

.research-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

.research-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 3rem;
    position: relative;
    transition: all 0.4s;
}

.research-card::before {
    content: attr(data-number);
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-size: 6rem;
    font-weight: 900;
    color: var(--accent);
    opacity: 0.1;
    line-height: 1;
}

.research-card:hover {
    transform: translateX(8px);
    border-color: var(--accent);
}

.research-card h3 {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--text);
    margin-bottom: 1rem;
}

.research-card p {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-light);
}

/* Final CTA - Bold */
.cta-bold {
    margin: 8rem 0 4rem 0;
    padding: 6rem 4rem;
    background: var(--global-code-bg-color);
    color: var(--text);
    border-radius: 32px;
    text-align: center;
}

.cta-bold h2 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 900;
    margin-bottom: 2rem;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--text);
}

.cta-bold p {
    font-size: 1.25rem;
    color: var(--text-light);
    margin-bottom: 3rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.cta-buttons {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
}

.btn-primary {
    padding: 1rem 2.5rem;
    background: var(--accent);
    color: white;
    text-decoration: none;
    font-weight: 700;
    border-radius: 12px;
    font-size: 1.125rem;
    transition: all 0.3s;
    display: inline-block;
}

.btn-primary:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
    color: white;
}

.btn-secondary {
    padding: 1rem 2.5rem;
    background: transparent;
    color: var(--text);
    border: 2px solid var(--accent);
    text-decoration: none;
    font-weight: 700;
    border-radius: 12px;
    font-size: 1.125rem;
    transition: all 0.3s;
    display: inline-block;
}

.btn-secondary:hover {
    background: var(--accent);
    color: white;
}

/* Responsive */
@media (max-width: 1024px) {
    .bento-large,
    .bento-medium,
    .bento-small {
        grid-column: span 12;
    }

    .innovation-feature,
    .research-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .innovation-feature:nth-child(even) {
        direction: ltr;
    }

    .stats-strip {
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: center;
    }

    .stat-block {
        min-width: 150px;
    }
}

@media (max-width: 768px) {
    /* Fix profile image overlap - push hero content down */
    .profile {
        float: none !important;
        text-align: center !important;
        margin-bottom: 2rem !important;
    }
    
    .profile img {
        max-width: 200px !important;
        margin: 0 auto 2rem auto !important;
    }
    
    .hero-editorial {
        min-height: auto;
        padding: 2rem 0 4rem 0;
        margin-top: 0;
        clear: both; /* Only clear on mobile */
    }

    .hero-headline {
        font-size: 2.5rem;
    }

    .hero-description {
        font-size: 1.125rem;
    }

    .hero-pills {
        gap: 0.5rem;
    }

    .pill {
        padding: 0.5rem 1rem;
        font-size: 0.8rem;
    }

    .showcase-title {
        font-size: 2rem;
    }

    .innovation-visual {
        aspect-ratio: 1;
        font-size: 2rem;
    }

    .innovation-visual i {
        font-size: 3rem;
    }

    .stat-value {
        font-size: 2.5rem;
    }

    .cta-bold {
        padding: 3rem 2rem;
    }

    .cta-bold h2 {
        font-size: 2rem;
    }

    .featured-project {
        padding: 2rem;
    }

    .featured-project h2 {
        font-size: 1.5rem;
    }
}

/* Extra small screens */
@media (max-width: 576px) {
    .hero-label {
        font-size: 0.75rem;
    }
    
    .hero-headline {
        font-size: 2rem;
        line-height: 1;
        margin-bottom: 1.5rem;
    }
    
    .hero-description {
        font-size: 1rem;
        margin-bottom: 2rem;
    }
    
    .pill {
        padding: 0.4rem 0.85rem;
        font-size: 0.75rem;
    }
}
</style>

<div class="editorial-home">
    <!-- Oversized Hero -->
    <section class="hero-editorial">
        <div class="hero-content">
            <div class="hero-label">Technical Leader • Inventor • Researcher</div>
            <h1 class="hero-headline">
                Architecting the
                <span class="highlight">Future of Data & Applied AI</span>
            </h1>
            <p class="hero-description">
                Leading Google Cloud's Data & AI practice across Southeast Asia. Building teams, pioneering frameworks, delivering transformation at petabyte-scale.
            </p>
            <div class="hero-pills">
                <span class="pill">Applied AI</span>
                <span class="pill">Petabyte-Scale Systems</span>
                <span class="pill">Multi-Agent Frameworks</span>
                <span class="pill">Research to Production</span>
                <span class="pill">Open Source</span>
                <span class="pill">Cloud Data Platforms</span>
                <span class="pill">Southeast Asia</span>
            </div>
        </div>
    </section>

    <!-- Bento Grid -->
    <div class="bento-grid">
        <!-- Current Role - Large -->
        <div class="bento-item bento-large">
            <div class="bento-label">Google Cloud · 2021-Present</div>
            <h2 class="bento-title">Data & AI Manager | Site Lead Southeast Asia</h2>
            <p class="bento-description">
                Lead Data Analytics delivery and cross-practice operations across 7 countries in Southeast Asia. Built 0-to-1 organization establishing the region's premier Data & AI practice. Pioneered technical frameworks (FTCS, ETLC, ARTEMIS) and production-ready AI agent systems for autonomous data engineering. Led critical interventions safeguarding $XXM+ revenue while scaling enterprise Data and AI transformation across multiple sectors.
            </p>
        </div>

        <!-- Quick Links - Small -->
        <div class="bento-item bento-small">
            <div class="bento-label">Connect</div>
            <ul class="bento-list">
                <li><a href="/now/" style="text-decoration: none; color: inherit;"><i class="fas fa-clock"></i> What I'm Doing Now</a></li>
                <li><a href="mailto:contact@subhadipmitra.com" style="text-decoration: none; color: inherit;"><i class="fas fa-envelope"></i> Email</a></li>
                <li><a href="https://calendly.com/subhadipmitra" style="text-decoration: none; color: inherit;"><i class="fas fa-calendar-alt"></i> Schedule</a></li>
                <li><a href="https://linkedin.com/in/subhadip-mitra" style="text-decoration: none; color: inherit;"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
                <li><a href="https://github.com/subhadipmitra" style="text-decoration: none; color: inherit;"><i class="fab fa-github"></i> GitHub</a></li>
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
    </div>

    <!-- Stats Strip -->
    <div class="stats-strip">
        <div class="stat-block">
            <div class="stat-value">7</div>
            <div class="stat-label">Countries Led</div>
        </div>
        <div class="stat-block">
            <div class="stat-value">25</div>
            <div class="stat-label">Enterprise Clients</div>
        </div>
        <div class="stat-block">
            <div class="stat-value">8+</div>
            <div class="stat-label">Industry Frameworks</div>
        </div>
        <div class="stat-block">
            <div class="stat-value">15+</div>
            <div class="stat-label">Years Experience</div>
        </div>
    </div>

    <!-- Featured Open Source Project -->
    <div class="featured-project">
        <div class="showcase-label"><i class="fas fa-star"></i> Featured Open Source</div>
        <h2>AI Metacognition Toolkit</h2>
        <p>
            Production-ready framework for systematic reasoning in AI systems - enabling transparent, metacognitive decision-making at scale
        </p>
        <div class="featured-links">
            <a href="https://ai-metacognition-toolkit.subhadipmitra.com/" class="innovation-link" target="_blank"><i class="fas fa-book"></i> Documentation</a>
            <a href="https://pypi.org/project/ai-metacognition-toolkit/" class="innovation-link" target="_blank"><i class="fas fa-cube"></i> PyPI Package</a>
            <a href="https://github.com/bassrehab/ai-metacognition-toolkit" class="innovation-link" target="_blank"><i class="fab fa-github"></i> GitHub Repo</a>
        </div>
    </div>

    <!-- Innovation Showcase -->
    <section class="innovation-showcase">
        <div class="showcase-header">
            <div class="showcase-label">Innovations & Research</div>
            <h2 class="showcase-title">Frameworks That Move the Industry</h2>
        </div>

        <div class="innovation-grid">
            <article class="innovation-feature">
                <div class="innovation-visual">FTCS</div>
                <div class="innovation-content">
                    <div class="innovation-year">2025</div>
                    <h3>Field-Theoretic Context System</h3>
                    <p>
                        Novel approach modeling context as interacting fields rather than discrete states, enabling natural context flow and dynamic evolution in AI systems.
                    </p>
                    <a href="https://www.tdcommons.org/dpubs_series/8022/" class="innovation-link" target="_blank">
                        Read Technical Disclosure <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </article>

            <article class="innovation-feature">
                <div class="innovation-visual">ETLC</div>
                <div class="innovation-content">
                    <div class="innovation-year">2025</div>
                    <h3>Context-First Data Processing</h3>
                    <p>
                        Framework reimagining data integration for the GenAI era by adding semantic, relational, operational, and behavioral context to pipelines.
                    </p>
                    <a href="https://services.google.com/fh/files/blogs/etlc_full_paper.pdf" class="innovation-link" target="_blank">
                        Read Whitepaper <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </article>

            <article class="innovation-feature">
                <div class="innovation-visual"><i class="fas fa-robot"></i></div>
                <div class="innovation-content">
                    <div class="innovation-year">2025</div>
                    <h3>ARTEMIS Multi-Agent Framework</h3>
                    <p>
                        Adaptive framework for multi-agent decision systems using structured debate protocols to enhance enterprise decision-making.
                    </p>
                    <a href="https://www.tdcommons.org/dpubs_series/7729/" class="innovation-link" target="_blank">
                        Read Technical Disclosure <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </article>

            <article class="innovation-feature">
                <div class="innovation-visual"><i class="fas fa-shield-alt"></i></div>
                <div class="innovation-content">
                    <div class="innovation-year">2021-2022</div>
                    <h3>Privacy & Consent Protocols</h3>
                    <p>
                        Open-source frameworks (OLP, OConsent) for secure data sharing and transparent consent management on blockchain, GDPR-compliant.
                    </p>
                    <a href="https://oconsent.io" class="innovation-link" target="_blank">
                        Explore Projects <i class="fas fa-arrow-right"></i>
                    </a>
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
                <h3>Distributed Systems & Infrastructure</h3>
                <p>
                    Researching efficient architectures for AI systems at scale - from LLM serving and inference optimization to graph-based modeling of resource interactions across distributed cloud infrastructure.
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
            <a href="https://calendly.com/subhadipmitra" class="btn-secondary" target="_blank">Schedule a Call</a>
        </div>
    </section>
</div>