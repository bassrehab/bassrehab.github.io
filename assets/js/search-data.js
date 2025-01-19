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
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "👋 Hi there! I&#39;m delighted to share a portfolio of my work through these GitHub repositories. I am always open to collaborating with other passionate developers or incorporating valuable feedback to enhance these projects. Feel free to fork any repository, submit pull requests, or reach out directly if you have ideas or suggestions. Your contributions are welcome and greatly appreciated!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a public version of my resume with certain sensitive details removed for privacy. These include contact numbers and specific project metrics. For a detailed resume, please contact me at contact@subhadipmitra.com or connect with me on LinkedIn - https://www.linkedin.com/in/subhadip-mitra/",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-archive",
              title: "archive",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-contact",
              title: "contact",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-licenses",
              title: "licenses",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-privacy",
              title: "privacy",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
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
      
        title: "Introducing OConsent — Open Consent Protocol",
      
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
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-3977-7402", "_blank");
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
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=B3U5mSYAAAAJ", "_blank");
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
