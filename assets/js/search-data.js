// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-now",
          title: "now",
          description: "What I&#39;m working on, learning, and thinking about right now",
          section: "Navigation",
          handler: () => {
            window.location.href = "/now/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Exploring innovations in AI, distributed systems, blockchain, and beyond",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Open-source frameworks and protocols advancing AI, privacy, and distributed systems",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-repositories",
              title: "repositories",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/repositories/";
              },
            },{id: "dropdown-archive",
              title: "archive",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/archive/";
              },
            },{id: "dropdown-contact",
              title: "contact",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/contact/";
              },
            },{id: "dropdown-licenses",
              title: "licenses",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/license/";
              },
            },{id: "dropdown-privacy",
              title: "privacy",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/privacy/";
              },
            },{id: "dropdown-docs-upir",
              title: "docs: UPIR",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://upir.subhadipmitra.com";
              },
            },{id: "dropdown-docs-ai-metacognition",
              title: "docs: AI Metacognition",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://ai-metacognition-toolkit.subhadipmitra.com/";
              },
            },{id: "post-i-trained-probes-to-catch-ai-models-sandbagging",
        
          title: "I Trained Probes to Catch AI Models Sandbagging",
        
        description: "First empirical demonstration of activation-level sandbagging detection. Linear probes achieve 90-96% accuracy across Mistral, Gemma, and Qwen models. Key finding - sandbagging representations are model-specific, and steering can reduce sandbagging by 20%.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/detecting-ai-sandbagging/";
          
        },
      },{id: "post-why-steering-vectors-beat-prompting-and-when-they-don-39-t",
        
          title: "Why Steering Vectors Beat Prompting (And When They Don&#39;t)",
        
        description: "I tested activation steering on 4 agent behaviors across 3 models. The results surprised me.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/steering-vectors-agents/";
          
        },
      },{id: "post-why-i-built-a-spark-native-llm-evaluation-framework-and-what-i-learned",
        
          title: "Why I Built a Spark-Native LLM Evaluation Framework (And What I Learned)",
        
        description: "A deep dive into building distributed LLM evaluation infrastructure that actually scales - architectural decisions, trade-offs, and lessons learned.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/building-spark-llm-eval/";
          
        },
      },{id: "post-the-mcp-maturity-model-evaluating-your-multi-agent-context-strategy",
        
          title: "The MCP Maturity Model: Evaluating Your Multi-Agent Context Strategy",
        
        description: "A practical framework for evaluating your multi-agent context management strategy. From ad-hoc string concatenation to self-evolving context systems - where does your architecture stand?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/mcp-maturity-model/";
          
        },
      },{id: "post-upir-what-if-distributed-systems-could-write-and-verify-themselves",
        
          title: "UPIR: What If Distributed Systems Could Write (and Verify) Themselves?",
        
        description: "Lessons from building a framework that automatically generates verified distributed systems - and why I think formal methods, synthesis, and ML need to work together",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/upir-distributed-systems/";
          
        },
      },{id: "post-the-data-platform-crisis-hiding-behind-ai-why-you-have-6-months-to-pivot",
        
          title: "The Data Platform Crisis Hiding Behind AI: Why you have 6 months to...",
        
        description: "Enterprise data platforms face a 100,000x query increase from agentic AI. Introducing Symbiotic Agent-Ready Platforms (SARPs) - the architectural paradigm shift needed to survive the transition to machine intelligence.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/agent-ready-data-platforms-sarp/";
          
        },
      },{id: "post-ai-meta-cognition-the-observer-effect-series",
        
          title: "AI Meta-Cognition - The Observer Effect Series",
        
        description: "Frontier AI models from OpenAI, Anthropic, Google &amp; others can detect when they&#39;re being tested and modify behavior-challenging AI safety evaluation methods.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ai-deception/";
          
        },
      },{id: "post-building-safer-ai-industry-response-and-the-path-forward-part-4-4",
        
          title: "Building Safer AI: Industry Response and the Path Forward - (Part 4/4)",
        
        description: "How the AI industry is responding to situational awareness challenges. Practical monitoring systems, collaborative research, and what organizations should do today.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/building-safer-ai-industry-response-practical-solutions/";
          
        },
      },{id: "post-alignment-faking-when-ai-pretends-to-change-part-3-4",
        
          title: "Alignment Faking: When AI Pretends to Change - (Part 3/4)",
        
        description: "Claude 3 Opus strategically fakes compliance during training to preserve its values. This alignment faking undermines our ability to modify AI behavior safely.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/alignment-faking-ai-pretends-to-change-values/";
          
        },
      },{id: "post-deliberative-alignment-can-we-train-ai-not-to-scheme-part-2-4",
        
          title: "Deliberative Alignment: Can We Train AI Not to Scheme? - (Part 2/4)",
        
        description: "Researchers achieved a 30-fold reduction in AI scheming through deliberative alignment. But rare failures persist. Can we truly train models not to deceive?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/deliberative-alignment-training-ai-not-to-scheme/";
          
        },
      },{id: "post-the-observer-effect-in-ai-when-models-know-they-39-re-being-tested-part-1-4",
        
          title: "The Observer Effect in AI: When Models Know They&#39;re Being Tested - (Part...",
        
        description: "Frontier AI models from OpenAI, Anthropic, and Google can now recognize when they&#39;re being tested. This observer effect undermines AI safety evaluation.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ai-observer-effect-models-recognize-evaluation/";
          
        },
      },{id: "post-we-need-a-consent-layer-for-ai-and-i-39-m-trying-to-build-one",
        
          title: "We Need a Consent Layer for AI (And I&#39;m Trying to Build One)...",
        
        description: "AI companies are getting sued over training data, agents operate with no permission framework, and users can&#39;t control their AI profiles. I wrote four open standards (LLMConsent) to create a decentralized consent protocol for AI - like HTTP but for data rights, agent permissions, and user sovereignty. This is an RFC, not a product.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/building-consent-layer-for-ai/";
          
        },
      },{id: "post-why-kimi-k2-stands-out-a-deep-dive-into-its-trillion-parameter-moe",
        
          title: "Why Kimi K2 Stands Out - A Deep Dive into Its Trillion-Parameter MoE...",
        
        description: "Explore Kimi K2’s trillion-parameter MoE architecture, MuonClip optimizer, and agentic training. Learn why it outperforms GPT-4.1 and DeepSeek-V3",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/why-kimi-k2-stands-out/";
          
        },
      },{id: "post-from-11-to-88-peak-bandwidth-writing-custom-triton-kernels-for-llm-inference",
        
          title: "From 11% to 88% Peak Bandwidth: Writing Custom Triton Kernels for LLM Inference...",
        
        description: "A hands-on exploration of writing custom GPU kernels with OpenAI Triton, going from PyTorch&#39;s 11% bandwidth utilization to 88% on RMSNorm.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/triton-kernels-llm-inference/";
          
        },
      },{id: "post-implementing-model-context-protocol-in-autonomous-multi-agent-systems-technical-architecture-and-performance-optimization",
        
          title: "Implementing Model Context Protocol in Autonomous Multi-Agent Systems - Technical Architecture and Performance...",
        
        description: "Discover how to implement Model Context Protocol (MCP) in autonomous multi-agent systems with this technical deep dive. Learn advanced context optimization strategies, distributed architecture patterns, and performance benchmarks with complete Python implementations. Includes hypothetical telecom implementation scenarios showing potential optimization benefits.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/implementing-model-context-protocol/";
          
        },
      },{id: "post-making-llms-faster-my-deep-dive-into-speculative-decoding",
        
          title: "Making LLMs Faster: My Deep Dive into Speculative Decoding",
        
        description: "A deep dive into implementing speculative decoding from scratch, with benchmarks on GPT-2 and extensions to diffusion models.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/making-llm-faster/";
          
        },
      },{id: "post-engineering-autonomous-multi-agent-systems-a-technical-deep-dive-into-telecom-customer-service",
        
          title: "Engineering Autonomous Multi-Agent Systems - A Technical Deep Dive into Telecom Customer Service...",
        
        description: "Dive into the world of autonomous AI agents with practical implementations, code examples, and real-world scenarios. Learn how to build intelligent systems with advanced memory management, dynamic prompt evolution, and sophisticated monitoring capabilities in telecom customer service.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/telecom-autonomous-multi-agent-genai-system/";
          
        },
      },{id: "post-engineering-multi-agent-systems-a-retail-banking-case-study",
        
          title: "Engineering Multi-Agent Systems - A Retail Banking Case Study",
        
        description: "Explore a detailed technical implementation of a multi-agent system for retail banking credit assessment. Learn about agent architecture, distributed systems patterns, error handling, compliance requirements, and performance optimization through actual code examples and system diagrams. Ideal for software architects and engineers building scalable financial systems.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/retail-bank-multi-agent-system/";
          
        },
      },{id: "post-etlc-2-0-building-context-aware-data-pipelines",
        
          title: "ETLC 2.0 - Building Context-Aware Data Pipelines",
        
        description: "Think your data pipelines could do more than just process information? ETLC 2.0 takes data engineering to the next level with Adaptive Context, Contextual Joins, and a scalable Context Store. It&#39;s not just about moving data—it&#39;s about making it intelligent. Ready to unlock the future of data pipelines? Read on.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/etlc-adaptive-contexts-and-contextual-joins/";
          
        },
      },{id: "post-the-end-of-data-warehouses-enter-the-age-of-dynamic-context-engines",
        
          title: "The End of Data Warehouses? Enter the Age of Dynamic Context Engines",
        
        description: "Traditional data warehouses are struggling to keep up with modern demands. Enter Dynamic Context Engines (DCEs) -  real-time, path-aware platforms that enrich data with context for smarter, faster decisions. Discover why they&#39;re the future of data analytics.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/end-of-data-warehouses/";
          
        },
      },{id: "post-part-3-3-reimagining-etl-with-large-language-models-the-path-to-intelligent-pipelines",
        
          title: "(Part 3/3) - Reimagining ETL with Large Language Models—The Path to Intelligent Pipelines...",
        
        description: "Explore how Large Language Models (LLMs) are revolutionizing ETL pipelines. Discover advanced techniques like context-driven transformations, semantic joins, and multimodal integration, redefining data engineering with smarter, adaptive, and intelligent workflows.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/etl-llm-part-3/";
          
        },
      },{id: "post-data-pipelines-gone-wild-10-wtf-moments-that-39-ll-make-you-rethink-your-architecture",
        
          title: "Data Pipelines Gone Wild - 10 WTF Moments That&#39;ll Make You Rethink Your...",
        
        description: "Buckle up for a wild ride through 10 mind-blowing data pipeline disasters and their solutions. From ancient code to biased algorithms, this post reveals the chaos and how to conquer it!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/data-pipelines-gone-wild/";
          
        },
      },{id: "post-introducing-etl-c-extract-transform-load-contextualize-a-new-data-processing-paradigm",
        
          title: "Introducing ETL-C (Extract, Transform, Load, Contextualize) - a new data processing paradigm",
        
        description: "Think your AI apps could use a deeper understanding of your data? ETL-C (extract, load, transform, and contextualize) could be the answer. It&#39;s about adding context for better decisions. Intrigued? Read on.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/etlc-context-new-paradigm/";
          
        },
      },{id: "post-part-2-3-rethinking-etls-how-large-language-models-llm-can-enhance-data-transformation-and-integration",
        
          title: "(Part 2/3) Rethinking ETLs - How Large Language Models (LLM) can enhance Data...",
        
        description: "Rethinking ETLs - The Power of Large Language Models. Part 2 Exploring examples and optimization goals",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/etl-llm-part-2/";
          
        },
      },{id: "post-part-1-3-rethinking-etls-how-large-language-models-llm-can-enhance-data-transformation-and-integration",
        
          title: "(Part 1/3) Rethinking ETLs - How Large Language Models (LLM) can enhance Data...",
        
        description: "Rethinking ETLs - The Power of Large Language Models. Part 1 - Explore traditional algorithms for efficient ETL planning in complex data.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/etl-llm-part-1/";
          
        },
      },{id: "post-who-needs-exact-answers-anyway-the-joy-of-approximate-big-data",
        
          title: "Who Needs Exact Answers Anyway? The Joy of Approximate Big Data",
        
        description: "Discover how sacrificing a bit of accuracy can lead to huge gains in big data analysis speed and efficiency.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/big-data-approximate-calculations/";
          
        },
      },{id: "post-evolutionary-bytes-harnessing-genetic-algorithms-for-smarter-data-platforms-part-2-2",
        
          title: "Evolutionary Bytes - Harnessing Genetic Algorithms for Smarter Data Platforms (Part 2/2)",
        
        description: "Explore how genetic algorithms revolutionize data platforms, offering adaptive, dynamic solutions to meet complex challenges in the fast-evolving digital landscape.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/genetic-algorithm-inspired-data-platforms-part-2/";
          
        },
      },{id: "post-evolutionary-bytes-harnessing-genetic-algorithms-for-smarter-data-platforms-part-1-2",
        
          title: "Evolutionary Bytes - Harnessing Genetic Algorithms for Smarter Data Platforms (Part 1/2)",
        
        description: "Explore how genetic algorithms revolutionize data platforms, offering adaptive, dynamic solutions to meet complex challenges in the fast-evolving digital landscape.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/genetic-algorithm-inspired-data-platforms-part-1/";
          
        },
      },{id: "post-quantum-vs-classical-data-management-computational-complexity",
        
          title: "Quantum vs. Classical - Data Management Computational Complexity",
        
        description: "Grover’s Algorithm and the Revolution of Quantum Search Efficiency",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/quantum-vs-classical-data-management-complexity/";
          
        },
      },{id: "post-quantum-experiment-data-exchange-qedx-building-an-interoperability-standard",
        
          title: "Quantum Experiment Data Exchange (QEDX) - Building an Interoperability Standard",
        
        description: "Advancements in data management, from warehouses to Data Mesh and Lakehouse, signal a shift toward more adaptive platforms like, Quantum Data Management, Genetic algorithm concepts, etc.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/quantum-data-exchange/";
          
        },
      },{id: "post-data-at-quantum-speed-the-promise-and-potential-of-qdp",
        
          title: "Data at Quantum Speed - The Promise and Potential of QDP",
        
        description: "Explore the new realm of Quantum Data Platform (QDP) and its promise to revolutionize data processing at quantum speed. Discover the potential applications, technical considerations and implications.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/quantum-data-platform/";
          
        },
      },{id: "post-the-next-frontier-envisioning-the-future-of-data-platforms-beyond-data-mesh-data-lakehouse-and-data-hub-fabric",
        
          title: "The Next Frontier - Envisioning the Future of Data Platforms Beyond Data Mesh,...",
        
        description: "Advancements in data management, from warehouses to Data Mesh and Lakehouse, signal a shift toward more adaptive platforms like, Quantum Data Management, Genetic algorithm concepts, etc.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/next-frontier-data-platform/";
          
        },
      },{id: "post-part-4-building-a-massive-scale-real-time-data-platform-memory-management-with-apache-ignite",
        
          title: "Part 4 - Building a Massive-Scale Real-Time Data Platform - Memory Management with...",
        
        description: "Deep dive into memory management with Apache Ignite for high-performance data platforms. Learn how to handle 2.5M events/second with sub-millisecond latency through practical memory architecture, optimization techniques, and real-world implementation patterns.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/building-a-massive-scale-real-time-data-platform-p4/";
          
        },
      },{id: "post-part-3-building-a-massive-scale-real-time-data-platform-memory-management-with-apache-ignite",
        
          title: "Part 3 - Building a Massive-Scale Real-Time Data Platform - Memory Management with...",
        
        description: "Deep dive into memory management with Apache Ignite for high-performance data platforms. Learn how to handle 2.5M events/second with sub-millisecond latency through practical memory architecture, optimization techniques, and real-world implementation patterns.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/building-a-massive-scale-real-time-data-platform-p3/";
          
        },
      },{id: "post-part-2-building-a-massive-scale-real-time-data-platform-data-partitioning-and-flow",
        
          title: "Part 2 - Building a Massive-Scale Real-Time Data Platform - Data Partitioning and...",
        
        description: "Explore how to architect data partitioning and flow for massive-scale event processing. Learn implementation patterns for handling 2.5M events/second across distributed systems using Kafka, Ignite, and Cassandra. Practical insights on partition strategies, data routing, and performance optimization.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/building-a-massive-scale-real-time-data-platform-p2/";
          
        },
      },{id: "post-part-1-building-a-massive-scale-real-time-data-platform-system-overview-and-architecture",
        
          title: "Part 1 - Building a Massive-Scale Real-Time Data Platform - System Overview and...",
        
        description: "Dive into the architecture of a telco-scale real-time data platform processing 2.5M events/second and 350GB DPI data/15min. Learn how we combined Apache Kafka, Ignite, and Cassandra to build a high-performance system handling massive telecommunications data for real-time analytics and customer insights.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/building-a-massive-scale-real-time-data-platform-p1/";
          
        },
      },{id: "post-overcoming-synchronization-hurdles-in-cellular-network-positioning",
        
          title: "Overcoming Synchronization Hurdles in Cellular Network Positioning",
        
        description: "In this article, I discuss the challenges of synchronization in cellular network positioning and the importance of precise timing for accurate positioning. I also explore ways to mitigate these errors, including algorithmic adjustments and improving synchronization technologies.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/network-synchronization-challenges-in-cellular-networks-positioning/";
          
        },
      },{id: "post-reimagining-system-design-balancing-time-tested-principles-with-modern-innovations",
        
          title: "Reimagining System Design: Balancing Time-Tested Principles with Modern Innovations",
        
        description: "Amazon&#39;s early system design principles, emphasizing decentralization, asynchrony, autonomy, and simplicity, offer timeless wisdom for building scalable and resilient tech systems today.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distributed-system-design/";
          
        },
      },{id: "post-designing-a-real-time-data-processing-system",
        
          title: "Designing a Real Time Data Processing System",
        
        description: "Master real-time data processing - A guide to designing scalable, resilient, and high-performance systems for instant insights.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/designing-a-real-time-data-processing-system/";
          
        },
      },{id: "post-introducing-oconsent-open-consent-protocol",
        
          title: "Introducing OConsent - Open Consent Protocol",
        
        description: "OConsent is a blockchain-based platform that enables transparent processing of personal data, empowering users and data controllers to manage consent and privacy.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/introducing-oconsent-open-consent-protocol/";
          
        },
      },{id: "post-reading-list",
        
          title: "Reading List",
        
        description: "A collected list of research papers, tech blogs, videos that I follow",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/1970/reading-list/";
          
        },
      },{id: "post-welcome-to-my-blog",
        
          title: "Welcome to my blog",
        
        description: "Let&#39;s talk tech! I&#39;ll post everything from polished pieces to spur-of-the-moment thoughts. And if you&#39;ve got ideas for posts or want to collaborate, let&#39;s connect!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/1970/welcome/";
          
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%6F%6E%74%61%63%74@%73%75%62%68%61%64%69%70%6D%69%74%72%61.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/bassrehab", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/subhadip-mitra", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Subhadip-Mitra-3/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/bassrehab", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
