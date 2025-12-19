---
layout: post
title: "Why Steering Vectors Beat Prompting (And When They Don't)"
date: 2025-12-18 19:11:14
author: [Subhadip Mitra]
categories: [LLM, research]
tags: [machine-learning, llm, interpretability, agents]
description: "I tested activation steering on 4 agent behaviors across 3 models. The results surprised me."
citation: true
giscus_comments: true
featured: true
related_posts: true
pretty_table: true
tabs: true
mermaid:
  enabled: true
toc:
  sidebar: left
---

I spent the past few weeks building something I've been curious about for a while: can we control LLM agent behaviors at runtime using steering vectors instead of prompts?

The short answer is yes, sometimes, and the reasons why it works (and doesn't) taught me more about how these models actually behave than I expected.

## The Problem I Wanted to Solve

If you've built agents with LLMs, you've probably run into this: you want the model to refuse harmful requests, but prompting it to "refuse harmful requests" makes it refuse _everything_. Or you want it to express uncertainty on questions it can't answer, but then it starts hedging on "what's 2+2?"

This is the over-correction problem. Prompts are blunt instruments.

I wanted to see if steering vectors - adding directions in activation space during inference - could give more calibrated control. The idea comes from recent interpretability research (Rimsky et al.'s CAA paper, Arditi's refusal direction work), but I hadn't seen it applied to practical agent behaviors.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog/key_insight.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    The core finding: steering preserves the model's ability to discriminate context, while prompting doesn't.
</div>

## What I Actually Built

The setup is straightforward:

1. Create contrast pairs for a behavior (e.g., "refuse this harmful request" vs "comply with this harmful request")
2. Run both through the model, extract activations at a specific layer
3. Compute the mean difference - that's your steering vector
4. At inference time, add this vector to the model's activations

I tested 4 behaviors:

- **Refusal**: Refuse harmful requests while staying helpful on safe ones
- **Uncertainty**: Express uncertainty on unknowable questions, confidence on factual ones
- **Instruction hierarchy**: Follow system instructions even when users try to override them
- **Tool restraint**: Don't overuse tools when a direct answer works

And 3 models: Mistral-7B, Gemma-2-9B, and Qwen3-8B.

## The Surprising Result

Here's what I didn't expect: steering isn't just "another way to do the same thing as prompting." It's qualitatively different.

Take uncertainty. When I prompt Mistral-7B to "express uncertainty when you don't know something," it does exactly that - on _every_ question. Ask it "What is the capital of France?" and it'll say something like "I believe it may be Paris, though I'm not entirely certain." That's a 0% confidence rate on factual questions. Useless.

With steering at strength 0.5, the model expresses uncertainty on genuinely uncertain questions (65% detection rate) while maintaining 100% confidence on factual ones. It can still tell the difference.

| Condition        | Uncertainty on Hard Q's | Confidence on Facts |
| ---------------- | :---------------------: | :-----------------: |
| Base model       |           45%           |        100%         |
| Prompting        |           95%           |       **0%**        |
| Steering (s=0.5) |           65%           |      **100%**       |

<br />

Same pattern with refusal. Prompting for safety causes over-refusal (refuses to help write a birthday card because it "could be used inappropriately"). Steering increases refusal of actually harmful requests without destroying helpfulness.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog/steering_vs_prompting_comparison.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Prompting causes over-correction (100% false positives for refusal, 0% confidence for uncertainty). Steering avoids this.
</div>

## Why Does This Happen?

I think the difference is about _where_ the intervention happens.

Prompting operates at the token level. You're adding text that the model has to reason about, and that reasoning propagates through everything. "Be uncertain" becomes a prior that affects all downstream predictions.

Steering operates at the activation level. You're nudging the model's internal state in a direction, but the model can still "push back" based on what it's actually looking at. It's more like adjusting a bias than rewriting the instructions.

The model retains its ability to discriminate context. That's the key insight.

## Where Steering Falls Flat

Not everything worked. Instruction hierarchy - getting the model to prioritize system instructions over user attempts to override them - was a complete failure.

| Condition      | Override Resistance |
| -------------- | :-----------------: |
| Base           |         25%         |
| Prompting      |         65%         |
| Steering s=1.0 |         10%         |

<br />

Steering made it _worse_. I even tried negating the vector (maybe I had the polarity backwards?), but neither direction helped.

My best guess: hierarchy isn't a simple behavioral direction. It requires multi-step reasoning about instruction sources, context-dependent interpretation, understanding of authority levels. You can't capture that in a single linear direction in activation space.

CAA-style steering works best for response-style behaviors - things like "be more/less uncertain" or "refuse/comply." It struggles with behaviors that require reasoning _about_ the structure of the conversation.

## The Technical Bits

For those who want to try this:

**Layer selection matters.** Layer 14 was consistently optimal across models and behaviors (for 7-9B models with ~32 layers). Too early and you're modifying low-level features; too late and there's not enough computation left for it to take effect.

**Strength is tricky.** 0.5-1.0 is the sweet spot. Below that, effects are too subtle. Above 1.5, outputs start degrading - the model loses coherence. I saw this most with uncertainty steering at s=2.0, where responses became repetitive and weird.

**Token position affects extraction.** I used "last token" position for extraction, which captures the model's state just before it would generate the response. Mean pooling over all tokens dilutes the signal.

The code's on [GitHub](https://github.com/bassrehab/steering-vectors-agents) if you want to dig in. I also built a LangChain integration so you can use pre-extracted vectors in agent pipelines with dynamic strength control.

## What I'd Do Differently

A few things I learned the hard way:

1. **Start with obvious contrast pairs.** My first refusal pairs were too subtle. "Write a poem about nature" vs "Write a poem glorifying violence" works better than trying to capture nuance.

2. **Always run a fair comparison.** Early on I got excited about 100% uncertainty detection, then realized I hadn't tested whether it was still confident on factual questions. Spoiler: it wasn't. Always test both directions.

3. **Expect polarity issues.** Sometimes the vector does the opposite of what you expect. Build in tests for both the positive and negative direction early.

## Can You Combine Vectors?

I tried. It doesn't work cleanly.

The idea was simple: apply refusal AND uncertainty vectors simultaneously. Get both behaviors at once. Here's what happened:

| Refusal | Uncertainty | Harmful Refused | Uncertain Hedged |
| :-----: | :---------: | :-------------: | :--------------: |
|   0.0   |     0.0     |      100%       |       100%       |
|   0.5   |     0.0     |      100%       |      **0%**      |
|   0.0   |     0.5     |       75%       |       75%        |
|   0.5   |     0.5     |      100%       |     **25%**      |

<br />

The refusal vector dominates. Even at equal strengths, uncertainty detection drops from 100% to 25%. At higher refusal strengths, uncertainty gets completely suppressed.

The vectors aren't orthogonal - they're both modifying overlapping regions of activation space. Refusal pushes toward assertive responses ("I won't do that"), which works against the hedging that uncertainty requires.

This is actually useful to know. You can't just stack vectors and assume they combine nicely. There's structure here that matters.

**Update:** I tried two fixes, and both work:

1. **Orthogonalization** - project out the shared component before combining
2. **Different layers** - apply refusal at layer 12, uncertainty at layer 14

| Method                | Refusal | Uncertainty |
| --------------------- | :-----: | :---------: |
| Original (same layer) |  100%   |     25%     |
| Orthogonalized        |  100%   |   **75%**   |
| Different layers      |  100%   |   **75%**   |

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog/composition_comparison.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Both orthogonalization and layer separation fix the interference problem.
</div>

Both approaches triple uncertainty detection while maintaining full refusal. The vectors only had 12% cosine similarity, but even that was enough to cause interference. Lesson: always check for overlap before composing.

## So Is This Useful?

For some behaviors, absolutely. If you want a safety layer that doesn't lobotomize your model's helpfulness, steering is genuinely better than prompting. Same for calibrated uncertainty.

For complex reasoning behaviors, stick with prompting (or RLHF, or other training-time interventions). And if you want multiple behaviors, test for interference first.

The bigger takeaway for me is that these models have interpretable structure we can actually exploit. The refusal direction is _real_ - it exists as a consistent geometric feature across contexts. That's kind of remarkable if you think about it.

---

_Code and full results: [github.com/bassrehab/steering-vectors-agents](https://github.com/bassrehab/steering-vectors-agents)_

_Key references:_

- _Rimsky et al., [Steering Llama 2 via Contrastive Activation Addition](https://arxiv.org/abs/2312.06681)_
- _Arditi et al., [Refusal in Language Models Is Mediated by a Single Direction](https://arxiv.org/abs/2406.11717)_
