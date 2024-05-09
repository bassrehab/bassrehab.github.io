---
layout: post
title: Reading List
date: 1970-01-02 00:00:01
description: A collected list of research papers, tech blogs, videos that I follow
tags: list
categories: others
giscus_comments: true
featured: true
related_posts: true
toc:
  sidebar: left
---

**last updated:** 2024-05-09

A curated compilation of research papers, tech blogs, and videos that I find most valuable and inspiring.

# 1/ Papers

## 1.1/ general

[Zanzibar: Google’s Consistent, Global Authorization System](https://research.google/pubs/zanzibar-googles-consistent-global-authorization-system/)
design, implementation, and deployment of Zanzibar, a global system for storing and evaluating access control lists for Google services: Calendar, Cloud, Drive, Maps, Photos, and YouTube

[Towards Modern Development of Cloud Applications](https://sigops.org/s/conferences/hotos/2023/papers/ghemawat.pdf)
Introduces modular monoliths.

[Delta Lake: High-Performance ACID Table Storage over Cloud Object Stores](https://www.databricks.com/wp-content/uploads/2020/08/p975-armbrust.pdf)
The delta table format for big data lakehouse

[Bigtable: A Distributed Storage System for Structured Data](https://static.googleusercontent.com/media/research.google.com/en//archive/bigtable-osdi06.pdf)
Google's paper on the bigtable format

[Presto: SQL on Everything](https://trino.io/Presto_SQL_on_Everything.pdf)
SQL Query engine for interactive analytics in big data.

[Napa: Powering Scalable Data Warehousing with Robust Query Performance at Google](https://research.google/pubs/napa-powering-scalable-data-warehousing-with-robust-query-performance-at-google/)
A customizable data warehouse technology for google

[Dynamo: Amazon’s Highly Available Key-value Store](https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf)
Foundational paper on AWS DynamoDB

[Gorilla: A Fast, Scalable, In-Memory Time Series Database](https://drive.google.com/file/d/13jFQkD2OmydymjPFLnsvsQUwMwhmynIh/view)
A great paper which explains the core ideas behind time-series databases

[Sharding the Shards: Managing Datastore Locality at Scale with Akkio](https://www.usenix.org/system/files/osdi18-annamalai.pdf)
Meta's data placement service

[AutoDev: Automated AI-Driven Development](https://arxiv.org/pdf/2403.08299.pdf)
Autonomous Developer paper from Microsoft.

[Google File System](https://static.googleusercontent.com/media/research.google.com/en//archive/gfs-sosp2003.pdf)
The google dile system paper that HDFS is based on

[Meta’s Microservice Architecture](https://www.usenix.org/system/files/atc23-huye.pdf)
[HN Discussion Thread](https://news.ycombinator.com/item?id=36676810)

## 1.2/ ai/ml

todo

# 2/ Blogs

## 2.1/ Aggregated links:

- [Netflix TechBlog](https://medium.com/netflix-techblog)
- [Uber Blog](http://eng.uber.com/)
- [The Cloudflare Blog](https://blog.cloudflare.com/)
- [Engineering at Meta](https://engineering.fb.com/)
- [LinkedIn Engineering](https://engineering.linkedin.com/blog)
- [AWS Architecture Blog](https://aws.amazon.com/blogs/architecture/)
- [Stripe Blog: Engineering](https://stripe.com/blog/engineering)
- [Discord Blog: Engineering & Developers](https://discord.com/category/engineering)
- [Slack Engineering](https://slack.engineering/)

- [Twitter Engineering Blog](https://lnkd.in/evMFNhEs)

- [Spotify Engineering](https://lnkd.in/eJerVRQM)

- [Databricks](https://lnkd.in/eXcBj37a)

- [Canva Engineering Blog](https://canvatechblog.com/)

- [The Airbnb Tech Blog](https://lnkd.in/emGrJbGM)

- [Capital One](https://lnkd.in/ezsKUf_H)

## 2.2/ Individual links:

[Fixing Go's Linker](https://www.uber.com/en-IN/blog/fixing-gos-linker/?uclick_id=e30f9188-99b2-40b7-a79f-a66a169984bb)
Uber's journey into Go's linker internals

[How Meta built the infrastructure for Threads](https://engineering.fb.com/2023/12/19/core-infra/how-meta-built-the-infrastructure-for-threads/)
The infra that powers theads

[How Levels.fyi scaled to millions of users with Google Sheets as a backend](https://www.levels.fyi/blog/scaling-to-millions-with-google-sheets.html)
Frugal data storage using google sheets

[Intelligent DNS based load balancing at Dropbox](https://dropbox.tech/infrastructure/intelligent-dns-based-load-balancing-at-dropbox)
How dropbox makes its DNS faster

[Working with PostgreSQL (Zerodha)](https://zerodha.tech/blog/working-with-postgresql/)
How India's largest stock broker _used to_ use postgres

[The technology behind GitHub’s new code search](https://github.blog/2023-02-06-the-technology-behind-githubs-new-code-search/)
How does github's code search work

[Using Server Sent Events to Simplify Real-time Streaming at Scale](https://shopify.engineering/server-sent-events-data-streaming)
Managing BFCM events using server sent events

[#BehindTheBug — Indexing Gone Wrong](https://bytes.swiggy.com/behindthebug-indexing-gone-wrong-6b4d682fd805)
How wrong indexing crashed Swiggy instamart

[αcτµαlly pδrταblε εxεcµταblε](https://justine.lol/ape.html)
Cross platform C/C++ binaries

[How we built a general purpose key value store for Facebook with ZippyDB](https://engineering.fb.com/2021/08/06/core-infra/zippydb/)
Meta's distributed key/value store

[Asynchronous computing @Facebook: Driving efficiency and developer productivity at Facebook scale](https://engineering.fb.com/2020/08/17/production-engineering/async/)
Meta's asynchronous compute platform

[Managing data store locality at scale with Akkio](https://engineering.fb.com/2018/10/08/core-infra/akkio/)
Meta's data placement service: Akkio

[How we built Pingora, the proxy that connects Cloudflare to the Internet](https://blog.cloudflare.com/how-we-built-pingora-the-proxy-that-connects-cloudflare-to-the-internet)
Cloudflare's nginx replacement

[Fixing duplicate stories in Medium’s For You feed](https://medium.engineering/fixing-duplicate-stories-in-mediums-for-you-feed-48e6d4e2b80d)
How medium fixed duplicate stories

[Designing a wide-column database on RocksDB](https://medium.com/pinterest-engineering/building-pinterests-new-wide-column-database-using-rocksdb-f5277ee4e3d2)
How Pinterest built a wide-column database on RocksDB

# 2.3 / Others

[Smashing the state machine: the true potential of web race conditions](https://portswigger.net/research/smashing-the-state-machine)
Web race condition attacks

# 3/ Videos

## 3.1/ Youtube Channels

todo

## 3.2/ Playlists

[Linux Device Driver Videos](https://www.youtube.com/playlist?list=PLEDdkj8kDlEDC5MzEwDY7xz03b_q77hPX)
Networking, Kernel, IPV6, Device Drivers

## 3.3/ Individual Videos

[Linux packet journey,napi, hardware queue,skb](https://www.youtube.com/watch?v=6Fl1rsxk4JQ)

# 4/ Awesomness

## System Design

[awesome-scalability](https://github.com/binhnguyennus/awesome-scalability)
The Patterns of Scalable, Reliable, and Performant Large-Scale Systems

[awesome-distributed-systems](https://github.com/theanalyst/awesome-distributed-systems)
A curated list to learn about distributed systems

[awesome-grpc](https://github.com/grpc-ecosystem/awesome-grpc)
A curated list of useful resources for gRPC

## Graphs

[awesome-graph](https://github.com/jbmusso/awesome-graph)
A curated list of resources for graph databases and graph computing tools

[awesome-explainable-graph-reasoning](https://github.com/AstraZeneca/awesome-explainable-graph-reasoning)
A collection of research papers and software related to explainability in graph machine learning.

[Awesome-GFlowNets](https://github.com/zdhNarsil/Awesome-GFlowNets)
A curated list of resources about generative flow networks (GFlowNets).

Graph Neural Networks (GNN)

- [Graph Neural Networks (GNN) link 1](https://github.com/GRAND-Lab/Awesome-Graph-Neural-Networks)
- [Graph Neural Networks (GNN) link 2](https://github.com/thunlp/GNNPapers)
- [Graph Neural Networks (GNN) link 3](https://github.com/mengliu1998/awesome-deep-gnn)
- [Expressive GNN](https://github.com/mengliu1998/awesome-expressive-gnn)

## Data Engineering

[awesome-data-engineering](https://github.com/igorbarinov/awesome-data-engineering)
A curated list of data engineering tools for software developers

[awesome-opensource-data-engineering](https://github.com/gunnarmorling/awesome-opensource-data-engineering)
An Awesome List of Open-Source Data Engineering Projects

[awesome-flink](https://github.com/wuchong/awesome-flink)
A curated list of amazingly awesome Flink and Flink ecosystem resources

## Cryptography / Blockchain / DLT

[awesome-zero-knowledge-proofs](https://github.com/matter-labs/awesome-zero-knowledge-proofs)
A curated list of awesome things related to learning Zero-Knowledge Proofs (ZKP).

## AI / ML

[awesome-chatgpt-prompts](https://github.com/f/awesome-chatgpt-prompts)
A curated list of awesome Machine Learning frameworks, libraries and software.

[awesome-machine-learning](https://github.com/josephmisiti/awesome-machine-learning)
A curated list of awesome Machine Learning frameworks, libraries and software.

[awesome-production-machine-learning](https://github.com/EthicalML/awesome-production-machine-learning)
A curated list of awesome open source libraries to deploy, monitor, version and scale your machine learning

[awesome-deep-vision](https://github.com/kjw0612/awesome-deep-vision)
A curated list of deep learning resources for computer vision

[awesome-self-supervised-learning](https://github.com/jason718/awesome-self-supervised-learning)
A curated list of awesome self-supervised methods

[Awesome-LLMOps](https://github.com/tensorchord/Awesome-LLMOps)
An awesome & curated list of best LLMOps tools for developers

Causal Inference/ML

- [Causal Inference/ML Link 1](https://github.com/rguo12/awesome-causality-algorithms)
- [Causal Inference/ML Link 2](https://github.com/imirzadeh/awesome-causal-inference)
- [Causal Inference/ML Link 3](https://shubhanshu.com/awesome-causality/)
- [Causal Inference Visual Guides](https://github.com/kathoffman/causal-inference-visual-guides)
- [Awesome-Uplift-Model - Causal ML](https://github.com/JackHCC/Awesome-Uplift-Model) How to Apply Causal ML to Real Scene Modeling？How to learn Causal ML？

Meta Learning

- [Meta learning link 1](https://github.com/dragen1860/awesome-meta-learning)
- [Meta learning link 2](https://github.com/sudharsan13296/Awesome-Meta-Learning)

Self supervised learning

- [Self supervised learning link 1](https://github.com/jason718/awesome-self-supervised-learning)
- [Self supervised learning link 2](https://github.com/wvangansbeke/Self-Supervised-Learning-Overview)
- [Semi supervised learning](https://github.com/yassouali/awesome-semi-supervised-learning)

Transformers

- [Transformers link 1](https://github.com/ictnlp/awesome-transformer)
- [Treasure-of-Transformers](https://github.com/ashishpatel26/Treasure-of-Transformers)
- [Transformers link 2](https://github.com/abacaj/awesome-transformers)

## Quantum

[awesome-quantum-machine-learning](https://github.com/krishnakumarsekar/awesome-quantum-machine-learning)
Here you can get all the Quantum Machine learning Basics, Algorithms ,Study Materials ,Projects and the descriptions of the projects around the web
