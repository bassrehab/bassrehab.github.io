---
layout: post
title: Evolutionary Bytes - Harnessing Genetic Algorithms for Smarter Data Platforms (Part 2/2)
date: 2023-12-29 15:10:04
description: Explore how genetic algorithms revolutionize data platforms, offering adaptive, dynamic solutions to meet complex challenges in the fast-evolving digital landscape.
tags: data platform genetic algorithms code
categories: platform algorithms
giscus_comments: true
featured: false
related_posts: true
toc:
  sidebar: left
---

[In part 1 of this series](/blog/2023/genetic-algorithm-inspired-data-platforms-part-1/), we explored the power of genetic algorithms in shaping data platforms and powering e-commerce personalization. Now, we'll take a more platform-specific technical turn. Let's uncover how genetic algorithms revolutionize database query optimization, leading to lightning-fast responses and efficient resource usage.

![Database Optimization with Genetic Algorithms](/assets/img/blog/db-optimization.png){: width="100%" }

<br />

## Understanding Query Execution Plans

- **Query**: A database query is a request for specific data from the database tables. Queries often involve multiple tables, joins to connect those tables, and filters/sorts to refine the result set.
- **Execution Plan**: The database engine doesn't just execute the query as written. First, it analyzes the query and generates a variety of potential "execution plans." Each execution plan is a step-by-step set of operations to retrieve the requested data. Examples of the choices it would make:
  - Join order (which tables to combine first)
  - Join methods (e.g., nested loop join, hash join, merge join)
  - Whether or not to utilize indexes
- **Cost Estimation**: The database engine can estimate the cost (in terms of time or resource consumption) of each possible plan. Choosing the optimal query execution plan is critical for performance, especially with complex queries.

<br />

## The Challenge of Optimization

The number of possible execution plans grows exponentially as the complexity of a query increases. With many tables and joins, it becomes impossible for the database engine to exhaustively evaluate every plan to find the truly optimal one. Traditional optimizers often rely on heuristics that might lead to good, but not perfect, plans.

<br />

## Where Genetic Algorithms Come In

Genetic algorithms (GAs) mimic evolutionary principles to find near-optimal solutions within huge search spaces. Here's how they apply to query optimization:

- **Representation (Chromosomes)**: Each possible execution plan is encoded as a 'chromosome'. This could be a tree-like structure representing the order of joins and operations, an array representing index selection, etc.

- **Initial Population**: The GA starts with a population of randomly generated chromosomes (execution plans).

- **Fitness Function**: The key is defining a way to score the 'fitness' of a plan. Typically, this uses the database engine's cost estimation to calculate the estimated execution time or resource usage.

- **Selection**: Fitter chromosomes (those with lower estimated costs) have a higher probability of being selected for 'reproduction'.

- **Crossover**: Selected chromosomes are combined. For example, parts of the tree structures representing two plans might be swapped to create new plans. This combines potentially good aspects of multiple candidate solutions

- **Mutation**: Random changes are introduced into some chromosomes. This helps avoid getting stuck in a local optimum and promotes exploration of the search space.

- **Iterative Evolution**: The steps of selection, crossover, and mutation are repeated over multiple generations. The average fitness of the population should improve over time.

<br />

## Foundation Query Optimizer class

Below is an initial class repr of the query optimizer funtion. It assumes a Postgres implementation, and 3 table joins, e.g. Customer, Products, Transactions. More complex representations can be taken up, to accurately reflect real-world formultations. But, for now, lets proceed with a simplified approach.

![Database Optimization with Genetic Algorithms](/assets/img/blog/db-opt-2.png){: width="100%" }

```python
import random

class PostgresQueryOptimizer:
    def __init__(self, population_size, mutation_rate, crossover_rate):
        self.population_size = population_size
        self.mutation_rate = mutation_rate
        self.crossover_rate = crossover_rate

    def chromosome_representation(self, query):
        """Defines how execution plans are encoded for Postgres"""
        #  Join order represented as (table1, table2) tuples
        #  Join methods as 'NL' (nested loop), 'HJ' (hash join), 'MJ' (merge join)
        chromosome = []

        # Randomly select two tables to join first
        tables = ["customer", "product", "transaction"]
        table1, table2 = random.sample(tables, 2)
        chromosome.append((table1, table2))

        # Randomly select join method for the first join
        chromosome.append(random.choice(["NL", "HJ", "MJ"]))

        # Select the remaining table and its join method
        remaining_table = [table for table in tables if table not in (table1, table2)][0]
        chromosome.append((remaining_table, chromosome[0][1]))  # Maintain previous join order for the 3rd table
        chromosome.append(random.choice(["NL", "HJ", "MJ"]))

        return chromosome

    def generate_initial_population(self):
        """Creates the starting set of chromosomes"""
        population = []
        for _ in range(self.population_size):
            population.append(self.chromosome_representation(query))
        return population

    def fitness_function(self, chromosome, query):
        """Estimates execution cost using EXPLAIN ANALYZE"""
        # Replace with actual Postgres EXPLAIN ANALYZE execution
        explain_output = f"EXPLAIN ANALYZE SELECT * FROM customer JOIN {chromosome[0][0]} ON {/* join condition */} JOIN {chromosome[2][0]} ON {/* join condition */}"
        # Placeholder - Parse EXPLAIN output to estimate cost (Postgres-specific)
        # This is a simplified version, a real implementation would involve parsing the EXPLAIN output for metrics like execution time
        return random.randint(10, 100)  # Replace with cost estimation logic

    def selection(self, population):
        """Probabilistic selection based on fitness (Tournament Selection)"""
        # Select a small subset of chromosomes for competition
        tournament_size = 4
        tournament = random.sample(population, tournament_size)

        # Return the one with the best fitness among
        best_in_tournament = tournament[0]
        for individual in tournament[1:]:
            if self.fitness_function(individual, query) < self.fitness_function(best_in_tournament, query):
                best_in_tournament = individual
        return [best_in_tournament, best_in_tournament]  # Two parents from the same tournament

    def crossover(self, chromosome1, chromosome2):
        """Combines chromosomes while maintaining valid join order"""
        crossover_point = random.randint(1, 2)  # Crossover between 1st or 2nd join
        new_chromosome = chromosome1[:crossover_point] + chromosome2[crossover_point:]
        return new_chromosome

    def mutation(self, chromosome):
        """Introduces small changes with a probability"""
        if random.random() < self.mutation_rate:
            mutation_point = random.randint(0, 3)
            if mutation_point < 2:  # Mutate join order
                tables = ["customer", "product", "transaction"]
                table1, table2 = random.sample(tables, 2)
                chromosome[mutation_point] = (table1, table2)
            else:  # Mutate join method
                chromosome[mutation_point + 1] = random.choice(["NL", "HJ", "MJ"])
        return chromosome

    def optimize(self, query, max_generations):
        population = self.generate_initial_population()

        for _ in range(max_generations):
            fitness_scores = [(self.fitness_function(chromosome, query), chromosome)
                              for chromosome in population]
            fitness_scores.sort()  # Assuming lower cost is better

            new_population = []
            while len(new_population) < self.population_size:
                parents = self.selection(fitness_scores)
                if random.random() < self.crossover_rate:
                    children = self.crossover(*parents)
                else:
                    children = parents

                new_population.extend(self.mutation(child) for child in children)

            population = new_population

        best_chromosome, best_cost = fitness_scores[0]
        return best_chromosome

```

<br />

**Initialization**:

`__init__(self, population_size, mutation_rate, crossover_rate)`: This function sets up the optimizer with hyperparameters like population size (number of candidate plans to consider simultaneously), mutation rate (how often chromosomes change slightly), and crossover rate (how often chromosomes exchange information).

**Chromosome Representation** (`chromosome_representation`):

- This function defines how possible execution plans (chromosomes) are encoded.
- In this case, a chromosome is a list containing information about joins:
  - The first two elements are tuples representing the join order (table1, table2).
  - The following elements specify the join method ('NL' for nested loop, 'HJ' for hash join, 'MJ' for merge join) used for each join.
- The function randomly selects two tables for the initial join, then a join method, and repeats this process to determine how the remaining table is joined.

**Initial Population** (`generate_initial_population`):

This function creates a starting set of chromosomes (candidate execution plans) by calling chromosome_representation multiple times (based on the population size).

**Fitness Function** (`fitness_function`):

- This function aims to estimate the execution cost (time or resource usage) associated with a particular chromosome (plan).
- In a real scenario, it would use Postgres's EXPLAIN ANALYZE functionality to execute the plan and analyze the cost metrics from the output.
- Here, a simplified approach uses a placeholder with a random cost value.

**Selection** (`selection`):

- This function selects "parent" chromosomes that will be used to create the next generation in the genetic algorithm.
- It implements a Tournament Selection strategy. Here's the process:
  - A small subset of chromosomes is randomly chosen (tournament size).
    -The chromosome within the tournament with the lowest estimated cost (the "fittest") is selected as a parent (twice, to ensure two parents for crossover).

**Crossover** (`crossover`):

- This function combines genetic material from two parent chromosomes to create offspring (new candidate plans).
- It selects a random point between the specifications for the first two joins and swaps the remaining information (join order and method) between the parents to create a new child chromosome.

**Mutation** (`mutation`):

- This function introduces random changes to chromosomes with a small probability (mutation rate).
- Here, it can either:
  - Mutate the join order by randomly selecting a new pair of tables to join first.
  - Mutate the join method used in one of the joins (switching between 'NL', 'HJ', and 'MJ').

**Optimization** (`optimize`):

- This is the core function that drives the entire optimization process. Here's what it does:
- Starts with an initial population of chromosomes.
- Iterates for a specified number of generations (cycles of selection, crossover, and mutation).
- In each generation:
  - Estimates the fitness (cost) of each chromosome in the population.
  - Uses Tournament Selection to choose parents.
  - Applies crossover or mutation to create new offspring (candidate plans).
  - Creates a new population for the next generation.
- After iterating, the function returns the chromosome with the lowest estimated cost (considered the "best" execution plan).

<br />

While the above is a good starting point for a theoretical treatise, a real world implementation would involve more sophistacted cost estimation logic that leverages Postgres' `EXPLAIN ANALYZE` output for detailed metrics.

<br />
<iframe width="100%" height="400"
  src="https://www.youtube.com/embed/Kdjz2e8HYPU" 
  frameborder="0" 
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>
<br />

`chromosome_representation` function in the `PostgresQueryOptimizer` class can be modified to incorporate indexes and sort orders into our execution plan optimization. The above array-based representation is modified below to include additional elements for index and sort considerations:

```python
def chromosome_representation(self, query):
    # ... (Existing join order and join methods logic) ...

    # Index Selection (One decision per table)
    for table in ["customer", "product", "transaction"]:
        # Assume you have a way to determine relevant indexes for the table
        available_indexes = get_available_indexes(table)
        chromosome.append(random.choice(available_indexes + ["NO_INDEX"]))

    # Sort Orders (One decision per join, if applicable)
    for join_index in range(len(chromosome) - 3):  # Only if multiple joins
        # Assume you know on which columns of a table sorting is relevant
        relevant_columns = get_relevant_sort_columns(chromosome[join_index])
        chromosome.append(random.choice(relevant_columns + ["NO_SORT"]))

    return chromosome

```

**Updates**

- **Index Selection**: For each table, we randomly select from available indexes using a function called `get_available_indexes` (we'd need to implement this based on how we retrieve index information from Postgres). We include `"NO_INDEX"` as an option.

- **Sort Orders**: For each join (if applicable), we determine relevant columns for sorting with a function `get_relevant_sort_columns` (implementation also required). A `"NO_SORT"` option signifies no explicit sorting on the join result.

<br />

**Example Chromosome**
`[('customer',  'product'), 'HJ',  ('transaction',  'customer'), 'NL', 'idx_customer_name', 'NO_INDEX', 'idx_product_id', 'customer_id',  'NO_SORT']`

<br />

**Additional considerations**

- **Helper Functions**: we would need to also implement

  - `get_available_indexes(table)`: A function to fetch the list of available indexes for a given table in Postgres.
  - `get_relevant_sort_columns(join_tuple)`. This function would determine which columns are relevant for sorting based on the joined tables and the query conditions.

- **Conditional Logic**: We would need to introduce logic to only include index or sorting decisions when they're actually relevant to the query.
- **Chromosome Validity**: We should also consider adding checks to ensure the combination of represented elements (join order, table, index, sort column) is always a valid option with respect to the query and database schema.

<br />

## Conclusion

We've journeyed from the inspiration behind genetic algorithms to their transformative power in database query optimization. This two-part series highlights the potential for not just personalization, but also for accelerating your analytics and decision-making through streamlined database performance. The future of data platforms promises to be one where intelligent algorithms work hand-in-hand with traditional database structures.
