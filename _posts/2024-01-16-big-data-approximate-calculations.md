---
layout: post
title: Who Needs Exact Answers Anyway? The Joy of Approximate Big Data
date: 2024-01-16 23:40:08
description: Discover how sacrificing a bit of accuracy can lead to huge gains in big data analysis speed and efficiency.
tags: algorithms code data
categories: algorithms
giscus_comments: true
featured: false
related_posts: true
toc:
  sidebar: left
---

The explosion of big data has created an insatiable demand for analytical insights. However, traditional computational methods often struggle to keep up with the sheer volume and velocity of data in many real-world applications. This is where approximation techniques offer a lifeline — trading a small degree of accuracy for a significant boost in processing speed and efficiency.

![Bar Chart Approximations](/assets/img/blog/approximate-charts.png){: width="100%" }

## Why Approximation?

In domains like real-time analytics, trend monitoring, and exploratory data analysis, the following often hold:

- Exactness is Overrated: A slightly less accurate answer available now often trumps a perfect result that arrives much later.
- Data is Messy: Real-world data is rarely pristine. Approximate techniques can often perform well even in the presence of noise and outliers.
- Resource Constraints: Hardware and computational constraints may make perfectly accurate computations either impractical or outright impossible.

## Classes of Approximation Techniques

Let's explore some key categories of approximate big data calculations:

1. **Sampling**

   - Idea: Instead of processing the entire dataset, work with a carefully selected subset.
   - Methods: Simple random sampling, Stratified sampling (ensure representation of subpopulations), Reservoir sampling (ideal for streaming data)
   - Example: Estimate the average customer purchase amount by analyzing a well-constructed sample of transactions rather than the entire sales history.

2. **Sketching**

   - Idea: Create compact 'sketches' or summaries of the data that capture key statistical properties.
   - Methods: Count-Min Sketch (frequency distributions), Bloom filters (probabilistic set membership), HyperLogLog (cardinality estimations)
   - Example: Track the number of unique visitors to a website using a HyperLogLog sketch, which efficiently compresses this information.

3. **Synopsis Data Structures**
   - Idea: Specialized data structures that maintain approximate summaries of data streams.
   - Methods: Histograms (approximate distributions), Wavelets (summarize time series or image data), Quantiles (approximate quantile calculation for ordering data)
   - Example: Monitor website traffic patterns over time using a histogram to approximate the distribution of page views.

## Mathematical Considerations

Approximation techniques often come with provable accuracy guarantees. Key concepts include:

- **Probability Bounds**: Many sampling and sketching algorithms provide bounds on estimation error with a certain probability (e.g., "the true average lies within +/- 2% of our estimate with 95% confidence").
- **Convergence**: Iterative algorithms often improve in accuracy with additional data or computation time, allowing you to tune their precision.

# The Art of Approximation

Successful use of approximate calculations often lies in selecting the right technique and understanding its trade-offs, as different algorithms may offer varying levels of accuracy, space efficiency, and computational cost.

The embrace of approximation techniques marks a shift in big data analytics. By accepting a calculated level of imprecision, we gain the ability to analyze datasets of previously unmanageable size and complexity, unlocking insights that would otherwise remain computationally out of reach.

Big data calculations traditionally involve exact computations, where every data point is processed to yield precise results. This approach is comprehensive but can be highly resource-intensive and slow, especially as data volumes increase. In contrast, approximate calculations leverage statistical and probabilistic methods to deliver results that are close enough to the exact values but require significantly less computational power and time. Here's a practical example comparing the two approaches:

## Example: Calculating Average Customer Spend in Retail

### Traditional Exact Calculation

> Scenario: A large retail chain wants to calculate the average amount spent per customer transaction over a fiscal year. The dataset includes millions of transactions.

**Method:**

- **Data Collection**: Gather all transaction data for the year.
- **Summation**: Calculate the total amount spent by adding up every single transaction.
- **Counting**: Count the total number of transactions.
- **Average Calculation**: Divide the total amount spent by the number of transactions to get the exact average.

### Approximate Calculation Using Sampling

> Scenario: The same retail chain adopts an approximate method to calculate the average spend per customer transaction to reduce computation time and resource usage.

**Method:**

- Data Sampling: Randomly sample a subset of transactions from the dataset (e.g., 0.1% of total transactions).
- Summation: Calculate the total amount spent in the sample.
- Counting: Count the number of transactions in the sample.
- Average Calculation: Divide the total amount in the sample by the number of sampled transactions to estimate the average.

### Comparison and Conclusion:

- Accuracy: The traditional method provides exact results, while the approximate method offers results with a margin of error that can typically be quantified (e.g., confidence intervals).
- Efficiency: Approximate calculations are much faster and less resource-intensive, making them suitable for quick decision-making and real-time analytics.
- Scalability: Approximate methods scale better with very large datasets and are particularly useful in environments where data is continuously generated at high volumes (e.g., IoT, online transactions).

In summary, while traditional methods ensure precision, approximate calculations provide a pragmatic approach in big data scenarios where speed and resource management are crucial. Choosing between these methods depends on the specific requirements for accuracy versus efficiency in a given business context.

# Experiment

We first generate a random transaction dataset of shopping purchases by customers. The dataset contains 3 columns, time of transaction, customer id and transaction amount.
The number of customers is less than the total transactions, allowing to emulate multiple purchases by returning customer.

```python

import random
import pandas as pd
from datetime import datetime, timedelta
import numpy as np

def generate_data(num_entries):
    # Start date for the data generation
    start_date = datetime(2023, 1, 1)

    # List to hold all entries
    data = []
    max_customers_count = int(num_entries/(random.randrange(10, 100)))
    for _ in range(num_entries):
        # Generate a random date and time within the year 2023
        random_number_of_days = random.randint(0, 364)
        random_second = random.randint(0, 86399)
        date_time = start_date + timedelta(days=random_number_of_days, seconds=random_second)

        # Generate a hexadecimal Customer ID
        customer_id = "cust_" + str(random.randrange(1, max_customers_count))

        # Generate a random transaction amount (e.g., between 10.00 and 5000.00)
        transaction_amount = round(random.uniform(10.00, 5000.00), 2)

        # Append the tuple to the data list
        data.append((date_time, customer_id, transaction_amount))

    return data
```

We then define the sampling of the dataset, currently set a 1% of total size, i.e. for 100,000 ~ sampled 1,000

```python
# Function to sample the DataFrame
def sample_dataframe(dataframe, sample_fraction=0.01):
    # Sample the DataFrame
    return dataframe.sample(frac=sample_fraction)


def calculate(df):
  # Calculate the average transaction amount
  average_transaction_amount = df['TransactionAmount'].mean()


  # Calculate the average number of transactions per customer
  average_transactions_per_customer = df['CustomerID'].count() / df['CustomerID'].nunique()

  return average_transaction_amount, average_transactions_per_customer
```

We finally, run the whole expermient, i.e. generate dataset, run calculation multiple times. Here, num_experiments = 100

```python
# Number of entries to generate
num_entries = 100000
tx_exact=[]
tx_approx=[]
num_experiments = 100

for i in range(0, num_experiments):
  # Generate the data
  transaction_data = generate_data(num_entries)

  # Convert the data to a DataFrame
  df = pd.DataFrame(transaction_data, columns=['DateTime', 'CustomerID', 'TransactionAmount'])

  # Sample the DataFrame
  df_sampled = sample_dataframe(df)

  tx_exact.append(calculate(df)[0])
  tx_approx.append(calculate(df_sampled)[0])
```

![Bar Chart Approximations](/assets/img/blog/approx-charts.png){: width="100%" }

Finally we plot the Exact vs Approximate values. Mind the exaggerated spread out, because of the scaled plot.

```python
percent_error = []
for i in range(num_experiments):
  percent_error.append(abs(tx_exact[i]-tx_approx[i])/tx_exact[i])

from statistics import mean
print(mean(percent_error))

```

Upon further calculation you can see the relative percentage error across `100 experiments` runs and `100,000 transactions per experiment` the error is only order of `1.46%` (small error tradeoff for large scale of compute saved). The magnitude of the error would converge to zero as the number of transactions increase (which is typically the case when you are dealing with big data)

[Link to the colab](https://colab.research.google.com/drive/1OBAt8w49NSA_3ltZvOGYD5ZnzKGm3f2W?usp=sharing)
