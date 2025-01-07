---
layout: post
title: Part 3 - Building a Massive-Scale Real-Time Data Platform - Memory Management with Apache Ignite
date: 2022-11-27 11:31:58
description: Deep dive into memory management with Apache Ignite for high-performance data platforms. Learn how to handle 2.5M events/second with sub-millisecond latency through practical memory architecture, optimization techniques, and real-world implementation patterns.
tags: system-design architecture casestudy
categories: architecture system-design casetudy
giscus_comments: true
featured: false
related_posts: true
toc:
  sidebar: left
---

In Parts 1 and 2, we explored our system architecture and data partitioning strategies. Today, we'll dive deep into how we managed memory using Apache Ignite to handle 2.5 million events per second while maintaining sub-millisecond response times.

## Memory Management Challenges

### Scale Requirements

1. **Event Processing**
   - 2.5M events/second ingestion
   - Sub-millisecond query latency
   - Real-time aggregations
   - State maintenance

2. **DPI Data**
   - 350GB/15min processing
   - Complex analysis
   - Pattern detection
   - Historical queries

3. **Active Dataset**
   - Multiple event types
   - Rich subscriber data
   - Location information
   - Real-time metrics

## Memory Architecture

<br>

{% include figure.liquid loading="eager" path="assets/img/blog/ignite-memory-architecture.png" class="img-fluid rounded z-depth-1" zoomable=true %}

<br>

### Memory Regions

1. **On-Heap Memory (20%)**
   - Size: ~100GB per node
   - Usage: Critical metadata
   - Contents: Indexes and query execution
   - GC tuning: ZGC optimized

2. **Off-Heap Memory (80%)**
   - Size: ~400GB per node
   - Usage: Event data storage
   - Direct memory allocation
   - Zero-copy operations

### Memory Organization

1. **Page Memory**
   - Page size: 2KB to 2MB
   - Pre-allocated pools
   - NUMA-aware allocation
   - Defragmentation support

2. **Data Regions**
   - Hot data region (4 hours)
   - Warm data region (24 hours)
   - Index region (permanent)
   - System region (permanent)

## Implementation Strategy

<br>

{% include figure.liquid loading="eager" path="assets/img/blog/memory-management-flow.png" class="img-fluid rounded z-depth-1" zoomable=true %}

<br>

### Memory Configuration
```xml
<bean class="org.apache.ignite.configuration.IgniteConfiguration">
    <property name="dataStorageConfiguration">
        <bean class="org.apache.ignite.configuration.DataStorageConfiguration">
            <!-- System region configuration -->
            <property name="systemRegionInitialSize" 
                      value="#{10L * 1024 * 1024 * 1024}" /> <!-- 10GB -->
            
            <!-- Default region configuration -->
            <property name="defaultDataRegionConfiguration">
                <bean class="org.apache.ignite.configuration.DataRegionConfiguration">
                    <property name="name" value="Default_Region"/>
                    <property name="initialSize" 
                              value="#{20L * 1024 * 1024 * 1024}" /> <!-- 20GB -->
                    <property name="maxSize" 
                              value="#{50L * 1024 * 1024 * 1024}" /> <!-- 50GB -->
                    <property name="pageEvictionMode" 
                              value="RANDOM_2_LRU"/>
                    <property name="metricsEnabled" value="true"/>
                </bean>
            </property>

            <!-- Custom regions configuration -->
            <property name="dataRegionConfigurations">
                <list>
                    <!-- Hot data region -->
                    <bean class="org.apache.ignite.configuration.DataRegionConfiguration">
                        <property name="name" value="Hot_Region"/>
                        <property name="initialSize" 
                                  value="#{200L * 1024 * 1024 * 1024}" /> <!-- 200GB -->
                        <property name="maxSize" 
                                  value="#{400L * 1024 * 1024 * 1024}" /> <!-- 400GB -->
                        <property name="pageEvictionMode" 
                                  value="RANDOM_2_LRU"/>
                        <property name="evictionThreshold" value="0.95"/>
                        <property name="metricsEnabled" value="true"/>
                    </bean>
                    
                    <!-- Index region -->
                    <bean class="org.apache.ignite.configuration.DataRegionConfiguration">
                        <property name="name" value="Index_Region"/>
                        <property name="initialSize" 
                                  value="#{50L * 1024 * 1024 * 1024}" /> <!-- 50GB -->
                        <property name="maxSize" 
                                  value="#{100L * 1024 * 1024 * 1024}" /> <!-- 100GB -->
                        <property name="persistenceEnabled" value="true"/>
                    </bean>
                </list>
            </property>
        </bean>
    </property>
</bean>
```

### Memory Manager Implementation
```java
public class CustomMemoryManager {
    private final IgniteCache<String, BinaryObject> cache;
    private final EvictionPolicy evictionPolicy;
    private final MetricsRegistry metricsRegistry;
    
    // Memory pressure handling
    public void handleMemoryPressure() {
        DataRegionMetrics metrics = getRegionMetrics("Hot_Region");
        double usagePercentage = metrics.getPagesFillFactor();
        
        if (usagePercentage > 0.9) { // 90% threshold
            triggerEviction();
        }
    }
    
    // Custom eviction logic
    private void triggerEviction() {
        // Get events older than 4 hours
        long cutoffTime = System.currentTimeMillis() - 
            TimeUnit.HOURS.toMillis(4);
            
        SqlQuery<String, BinaryObject> query = new SqlQuery<>(
            Event.class, "timestamp < ? ORDER BY timestamp ASC LIMIT 10000");
            
        try (QueryCursor<Cache.Entry<String, BinaryObject>> cursor = 
                cache.query(query.setArgs(cutoffTime))) {
            
            for (Cache.Entry<String, BinaryObject> entry : cursor) {
                // Move to warm storage
                moveToWarmStorage(entry.getKey(), entry.getValue());
                // Remove from hot storage
                cache.remove(entry.getKey());
            }
        }
    }
    
    // Warm storage management
    private void moveToWarmStorage(String key, BinaryObject value) {
        // Compress if needed
        byte[] compressed = compress(value);
        // Store in Cassandra
        cassandraTemplate.execute(
            "INSERT INTO warm_storage (key, data) VALUES (?, ?)",
            key, compressed);
    }
}
```

## Memory Optimization Techniques

### 1. Data Layout Optimization

- Field ordering for better packing
- Padding elimination
- Object pooling
- Array pre-allocation

### 2. Access Pattern Optimization

- NUMA-aware allocation
- Thread affinity
- Cache line alignment
- Sequential access patterns

### 3. GC Optimization

- ZGC configuration
- Large pages support
- GC logging
- Heap sizing strategy

## Eviction Strategies

### 1. Time-Based Eviction

- Rolling time window
- Configurable retention
- Background processing
- Priority queues

### 2. Size-Based Eviction

- Memory thresholds
- Eviction batches
- Resource monitoring
- Backpressure handling

## Monitoring and Alerting

### Memory Metrics

1. **Usage Metrics**
   - Region utilization
   - Page allocation rates
   - Eviction statistics
   - GC performance

2. **Performance Metrics**
   - Access latencies
   - Hit/miss ratios
   - Throughput rates
   - Queue depths

### Alert Thresholds

1. **Critical Alerts**
   - Memory usage > 90%
   - GC pause > 500ms
   - Eviction rate spike
   - Error rate increase

2. **Warning Alerts**
   - Memory usage > 80%
   - GC pause > 200ms
   - Queue depth increase
   - Throughput drop

## Performance Results

### Latency Profile

- Read operations: < 1ms (p99)
- Write operations: < 2ms (p99)
- Query operations: < 10ms (p99)
- Scan operations: < 100ms (p99)

### Throughput Achievements

- Event processing: 2.5M/second
- Query processing: 100K/second
- Scan processing: 10K/second
- Background operations: 1K/second

## Lessons Learned

1. **Memory Management**
   - Pre-allocation crucial
   - NUMA awareness important
   - Monitor everything
   - Plan for growth

2. **Performance Tuning**
   - Start with defaults
   - Measure thoroughly
   - Tune incrementally
   - Document changes

3. **Operational Aspects**
   - Regular monitoring
   - Proactive maintenance
   - Capacity planning
   - Team training

## Looking Ahead

In Part 4, we'll explore how we optimized our Kafka infrastructure to handle the massive throughput requirements while ensuring reliable message delivery and processing.

Stay tuned to learn about our Kafka cluster design, configuration tuning, and operational practices.
