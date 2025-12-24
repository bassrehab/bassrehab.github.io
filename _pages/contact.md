---
layout: page
permalink: /contact/
title: "Get in Touch"
description: "Let's connect - whether you have a question, collaboration idea, or just want to say hello"
nav: false
---

<style>
header.post-header {
  display: none;
}
</style>

<div class="contact-page-modern">
  <!-- Hero Section -->
  <div class="contact-hero">
    <div class="hero-icon">
      <i class="fa-solid fa-paper-plane"></i>
    </div>
    <h1 class="hero-title">Let's Connect</h1>
    <p class="hero-subtitle">
      Whether you have a question, collaboration idea, or just want to say hello - I'd love to hear from you.
    </p>
  </div>

  <!-- Main Content Grid -->
  <div class="contact-grid">
    <!-- Contact Form -->
    <div class="contact-form-section">
      <div class="section-header">
        <i class="fa-solid fa-envelope"></i>
        <h2>Send a Message</h2>
      </div>

      <form id="contact-form" class="modern-form">
        <div class="form-group">
          <label for="name">
            <i class="fa-solid fa-user"></i>
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            required
          >
        </div>

        <div class="form-group">
          <label for="email">
            <i class="fa-solid fa-at"></i>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
            required
          >
        </div>

        <div class="form-group">
          <label for="message">
            <i class="fa-solid fa-message"></i>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Tell me what's on your mind..."
            required
          ></textarea>
        </div>

        <button type="submit" class="submit-btn">
          <span class="btn-text">Send Message</span>
          <i class="fa-solid fa-arrow-right"></i>
        </button>

        <div class="form-status" id="form-status"></div>
      </form>
    </div>

    <!-- Contact Methods -->
    <div class="contact-methods-section">
      <div class="section-header">
        <i class="fa-solid fa-address-card"></i>
        <h2>Other Ways to Reach Me</h2>
      </div>

      <div class="contact-methods">
        <div class="contact-method">
          <div class="method-icon email-icon">
            <i class="fa-solid fa-envelope"></i>
          </div>
          <div class="method-content">
            <h3>Email</h3>
            <p>For quick questions and inquiries</p>
            <a href="mailto:contact@subhadipmitra.com" class="method-link">
              contact@subhadipmitra.com
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>

        <div class="contact-method">
          <div class="method-icon calendar-icon">
            <i class="fa-solid fa-calendar-days"></i>
          </div>
          <div class="method-content">
            <h3>Schedule a Meeting</h3>
            <p>Let's have a virtual conversation</p>
            <a href="https://calendly.com/contact-x9nm/30min" target="_blank" class="method-link">
              Book a 30-minute call
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>

        <div class="contact-method">
          <div class="method-icon social-icon">
            <i class="fa-solid fa-share-nodes"></i>
          </div>
          <div class="method-content">
            <h3>Social Media</h3>
            <p>Connect on your favorite platform</p>
            <div class="social-links-compact">
              {% if site.linkedin_username %}
                <a href="https://www.linkedin.com/in/{{ site.linkedin_username }}" target="_blank" title="LinkedIn">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              {% endif %}
              {% if site.github_username %}
                <a href="https://github.com/{{ site.github_username }}" target="_blank" title="GitHub">
                  <i class="fa-brands fa-github"></i>
                </a>
              {% endif %}
              {% if site.x_username %}
                <a href="https://twitter.com/{{ site.x_username }}" target="_blank" title="Twitter/X">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
              {% endif %}
              {% if site.medium_username %}
                <a href="https://medium.com/@{{ site.medium_username }}" target="_blank" title="Medium">
                  <i class="fa-brands fa-medium"></i>
                </a>
              {% endif %}
            </div>
          </div>
        </div>
      </div>

      <!-- Info Card -->
      <div class="info-card">
        <div class="info-icon">
          <i class="fa-solid fa-clock"></i>
        </div>
        <div class="info-content">
          <h4>Response Time</h4>
          <p>I typically respond within 24-48 hours during business days.</p>
        </div>
      </div>
    </div>

  </div>
</div>

<style>
.contact-page-modern {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
}

/* Hero Section */
.contact-hero {
  margin-bottom: 4rem;
  padding: 2rem 0;
}

.hero-icon {
  font-size: 3rem;
  color: var(--global-theme-color);
  margin-bottom: 1rem;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 900;
  line-height: 0.95;
  color: var(--global-text-color);
  margin-bottom: 1rem;
  letter-spacing: -0.03em;
}

.hero-subtitle {
  font-size: 1.5rem;
  line-height: 1.5;
  color: var(--global-text-color-light);
  max-width: 700px;
  font-weight: 400;
}

/* Contact Grid */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.section-header i {
  font-size: 1.25rem;
  color: var(--global-theme-color);
}

.section-header h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--global-text-color);
  margin: 0;
  letter-spacing: -0.01em;
}

/* Contact Form */
.contact-form-section {
  background: var(--global-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 8px;
  padding: 2rem;
  transition: border-color 0.2s ease;
}

.contact-form-section:hover {
  border-color: var(--global-theme-color);
}

.modern-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: var(--global-text-color);
  font-size: 0.95rem;
}

.form-group label i {
  color: var(--global-theme-color);
  font-size: 0.875rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  background: var(--global-code-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 6px;
  font-size: 0.95rem;
  color: var(--global-text-color);
  font-family: "Inter Tight", sans-serif;
  transition: border-color 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--global-theme-color);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: var(--global-theme-color);
  color: white !important;
  border: none;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: "Inter", sans-serif;
}

.submit-btn:hover {
  background: var(--global-text-color);
  color: white !important;
}

.submit-btn:active {
  transform: scale(0.98);
}

.modern-form .submit-btn .btn-text {
  color: white !important;
}

.form-status {
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  display: none;
}

.form-status.success {
  display: block;
  background: #d1fae5;
  color: #065f46;
  border: 1px solid #6ee7b7;
}

.form-status.error {
  display: block;
  background: #fee2e2;
  color: #991b1b;
  border: 1px solid #fca5a5;
}

/* Contact Methods */
.contact-methods-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-method {
  display: flex;
  gap: 1.25rem;
  padding: 1.5rem;
  background: var(--global-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 8px;
  transition: border-color 0.2s ease;
}

.contact-method:hover {
  border-color: var(--global-theme-color);
}

.method-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 1.25rem;
  background: var(--global-code-bg-color);
  color: var(--global-theme-color);
}

.email-icon {
  background: var(--global-code-bg-color);
  color: var(--global-theme-color);
}

.calendar-icon {
  background: var(--global-code-bg-color);
  color: var(--global-theme-color);
}

.social-icon {
  background: var(--global-code-bg-color);
  color: var(--global-theme-color);
}

.method-content {
  flex: 1;
}

.method-content h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--global-text-color);
  margin: 0 0 0.5rem 0;
}

.method-content p {
  font-size: 0.95rem;
  color: var(--global-text-color-light);
  margin: 0 0 0.75rem 0;
}

.method-link {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  color: var(--global-theme-color);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.method-link:hover {
  color: var(--global-text-color);
}

.method-link i {
  font-size: 0.8rem;
}

/* Social Links Compact */
.social-links-compact {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.social-links-compact a {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--global-code-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 6px;
  color: var(--global-text-color);
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.social-links-compact a:hover {
  background: var(--global-theme-color);
  color: white;
  border-color: var(--global-theme-color);
}

/* Info Card */
.info-card {
  display: flex;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--global-code-bg-color);
  border-left: 3px solid var(--global-theme-color);
  border-radius: 6px;
}

.info-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--global-theme-color);
  color: white;
  border-radius: 6px;
  font-size: 1.125rem;
}

.info-content h4 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--global-text-color);
  margin: 0 0 0.5rem 0;
}

.info-content p {
  font-size: 0.95rem;
  color: var(--global-text-color-light);
  margin: 0;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 968px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-hero {
    margin-bottom: 3rem;
    padding: 1rem 0;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.125rem;
  }

  .contact-form-section {
    padding: 1.75rem;
  }
}

@media (max-width: 640px) {
  .contact-page-modern {
    padding: 1rem 0;
  }

  .contact-hero {
    margin-bottom: 2rem;
  }

  .section-header h2 {
    font-size: 1.25rem;
  }

  .contact-form-section {
    padding: 1.5rem;
  }

  .contact-method {
    flex-direction: column;
    padding: 1.25rem;
  }

  .method-icon {
    margin: 0 auto;
  }

  .social-links-compact {
    justify-content: center;
  }

  .info-card {
    flex-direction: column;
  }

  .info-icon {
    margin: 0 auto;
  }
}
</style>

<script src="{{ '/assets/js/custom/contact.js' | relative_url }}"></script>
