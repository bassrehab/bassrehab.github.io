---
layout: post
title: Quantum Experiment Data Exchange (QEDX) - Building an Interoperability Standard
date: 2023-11-20 21:35:20
description: Advancements in data management, from warehouses to Data Mesh and Lakehouse, signal a shift toward more adaptive platforms like, Quantum Data Management, Genetic algorithm concepts, etc.
tags: data platform quantum-computing
categories: platforms quantum-computing
giscus_comments: true
featured: false
related_posts: true
toc:
  sidebar: left
---

In this post, we will design the foundations for an interoperability standard for our Quantum Data Management (QDM) Platform. Read more about interoperability in QDM [here](/blog/2023/quantum-data-platform/).

# A. Proposed Standard

Quantum Experiment Data Exchange (QEDX)

## 1. Purpose:

To facilitate the consistent sharing and interpretation of experimental data generated on quantum systems. This includes raw measurement data, metadata, calibration information, and experimental setup descriptions.

## 2. Scope:

**2.1 Data Types**:

- Quantum state preparation and measurement outcomes
- Quantum circuit execution results
- Quantum process tomography data
- Noise characterization data

We are only considering the distinctive QDM platform specific operational data. The consumer/business data assets may be shared through classical "[Data Contracts](https://datacontract.com/)".

**2.2 Metadata:**

- Description of the physical quantum system (number of qubits, architecture, technology)
- Experimental parameters (control pulse settings, temperatures, etc.)
- Calibration and error characterization information
- Processing steps applied to the raw data
- Provenance: Mechanisms for tracking the origin and history of data

**2.3 Format:**

- Base Format: JSON or XML for flexibility, extensibility, and readability.
- Ontology: Leverages existing ontologies where possible (e.g., QUDT for units of measure) and develops a specialized quantum experiment ontology
- Schema: A well-defined schema ensures consistency and simplifies parsing of QEDX data.

**2.4 Key Principles**

- Open & Non-proprietary: Ensures accessibility and avoids reliance on vendor-specific formats.
- Extensibility: Allows for representing new types of quantum systems, experiments, and data processing techniques.
- Completeness: Encourages capturing all relevant information for reproducibility and meaningful interpretation.
- Machine-Readable: Enables automated data processing and analysis across various tools and platforms.

**2.5 Potential Benefits of QEDX**

- Accelerated Research: Easier access to shared, well-structured experimental data fosters faster scientific progress.
- Reproducibility: Enhances the ability to independently replicate experiments and build upon previous findings.
- Benchmarking: Facilitates fair comparison of different quantum devices and algorithms on standardized datasets.
- Collaboration: Enables smoother data exchange between researchers, regardless of their specific experimental setups.

# B. Technical Design

## 1. Core Data Structure

- **Hierarchical Organization**: A nested structure to capture relationships between different data elements. Potential top-level sections:

  - `experiment`: Overall description of the experimental setup and goals.
  - `system`: Detailing the quantum device used (architecture, qubit technology, connectivity, etc.)
  - `calibration`: Information on calibration procedures and error characterization.
  - `runs`: An array of individual experimental runs, each containing:
  - `circuit`: Description of the executed quantum circuit (if applicable)
  - `parameters`: Experimental settings (pulse amplitudes, timings, etc.)
  - `results`: Raw measurement outcomes.

- **Metadata Best Practices**:

  - Controlled vocabulary: Leverages existing ontologies where suitable (QUDT, etc.) and extends with a quantum-specific ontology.
  - Timestamps: Include dates and times of experiments.
  - Provenance: Mechanisms to track data lineage (e.g., links to prior datasets used as input)

## 2. Data Serialization

Below is an example of a JSON based human-readable serialization option. An XML based option may be explored too.

```json
{
  "experiment": "Bell state measurement",
  "system": {
    "type": "superconducting",
    "qubits": 2
  },
  "runs": [
    {
      "circuit": "Bell_circuit.qasm",
      "results": [0, 0, 1, 1]
    }
  ]
}
```

## 3. Schema Validation

- JSON Schema or XSD: Define strict rules for QEDX format adherence.
- Validation Tools: Ensure data integrity and compliance.
- Versioning: Mechanism to track schema changes over time for backward compatibility.

## 4. Noise Characterization Data

Representing noise characterization data within the QEDX format is crucial for making informed decisions about quantum algorithms and error correction strategies.

- **Qubit Characterization**:
  - T1 (Relaxation Time): How long a qubit stays in the excited state.
  - T2 (Decoherence Time): Loss of quantum properties over time.
  - Readout errors: Errors in interpreting the state of a qubit.
  - Gate errors: Errors in applying single or multi-qubit quantum gates.
- **Cross-talk**: Unwanted interactions between qubits.
- **Environmental Noise**: External disturbances (temperature fluctuations, electromagnetic fields).

### 4.1 Representation in QEDX

Let's extend the QEDX structure proposed earlier:

#### 4.1.1 Dedicated "calibration" Section:

```json
 "calibration": {
     "noise_characterization": {
         "timestamp": "YYYY-MM-DDTHH:MM:SSZ",
         "methods": ["randomized_benchmarking", ...],
         "results": {
             "qubit_1": {
                 "T1": 50.0,  // Microseconds
                 "T2": 80.0,
                 "readout_error": 0.02, // Probability
                 ...
             },
             "qubit_2": { ... },
             "gate_errors": {
                 "CNOT": {
                     "average_gate_fidelity": 0.95,
                     ...
                 }
             }
             ...
         }
     }
 }

```

#### 4.1.2 Metadata:

- `methods`: Type of characterization techniques used (randomized benchmarking, gate set tomography, etc.).
- `timestamp`: Indicate when the calibration data was obtained.

#### 4.1.3 Flexible Results:

- Structure data by qubit and gate.
- Include appropriate units and uncertainty estimates.
- Potentially reference more detailed external data files if needed.

### 4.2 Evolving Representations

- _Noise Models_: QEDX could include ways to represent parameterized noise models derived from characterization data.
- _Dynamic Updates_: As noise characteristics fluctuate, mechanisms to update QEDX without full recalibration would be beneficial.

## 5. Considerations for Additional Functionality

- Data compression: For large datasets, efficient compression may be necessary.
- Security: Support for encryption/decryption if handling sensitive data.
- Data visualization: Recommendations for consistent ways to visually represent quantum experimental data for human interpretation.

# Final representations

**experiment**

- name: A short, descriptive title for the experiment.
- description: A detailed explanation of the experiment's goals and procedures.
- date: Date the experiment was conducted (YYYY-MM-DD format).
- research_group: The research team or institution responsible.
- sharing: Level of data visibility (open, restricted, collaborators-only, etc.).
- access_request_url: Link to a mechanism for requesting access if data is restricted.

**system**

- type: Type of quantum system (superconducting, ion trap, photonic, etc.).
- vendor: Manufacturer of the quantum device.
- model: Specific model name or identifier.
- qubits: Number of qubits in the system.
- topology: Arrangement of qubits and their connectivity.
- accessible_via: Array listing platforms offering access to this device, with relevant details.

**calibration**

- noise_characterization: Section containing noise data.
- timestamp: When calibration data was collected.
- methods: Techniques used (e.g., randomized_benchmarking).
- results: Qubit-specific errors (T1, T2, readout) and gate fidelities.

**runs**

- Array of individual experimental runs
- circuit: Circuit definition with multiple representations if available:
  - qiskit_circuit
  - openqasm
  - cirq_circuit
- parameters: Execution parameters (shots, simulator settings, etc.).
- results: Measurement outcomes.
- data_format: Format of external data, if applicable.
- external_data_uri: Location of external results data.

**metadata**

- quantum_data_platform: Originating platform.
- provenance: Array for tracking data lineage.
- ontologies: List of ontologies used in the data.
- keywords: Terms aiding discoverability.

```json
{
  "experiment": {
    "name": "Bell State Verification",
    "description": "Preparing and measuring a Bell state to assess two-qubit gate fidelity.",
    "date": "2024-05-16",
    "research_group": "Quantum Lab, University X",
    "sharing": "open",
    "access_request_url": "https://qdpexchange.org/request/12345"
  },
  "system": {
    "type": "superconducting",
    "vendor": "Acme Quantum Devices",
    "model": "AcmeQPU-5",
    "qubits": 2,
    "topology": "linear",
    "accessible_via": [
        { "platform": "Acme Cloud Quantum", "region": "US-East" },
        { "platform": "XYZ Quantum Services", "API_endpoint": "https://xyzquantum.api/v1/" },
        { "platform": "IBM Quantum Experience", "backend": "ibmq_ourense" }
    ]
  },
  "calibration": {
    "noise_characterization": {
      "timestamp": "2024-05-15T16:20:00Z",
      "methods": ["randomized_benchmarking"],
      "results": {
          "qubit_0": {
              "T1": 65.0,
              "T2": 90.0,
              "readout_error": 0.015
          },
          "qubit_1": {
              "T1": 58.0,
              "T2": 82.0,
              "readout_error": 0.022
          },
          "gate_errors": {
              "CNOT": {
                  "average_gate_fidelity": 0.965
              }
          }
      }
    }
  },
  "runs": [
    {
      "circuit": {
          "qiskit_circuit": {
              "source": "bell_prep_qiskit.py",
              "version": "0.41.0"
          },
          "openqasm": "bell_prep.qasm",
          "cirq_circuit": {
              "source": "bell_prep_cirq.py",
              "version": "0.16.0"
          }
      },
      "parameters": {
          "shots": 1024,
          "cirq_simulator_id": "noisy"
      },
      "results": [00, 11, 00, 10, ...],
      "data_format": "CSV",
      "external_data_uri": "https://universityx.datarepo/bell_data.csv"
    }
  ],
  "metadata": {
    "quantum_data_platform": "Qiskit QDP",
    "provenance": [
        { "dataset_id": "54321", "source": "Previous calibration run" },
        { "job_id": "63fa8... ", "source": "IBM Quantum job" }
    ],
    "ontologies": ["QEDX-core", "QUDT", "Qiskit-runtime"],
    "keywords": ["Bell state", "fidelity", "superconducting qubits"]
  }
}


```
