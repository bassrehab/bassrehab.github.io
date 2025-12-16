---
layout: post
title: "Why I Built a Spark-Native LLM Evaluation Framework (And What I Learned)"
date: 2025-12-15 18:21:35
author: [Subhadip Mitra]
categories: [MLOps, Distributed Systems, LLM]
tags: [llm-evaluation, apache-spark, databricks, mlops, distributed-systems, statistical-analysis, llm]
description: "A deep dive into building distributed LLM evaluation infrastructure that actually scales - architectural decisions, trade-offs, and lessons learned."
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

This post is a deep dive into building [spark-llm-eval](https://github.com/bassrehab/spark-llm-eval), an open-source framework for running LLM evaluations at scale on Apache Spark. I'll cover the architectural decisions, trade-offs, and lessons learned along the way.

> **TL;DR:** `pip install spark-llm-eval` - Distributed LLM evaluation with statistical rigor, built for Spark/Databricks.

## The Problem That Wouldn't Go Away

I've spent the last few years watching teams struggle with the same problem: how do you actually evaluate LLMs at scale? Not the "run 100 examples on your laptop" scale that works fine for research papers, but the "we have 50 million customer interactions and need statistical confidence in our results" scale that enterprises actually deal with.

The tooling landscape is... frustrating. Most evaluation frameworks assume you're running locally. They collect predictions into memory, compute metrics in pandas, and call it a day. That works until it doesn't, and when it doesn't, you're left duct-taping Spark jobs together with custom metric code that nobody wants to maintain.

So I built [spark-llm-eval](https://github.com/bassrehab/spark-llm-eval) - a framework designed from the ground up to run natively on Spark. Not "Spark as an afterthought" or "we added a Spark wrapper," but actually thinking about distributed evaluation as the primary use case.

## Quick Start

Before getting into the weeds, here's what using the framework actually looks like:

```python
from pyspark.sql import SparkSession
from spark_llm_eval.core.config import ModelConfig, ModelProvider
from spark_llm_eval.core.task import EvalTask
from spark_llm_eval.orchestrator.runner import run_evaluation

spark = SparkSession.builder.appName("llm-eval").getOrCreate()

# Load your eval dataset from Delta Lake
data = spark.read.table("my_catalog.eval_datasets.qa_benchmark")

# Configure the model
model_config = ModelConfig(
    provider=ModelProvider.OPENAI,
    model_name="gpt-4o-mini",
    api_key_secret="secrets/openai-key"
)

# Define the evaluation task
task = EvalTask(
    task_id="qa-eval-001",
    prompt_template="Answer this question: {{question}}",
    reference_column="expected_answer"
)

# Run evaluation with metrics
result = run_evaluation(
    spark, data, task, model_config,
    metrics=["exact_match", "f1", "bleu"]
)

# Results include confidence intervals
print(result.metrics["f1"])
# MetricValue(value=0.73, confidence_interval=(0.71, 0.75), ...)
```

That's it. The framework handles batching, rate limiting, retries, and statistical computation. Results are automatically logged to MLflow if configured.

## Why Spark? (And Why Not Just Use Ray or Dask?)

[Ray](https://www.ray.io/) and other newer frameworks get a lot of attention for ML workloads, and they solve real problems. But here's the practical reality: most enterprises already have significant Spark infrastructure. Their data pipelines run on Spark. Their data engineers know Spark. Their governance and security are built around Spark. If you're on Databricks, your data is in Delta Lake, your governance is through Unity Catalog, and your experiments are tracked in MLflow.

Building another evaluation framework that requires spinning up a separate Ray cluster, moving data around, and maintaining yet another piece of infrastructure just didn't make sense to me. The goal was to meet teams where they are, not where I think they should be.

There's also something to be said for Spark's maturity around exactly-once semantics, fault tolerance, and integration with data governance tooling. When you're evaluating models that will make decisions affecting real customers, having audit trails and proper data lineage isn't optional.

## How It Compares

Before diving into the architecture, here's how spark-llm-eval stacks up against other popular frameworks:

| Feature                  | spark-llm-eval | DeepEval   | Ragas     | LangSmith |
| ------------------------ | -------------- | ---------- | --------- | --------- |
| Spark-native             | ✅             | ❌         | ❌        | ❌        |
| Distributed execution    | ✅ Native      | ⚠️ Manual  | ⚠️ Manual | ❌        |
| Confidence intervals     | ✅ Built-in    | ❌         | ❌        | ❌        |
| Delta Lake integration   | ✅             | ❌         | ❌        | ❌        |
| MLflow tracking          | ✅             | ❌         | ❌        | ❌        |
| Multi-provider inference | ✅             | ✅         | ✅        | ✅        |
| LLM-as-judge             | ✅             | ✅         | ✅        | ✅        |
| Agent evaluation         | ✅             | ⚠️ Limited | ❌        | ✅        |

The key differentiator isn't any single feature - it's that spark-llm-eval treats distributed execution and statistical rigor as first-class concerns rather than afterthoughts.

### vs. Databricks MLflow GenAI Eval

A question that comes up frequently: how does this compare to [Databricks' built-in MLflow GenAI evaluation](https://docs.databricks.com/aws/en/mlflow3/genai/eval-monitor/)? They solve different problems:

|                          | MLflow GenAI Eval                                    | spark-llm-eval                                         |
| ------------------------ | ---------------------------------------------------- | ------------------------------------------------------ |
| **Primary use case**     | Development evaluation + production trace monitoring | Large-scale batch evaluation                           |
| **Scale**                | Individual traces / small datasets                   | Millions of examples (Spark-distributed)               |
| **Statistical analysis** | Point estimates                                      | Bootstrap CIs, paired t-tests, McNemar's, effect sizes |
| **Model providers**      | Databricks model serving focused                     | Multi-provider (OpenAI, Anthropic, Gemini, vLLM)       |
| **Cost controls**        | Standard                                             | Token bucket rate limiting, batching optimization      |
| **Workflow**             | Continuous monitoring, human feedback loops          | Systematic benchmark sweeps, model comparison          |

<br />

**When to use MLflow GenAI Eval:**

- You're building an agent or RAG application and want to monitor quality in production
- You need human feedback collection via the Review App
- You want to reuse the same judges/scorers across dev and production
- Your evaluation datasets are small to medium sized

**When to use spark-llm-eval:**

- You need to evaluate against your entire corpus (e.g., 500K customer support tickets)
- You're comparing models and need statistical significance with confidence intervals
- You want to run systematic benchmark sweeps across model versions
- You need detailed statistical analysis (effect sizes, power analysis, stratified metrics)

They're complementary - spark-llm-eval uses MLflow for experiment tracking internally. The gap spark-llm-eval fills is: "I have 2M labeled examples in Delta Lake and need to know if Model A is statistically significantly better than Model B."

## The Architecture (And The Trade-offs I Made)

The core insight behind spark-llm-eval is that LLM evaluation is embarrassingly parallel at the example level, but the aggregation phase requires care. Each example can be scored independently, but computing confidence intervals, running significance tests, and handling stratified metrics requires coordination.

Here's the high-level architecture:

<br />

{% include figure.liquid loading="eager" path="assets/img/blog/spark-eval-arch.png" class="img-fluid rounded z-depth-1" zoomable=true %}

<br />

Here's how it breaks down:

### Inference Layer

The inference layer uses Pandas UDFs with Arrow for efficient batching. Each executor maintains its own connection pool to the LLM provider, with executor-local caching to avoid reinitializing clients for every batch.

```python
# Simplified view of the batch UDF approach
@pandas_udf(InferenceOutputSchema)
def inference_udf(batch_iter):
    engine = get_or_create_engine()  # cached per executor
    for batch in batch_iter:
        yield engine.infer_batch(batch)
```

I went back and forth on whether to use mapInPandas or standard Pandas UDFs. Ended up with mapInPandas because it gives more control over batching and memory management when dealing with variable-length LLM responses. The performance difference is negligible for most use cases, but the control matters when you're hitting rate limits or dealing with particularly long outputs.

### Rate Limiting (The Part Nobody Talks About)

Here's something that surprised me: rate limiting in a distributed context is genuinely hard. You can't just use a local token bucket because each executor has its own process. You could use Redis or some external coordinator, but that adds latency and another failure mode.

I ended up with a pragmatic solution: per-executor rate limiting with conservative defaults. Each executor gets a fraction of the total rate limit, with some headroom for variance. It's not optimal - you might leave some capacity on the table - but it's predictable and doesn't require external coordination.

```python
# Rate limit per executor = total_limit / num_executors * safety_factor
executor_limit = (requests_per_minute / num_executors) * 0.8
```

The 0.8 factor is a hack, honestly. But it works, and I've found that slightly underutilizing your rate limit is better than hitting 429s and having to implement complex retry logic.

### Statistical Rigor

This is where I got a bit obsessive. Most evaluation frameworks give you point estimates - "your model got 73% accuracy" - and call it done. But that number is meaningless without context. Is that 73% from 100 examples or 100,000? What's the confidence interval? Is the difference between model A at 73% and model B at 71% actually significant, or just noise?

spark-llm-eval computes bootstrap confidence intervals by default. For binary metrics like accuracy, you get proper Wilson intervals. For comparing models, you get paired significance tests that account for the fact that you're testing on the same examples.

```python
result = runner.run(data, task)
print(result.metrics["accuracy"])
# MetricValue(
#     value=0.73,
#     confidence_interval=(0.71, 0.75),
#     confidence_level=0.95,
#     standard_error=0.012
# )
```

I've seen too many "we improved the model by 2%" claims that evaporate under proper statistical scrutiny. Baking this into the framework means teams get rigorous results without having to think about it.

## The Parts That Were Harder Than Expected

### Multi-Provider Inference

Supporting multiple LLM providers (OpenAI, Anthropic, Google, vLLM) sounds straightforward until you realize each one has its own:

- Authentication mechanism
- Rate limiting behavior
- Response format
- Error handling quirks
- Pricing model

I ended up with a factory pattern for inference engines, but the abstraction is leaky in places. Anthropic's rate limiting is different from OpenAI's. Google's safety filters can reject prompts that work fine elsewhere. vLLM deployments vary wildly in their configuration.

The pragmatic solution was to make the abstraction thin and let provider-specific behavior bubble up through configuration rather than trying to hide it. Users need to know they're hitting OpenAI vs Anthropic anyway for cost and latency reasons.

### LLM-as-Judge Evaluation

Using LLMs to evaluate LLM outputs is philosophically weird but practically useful. The challenge is that judge prompts are incredibly sensitive to formatting, and getting consistent results requires more prompt engineering than I'd like to admit.

The framework includes a judge abstraction with support for multi-aspect scoring and calibration, but I'm still not entirely happy with it. There's a fundamental tension between making judges easy to use and making them reliable. The current implementation errs on the side of flexibility at the cost of requiring users to validate their judge prompts carefully.

### Agent Trajectory Evaluation

Evaluating multi-turn agent conversations was a late addition, and it shows in places. The challenge is that "correctness" for an agent trajectory is much fuzzier than for single-turn QA. Did the agent achieve the goal? Was it efficient? Did it recover from mistakes?

I ended up with a trajectory abstraction that captures actions, observations, and state, with metrics for goal completion, efficiency, and action sequence similarity. It works for the common cases, but agent evaluation is still an open research problem and the framework reflects that uncertainty.

## Performance at Scale

I've tested the framework across various cluster configurations. Here are some ballpark numbers to set expectations:

| Dataset Size  | Cluster Config             | Time      | Notes                                  |
| ------------- | -------------------------- | --------- | -------------------------------------- |
| 10K examples  | 4 executors, 4 cores each  | ~15 min   | Rate-limited by OpenAI                 |
| 100K examples | 8 executors, 8 cores each  | ~2 hours  | Parallelism helps significantly        |
| 1M examples   | 16 executors, 8 cores each | ~18 hours | Batch inference mode, cached responses |

The bottleneck is almost always the LLM API, not Spark. With self-hosted vLLM, you can push much higher throughput since you control the rate limits. The framework scales linearly with executors until you hit API limits.

Here's what the Spark job execution looks like for a typical evaluation run:

{% include figure.liquid loading="eager" path="assets/img/blog/spark-history-app-jobs.png" class="img-fluid rounded z-depth-1" zoomable=true %}

<br />

And the MLflow integration captures everything for reproducibility:

<br />
{% include figure.liquid loading="eager" path="assets/img/blog/mlflow-details-page-metrics.png" class="img-fluid rounded z-depth-1" zoomable=true %}

## What I'd Do Differently

If I were starting over, I'd:

1. **Start with better observability.** I added MLflow integration late, and it shows. Proper experiment tracking should be first-class from day one.

2. **Think harder about caching.** The current response caching is file-based and works for most cases, but a proper semantic cache would reduce both cost and latency for repeated evaluations.

3. **Build stratification in earlier.** Computing metrics by subgroup (by language, by topic, by user segment) is critical for catching model regressions that hide in aggregate metrics. The current implementation supports it, but it feels bolted on.

## The Stuff That Worked

On the positive side:

- **Delta Lake integration** was the right call. Having evaluation results as versioned, queryable tables makes debugging and analysis much easier than JSON files or custom formats.

- **Making statistics non-optional** has saved teams from making bad decisions based on noisy metrics. Even when people grumble about "why do I need confidence intervals," having them available changes the conversation.

- **Databricks-native deployment** meant teams could go from "I want to evaluate my model" to actually running evaluations in minutes, not days. No separate infrastructure to manage, no data movement, no new permissions to negotiate with IT.

## What's Next

The framework is functional, but there's more I want to build:

- **Streaming evaluation** - Support for evaluating against live data streams, not just batch datasets. Think continuous monitoring of production model outputs.

- **Semantic caching** - Using embeddings to cache similar prompts and reduce redundant API calls. Could cut costs significantly for iterative evaluation runs.

- **Automated regression detection** - Statistical tests that automatically flag when a new model version degrades on specific subgroups, even if aggregate metrics look fine.

- **Better agent evaluation** - This space is evolving fast. I want to add support for tool-use evaluation, multi-agent scenarios, and longer-horizon task completion metrics.

If any of these resonate with your use case, [open an issue](https://github.com/bassrehab/spark-llm-eval/issues) or reach out. Priorities are driven by what people actually need.

## Wrapping Up

Building spark-llm-eval reinforced something I keep relearning: the hard part of ML infrastructure isn't the algorithms, it's the plumbing. Handling rate limits, managing credentials, dealing with provider-specific quirks, computing proper statistics - none of this is glamorous, but it's where most teams get stuck.

The framework is [open source](https://github.com/bassrehab/spark-llm-eval) and available on PyPI (`pip install spark-llm-eval`). If you're doing LLM evaluation at scale on Spark/Databricks, I'd love to hear what works and what doesn't. The space is evolving fast, and I don't pretend to have all the answers.

---

_Feedback? Find me on [GitHub](https://github.com/bassrehab) or open an issue on the repo._
