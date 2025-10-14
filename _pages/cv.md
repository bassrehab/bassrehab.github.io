---
layout: page
permalink: /cv/
title: cv
description: 
nav: true
nav_order: 5
---

<style>
/* Modern CV Design - Light/Dark Mode Compatible */

.cv-container * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Use al-folio CSS variables for light/dark mode compatibility */
.cv-container {
    --cv-accent-color: var(--global-theme-color, #b509ac);
    --cv-accent-gradient-start: var(--global-theme-color, #b509ac);
    --cv-accent-gradient-end: #764ba2;
    --cv-bg-color: var(--global-bg-color, #ffffff);
    --cv-card-bg-color: var(--global-card-bg-color, #ffffff);
    --cv-text-color: var(--global-text-color, #2d3748);
    --cv-text-color-light: var(--global-text-color-light, #718096);
    --cv-divider-color: var(--global-divider-color, #e2e8f0);
    --cv-hover-color: var(--global-hover-color, #f7fafc);
    --cv-code-bg-color: var(--global-code-bg-color, #f7fafc);
}

.cv-container {
    max-width: 1100px;
    margin: 0 auto;
}

/* Hero Section */
.cv-hero {
    background: linear-gradient(135deg, var(--cv-accent-gradient-start) 0%, var(--cv-accent-gradient-end) 100%);
    color: white;
    padding: 3rem 2.5rem;
    border-radius: 10px;
    margin-bottom: 3rem;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.cv-hero h1 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
    color: #fff;
}

.cv-hero .tagline {
    font-size: 1.25rem;
    opacity: 0.95;
    margin-bottom: 2rem;
    font-weight: 300;
    color: #fff;    
}

.cv-hero .contact-info {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    font-size: 0.95rem;
}

.cv-hero .contact-info a {
    color: white;
    text-decoration: none;
    opacity: 0.9;
    transition: opacity 0.3s;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.cv-hero .contact-info a:hover {
    opacity: 1;
    text-decoration: underline;
}

.privacy-notice {
    background: var(--cv-code-bg-color);
    border-left: 4px solid var(--cv-accent-color);
    padding: 1rem 1.5rem;
    border-radius: 8px;
    margin-bottom: 3rem;
    font-size: 0.9rem;
    color: var(--cv-text-color);
}

.privacy-notice a {
    color: var(--cv-accent-color);
    font-weight: 600;
}

/* Section Headers */
.cv-section {
    margin-bottom: 4rem;
}

.section-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--cv-divider-color);
}

.section-header h2 {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--cv-text-color);
    position: relative;
}

.section-header h2::before {
    content: '';
    position: absolute;
    left: -1.5rem;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 24px;
    background: var(--cv-accent-color);
    border-radius: 2px;
}

/* Timeline */
.timeline {
    position: relative;
    padding-left: 2.5rem;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, var(--cv-accent-gradient-start) 0%, var(--cv-accent-gradient-end) 100%);
    border-radius: 2px;
}

.timeline-item {
    position: relative;
    margin-bottom: 3rem;
    background: var(--cv-card-bg-color);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s, box-shadow 0.3s;
    border: 1px solid var(--cv-divider-color);
}

.timeline-item:hover {
    transform: translateX(8px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: -2.9rem;
    top: 2rem;
    width: 14px;
    height: 14px;
    background: var(--cv-card-bg-color);
    border: 4px solid var(--cv-accent-color);
    border-radius: 50%;
    box-shadow: 0 0 0 4px var(--cv-bg-color);
}

.timeline-date {
    display: inline-block;
    background: linear-gradient(135deg, var(--cv-accent-gradient-start) 0%, var(--cv-accent-gradient-end) 100%);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.timeline-title {
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--cv-text-color);
    margin-bottom: 0.5rem;
}

.timeline-title a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s;
}

.timeline-title a:hover {
    color: var(--cv-accent-color);
}

.timeline-company {
    font-size: 1rem;
    color: var(--cv-text-color-light);
    font-weight: 500;
    margin-bottom: 1rem;
}

.timeline-description {
    color: var(--cv-text-color-light);
    margin-bottom: 1rem;
    font-size: 0.95rem;
}

.timeline-highlights {
    list-style: none;
    padding: 0;
}

.timeline-highlights li {
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;
    position: relative;
    color: var(--cv-text-color-light);
    font-size: 0.95rem;
}

.timeline-highlights li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--cv-accent-color);
    font-weight: bold;
}

/* Education Cards */
.education-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
}

.education-card {
    background: var(--cv-card-bg-color);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    border-left: 4px solid var(--cv-accent-color);
    transition: transform 0.3s, box-shadow 0.3s;
    border: 1px solid var(--cv-divider-color);
}

.education-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.education-date {
    font-size: 0.85rem;
    color: var(--cv-text-color-light);
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.education-degree {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--cv-text-color);
    margin-bottom: 0.5rem;
}

.education-degree a {
    color: inherit;
    text-decoration: none;
}

.education-degree a:hover {
    color: var(--cv-accent-color);
}

.education-institution {
    color: var(--cv-text-color-light);
    margin-bottom: 1rem;
    font-size: 0.9rem;
}

.education-courses {
    font-size: 0.85rem;
    color: var(--cv-text-color-light);
}

/* Skills Grid */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
}

.skill-category {
    background: var(--cv-card-bg-color);
    padding: 1.75rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s, box-shadow 0.3s;
    border: 1px solid var(--cv-divider-color);
}

.skill-category:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.skill-category h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--cv-text-color);
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid var(--cv-accent-color);
}

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.skill-tag {
    background: var(--cv-code-bg-color);
    color: var(--cv-text-color-light);
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    font-size: 0.85rem;
    border: 1px solid var(--cv-divider-color);
    transition: all 0.3s;
}

.skill-tag:hover {
    background: var(--cv-accent-color);
    color: white;
    border-color: var(--cv-accent-color);
}

/* Publications */
.publication-item {
    background: var(--cv-card-bg-color);
    padding: 1.75rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    margin-bottom: 1.5rem;
    border-left: 4px solid var(--cv-accent-gradient-end);
    transition: transform 0.3s, box-shadow 0.3s;
    border: 1px solid var(--cv-divider-color);
}

.publication-item:hover {
    transform: translateX(8px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.publication-date {
    font-size: 0.85rem;
    color: var(--cv-text-color-light);
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.publication-title {
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.publication-title a {
    color: var(--cv-text-color);
    text-decoration: none;
    transition: color 0.3s;
}

.publication-title a:hover {
    color: var(--cv-accent-color);
}

.publication-venue {
    color: var(--cv-accent-color);
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
}

.publication-description {
    color: var(--cv-text-color-light);
    font-size: 0.9rem;
}

/* Projects */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
}

.project-card {
    background: var(--cv-card-bg-color);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    border-top: 4px solid var(--cv-accent-color);
    transition: transform 0.3s, box-shadow 0.3s;
    border: 1px solid var(--cv-divider-color);
}

.project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.project-date {
    font-size: 0.85rem;
    color: var(--cv-text-color-light);
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.project-title {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
}

.project-title a {
    color: var(--cv-text-color);
    text-decoration: none;
}

.project-title a:hover {
    color: var(--cv-accent-color);
}

.project-description {
    color: var(--cv-text-color-light);
    font-size: 0.9rem;
    margin-bottom: 1rem;
}

.project-highlights {
    list-style: none;
    padding: 0;
}

.project-highlights li {
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
    position: relative;
    color: var(--cv-text-color-light);
    font-size: 0.85rem;
}

.project-highlights li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--cv-accent-color);
    font-weight: bold;
}

/* Certificates */
.certificates-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
}

.certificate-badge {
    background: var(--cv-card-bg-color);
    padding: 1.25rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
    border: 2px solid var(--cv-divider-color);
}

.certificate-badge:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    border-color: var(--cv-accent-color);
}

.certificate-badge a {
    color: var(--cv-accent-color);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
}

/* Responsive */
@media (max-width: 768px) {
    .cv-container {
        padding: 1.5rem 0;
    }

    .cv-hero {
        padding: 2rem 1.5rem;
    }

    .cv-hero h1 {
        font-size: 2rem;
    }

    .cv-hero .tagline {
        font-size: 1.1rem;
    }

    .timeline {
        padding-left: 1.5rem;
    }

    .timeline-item {
        padding: 1.5rem;
    }

    .timeline-item:hover {
        transform: translateX(4px);
    }

    .section-header h2 {
        font-size: 1.5rem;
    }

    .education-grid,
    .skills-grid,
    .projects-grid {
        grid-template-columns: 1fr;
    }
}

@media print {
    .cv-hero {
        box-shadow: none;
    }

    .timeline-item,
    .education-card,
    .skill-category,
    .publication-item,
    .project-card {
        box-shadow: none;
        page-break-inside: avoid;
    }

    .timeline-item:hover,
    .education-card:hover,
    .skill-category:hover,
    .publication-item:hover,
    .project-card:hover {
        transform: none;
    }
}
</style>

<div class="cv-container">
    <!-- Hero Section -->
    <div class="cv-hero">
        <h1>Subhadip Mitra</h1>
        <div class="tagline">Technical Leader, Data & AI Transformation</div>
        <div class="contact-info">
            <a href="mailto:contact@subhadipmitra.com">📧 contact@subhadipmitra.com</a>
            <a href="https://subhadipmitra.com" target="_blank">🌐 subhadipmitra.com</a>
            <a href="https://www.linkedin.com/in/subhadip-mitra/" target="_blank">💼 LinkedIn</a>
            <a href="/assets/pdf/cv.pdf" target="_blank">📄 Download PDF</a>
        </div>
    </div>

    <!-- Privacy Notice -->
    <div class="privacy-notice">
        <strong>Privacy Notice:</strong> This is a public version of my resume with certain sensitive details removed for privacy. These include contact numbers and specific project metrics. For a detailed resume, please contact me at <a href="mailto:contact@subhadipmitra.com">contact@subhadipmitra.com</a> or connect with me on <a href="https://www.linkedin.com/in/subhadip-mitra/" target="_blank">LinkedIn</a>.
    </div>

    <!-- Work Experience -->
    <section class="cv-section">
        <div class="section-header">
            <h2>Work Experience</h2>
        </div>
        <div class="timeline">
            <div class="timeline-item">
                <div class="timeline-date">2021 - Present</div>
                <div class="timeline-title">
                    <a href="https://cloud.google.com" target="_blank">Data & Analytics Manager | Site Lead, PSO Southeast Asia</a>
                </div>
                <div class="timeline-company">Google Cloud - Professional Services Organization, Southeast Asia</div>
                <div class="timeline-description">
                  Lead Google Cloud's Data & AI strategy for Southeast Asia, driving $XXM+ regional P&L while pioneering technical frameworks that became competitive differentiators. Built and scaled high-performing engineering teams delivering transformational outcomes at petabyte-scale for Fortune 500 clients across JAPAC.
                </div>
                <ul class="timeline-highlights">
                    <li>Built 0-to-1 regional Data & AI organization covering 6 countries, establishing hiring bar, technical standards, and delivery excellence that achieved 97% CSAT and 100% revenue attainment ($XXM+ annually) while growing team capabilities in GenAI, MLOps, and data mesh architectures</li>
                    <li>Invented novel technical frameworks that created competitive moats for Google Cloud-FTCS (field-theoretic context modeling), ETLC (context-first data architecture), and ARTEMIS (multi-agent systems)-driving 5+ strategic wins ($XXM+ pipeline) and establishing technical thought leadership through peer-reviewed publications and patent disclosures</li>
                    <li>Drove cross-functional strategic initiatives influencing product roadmaps (BigQuery, Vertex AI, Spanner), shaping regional GTM strategy, and building strategic partnerships that accelerated practice growth 3x YoY—acting as technical voice for SEA in global planning and representing PSO in executive business reviews</li>
                    <li>Pioneered first Sovereign GenAI program in SEA public sector, designing end-to-end solution architecture, security framework, and deployment strategy that scaled from 0 to 20+ government agencies in 90 days, establishing $X million beachhead and creating repeatable playbook for regulated industries</li>
                    <li>Led high-stakes technical interventions at C-suite/Board level for at-risk strategic accounts ($XXM+ ARR), redesigning data architectures, establishing governance frameworks, and preventing platform migrations—resulting in multi-year renewals and expansion into adjacent practices</li>
                    <li>Established technical excellence culture through systematic knowledge sharing, creating reusable assets (12+ reference architectures, 20+ accelerators), mentoring 7+ engineers to senior/staff levels, and contributing to hiring/promotion standards that elevated regional bar</li>
                </ul>
            </div>

            <div class="timeline-item">
                <div class="timeline-date">2019 - 2021</div>
                <div class="timeline-title">
                    <a href="https://www.sc.com" target="_blank">Principal Engineer - Data & Analytics Transformation</a>
                </div>
                <div class="timeline-company">Standard Chartered Bank</div>
                <div class="timeline-description">
                    Led enterprise-wide AI and data platform development serving 11 markets and 1200+ global users, delivering technical excellence while influencing C-suite data strategy.
                </div>
                <ul class="timeline-highlights">
                    <li>Delivered a Self-Service ML Platform that reduced model development and deployment time from 6 months to 1 week</li>
                    <li>Designed credit risk AI models integrating alternative data sources, improving accuracy by 15% while maintaining regulatory compliance</li>
                    <li>Modernized MarTech infrastructure, scaling customer analytics and driving a 30% increase in acquisition</li>
                </ul>
            </div>

            <div class="timeline-item">
                <div class="timeline-date">2017 - 2019</div>
                <div class="timeline-title">
                    <a href="https://www.teradata.com" target="_blank">Principal Data Engineer / Solution Architect</a>
                </div>
                <div class="timeline-company">Think Big Analytics (a Teradata company)</div>
                <div class="timeline-description">
                    Architected enterprise-scale data solutions for Fortune 500 clients across APAC, designing scalable platforms with measurable business impact.
                </div>
                <ul class="timeline-highlights">
                    <li>Engineered 5 high-performance data lakes capable of processing 1.2 PB/hour, achieving 20% optimization</li>
                    <li>Built real-time fraud detection systems, reducing false positives by 60% and saving $XM annually</li>
                    <li>Designed and scaled enterprise architectures supporting global Fortune 500 clients across APAC</li>
                </ul>
            </div>

            <div class="timeline-item">
                <div class="timeline-date">2010 - 2017</div>
                <div class="timeline-title">Software Engineering, Architecture and Technical Consulting Roles</div>
                <div class="timeline-company">Various Companies</div>
                <div class="timeline-description">
                    Progressively advanced through roles in software development, systems integration, and technical consulting within financial services and algorithmic trading domains.
                </div>
            </div>
        </div>
    </section>

    <!-- Education -->
    <section class="cv-section">
        <div class="section-header">
            <h2>Education</h2>
        </div>
        <div class="education-grid">
            <div class="education-card">
                <div class="education-date">2021 - 2023</div>
                <div class="education-degree">
                    <a href="https://bits-pilani.ac.in" target="_blank">MBA, Business Analytics</a>
                </div>
                <div class="education-institution">Birla Institute of Technology and Science, Pilani, India</div>
                <div class="education-courses">
                    Financial Risk Analytics • Marketing Models • Financial Management • Strategic Management • Operations Management • Predictive Analytics
                </div>
            </div>

            <div class="education-card">
                <div class="education-date">2017 - 2020</div>
                <div class="education-degree">
                    <a href="https://bits-pilani.ac.in" target="_blank">Master of Technology, Software Systems</a>
                </div>
                <div class="education-institution">Birla Institute of Technology and Science, Pilani, India</div>
                <div class="education-courses">
                    Algorithms • Distributed Systems • Deep Learning • Natural Language Processing • Machine Learning • Artificial Intelligence
                </div>
            </div>
        </div>
    </section>

    <!-- Publications -->
    <section class="cv-section">
        <div class="section-header">
            <h2>Publications & Research</h2>
        </div>

        <div class="publication-item">
            <div class="publication-date">May 2025</div>
            <div class="publication-title">
                <a href="https://services.google.com/fh/files/blogs/etlc_full_paper.pdf" target="_blank">ETLC: A Context-First Approach to Data Processing in the Generative AI Era</a>
            </div>
            <div class="publication-venue">Google Cloud</div>
            <div class="publication-description">
                A comprehensive whitepaper introducing ETLC (Extract, Transform, Load, Contextualize), adding semantic, relational, operational, environmental, and behavioral context to data pipelines, enabling Dynamic Context Engines for context-aware RAG, AI co-pilots, and agentic systems.
            </div>
        </div>

        <div class="publication-item">
            <div class="publication-date">May 2025</div>
            <div class="publication-title">
                <a href="https://www.tdcommons.org/dpubs_series/8022/" target="_blank">Field-Theoretic Context System (FTCS)</a>
            </div>
            <div class="publication-venue">TD Commons</div>
            <div class="publication-description">
                An innovative approach to context processing that models context as interacting fields rather than discrete states, enabling natural context flow, relationship preservation, and dynamic evolution through partial differential equations.
            </div>
        </div>

        <div class="publication-item">
            <div class="publication-date">January 2025</div>
            <div class="publication-title">
                <a href="https://www.tdcommons.org/dpubs_series/7729/" target="_blank">ARTEMIS - Adaptive Multi-agent Debate Framework</a>
            </div>
            <div class="publication-venue">TD Commons</div>
            <div class="publication-description">
                Technical disclosure on an adaptive framework for multi-agent decision systems, using structured debate protocols to enhance enterprise decision-making through collaborative reasoning.
            </div>
        </div>

        <div class="publication-item">
            <div class="publication-date">December 2023</div>
            <div class="publication-title">
                <a href="https://www.researchgate.net/publication/376557741_Data_Monetization_Strategy_for_Enterprises" target="_blank">Data Monetization Strategy for Enterprises</a>
            </div>
            <div class="publication-venue">BITS Pilani</div>
            <div class="publication-description">
                A comprehensive framework for enterprises to transform data into economic value, establishing methodologies now implemented across multiple JAPAC organizations.
            </div>
        </div>

        <div class="publication-item">
            <div class="publication-date">December 2021</div>
            <div class="publication-title">
                <a href="https://arxiv.org/abs/2201.01326" target="_blank">OConsent: Open Consent Protocol for Privacy and Consent Management with Blockchain</a>
            </div>
            <div class="publication-venue">BITS Pilani</div>
            <div class="publication-description">
                A blockchain-based protocol for transparent personal data processing, enhancing user control and compliance with data privacy regulations.
            </div>
        </div>
    </section>

    <!-- Skills -->
    <section class="cv-section">
        <div class="section-header">
            <h2>Skills & Expertise</h2>
        </div>
        <div class="skills-grid">
            <div class="skill-category">
                <h3>Technology Leadership & Strategy</h3>
                <div class="skill-tags">
                    <span class="skill-tag">Enterprise Architecture</span>
                    <span class="skill-tag">Technical Vision</span>
                    <span class="skill-tag">Digital Transformation</span>
                    <span class="skill-tag">AI & Data Strategy</span>
                    <span class="skill-tag">Cloud Architecture</span>
                    <span class="skill-tag">C-Suite Advisory</span>
                    <span class="skill-tag">Innovation Leadership</span>
                </div>
            </div>

            <div class="skill-category">
                <h3>Data Engineering & Architecture</h3>
                <div class="skill-tags">
                    <span class="skill-tag">Petabyte-Scale Platforms</span>
                    <span class="skill-tag">Data Pipelines</span>
                    <span class="skill-tag">Real-Time Processing</span>
                    <span class="skill-tag">Data Mesh & Fabric</span>
                    <span class="skill-tag">Apache Spark</span>
                    <span class="skill-tag">Apache Kafka</span>
                    <span class="skill-tag">Apache Beam</span>
                </div>
            </div>

            <div class="skill-category">
                <h3>Generative AI & Machine Learning</h3>
                <div class="skill-tags">
                    <span class="skill-tag">Multi-Agent Systems</span>
                    <span class="skill-tag">Large Language Models</span>
                    <span class="skill-tag">Responsible AI</span>
                    <span class="skill-tag">RAG Systems</span>
                    <span class="skill-tag">Vector Databases</span>
                    <span class="skill-tag">LLMOps</span>
                    <span class="skill-tag">Multi-Modal AI</span>
                </div>
            </div>

            <div class="skill-category">
                <h3>Engineering Leadership</h3>
                <div class="skill-tags">
                    <span class="skill-tag">Team Building</span>
                    <span class="skill-tag">Technical Mentorship</span>
                    <span class="skill-tag">Engineering Excellence</span>
                    <span class="skill-tag">System Design</span>
                    <span class="skill-tag">Performance Optimization</span>
                    <span class="skill-tag">Agile Methodologies</span>
                    <span class="skill-tag">DevOps & SRE</span>
                </div>
            </div>

            <div class="skill-category">
                <h3>Cloud Platforms & Infrastructure</h3>
                <div class="skill-tags">
                    <span class="skill-tag">Google Cloud Platform</span>
                    <span class="skill-tag">BigQuery</span>
                    <span class="skill-tag">Vertex AI</span>
                    <span class="skill-tag">Cloud Spanner</span>
                    <span class="skill-tag">Terraform</span>
                    <span class="skill-tag">Kubernetes</span>
                    <span class="skill-tag">Microservices</span>
                </div>
            </div>

            <div class="skill-category">
                <h3>Programming & Development</h3>
                <div class="skill-tags">
                    <span class="skill-tag">Python</span>
                    <span class="skill-tag">Java</span>
                    <span class="skill-tag">SQL</span>
                    <span class="skill-tag">C/C++</span>
                    <span class="skill-tag">JavaScript</span>
                    <span class="skill-tag">Scala</span>
                    <span class="skill-tag">Algorithm Design</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects -->
    <section class="cv-section">
        <div class="section-header">
            <h2>Notable Projects</h2>
        </div>
        <div class="projects-grid">
            <div class="project-card">
                <div class="project-date">2022 - 2023</div>
                <div class="project-title">
                    <a href="https://olp-protocol.org" target="_blank">Open Location Proof Protocol</a>
                </div>
                <div class="project-description">
                    A privacy-aware open protocol for non-repudiable location verification in physical or virtual spaces, with complete technical specifications and reference implementations.
                </div>
                <ul class="project-highlights">
                    <li>Designed a cryptographically secure yet privacy-preserving protocol</li>
                    <li>Created a fully decentralized architecture resistant to tampering</li>
                    <li>Published comprehensive specifications enabling industry adoption</li>
                </ul>
            </div>

            <div class="project-card">
                <div class="project-date">2021 - 2022</div>
                <div class="project-title">
                    <a href="https://oconsent.io" target="_blank">OConsent - Open Consent Protocol</a>
                </div>
                <div class="project-description">
                    An open-sourced transparent, fast, and scalable protocol for managing user consent and privacy on public blockchains.
                </div>
                <ul class="project-highlights">
                    <li>Engineered blockchain-based solution for consent management</li>
                    <li>Designed for GDPR compliance with automated audit capabilities</li>
                    <li>Created system enabling granular control over personal data usage</li>
                </ul>
            </div>

            <div class="project-card">
                <div class="project-date">2016 - 2017</div>
                <div class="project-title">
                    <a href="https://github.com/bassrehab/ISO8583-Simulator" target="_blank">ISO8583 Simulator</a>
                </div>
                <div class="project-description">
                    A high-performance Java-based simulator for ISO 8583 financial messaging, used by banks and payment processors.
                </div>
                <ul class="project-highlights">
                    <li>Built flexible simulator supporting multiple ISO 8583 versions</li>
                    <li>Implemented advanced performance testing capabilities</li>
                    <li>Designed modular architecture for protocol extensions</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Certificates -->
    <section class="cv-section">
        <div class="section-header">
            <h2>Certifications</h2>
        </div>
        <div class="certificates-grid">
            <div class="certificate-badge">
                <a href="#">Google Cloud Professional Data Engineer</a>
            </div>
            <div class="certificate-badge">
                <a href="#">Google Cloud Professional Cloud Architect</a>
            </div>
            <div class="certificate-badge">
                <a href="#">Google Cloud Professional Machine Learning Engineer</a>
            </div>
        </div>
    </section>
</div>