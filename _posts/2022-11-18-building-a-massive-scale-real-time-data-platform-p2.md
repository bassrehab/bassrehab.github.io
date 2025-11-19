---
layout: post
title: Part 2 - Building a Massive-Scale Real-Time Data Platform - Data Partitioning and Flow
date: 2022-11-18 01:12:18
description: Explore how to architect data partitioning and flow for massive-scale event processing. Learn implementation patterns for handling 2.5M events/second across distributed systems using Kafka, Ignite, and Cassandra. Practical insights on partition strategies, data routing, and performance optimization.
tags: system-design architecture casestudy ignite kafka
categories: architecture system-design casetudy
giscus_comments: true
citation: true
featured: false
related_posts: true
toc:
  sidebar: left
---

In [Part 1](https://subhadipmitra.com/blog/2022/building-a-massive-scale-real-time-data-platform-p1/) of this series, we introduced our telecommunications data platform that processes 2.5 million events per second and handles 350GB of DPI data every 15 minutes. Today, we'll dive deep into how we designed and implemented the data partitioning strategy and managed the massive data flow through the system.

## Data Characteristics and Challenges

### Event Types and Volumes

1. **Network Events (1.2M/sec)**

   - High-velocity cell tower events
   - Geographically distributed
   - Latency-sensitive handovers
   - Variable payload sizes (200B - 2KB)

2. **Subscriber Events (800K/sec)**

   - SIM card movements
   - Device changes
   - Authentication events
   - Typical payload: 1-3KB

3. **Location Updates (400K/sec)**

   - Continuous position updates
   - Geographic clustering
   - Time-series nature
   - Payload size: 500B average

4. **DPI Data (350GB/15min)**
   - Large batch records
   - Rich protocol information
   - Complex relationships
   - Variable record sizes (5-50KB)

## Partitioning Strategy

### Key Design Principles

1. **Hierarchical Partitioning**

   - Geographic regions (top level)
   - Event types (second level)
   - Time windows (third level)
   - Customer segments (fourth level)

2. **Data Locality**

   - Region-aware routing
   - Rack-aware placement
   - NUMA-aware processing
   - Cache-aware distribution

3. **Load Distribution**
   - Even data spread
   - Hotspot prevention
   - Resource balancing
   - Throughput optimization

### Implementation Details

#### Kafka Topic Design

```properties
# Network Events
network.events.${region}.${type} = {
    partitions = 600,
    replication.factor = 3,
    min.insync.replicas = 2
}

# Subscriber Events
subscriber.events.${region}.${type} = {
    partitions = 400,
    replication.factor = 3,
    min.insync.replicas = 2
}

# Location Updates
location.updates.${region} = {
    partitions = 200,
    replication.factor = 3,
    min.insync.replicas = 2
}

# DPI Data
dpi.data.${region}.${window} = {
    partitions = 100,
    replication.factor = 3,
    min.insync.replicas = 2
}
```

## Data Flow Architecture

<br>

{% include figure.liquid loading="eager" path="assets/img/blog/data-flow-architecture-fast-data.png" class="img-fluid rounded z-depth-1" zoomable=true %}

<br>

### Ingestion Layer

1. **Edge Collection**

   - Regional collectors
   - Protocol handlers
   - Initial validation
   - Load balancing

2. **Message Queuing**
   - Topic partitioning
   - Message routing
   - Back-pressure handling
   - Failure detection

### Processing Layer

1. **Stream Processing**

   - Parallel execution
   - State management
   - Window operations
   - Event correlation

2. **Batch Processing**
   - DPI data handling
   - Aggregation jobs
   - Historical analysis
   - Data enrichment

### Storage Layer

1. **Hot Storage (Ignite)**

   - In-memory data grid
   - Affinity colocation
   - Partition awareness
   - Cache coherency

2. **Warm Storage (Cassandra)**
   - Time-series optimization
   - Partition strategy
   - Compaction policy
   - Replication design

## Implementation Patterns

<br>

{% include figure.liquid loading="eager" path="assets/img/blog/hierarchial-partitioning-strategy.png" class="img-fluid rounded z-depth-1" zoomable=true %}

<br>

### Partition Key Design

```java
public class PartitionKeyGenerator {
    public String generateKey(Event event) {
        return String.format("%s:%s:%s:%s",
            event.getRegion(),
            event.getType(),
            event.getTimeWindow(),
            event.getSegment());
    }

    public String generateDPIKey(DPIRecord record) {
        return String.format("%s:%s:%d",
            record.getRegion(),
            record.getProtocol(),
            record.getTimeWindow().getEpochSecond());
    }
}
```

### Data Flow Control

```java
@Component
public class DataFlowManager {
    private final KafkaTemplate<String, Event> kafkaTemplate;
    private final IgniteCache<String, ProcessedEvent> eventCache;
    private final CassandraTemplate cassandraTemplate;

    public void routeEvent(Event event) {
        String partitionKey = keyGenerator.generateKey(event);
        String topic = determineTopicName(event);

        kafkaTemplate.send(topic, partitionKey, event)
            .addCallback(this::handleSuccess, this::handleError);
    }

    private String determineTopicName(Event event) {
        return String.format("%s.events.%s.%s",
            event.getType().toLowerCase(),
            event.getRegion().toLowerCase(),
            event.getCategory().toLowerCase());
    }
}
```

## Performance Optimization

### Partition Balancing

1. **Static Balancing**

   - Even partition distribution
   - Geographic alignment
   - Resource allocation
   - Network topology awareness

2. **Dynamic Balancing**
   - Load monitoring
   - Auto-rebalancing
   - Hotspot detection
   - Traffic shifting

### Flow Control

1. **Back-pressure Handling**

   - Buffer management
   - Rate limiting
   - Drop policies
   - Recovery procedures

2. **Resource Management**
   - Thread pool tuning
   - Memory allocation
   - Network buffers
   - Disk I/O optimization

## Monitoring and Maintenance

### Key Metrics

1. **Partition Metrics**

   - Size distribution
   - Event distribution
   - Processing latency
   - Replication lag

2. **Flow Metrics**
   - Throughput rates
   - Queue depths
   - Error rates
   - Resource utilization

### Maintenance Procedures

1. **Partition Management**

   - Regular rebalancing
   - Cleanup operations
   - Performance tuning
   - Capacity planning

2. **Flow Optimization**
   - Bottleneck identification
   - Resource adjustment
   - Configuration tuning
   - Performance testing

## Lessons Learned

1. **Partition Design**

   - Start with more partitions than needed
   - Consider future growth
   - Monitor partition balance
   - Plan for rebalancing

2. **Flow Management**

   - Implement back-pressure early
   - Monitor flow rates closely
   - Plan for failure scenarios
   - Test at scale

3. **Performance Tuning**
   - Regular monitoring essential
   - Proactive optimization
   - Capacity planning
   - Documentation important

## Looking Ahead

In [Part 3](https://subhadipmitra.com/blog/2022/building-a-massive-scale-real-time-data-platform-p3/), we'll explore how we managed memory with Apache Ignite to handle this massive scale of data processing efficiently. We'll dive into memory architecture, tiered storage, eviction policies, and performance optimization techniques.

Stay tuned to learn how we achieved sub-millisecond response times while processing millions of events per second.
