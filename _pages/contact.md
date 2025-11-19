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
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem 1rem;
  background: var(--global-code-bg-color);
  border-radius: 24px;
  border: 1px solid var(--global-divider-color);
}

.hero-icon {
  font-size: 4rem;
  color: var(--global-theme-color);
  margin-bottom: 1.5rem;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 900;
  color: var(--global-text-color);
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--global-text-color-light);
  max-width: 600px;
  margin: 0 auto;
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
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.section-header i {
  font-size: 1.5rem;
  color: var(--global-theme-color);
}

.section-header h2 {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--global-text-color);
  margin: 0;
  letter-spacing: -0.02em;
}

/* Contact Form */
.contact-form-section {
  background: var(--global-card-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s ease;
}

.contact-form-section:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
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
  padding: 0.875rem 1rem;
  background: var(--global-bg-color);
  border: 2px solid var(--global-divider-color);
  border-radius: 12px;
  font-size: 1rem;
  color: var(--global-text-color);
  font-family: "Inter Tight", sans-serif;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--global-theme-color);
  box-shadow: 0 0 0 3px rgba(181, 9, 172, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: var(--global-theme-color);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "Inter", sans-serif;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(181, 9, 172, 0.3);
}

.submit-btn:active {
  transform: translateY(0);
}

.submit-btn i {
  transition: transform 0.3s ease;
}

.submit-btn:hover i {
  transform: translateX(4px);
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
  gap: 1.5rem;
  padding: 1.75rem;
  background: var(--global-card-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.contact-method:hover {
  border-color: var(--global-theme-color);
  transform: translateX(8px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.method-icon {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 1.5rem;
}

.email-icon {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.calendar-icon {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}

.social-icon {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
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
  gap: 0.5rem;
  color: var(--global-theme-color);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: gap 0.3s ease;
}

.method-link:hover {
  gap: 0.75rem;
}

.method-link i {
  font-size: 0.875rem;
}

/* Social Links Compact */
.social-links-compact {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.75rem;
}

.social-links-compact a {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--global-code-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 10px;
  color: var(--global-text-color);
  font-size: 1.125rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-links-compact a:hover {
  background: var(--global-theme-color);
  color: white;
  border-color: var(--global-theme-color);
  transform: translateY(-4px);
}

/* Info Card */
.info-card {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--global-code-bg-color);
  border-left: 4px solid var(--global-theme-color);
  border-radius: 12px;
}

.info-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--global-theme-color);
  color: white;
  border-radius: 10px;
  font-size: 1.25rem;
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
    padding: 2rem 1rem;
  }

  .hero-icon {
    font-size: 3rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.125rem;
  }

  .contact-form-section {
    padding: 2rem;
  }
}

@media (max-width: 640px) {
  .contact-page-modern {
    padding: 1rem 0;
  }

  .contact-hero {
    margin-bottom: 2rem;
    padding: 1.5rem;
    border-radius: 16px;
  }

  .section-header h2 {
    font-size: 1.5rem;
  }

  .contact-form-section {
    padding: 1.5rem;
    border-radius: 16px;
  }

  .contact-method {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }

  .method-icon {
    margin: 0 auto;
  }

  .social-links-compact {
    justify-content: center;
  }

  .info-card {
    flex-direction: column;
    text-align: center;
  }

  .info-icon {
    margin: 0 auto;
  }
}
</style>

<script src="{{ '/assets/js/custom/contact.js' | relative_url }}"></script>
