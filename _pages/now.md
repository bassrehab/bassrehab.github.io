---
layout: page
title: now
permalink: /now/
description: What I'm working on, learning, and thinking about right now
nav: true
nav_order: 1
---

<style>
.now-page {
    --accent: var(--global-theme-color, #b509ac);
    --text: var(--global-text-color, #000);
    --text-light: var(--global-text-color-light, #666);
    --bg: var(--global-bg-color, #fff);
    --card-bg: var(--global-card-bg-color, #fff);
    --border: var(--global-divider-color, #e5e5e5);
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 0;
}

/* Header */
.now-header {
    text-align: center;
    margin-bottom: 4rem;
    padding-bottom: 3rem;
    border-bottom: 2px solid var(--border);
}

.now-label {
    font-size: 0.875rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--accent);
    font-weight: 700;
    margin-bottom: 1rem;
}

.now-title {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 900;
    line-height: 1.1;
    color: var(--text);
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
}

.now-subtitle {
    font-size: 1.25rem;
    color: var(--text-light);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

.last-updated {
    margin-top: 1.5rem;
    font-size: 0.875rem;
    color: var(--text-light);
    font-style: italic;
}

/* Status Pills */
.status-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
    margin-top: 2rem;
}

.status-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.65rem 1.25rem;
    background: var(--global-code-bg-color);
    border: 1px solid var(--border);
    border-radius: 50px;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text);
    white-space: nowrap;
}

.status-pill i {
    font-size: 0.875rem;
}

.status-pill.available {
    background: #10b981;
    color: white;
    border-color: #10b981;
}

.status-pill.busy {
    background: #f59e0b;
    color: white;
    border-color: #f59e0b;
}

.status-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: currentColor;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

/* Now Sections */
.now-section {
    margin: 4rem 0;
}

.section-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
}

.section-icon {
    font-size: 2rem;
    color: var(--accent);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
}

.section-title {
    font-size: 1.75rem;
    font-weight: 800;
    color: var(--text);
    letter-spacing: -0.02em;
    margin: 0;
}

.section-content {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 2rem;
}

/* Project Cards */
.project-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    transition: all 0.3s;
}

.project-card:last-child {
    margin-bottom: 0;
}

.project-card:hover {
    border-color: var(--accent);
    transform: translateX(8px);
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
}

.project-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text);
    margin: 0;
}

.project-status {
    font-size: 0.75rem;
    padding: 0.35rem 0.75rem;
    border-radius: 12px;
    font-weight: 600;
    white-space: nowrap;
}

.project-status.active {
    background: #10b981;
    color: white;
}

.project-status.research {
    background: #3b82f6;
    color: white;
}

.project-status.planning {
    background: #8b5cf6;
    color: white;
}

.project-description {
    color: var(--text-light);
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;
}

/* List Items */
.now-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.now-list li {
    padding: 1rem 0;
    border-bottom: 1px solid var(--border);
    color: var(--text-light);
    line-height: 1.6;
}

.now-list li:last-child {
    border-bottom: none;
}

.now-list li strong {
    color: var(--text);
    font-weight: 600;
}

.now-list li i {
    color: var(--accent);
    margin-right: 0.75rem;
    width: 20px;
    display: inline-block;
}

/* Reading List */
.book-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid var(--border);
}

.book-item:last-child {
    border-bottom: none;
}

.book-emoji {
    font-size: 2rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
}

.book-details h4 {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text);
    margin: 0 0 0.25rem 0;
}

.book-details p {
    font-size: 0.9rem;
    color: var(--text-light);
    margin: 0;
}

/* Quick Stats */
.quick-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
}

.stat-item {
    text-align: center;
    padding: 1.5rem;
    background: var(--global-code-bg-color);
    border-radius: 12px;
}

.stat-number {
    font-size: 2.5rem;
    font-weight: 900;
    color: var(--accent);
    line-height: 1;
    margin-bottom: 0.5rem;
}

.stat-label {
    font-size: 0.875rem;
    color: var(--text-light);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

/* Footer Note */
.now-footer {
    margin-top: 4rem;
    padding: 2rem;
    background: var(--global-code-bg-color);
    border-radius: 16px;
    text-align: center;
}

.now-footer p {
    color: var(--text-light);
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.6;
}

.now-footer a {
    color: var(--accent);
    text-decoration: none;
    font-weight: 600;
}

.now-footer a:hover {
    text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
    .now-title {
        font-size: 2rem;
    }
    
    .now-subtitle {
        font-size: 1rem;
    }
    
    .section-title {
        font-size: 1.5rem;
    }
    
    .project-header {
        flex-direction: column;
        gap: 0.75rem;
    }
    
    .quick-stats {
        grid-template-columns: 1fr 1fr;
    }
    
    .status-pills {
        justify-content: flex-start;
    }
}
</style>

<div class="now-page">
    <!-- Header -->
    <header class="now-header">
        <div class="now-label">Updated Regularly</div>
        <h1 class="now-title">What I'm Doing Now</h1>
        <p class="now-subtitle">
            My current focus areas, active projects, and what I'm learning. Inspired by <a href="https://nownownow.com/about" target="_blank">nownownow.com</a>
        </p>
        <div class="status-pills">
            <span class="status-pill available">
                <span class="status-indicator"></span>
                Open to Consulting
            </span>
            <span class="status-pill"><i class="fas fa-map-marker-alt"></i> Singapore</span>
        </div>
        <p class="last-updated">Last updated: October 15, 2025</p>
    </header>

    <!-- Current Projects -->
    <section class="now-section">
        <div class="section-header">
            <span class="section-icon"><i class="fas fa-rocket"></i></span>
            <h2 class="section-title">Current Projects</h2>
        </div>
        
        <div class="project-card">
            <div class="project-header">
                <h3 class="project-title">Autonomous Decision Intelligence Platform</h3>
                <span class="project-status active">Active</span>
            </div>
            <p class="project-description">
                Building domain-agnostic agentic system for enterprise decisioning, anomalous event detection, and adaptive pattern learning. Horizontal solution deployable across industries with self-learning capabilities and explainable decision paths.
            </p>
        </div>

        <div class="project-card">
            <div class="project-header">
                <h3 class="project-title">AI Agent Framework for Data Engineering</h3>
                <span class="project-status active">Active</span>
            </div>
            <p class="project-description">
                Building production-ready multi-agent systems for autonomous data pipeline management. Industry-agnostic framework that handles data quality, orchestration, and monitoring with AI agents collaborating in real-time.
            </p>
        </div>

        <div class="project-card">
            <div class="project-header">
                <h3 class="project-title">Decentralized Verification Infrastructure</h3>
                <span class="project-status active">Active</span>
            </div>
            <p class="project-description">
                Developing cryptographic proof systems for secure, privacy-preserving verification at scale. Focus on trustless validation mechanisms and distributed consensus for identity and data integrity use cases.
            </p>
        </div>

        <div class="project-card">
            <div class="project-header">
                <h3 class="project-title">FTCS v2.0 - Field-Theoretic Context System</h3>
                <span class="project-status research">Research</span>
            </div>
            <p class="project-description">
                Advancing the field-theoretic approach to context modeling in AI systems. Working on efficient implementation patterns and real-world validation across enterprise use cases.
            </p>
        </div>

        <div class="project-card">
            <div class="project-header">
                <h3 class="project-title">Space-Based Analytics Research</h3>
                <span class="project-status research">Research</span>
            </div>
            <p class="project-description">
                Exploring satellite data analytics and distributed space infrastructure patterns. Investigating real-time processing architectures for LEO satellite constellations and geospatial intelligence applications.
            </p>
        </div>
    </section>

    <!-- Learning & Research -->
    <section class="now-section">
        <div class="section-header">
            <span class="section-icon"><i class="fas fa-graduation-cap"></i></span>
            <h2 class="section-title">Learning & Research</h2>
        </div>
        <div class="section-content">
            <ul class="now-list">
                <li><i class="fas fa-brain"></i> <strong>Agentic Systems at Scale:</strong> Deep diving into orchestration patterns, fault tolerance, and coordination protocols for multi-agent systems in production</li>
                <li><i class="fas fa-code"></i> <strong>LLM Optimization:</strong> Exploring quantization techniques, serving architectures, and cost-effective inference strategies for enterprise deployment</li>
                <li><i class="fas fa-project-diagram"></i> <strong>Spatiotemporal Graph Theory:</strong> Applying graph analytics to model resource interactions across distributed cloud infrastructure</li>
                <li><i class="fas fa-shield-alt"></i> <strong>AI Governance:</strong> Researching practical frameworks for responsible AI deployment in regulated industries</li>
            </ul>
        </div>
    </section>

    <!-- Quick Stats -->
    <div class="quick-stats">
        <div class="stat-item">
            <div class="stat-number">5</div>
            <div class="stat-label">Active Projects</div>
        </div>
        <div class="stat-item">
            <div class="stat-number">6</div>
            <div class="stat-label">Countries This Year</div>
        </div>
        <div class="stat-item">
            <div class="stat-number">2</div>
            <div class="stat-label">Papers In Progress</div>
        </div>
        <div class="stat-item">
            <div class="stat-number">2</div>
            <div class="stat-label">Talks Scheduled</div>
        </div>
    </div>

    <!-- Currently Reading -->
    <section class="now-section">
        <div class="section-header">
            <span class="section-icon"><i class="fas fa-book-reader"></i></span>
            <h2 class="section-title">Currently Reading</h2>
        </div>
        <div class="section-content">
            <div class="book-item">
                <div class="book-emoji"><i class="fas fa-book" style="color: #ef4444;"></i></div>
                <div class="book-details">
                    <h4>Staff Engineer: Leadership Beyond the Management Track</h4>
                    <p>Will Larson • Exploring effective technical leadership patterns</p>
                </div>
            </div>

            <div class="book-item">
                <div class="book-emoji"><i class="fas fa-book" style="color: #f59e0b;"></i></div>
                <div class="book-details">
                    <h4>Low Earth Orbit Satellite Design</h4>
                    <p>George Sebestyen • Exploring satellite systems architecture and distributed networks</p>
                </div>
            </div>
            <div class="book-item">
                <div class="book-emoji"><i class="fas fa-book" style="color: #259e0b;"></i></div>
                <div class="book-details">
                    <h4>Probabilistic Combinatorial Optimization on Graphs</h4>
                    <p>Cecile Murat & Vangelis Paschos • Finding approximate solutions for complex network optimization problems.</p>
                </div>
            </div>
            <div class="book-item">
                <div class="book-emoji"><i class="fas fa-book" style="color: #8b5cf6;"></i></div>
                <div class="book-details">
                    <h4>The Experience Machine</h4>
                    <p>Andy Clark • Exploring how prediction and perception shape our reality</p>
                </div>
            </div>
            <div class="book-item">
                <div class="book-emoji"><i class="fas fa-book" style="color: #3b82f6;"></i></div>
                <div class="book-details">
                    <h4>Why Machines Learn</h4>
                    <p>Anil Ananthaswamy • Deep dive into the mathematical foundations of machine learning</p>
                </div>
            </div>            
        </div>
    </section>

    <!-- What I'm Not Doing -->
    <section class="now-section">
        <div class="section-header">
            <span class="section-icon"><i class="fas fa-ban"></i></span>
            <h2 class="section-title">What I'm Not Doing</h2>
        </div>
        <div class="section-content">
            <ul class="now-list">
                <li><i class="fas fa-times-circle"></i> Not taking on new full-time commitments (happy with current role)</li>
                <li><i class="fas fa-times-circle"></i> Not doing basic web development projects (focused on AI/data architecture)</li>
                <li><i class="fas fa-times-circle"></i> Not available for unpaid advisory work (limited capacity for pro-bono)</li>
            </ul>
        </div>
    </section>

    <!-- Availability -->
    <section class="now-section">
        <div class="section-header">
            <span class="section-icon"><i class="fas fa-briefcase"></i></span>
            <h2 class="section-title">Open For</h2>
        </div>
        <div class="section-content">
            <ul class="now-list">
                <li><i class="fas fa-check-circle"></i> <strong>Technical Consulting:</strong> AI/data architecture, framework design, team building</li>
                <li><i class="fas fa-check-circle"></i> <strong>Speaking Engagements:</strong> Conferences, workshops, podcasts on AI/data topics</li>
                <li><i class="fas fa-check-circle"></i> <strong>Research Collaboration:</strong> Academic partnerships on agentic systems or context modeling</li>
                <li><i class="fas fa-check-circle"></i> <strong>Open Source Contributions:</strong> Collaborators for my frameworks and tools</li>
            </ul>
        </div>
    </section>

    <!-- Footer -->
    <div class="now-footer">
        <p>
            This is a <strong>/now page</strong>. It's meant to be a living document that I update regularly. 
            Want to create your own? Learn more at <a href="https://nownownow.com" target="_blank">nownownow.com</a>.
            <br><br>
            Questions or want to connect? <a href="mailto:contact@subhadipmitra.com">Send me an email</a> or 
            <a href="https://calendly.com/subhadipmitra" target="_blank">schedule a call</a>.
        </p>
    </div>
</div>