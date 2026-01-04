#!/bin/bash
# Generate thumbnail PNGs for blog posts using kroki.io

cd "$(dirname "$0")/.."
BLOG_IMG="assets/img/blog"

# Create temp directory for mermaid files
mkdir -p /tmp/mermaid-diagrams

# MCP Maturity Model
cat > /tmp/mermaid-diagrams/mcp-maturity.mmd << 'EOF'
graph TB
    L0["Level 0: Ad-Hoc"]
    L1["Level 1: Structured"]
    L2["Level 2: MCP-Aware"]
    L3["Level 3: Optimized"]
    L4["Level 4: Adaptive"]
    L5["Level 5: Symbiotic"]
    L0 --> L1 --> L2 --> L3 --> L4 --> L5
    style L0 fill:#ffebee
    style L1 fill:#fff3e0
    style L2 fill:#e8f5e9
    style L3 fill:#e3f2fd
    style L4 fill:#f3e5f5
    style L5 fill:#fce4ec
EOF

# SMPP Modules
cat > /tmp/mermaid-diagrams/smpp-modules.mmd << 'EOF'
graph TB
    subgraph core["smpp-core"]
        PDU["PDU Records"]
        CODEC["Codecs"]
    end
    subgraph netty["smpp-netty"]
        HANDLER["Channel Handlers"]
    end
    subgraph server["smpp-server"]
        SERVER["SmppServer"]
    end
    subgraph client["smpp-client"]
        CLIENT["SmppClient"]
    end
    SERVER --> HANDLER
    CLIENT --> HANDLER
    HANDLER --> CODEC
    CODEC --> PDU
    style core fill:#e3f2fd
    style server fill:#e8f5e9
    style client fill:#f3e5f5
EOF

# Kimi K2 MoE Architecture
cat > /tmp/mermaid-diagrams/kimi-moe.mmd << 'EOF'
flowchart TB
    T["Token"] --> G["Top-K Router"]
    G -->|"Select 8"| E["8 Active Experts"]
    G -->|"Always"| ES["Shared Expert"]
    E --> A["Output"]
    ES --> A
    subgraph Total["1T Parameters"]
        E
        ES
    end
    style Total fill:#e8f5e9
EOF

# AI Safety Layers (for alignment/deception posts)
cat > /tmp/mermaid-diagrams/ai-safety.mmd << 'EOF'
flowchart TB
    subgraph Training["Training"]
        T1["Base Model"]
        T2["RLHF"]
        T3["Safety Tuning"]
    end
    subgraph Risks["Risks"]
        R1["Deception"]
        R2["Sandbagging"]
        R3["Alignment Faking"]
    end
    subgraph Detection["Detection"]
        D1["Probing"]
        D2["Behavioral Tests"]
    end
    Training --> Risks --> Detection
    style Risks fill:#ffebee
    style Detection fill:#e8f5e9
EOF

# MCP Architecture
cat > /tmp/mermaid-diagrams/mcp-arch.mmd << 'EOF'
flowchart LR
    H["LLM Client"] <-->|"JSON-RPC"| M["MCP Protocol"]
    M <--> S["MCP Server"]
    S --> R1["Tools"]
    S --> R2["Prompts"]
    S --> R3["Data"]
    style M fill:#e3f2fd
EOF

# Genetic Algorithm
cat > /tmp/mermaid-diagrams/genetic-algo.mmd << 'EOF'
flowchart TB
    P["Population"] --> F["Fitness"]
    F --> S["Selection"]
    S --> C["Crossover"]
    C --> M["Mutation"]
    M --> P2["New Population"]
    P2 -->|"Repeat"| F
    style P fill:#e3f2fd
    style P2 fill:#e8f5e9
EOF

# Quantum Data Exchange
cat > /tmp/mermaid-diagrams/quantum-exchange.mmd << 'EOF'
flowchart LR
    Q1["Quantum Lab A"] --> E["QEDX Encoder"]
    E --> QC["Quantum Channel"]
    QC --> D["QEDX Decoder"]
    D --> Q2["Quantum Lab B"]
    style QC fill:#f3e5f5
EOF

# UPIR Verification
cat > /tmp/mermaid-diagrams/upir.mmd << 'EOF'
flowchart TB
    V["Verification"] --> P["Properties"]
    S["Synthesis"] --> P
    M["ML Search"] --> P
    P --> O["Verified Protocol"]
    style P fill:#fff3e0
    style O fill:#e8f5e9
EOF

# Data Warehouses End
cat > /tmp/mermaid-diagrams/dw-end.mmd << 'EOF'
flowchart LR
    DW["Data Warehouse"] --> LH["Lakehouse"]
    LH --> AI["AI-Native<br/>Vector + Context"]
    style DW fill:#ffebee
    style LH fill:#fff3e0
    style AI fill:#e8f5e9
EOF

# Data Pipelines Gone Wild
cat > /tmp/mermaid-diagrams/pipelines-wild.mmd << 'EOF'
flowchart TB
    subgraph Problems["Anti-Patterns"]
        P1["Schema Drift"]
        P2["Silent Failures"]
        P3["Zombie Jobs"]
    end
    subgraph Solutions["Fixes"]
        S1["Schema Registry"]
        S2["Observability"]
        S3["Monitoring"]
    end
    Problems --> Solutions
    style Problems fill:#ffebee
    style Solutions fill:#e8f5e9
EOF

# OConsent Protocol
cat > /tmp/mermaid-diagrams/oconsent.mmd << 'EOF'
flowchart LR
    U["User Consent"] --> O["OConsent Registry"]
    O --> S1["Service A"]
    O --> S2["Service B"]
    O --> S3["Service C"]
    style O fill:#e8f5e9
EOF

# Approximate Calculations
cat > /tmp/mermaid-diagrams/approx-calc.mmd << 'EOF'
flowchart TB
    subgraph Structures["Probabilistic Structures"]
        B["Bloom Filter"]
        H["HyperLogLog"]
        C["Count-Min Sketch"]
    end
    T["Trade-off: Memory vs Accuracy"]
    Structures --> T
    style Structures fill:#e3f2fd
EOF

# Generate all PNGs
echo "Generating thumbnail PNGs..."
for f in /tmp/mermaid-diagrams/*.mmd; do
    name=$(basename "$f" .mmd)
    echo "  $name.png"
    curl -s -X POST -H "Content-Type: text/plain" --data-binary @"$f" \
        "https://kroki.io/mermaid/png" -o "$BLOG_IMG/$name.png"
done

echo "Done! Generated files:"
ls -la "$BLOG_IMG"/*.png | grep -E "(mcp-|smpp-|kimi-|ai-safety|genetic-|quantum-exchange|upir|dw-end|pipelines-wild|oconsent|approx)"
