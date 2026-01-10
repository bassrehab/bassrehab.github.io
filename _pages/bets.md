---
layout: page
title: bets
permalink: /bets/
description: Falsifiable beliefs about AI, systems, and leadership - things I believe that I could be wrong about.
nav: true
nav_order: 6
---

<style>
header.post-header {
  display: none !important;
}

.bets-page {
  max-width: 760px;
  margin: 0 auto;
}

.bets-hero {
  margin-bottom: 3rem;
  padding: 2rem 0;
}

.bets-hero h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.bets-intro {
  font-size: 1.1rem;
  line-height: 1.75;
  color: var(--global-text-color-light);
  margin-bottom: 2rem;
}

.bets-list {
  margin-top: 2.5rem;
}

.bet-item {
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--global-divider-color);
}

.bet-item:last-child {
  border-bottom: none;
}

.bet-statement {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 0.75rem;
  color: var(--global-text-color);
}

.bet-reasoning {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--global-text-color-light);
}

.bet-reasoning a {
  color: var(--global-theme-color);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}

.bet-reasoning a:hover {
  border-bottom-color: var(--global-theme-color);
}

.bets-footer {
  margin-top: 3rem;
  padding: 1.5rem;
  background: var(--global-card-bg-color, var(--global-bg-color));
  border: 1px solid var(--global-divider-color);
  border-radius: 8px;
  font-size: 0.95rem;
  line-height: 1.6;
}

.bets-footer p {
  margin: 0;
}

.bets-meta {
  margin-top: 2rem;
  font-size: 0.85rem;
  color: var(--global-text-color-light);
}
</style>

<div class="bets-page">

<section class="bets-hero">
  <h1>Bets</h1>
  <div class="bets-intro">
    <p>
      These are beliefs I hold that could be wrong. Not obvious truths or safe consensus positions - actual bets where I'm taking a side that reasonable people might disagree with.
    </p>
    <p>
      I'm writing them down because it's easy to have vague opinions and retrofit explanations later. Specific, falsifiable claims are harder to hide from. If I'm wrong about something here, I'd like to know.
    </p>
  </div>
</section>

<div class="bets-list">

<div class="bet-item">
  <div class="bet-statement">AI safety that cannot be operationalized is mostly theater.</div>
  <div class="bet-reasoning">
    The questions are real - alignment, deception, sandbagging. But if your safety approach can't be measured, tested, or deployed, it's philosophy, not engineering. When I built <a href="/blog/2025/detecting-ai-sandbagging/">sandbagging detection probes</a>, the point was to get a classifier that actually works - 90%+ accuracy across multiple model families. It turns out you can detect strategic underperformance at the activation level. The discussions matter, but they need to eventually become code that runs in production.
  </div>
</div>

<div class="bet-item">
  <div class="bet-statement">Memory bandwidth, not compute, is the real constraint in LLM deployment.</div>
  <div class="bet-reasoning">
    Most conversations about LLM infrastructure focus on GPU compute and FLOPS. But when you actually profile inference, the GPU is idle most of the time, waiting for model weights to load from memory. On an A100, loading a 7B model takes ~7ms; the computation takes ~0.1ms. We're memory-bound by two orders of magnitude. This changes which optimizations matter - <a href="/blog/2025/making-llm-faster/">speculative decoding</a> works precisely because we're paying the memory tax anyway. Understanding this constraint shapes everything I build.
  </div>
</div>

<div class="bet-item">
  <div class="bet-statement">The next wave of AI safety will be representation-level tooling, not RLHF.</div>
  <div class="bet-reasoning">
    RLHF was the first serious attempt at alignment, and it worked well enough to ship products. But it's a blunt instrument - you're shaping outputs without understanding what's happening inside the model. The next wave will be tools that operate on internal representations: probing for deception, steering activations, detecting when a model "knows" something it's not saying. My work on <a href="https://github.com/bassrehab/ai-metacognition-toolkit">activation probing</a> and <a href="/blog/2025/steering-vectors-agents/">steering vectors</a> is a bet on this direction.
  </div>
</div>

<div class="bet-item">
  <div class="bet-statement">The player-coach model works better than pure management for deep-tech teams.</div>
  <div class="bet-reasoning">
    Conventional wisdom says senior leaders should step back from hands-on work and focus on strategy and people. I think this is wrong for technical organizations. When I stopped writing code, I made worse architectural decisions because I lost touch with real constraints. When I started again, I got better at calling bullshit on unrealistic timelines and knowing when to push versus back off. The right ratio shifts as you grow, but zero is the wrong number.
  </div>
</div>

<div class="bet-item">
  <div class="bet-statement">Consent architecture will be as fundamental as security architecture.</div>
  <div class="bet-reasoning">
    Most consent systems today are legal checkboxes. But as AI systems train on user content, act as agents on users' behalf, and make decisions with user data, consent becomes an architectural concern - not a compliance one. You need to track provenance, enforce permissions at runtime, handle revocation gracefully. I've been working on this since <a href="https://oconsent.io">OConsent</a> in 2021, and more recently with <a href="/blog/2025/building-consent-layer-for-ai/">LLMConsent</a>. Companies that build consent into their foundations will have an advantage when regulations catch up.
  </div>
</div>

<div class="bet-item">
  <div class="bet-statement">The infrastructure around the model matters more than the model itself.</div>
  <div class="bet-reasoning">
    There's a narrative that the biggest model wins - that differentiation comes from having the best foundation model. I don't think this holds for most enterprise applications. The model is maybe 10% of the system. The other 90% is data pipelines, evaluation infrastructure, serving, monitoring, and operational glue. Most AI projects fail not because the model doesn't work, but because everything around the model doesn't work. This is why I spend more time on <a href="/blog/2025/building-spark-llm-eval/">evaluation frameworks</a> and <a href="https://services.google.com/fh/files/blogs/etlc_full_paper.pdf">data processing</a> than on model architecture.
  </div>
</div>

<div class="bet-item">
  <div class="bet-statement">LLM-augmented ETL is the next frontier of enterprise data engineering.</div>
  <div class="bet-reasoning">
    Traditional ETL is brittle - it breaks when schemas change, when source systems evolve, when edge cases multiply. LLMs can handle ambiguity, interpret intent, and adapt to variation in ways that rule-based systems can't. The <a href="https://services.google.com/fh/files/blogs/etlc_full_paper.pdf">ETLC framework</a> I worked on is an early version of this: using language models not to replace pipelines, but to make them more robust and self-healing. I expect this pattern to become standard within a few years.
  </div>
</div>

<div class="bet-item">
  <div class="bet-statement">Robots will be bottlenecked by data and motor inference pipelines, not reasoning.</div>
  <div class="bet-reasoning">
    The popular narrative is that once we solve AGI, robotics will follow. I think the constraint is elsewhere. Getting sensor data processed fast enough, running inference at the edge with tight latency budgets, coordinating motor control in real-time - these are harder engineering problems than high-level reasoning for most robotic applications. The same memory bandwidth constraints that limit LLM inference will limit embodied AI. The winners will be teams that solve the data and inference pipeline, not the ones waiting for better foundation models.
  </div>
</div>

<div class="bet-item">
  <div class="bet-statement">Multi-agent architectures will become the default for enterprise AI.</div>
  <div class="bet-reasoning">
    Single-model approaches hit limits when problems require different types of reasoning, access to different tools, or coordination across domains. The agent frameworks emerging now are clunky, but the underlying pattern - specialized agents collaborating with clear handoffs and fallbacks - will become standard. I've seen this in enterprise deployments: the systems that actually work aren't single brilliant models, they're orchestrated collections of specialized capabilities. <a href="https://www.tdcommons.org/dpubs_series/7729/">ARTEMIS</a> and CatchMe are bets on this architecture.
  </div>
</div>

</div>

<div class="bets-footer">
  <p>
    If you think I'm wrong about something here, I'd genuinely like to hear it. The whole point of writing these down is to be accountable to them. <a href="mailto:contact@subhadipmitra.com">Email me</a> or <a href="https://calendly.com/contact-x9nm/30min">grab time</a> if you want to argue.
  </p>
</div>

<div class="bets-meta">
  Last updated: January 2026
</div>

</div>
