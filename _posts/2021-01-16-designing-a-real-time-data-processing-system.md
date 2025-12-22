---
layout: post
title: Designing a Real Time Data Processing System
date: 2021-01-16 02:04:01
description: Master real-time data processing - A guide to designing scalable, resilient, and high-performance systems for instant insights.
tags: system-design
categories: system-design platform
giscus_comments: true
featured: false
related_posts: true
toc:
  sidebar: left
---

Designing and developing large-scale distributed real-time data processing systems is a complex undertaking. These systems must handle massive volumes of data, often with strict latency requirements, while maintaining reliability and scalability. Over the years, I've encountered various challenges and developed a set of principles to guide the design process. These principles have evolved alongside changing usage patterns and the increasing demands placed on these systems. This guide aims to share these insights, covering key considerations in various stages of the design and implementation process.

## Considerations

<br />

### 1. Data Ingestion and Processing

- **Processing Semantics**: Carefully choose the appropriate processing semantics for your use case. "Exactly once" processing guarantees that each message is processed exactly once, while "at least once" processing ensures that messages are processed at least once, but may be processed multiple times. Consider configuring different semantics per use case if needed.
- **Consistency vs. Availability**: Understand the tradeoffs between consistency (all nodes seeing the same data at the same time) and availability (the system's ability to respond to requests even during network partitions). Refer to the [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem), which states that it's impossible to achieve perfect consistency, availability, and partition tolerance simultaneously.
- **[In-Memory Data Grids](https://www.gartner.com/reviews/market/in-memory-data-grids) (IMDGs)**: Consider using IMDGs or caching layers that support transactions, preferably ACID-compliant, for fast access and data consistency. Explore options like [distributed transaction support in microservices through Sagas](https://microservices.io/patterns/data/saga.html) or the [three-phase commit protocol](https://en.wikipedia.org/wiki/Three-phase_commit_protocol).
- **Reproducibility and Workflows**: Design programmatic workflows that allow for independent step re-executions. [Apache Airflow](https://airflow.apache.org/) is a popular choice for orchestrating these workflows.
- **Performance Goals**: Define clear performance goals in terms of throughput (e.g., millions of events per second) and latency (e.g., 99th percentile latency of less than 2 seconds). Modern systems should aim to handle spikes in load without resorting to [backpressure](https://medium.com/@jayphelps/backpressure-explained-the-flow-of-data-through-software-2350b3e77ce7), which can introduce additional latency. However, backpressure might still be relevant in some scenarios, such as when integrating with legacy systems.
- **State Management**: In real-time systems, state refers to the data that needs to be retained across events to perform computations. This can include aggregates, counters, or other contextual information. Effective state management is crucial for accuracy and correctness. Options include:
  - **Embedded Key-Value Stores**: Lightweight databases like RocksDB can be embedded within the stream processing engine to store and manage state.
  - **Distributed Databases**: External databases like Cassandra or Redis can be used to store state, providing scalability and fault tolerance.
  - **Stateful Stream Processing Frameworks**: Some frameworks, like Apache Flink, provide built-in mechanisms for managing state, abstracting the underlying storage details.
- **Approximation Algorithms and Data Structures**: For certain real-time use cases where exact results are not strictly required, consider using approximation algorithms and probabilistic data structures. These can provide significant performance benefits by sacrificing a small degree of accuracy. Examples include:
  - **Bloom Filters**: Quickly determine if an element is likely present in a set with high probability. Useful for tasks like duplicate detection or cache filtering.
  - **Count-Min Sketch**: Estimate the frequency of items in a stream with limited memory. Helpful for identifying frequent items or heavy hitters.
  - **HyperLogLog**: Estimate the cardinality (number of unique elements) of a set with very low memory usage. Used for counting unique visitors, unique search queries, etc.
  - **Reservoir Sampling**: Maintain a representative sample of a stream when the full dataset is too large to store.
- **Stream Mining**: Stream mining involves extracting knowledge and insights from continuous streams of data in real-time. Unlike traditional data mining, which operates on static datasets, stream mining deals with unbounded data arriving at high velocity. This requires specialized algorithms and techniques to handle the challenges of limited memory, evolving data distributions (concept drift), and the need for immediate results.
- **Stream Joins**: If your use case involves joining multiple data streams, explore different stream join techniques (e.g., windowed joins, stateful joins) to combine data in real time.

<br />

Conceptual implementation of HypeLogLog in Python:

```python
import hyperloglog  # Assume a suitable HyperLogLog library is available

hll = hyperloglog.HyperLogLog(0.01)  # Create HyperLogLog with 1% error rate

def process_visitor_id(visitor_id):
    hll.add(hash(visitor_id))

# (Stream visitor IDs and call process_visitor_id for each ID)

approximate_count = hll.count()
print("Approximate count of unique visitors:", approximate_count)
```

<br />

### 2. Service Design

- **Stateless Services**: Favor stateless services, as they are easier to scale horizontally by adding new instances without the need for state synchronization.
- **Reactive Microservices:** Adopt reactive principles for responsive, resilient, elastic, and asynchronous message-driven microservices.
- **RT Reconciliations:** Implement real-time reconciliations in micro-batches based on time or volume to ensure data consistency and identify discrepancies.
- **Discrepancy Handling:** Design mechanisms to handle discrepancies like missed or duplicate events, which can occur due to network issues or other failures. Offer support for on-demand discrepancy resolutions and re-delivery.
- **Batch Backfilling:** Enable backfilling from batch processing pipelines or end-of-day (EOD) reconciliations to handle cases where real-time processing fails or encounters significant outages.
- **Integrations:** Integrate with online feature stores and data catalogs to provide a unified ecosystem for data scientists and other consumers.
- **Context Sharing:** Explore ways to share real-time context and computation between processes for improved efficiency.
- **Serialization:** Minimize serialization and deserialization (SerDe) as much as possible. When necessary, choose a format that balances speed, payload size, schema evolution support, and uniformity across components.
- **API Design**: Choose an appropriate API design for your real-time services:
  - RESTful APIs: Good for standard request-response interactions.
  - WebSockets: Ideal for bidirectional communication and pushing updates to clients.
  - gRPC: Offers high-performance remote procedure calls with efficient binary serialization.
- **Approximate Query Processing**: If your real-time services involve querying data streams, consider using approximate query processing techniques. These can provide fast responses with reasonable accuracy, even for complex queries on large datasets.

### 3. Data Composition

- **Schema Management**: Utilize a schema registry to enforce a standard format (like Avro or Protobuf), perform schema validation, and manage schema versions.
- **Data Transformations**: Define transformations as code for greater flexibility and maintainability. Ensure that these transformations include robust data validation and cleansing steps. This could involve:
  - **Type checks**: Verify that data values are of the expected types.
  - **Range checks**: Ensure numeric values fall within acceptable ranges.
  - **Referential integrity checks**: Validate relationships between different data entities.
  - **Pattern matching**: Check if string values match specific patterns (e.g., email addresses, phone numbers).
  - **Deduplication**: Identify and remove duplicate records to maintain data integrity.
- **Unstructured Data**: Include support for real-time unstructured data processing, as many real-world applications involve unstructured or semi-structured data.
- **Hybrid Infrastructure**: Be prepared to orchestrate data processing across cloud and on-premises environments, as many organizations operate in hybrid setups.
- **Data Quality**: In real-time systems, data quality issues can quickly propagate and impact downstream processes.
- **Data Sketching**: For scenarios where you need to summarize or aggregate large volumes of real-time data, explore data sketching techniques. These create compact summaries that can be used to approximate various statistics (e.g., quantiles, histograms) with high accuracy.
- **Feature Engineering for Stream Mining**: Design features that are relevant and meaningful for stream mining tasks. This might involve extracting features from raw data, transforming features, or combining multiple features to create composite features.

### 4. User Experience (UX) and Accessibility

- **Unified Serving Layer**: Design a unified serving layer or interface that provides consistent access to data across batch, near-real-time, and real-time consumers. This simplifies integration for client applications and promotes a cohesive experience.
- **SQL Compatibility**: Where possible, offer ANSI SQL-compliant querying capabilities for components like event transport layers or in-memory data grids. This enables users familiar with SQL to leverage their existing knowledge and tools for data exploration and analysis.
- **Standard In-Memory Formats**: Utilize standard in-memory formats like [Apache Arrow](https://arrow.apache.org/), especially if your on-disk storage uses columnar formats like Parquet or ORC. This alignment streamlines data transfer between storage and processing layers, enhancing performance for analytical queries.
- **Self-Service Enablement**: Empower your service tenants with self-service capabilities. Provide intuitive interfaces and tools for them to interact with the real-time data processing framework, allowing them to explore data, trigger ad-hoc queries, and gain insights independently.

### 5. Operations and Observability

- **Comprehensive Observability**: Prioritize observability as a fundamental aspect of your design. When dealing with real-time events and in-memory stores, it's easy to lose track of data flow and processing details. Implement end-to-end event tracing using tools like Jaeger or OpenTracing to gain deep visibility into system behavior.
- **Monitoring and Alerting**: Establish a robust monitoring and alerting system to proactively detect anomalies, performance bottlenecks, and potential issues. Monitor key metrics like throughput, latency, error rates, and resource utilization. Set up alerts to notify relevant teams when critical thresholds are exceeded.
- **Event Replays**: Support on-demand event replays, especially if your service allows ad-hoc querying. Consider using replicated or simulated sandbox environments to offload the replay process and avoid impacting the production system.
- **Federated Operations**: For organizations with complex operational structures, ensure your system can accommodate a federated operations model, where different teams or departments manage specific components or aspects of the system.
- **Agile and Scalable Infrastructure**: Leverage containerization (e.g., Docker, Kubernetes) to achieve agility and scalability in your infrastructure. This allows you to quickly deploy new instances, scale up or down based on demand, and streamline updates and maintenance.
- **Accuracy Monitoring**: If you're using approximation algorithms, monitor the accuracy of the results over time. Ensure that the error bounds remain within acceptable limits for your specific use case. Consider adjusting algorithm parameters or switching to more accurate algorithms if necessary.

## Resources

1. Here's a downloadable Google Spreadsheet that you may use to plan and track your RT Data Processing System's design decisions. [Access Google Sheets](https://docs.google.com/spreadsheets/d/1WFeIXxQFUUHasCLDijlliRY1gt6L2kHbeh7WAa6-vuE/edit?usp=sharing)

2. Reference Implementation:
   The following table provides a mapping of Google Cloud Platform (GCP) products and open-source tools that can be utilized to address various considerations when designing and building a real-time data processing system. This table aims to assist in tool selection and provide a starting point for exploring the wide range of options available for each aspect of the system.

{:class="table table-bordered"}
| Category | Consideration | Google Cloud Platform (GCP) Products | Open-Source Tools |
| ----------------------------- | --------------------------------------------- | -------------------------------------- | ----------------------------------------------------- |
| **1. Data Ingestion & Processing** | Data Sources | Cloud Pub/Sub, Cloud Dataflow | Apache Kafka, Apache NiFi |
| | Stream Processing | Cloud Dataflow, Cloud Dataproc | Apache Flink, Apache Spark, Kafka Streams, Apache Storm |
| | In-Memory Data Grids (IMDGs) | Memorystore | Redis, Hazelcast, Apache Ignite |
| | Workflow Orchestration | Cloud Composer | Apache Airflow |
| | Approximation Algorithms & Data Structures | BigQuery (approximate aggregations) | Bloom Filters, Count-Min Sketch, HyperLogLog |
| | Feature Stores | Vertex AI Feature Store | Feast |
| **2. Service Design** | Stateless Microservices | Cloud Run, GKE | Kubernetes, Docker |
| | Reactive Programming | N/A (supported in various GCP services) | Akka, RxJava, Reactor |
| | Load Balancing | Cloud Load Balancing | Nginx, HAProxy |
| | API Management | Apigee | Kong, Tyk |
| **3. Data Composition** | Schema Registry | [Cloud Pub/Sub schemas](https://cloud.google.com/pubsub/docs/schemas) | Confluent Schema Registry |
| | Data Transformations | Cloud Dataflow, Cloud Dataproc | Apache Beam |
| | Data Quality | Dataplex | Great Expectations |
| | Hybrid/Multi-Cloud Orchestration | Refer to [GCP's Architecture Patterns](https://cloud.google.com/architecture/hybrid-multicloud) | [Apache CloudStack](https://cloudstack.apache.org/), etc. |
| **4. UX & Accessibility** | Unified Serving Layer | API Gateway | GraphQL |
| | SQL Compatibility | BigQuery | [Apache Calcite](https://calcite.apache.org/) as an underlying framework |
| | In-Memory Data Format | N/A (supported in various GCP services) | Apache Arrow |
| **5. Operations & Observability** | Observability & Monitoring | Cloud Monitoring, Cloud Logging, Cloud Trace | Prometheus, Grafana, Jaeger, OpenTelemetry |

These mappings aren't exhaustive - they're starting points. Your specific requirements will dictate which tools make sense.

One thing I've learned: the hardest part isn't picking the right technology. It's knowing when your requirements have shifted enough that your original choices no longer fit. Real-time systems have a way of growing beyond their initial scope. Build in the flexibility to swap components when that happens.
