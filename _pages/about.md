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
            <div class="hero-label">Technical Leader • Inventor • Researcher</div>
            <h1 class="hero-headline">
                Architecting the
                <span class="highlight">Future of Data & Applied AI</span>
            </h1>
            <p class="hero-description">
                Leading Google Cloud's Data & Analytics practice across Southeast Asia. Building teams, pioneering frameworks, delivering transformation at petabyte-scale.
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
            <h2 class="bento-title">Data & Analytics Manager | Site Lead Southeast Asia</h2>
            <p class="bento-description">
                Lead Data Analytics delivery and cross-practice operations across 7 countries in Southeast Asia. Member of <a href="https://cloud.google.com/consulting/innovation-and-transformation" target="_blank"><strong>delta</strong></a> - Google Cloud's elite innovation and transformation team architecting enterprise AI solutions at scale. Built 0-to-1 organization establishing the region's premier Data & Analytics practice. Pioneered technical frameworks (FTCS, ETLC, ARTEMIS, UPIR) and production-ready AI agent systems for autonomous data engineering. Led critical interventions safeguarding $XXM+ revenue while scaling enterprise Data and AI transformation across multiple sectors.
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
            <div class="stat-value">7</div>
            <div class="stat-label">Countries Led</div>
        </div>
        <div class="stat-block">
            <div class="stat-value">25</div>
            <div class="stat-label">Enterprise Clients</div>
        </div>
        <div class="stat-block">
            <div class="stat-value">9+</div>
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
                <div class="innovation-visual">UPIR</div>
                <div class="innovation-content">
                    <div class="innovation-year">2025</div>
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
                    <div class="innovation-year">2021-2025</div>
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
            <a href="https://calendly.com/contact-x9nm/30min" class="btn-secondary" target="_blank">Schedule a Call</a>
        </div>
    </section>

</div>
