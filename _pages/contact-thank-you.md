---
layout: page
permalink: /contact/thank-you/
title: "Message Received!"
description: "Thank you for reaching out"
nav: false
---

<style>
header.post-header {
  display: none;
}
</style>

<div class="thank-you-page">
  <div class="thank-you-container">
    <div class="success-animation">
      <div class="checkmark-circle">
        <div class="checkmark"></div>
      </div>
    </div>

    <div class="thank-you-content">
      <h1 class="thank-you-title">Message Received!</h1>
      <p class="thank-you-message">
        Thanks for reaching out! I've received your message and will get back to you within 24-48 hours.
      </p>

      <div class="what-next">
        <h2>What happens next?</h2>
        <div class="next-steps">
          <div class="step">
            <div class="step-icon">
              <i class="fa-solid fa-envelope-open"></i>
            </div>
            <div class="step-content">
              <h3>I'll review your message</h3>
              <p>I read every message personally</p>
            </div>
          </div>

          <div class="step">
            <div class="step-icon">
              <i class="fa-solid fa-reply"></i>
            </div>
            <div class="step-content">
              <h3>You'll hear from me soon</h3>
              <p>Typically within 24-48 hours</p>
            </div>
          </div>

          <div class="step">
            <div class="step-icon">
              <i class="fa-solid fa-handshake"></i>
            </div>
            <div class="step-content">
              <h3>Let's connect!</h3>
              <p>Looking forward to our conversation</p>
            </div>
          </div>
        </div>
      </div>

      <div class="thank-you-actions">
        <a href="{{ '/' | relative_url }}" class="btn-primary">
          <i class="fa-solid fa-home"></i>
          Back to Home
        </a>
        <a href="{{ '/blog/' | relative_url }}" class="btn-secondary">
          <i class="fa-solid fa-blog"></i>
          Read the Blog
        </a>
      </div>

      <div class="social-connect">
        <p>In the meantime, let's connect on social media:</p>
        <div class="social-links">
          {% include social.liquid %}
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.thank-you-page {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
}

.thank-you-container {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

/* Success Animation */
.success-animation {
  margin-bottom: 2rem;
}

.checkmark-circle {
  width: 120px;
  height: 120px;
  margin: 0 auto;
  background: var(--global-theme-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: scaleIn 0.5s ease-out;
  box-shadow: 0 8px 32px rgba(181, 9, 172, 0.3);
}

@keyframes scaleIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.checkmark {
  width: 60px;
  height: 60px;
  position: relative;
  animation: checkmark 0.5s ease-out 0.3s forwards;
  opacity: 0;
}

.checkmark::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 40px;
  border: solid white;
  border-width: 0 6px 6px 0;
  transform: rotate(45deg);
  left: 18px;
  top: 5px;
}

@keyframes checkmark {
  0% {
    opacity: 0;
    transform: scale(0) rotate(45deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

/* Content */
.thank-you-content {
  animation: fadeInUp 0.6s ease-out 0.3s backwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.thank-you-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 900;
  color: var(--global-text-color);
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.thank-you-message {
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--global-text-color-light);
  margin-bottom: 3rem;
}

/* What's Next Section */
.what-next {
  background: var(--global-code-bg-color);
  border-radius: 20px;
  padding: 2.5rem;
  margin-bottom: 2.5rem;
  border: 1px solid var(--global-divider-color);
}

.what-next h2 {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--global-text-color);
  margin-bottom: 2rem;
}

.next-steps {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: left;
}

.step {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}

.step-icon {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  background: var(--global-theme-color);
  color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.step-content h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--global-text-color);
  margin: 0 0 0.5rem 0;
}

.step-content p {
  font-size: 0.95rem;
  color: var(--global-text-color-light);
  margin: 0;
}

/* Actions */
.thank-you-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  border-radius: 12px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.btn-primary {
  background: var(--global-theme-color);
  color: white;
  border: 2px solid var(--global-theme-color);
}

.btn-primary:hover {
  background: transparent;
  color: var(--global-theme-color);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(181, 9, 172, 0.2);
}

.btn-secondary {
  background: transparent;
  color: var(--global-text-color);
  border: 2px solid var(--global-divider-color);
}

.btn-secondary:hover {
  border-color: var(--global-theme-color);
  color: var(--global-theme-color);
  transform: translateY(-2px);
}

/* Social Connect */
.social-connect {
  padding-top: 2rem;
  border-top: 1px solid var(--global-divider-color);
}

.social-connect p {
  font-size: 1rem;
  color: var(--global-text-color-light);
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.social-links a {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--global-code-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 12px;
  color: var(--global-text-color);
  font-size: 1.25rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: var(--global-theme-color);
  color: white;
  border-color: var(--global-theme-color);
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(181, 9, 172, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .thank-you-page {
    padding: 1rem;
  }

  .checkmark-circle {
    width: 100px;
    height: 100px;
  }

  .checkmark {
    width: 50px;
    height: 50px;
  }

  .checkmark::after {
    width: 16px;
    height: 32px;
    border-width: 0 5px 5px 0;
    left: 15px;
  }

  .thank-you-title {
    font-size: 2rem;
  }

  .thank-you-message {
    font-size: 1.125rem;
  }

  .what-next {
    padding: 1.75rem;
  }

  .what-next h2 {
    font-size: 1.25rem;
  }

  .step {
    flex-direction: column;
    text-align: center;
  }

  .step-icon {
    margin: 0 auto;
  }

  .thank-you-actions {
    flex-direction: column;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }
}
</style>
