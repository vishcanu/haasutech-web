export const courseData = [
 
 {
  id: 1,
  slug: "dsa-course",
  title: "Data Structures & Algorithms (DSA) Mastery",
  level: "Beginner to Intermediate",
  badge: "Beginner",
  badgeColor: "#22c55e", // Green
  duration: "10 weeks",
   isFeatured: true,
  students: 8234,
  tag: "Programming Fundamentals",
  description: "Master core data structures and algorithms for technical interviews and real-world problem solving.",
  image: "/assets/images/courses/dsa-icon.png",
  why: {
    heading: "Why learn Data Structures & Algorithms (DSA)?",
    points: [
      "DSA is the foundation for cracking top tech interviews (FAANG, startups, etc.).",
      "Strengthens your problem-solving and critical thinking abilities.",
      "Helps you write optimized, scalable, and efficient code.",
      "Essential for competitive programming and coding contests.",
      "Boosts your confidence in tackling real-world technical challenges."
    ]
  },
  modules: [
    {
      title: "Module 1: DSA Foundations & Arrays",
      topics: [
        "Time and Space Complexity",
        "Arrays and Memory Layout",
        "Sliding Window Technique",
        "Two Pointer Technique"
      ]
    },
    {
      title: "Module 2: Strings and Recursion",
      topics: [
        "String Manipulation",
        "Pattern Searching",
        "Recursion Basics",
        "Backtracking Problems"
      ]
    },
    {
      title: "Module 3: Linked Lists, Stacks, and Queues",
      topics: [
        "Singly and Doubly Linked Lists",
        "Stack and Its Applications",
        "Queue and Circular Queue",
        "Dequeue & Problems"
      ]
    },
    {
      title: "Module 4: Trees & Graphs",
      topics: [
        "Binary Tree and Binary Search Tree (BST)",
        "Tree Traversals: Inorder, Preorder, Postorder",
        "Graphs: BFS, DFS",
        "Graph Representations"
      ]
    },
    {
      title: "Module 5: Sorting & Searching",
      topics: [
        "Merge Sort and Quick Sort",
        "Binary Search Applications",
        "Heap Sort",
        "Sorting Problems"
      ]
    },
    {
      title: "Module 6: Hashing & Greedy Techniques",
      topics: [
        "Hash Tables and Hash Sets",
        "Frequency Maps",
        "Greedy Algorithms",
        "Greedy Case Studies"
      ]
    },
    {
      title: "Module 7: Dynamic Programming",
      topics: [
        "Introduction to DP",
        "Memoization vs Tabulation",
        "Fibonacci, Knapsack, LIS",
        "2D DP Patterns"
      ]
    },
    {
      title: "Module 8: Interview Preparation",
      topics: [
        "Top 50 Coding Interview Problems",
        "Mock Tests and Solutions",
        "Resume & Portfolio Guidance",
        "DSA in System Design (Intro)"
      ]
    }
  ],
  topColor: "linear-gradient(to right, #f97316, #facc15)", // Orange to Yellow
  difficultyBar: "#facc15"
},



  {
  id: 2,
  slug: "python-programming",
  title: "Python Programming Essentials",
  level: "Beginner",
  badge: "Beginner",
  badgeColor: "#3b82f6", // Blue
  duration: "8 weeks",
   isFeatured: true,
  students: 9561,
  tag: "Programming Fundamentals",
  description: "Start your programming journey with Python, the most beginner-friendly and versatile language in tech today.",
  image: "/assets/images/courses/python-icon.png",
  why: {
    heading: "Why learn Python Programming?",
    points: [
      "Python is the most beginner-friendly language with simple syntax.",
      "Used in AI, Data Science, Web Development, Automation, and more.",
      "It’s the top choice for startups, MNCs, and research projects.",
      "Huge community support, extensive libraries, and high job demand.",
      "Learning Python builds a strong base for advanced tech domains."
    ]
  },
  modules: [
    {
      title: "Module 1: Python Basics",
      topics: [
        "Installing Python & Setting Up VS Code",
        "Variables, Data Types, and Input/Output",
        "Operators and Expressions",
        "Basic Programs and Debugging"
      ]
    },
    {
      title: "Module 2: Control Structures",
      topics: [
        "Conditional Statements (if, elif, else)",
        "Loops: for, while",
        "Loop Control: break, continue, pass",
        "Hands-on Exercises"
      ]
    },
    {
      title: "Module 3: Data Structures in Python",
      topics: [
        "Lists, Tuples, and Sets",
        "Dictionaries and Nested Collections",
        "List Comprehensions",
        "Real-world Use Cases"
      ]
    },
    {
      title: "Module 4: Functions and Modules",
      topics: [
        "Defining & Calling Functions",
        "Arguments and Return Types",
        "Lambda & Recursion",
        "Importing Modules & Built-in Libraries"
      ]
    },
    {
      title: "Module 5: Object-Oriented Programming (OOP)",
      topics: [
        "Classes and Objects",
        "Encapsulation, Inheritance, Polymorphism",
        "Constructor & Dunder Methods",
        "OOP Design Principles"
      ]
    },
    {
      title: "Module 6: File Handling & Exceptions",
      topics: [
        "Reading & Writing Files",
        "Working with Text, CSV, and JSON",
        "Exception Handling (try, except, finally)",
        "Practical File Projects"
      ]
    },
    {
      title: "Module 7: Python Projects & Practice",
      topics: [
        "Mini Project: Calculator / Quiz App",
        "Hands-on Coding Practice",
        "Python Best Practices",
        "Real-world Scenarios"
      ]
    }
  ],
  topColor: "linear-gradient(to right, #06b6d4, #3b82f6)", // Cyan to Blue
  difficultyBar: "#3b82f6"
},
{
  id: 3,
  slug: "java-programming",
  title: "Java Programming Essentials",
  level: "Beginner to Intermediate",
  badge: "Beginner",
  badgeColor: "#f97316", // Orange
  duration: "9 weeks",
  students: 7812,
  tag: "Programming Fundamentals",
  description: "Build a strong foundation in Java, a powerful object-oriented programming language used in backend, Android, and enterprise development.",
  image: "/assets/images/courses/java-icon.png",
  why: {
    heading: "Why learn Java Programming?",
    points: [
      "Java is one of the most widely used languages in the industry.",
      "Core technology behind Android apps, enterprise software, and web services.",
      "Strong object-oriented programming foundation.",
      "Great for competitive coding and backend development.",
      "Used by companies like Amazon, Netflix, Uber, and many banks."
    ]
  },
  modules: [
    {
      title: "Module 1: Introduction to Java",
      topics: [
        "Setting Up Java & IDE (IntelliJ / Eclipse)",
        "First Java Program: Hello World",
        "Java Syntax, Variables, and Data Types",
        "Type Casting and Input Handling"
      ]
    },
    {
      title: "Module 2: Operators & Control Flow",
      topics: [
        "Arithmetic, Relational, and Logical Operators",
        "Conditional Statements: if, switch",
        "Loops: for, while, do-while",
        "Jump Statements: break, continue"
      ]
    },
    {
      title: "Module 3: Arrays and Strings",
      topics: [
        "1D and 2D Arrays",
        "String Class and StringBuilder",
        "String Methods and Manipulation",
        "Common Array/String Problems"
      ]
    },
    {
      title: "Module 4: Object-Oriented Programming",
      topics: [
        "Classes and Objects",
        "Constructors and this Keyword",
        "Inheritance and Polymorphism",
        "Abstraction and Interfaces"
      ]
    },
    {
      title: "Module 5: Exception Handling & File I/O",
      topics: [
        "try-catch-finally & throw/throws",
        "Checked vs Unchecked Exceptions",
        "Reading/Writing Files using Streams",
        "Serialization in Java"
      ]
    },
    {
      title: "Module 6: Collections & Frameworks",
      topics: [
        "ArrayList, LinkedList, HashMap, HashSet",
        "Iterators and Generics",
        "Collections Utilities",
        "Use Cases in Real Projects"
      ]
    },
    {
      title: "Module 7: Java Project",
      topics: [
        "Mini Project: Student Management / Banking App",
        "OOP + File + Collections Integration",
        "Clean Code & Best Practices",
        "Debugging and Testing"
      ]
    }
  ],
  topColor: "linear-gradient(to right, #f97316, #fb923c)", // Orange gradient
  difficultyBar: "#fb923c"
},
{
  id: 4,
  slug: "c-cpp-programming",
  title: "C/C++ Programming Foundations",
  level: "Beginner",
  badge: "Beginner",
  badgeColor: "#10b981", // Emerald green
  duration: "9 weeks",
  students: 6520,
  tag: "Programming Fundamentals",
  description: "Learn core programming logic using C and C++. Build a strong foundation in memory management, problem solving, and object-oriented design.",
  image: "/assets/images/courses/cpp-icon.png",
  why: {
    heading: "Why learn C/C++ Programming?",
    points: [
      "C/C++ builds deep understanding of how code interacts with memory and hardware.",
      "Foundation for learning Data Structures, Algorithms, and System Programming.",
      "Widely used in game development, embedded systems, OS/kernel dev, and high-performance apps.",
      "Improves problem-solving skills and competitive programming ability.",
      "C++ is the go-to language in many coding interviews and ICPC competitions."
    ]
  },
  modules: [
    {
      title: "Module 1: C Programming Basics",
      topics: [
        "Installing GCC Compiler",
        "Structure of C Program",
        "Variables, Data Types, I/O",
        "Operators and Expressions"
      ]
    },
    {
      title: "Module 2: Control Flow and Loops",
      topics: [
        "If, If-Else, Nested Ifs",
        "Switch-Case Statement",
        "While, Do-While, and For Loops",
        "Loop Control (break, continue)"
      ]
    },
    {
      title: "Module 3: Functions and Arrays",
      topics: [
        "Function Declaration and Definition",
        "Pass by Value vs Reference",
        "1D and 2D Arrays",
        "String Handling in C"
      ]
    },
    {
      title: "Module 4: Pointers and Memory",
      topics: [
        "Pointer Basics and Addressing",
        "Pointer Arithmetic",
        "Dynamic Memory (malloc, free)",
        "Pointer to Array and Functions"
      ]
    },
    {
      title: "Module 5: Structures and File Handling",
      topics: [
        "Structs and Nested Structs",
        "Union vs Struct",
        "File Reading/Writing in C",
        "Practical File Projects"
      ]
    },
    {
      title: "Module 6: Introduction to C++",
      topics: [
        "Difference between C and C++",
        "Basic C++ Syntax and IO",
        "OOP Concepts in C++",
        "Classes, Objects, and Constructors"
      ]
    },
    {
      title: "Module 7: C++ OOP & STL",
      topics: [
        "Encapsulation, Inheritance, Polymorphism",
        "Function Overloading & Operator Overloading",
        "Standard Template Library (STL): vector, map, set",
        "Project Using OOP + STL"
      ]
    }
  ],
  topColor: "linear-gradient(to right, #0ea5e9, #10b981)", // Blue to green
  difficultyBar: "#10b981"
},
{
  id: 5,
  slug: "ai-ml-certification",
  title: "Artificial Intelligence & Machine Learning (AI-ML) Certification Course",
  level: "Beginner to Advanced",
  badge: "Advanced",
  badgeColor: "#8b5cf6", // Violet
  duration: "16 weeks",
  students: 11238,
   isFeatured: true,
  tag: "AI & Machine Learning",
  description: "A comprehensive AI & ML course covering foundations, machine learning algorithms, deep learning, NLP, and real-world deployment with Python.",
  image: "/assets/images/courses/ai-ml-icon.png",
  why: {
    heading: "Why pursue AI & ML Certification?",
    points: [
      "AI/ML is transforming industries from healthcare to finance, robotics to marketing.",
      "Top companies like Google, OpenAI, Microsoft, and Meta hire AI/ML experts with 2x-3x higher salaries.",
      "Build intelligent systems: chatbots, recommendation engines, face recognition, and self-driving logic.",
      "Master core concepts from mathematics to model building, from theory to real-world deployment.",
      "This course takes you from beginner to expert with projects, certifications, and interview preparation."
    ]
  },
  modules: [
    {
      title: "Module 1: Introduction to AI & ML",
      topics: [
        "What is Artificial Intelligence?",
        "Types of AI: Narrow, General, and Super AI",
        "What is Machine Learning?",
        "AI vs ML vs Deep Learning"
      ]
    },
    {
      title: "Module 2: Python for ML",
      topics: [
        "Python Basics & NumPy",
        "Pandas for Data Manipulation",
        "Matplotlib & Seaborn for Data Visualization",
        "Hands-on: Exploratory Data Analysis"
      ]
    },
    {
      title: "Module 3: Mathematics for Machine Learning",
      topics: [
        "Linear Algebra: Vectors, Matrices, Eigenvalues",
        "Probability and Statistics",
        "Gradient Descent and Optimization",
        "Calculus for ML (Conceptual)"
      ]
    },
    {
      title: "Module 4: Supervised Learning Algorithms",
      topics: [
        "Linear & Logistic Regression",
        "Decision Trees and Random Forest",
        "Support Vector Machines (SVM)",
        "Model Evaluation: Accuracy, Precision, Recall"
      ]
    },
    {
      title: "Module 5: Unsupervised Learning",
      topics: [
        "K-Means Clustering",
        "Hierarchical Clustering",
        "Principal Component Analysis (PCA)",
        "Dimensionality Reduction Techniques"
      ]
    },
    {
      title: "Module 6: Deep Learning & Neural Networks",
      topics: [
        "Introduction to Deep Learning & Perceptron",
        "Neural Network Architectures",
        "Activation Functions, Backpropagation",
        "TensorFlow & Keras Basics"
      ]
    },
    {
      title: "Module 7: Natural Language Processing (NLP)",
      topics: [
        "Text Preprocessing: Tokenization, Stopwords, Lemmatization",
        "TF-IDF & Word Embeddings",
        "Sentiment Analysis Project",
        "Intro to LLMs & Transformers"
      ]
    },
    {
      title: "Module 8: AI Projects & Model Deployment",
      topics: [
        "End-to-End ML Project Workflow",
        "Model Deployment with Streamlit/Flask",
        "Cloud & API Integration",
        "Capstone Projects + Certification"
      ]
    }
  ],
  topColor: "linear-gradient(to right, #6366f1, #ec4899)", // Indigo to pink
  difficultyBar: "#8b5cf6"
},
{
  id: 6,
  slug: "machine-learning-python",
  title: "Machine Learning with Python",
  level: "Beginner to Advanced",
  badge: "Advanced",
  badgeColor: "#0ea5e9", // Sky Blue
  duration: "14 weeks",
  students: 9873,
  tag: "AI & Machine Learning",
  description: "Master the entire Machine Learning workflow using Python, from data preprocessing to building and deploying predictive models in real-world scenarios.",
  image: "/assets/images/courses/ml-python-icon.png",
  why: {
    heading: "Why take Machine Learning with Python?",
    points: [
      "Machine Learning is the backbone of AI, used in finance, health, marketing, and tech.",
      "Python is the #1 language for building ML models due to libraries like Scikit-learn, Pandas, and TensorFlow.",
      "Learn to solve real-world problems: customer churn, fraud detection, demand forecasting, and more.",
      "Prepares you for top ML roles, internships, and research positions with hands-on project work.",
      "End-to-end journey: from data cleaning to model deployment, all in Python."
    ]
  },
  modules: [
    {
      title: "Module 1: Introduction to Machine Learning",
      topics: [
        "What is ML? Types of ML",
        "Supervised vs Unsupervised Learning",
        "ML Workflow and Life Cycle",
        "Python Ecosystem for ML"
      ]
    },
    {
      title: "Module 2: Python Essentials for ML",
      topics: [
        "Pandas, NumPy, Matplotlib Recap",
        "Data Cleaning & Feature Engineering",
        "Exploratory Data Analysis (EDA)",
        "Data Scaling and Normalization"
      ]
    },
    {
      title: "Module 3: Supervised Learning",
      topics: [
        "Linear & Logistic Regression",
        "K-Nearest Neighbors (KNN)",
        "Naive Bayes",
        "Decision Trees & Random Forest"
      ]
    },
    {
      title: "Module 4: Model Evaluation & Tuning",
      topics: [
        "Confusion Matrix, Accuracy, Precision, Recall",
        "ROC-AUC, F1-Score",
        "Cross Validation",
        "Hyperparameter Tuning: GridSearch & RandomizedSearch"
      ]
    },
    {
      title: "Module 5: Unsupervised Learning",
      topics: [
        "K-Means Clustering",
        "DBSCAN & Hierarchical Clustering",
        "Principal Component Analysis (PCA)",
        "Feature Reduction Techniques"
      ]
    },
    {
      title: "Module 6: Advanced Algorithms",
      topics: [
        "Gradient Boosting: XGBoost, LightGBM",
        "Support Vector Machines (SVM)",
        "Ensemble Techniques",
        "Model Stacking & Blending"
      ]
    },
    {
      title: "Module 7: Real-World Projects in ML",
      topics: [
        "House Price Prediction",
        "Customer Churn Prediction",
        "Credit Card Fraud Detection",
        "Retail Sales Forecasting"
      ]
    },
    {
      title: "Module 8: Model Deployment & MLOps",
      topics: [
        "Pickle & Joblib for Model Saving",
        "Deploying ML Models with Streamlit & Flask",
        "Creating REST APIs for Models",
        "Intro to MLOps and Cloud Deployment"
      ]
    }
  ],
  topColor: "linear-gradient(to right, #38bdf8, #0ea5e9)", // Light to sky blue
  difficultyBar: "#0ea5e9"
},
{
  id: 7,
  slug: "deep-learning-tensorflow",
  title: "Deep Learning with TensorFlow/Keras",
  level: "Intermediate to Advanced",
  badge: "Advanced",
  badgeColor: "#f43f5e", // Rose Red
  duration: "12 weeks",
  students: 7910,
  tag: "AI & Machine Learning",
  description: "Master deep learning from the ground up. Build real-world neural networks using TensorFlow/Keras and solve problems in vision, NLP, and AI product development.",
  image: "/assets/images/courses/deep-learning-icon.png",
  why: {
    heading: "Why master Deep Learning with TensorFlow/Keras?",
    points: [
      "Deep Learning powers AI breakthroughs, from GPT to self-driving cars.",
      "TensorFlow & Keras are the industry-standard tools used by Google, Meta, and startups alike.",
      "Gain hands-on experience building real neural networks from scratch, not just theory.",
      "You'll learn the math, architecture, and practical skills to deploy your own AI systems.",
      "This course is your gateway to research roles, LLM fine-tuning, and production-grade AI engineering."
    ]
  },
  modules: [
    {
      title: "Module 1: Introduction to Deep Learning",
      topics: [
        "What is Deep Learning?",
        "Perceptron and Multilayer Perceptron (MLP)",
        "Activation Functions & Forward Propagation",
        "Loss Functions and Optimizers"
      ]
    },
    {
      title: "Module 2: TensorFlow & Keras Basics",
      topics: [
        "Tensor Operations and Graphs",
        "Keras Functional API vs Sequential API",
        "Model Building, Compilation, Fitting",
        "Callbacks, Checkpoints, and TensorBoard"
      ]
    },
    {
      title: "Module 3: Computer Vision with CNNs",
      topics: [
        "Convolution Layers & Pooling",
        "CNN Architectures: VGG, ResNet",
        "Image Augmentation",
        "Image Classification Project"
      ]
    },
    {
      title: "Module 4: Regularization & Optimization",
      topics: [
        "Overfitting & Dropout",
        "Batch Normalization",
        "Learning Rate Scheduling",
        "Early Stopping and Fine-tuning"
      ]
    },
    {
      title: "Module 5: Sequence Modeling with RNNs & LSTMs",
      topics: [
        "Recurrent Neural Networks (RNN)",
        "Long Short-Term Memory (LSTM)",
        "GRU and Bidirectional RNNs",
        "Time Series Forecasting Project"
      ]
    },
    {
      title: "Module 6: Transfer Learning & Fine-Tuning",
      topics: [
        "Using Pre-trained Models (VGG16, Inception, MobileNet)",
        "Freezing vs Unfreezing Layers",
        "Transfer Learning for Image & Text",
        "Customizing Models with New Data"
      ]
    },
    {
      title: "Module 7: Natural Language Processing (NLP)",
      topics: [
        "Text Tokenization and Padding",
        "Embedding Layers",
        "Sentiment Classification Project",
        "Sequence-to-Sequence with LSTMs"
      ]
    },
    {
      title: "Module 8: Real-world Projects & Deployment",
      topics: [
        "End-to-End DL Project Pipeline",
        "Model Deployment with Flask/Streamlit",
        "ONNX and TensorFlow Lite Conversion",
        "Productionizing Deep Learning Models"
      ]
    }
  ],
  topColor: "linear-gradient(to right, #f43f5e, #ec4899)", // Rose to Pink
  difficultyBar: "#f43f5e"
},
{
  id: 8,
  slug: "prompt-engineering-llms",
  title: "Prompt Engineering & LLMs with OpenAI & LangChain",
  level: "Intermediate to Advanced",
  badge: "Advanced",
  badgeColor: "#f59e0b", // Amber
  duration: "10 weeks",
  students: 6582,
   isFeatured: true,
  tag: "AI & Machine Learning",
  description: "Master LLMs and Prompt Engineering, from fundamentals to advanced RAG and LangChain pipelines. Build smart agents, chatbots, and AI-powered workflows with OpenAI, Hugging Face, and LangChain.",
  image: "/assets/images/courses/prompt-llm-icon.png",
  why: {
    heading: "Why learn Prompt Engineering & LLMs?",
    points: [
      "LLMs like GPT-4, Claude, and Gemini are powering the next wave of AI products, from copilots to autonomous agents.",
      "Prompt Engineering is the new programming paradigm, get ahead of the curve and become a pioneer.",
      "LangChain enables chaining LLMs with memory, tools, vector stores, and APIs to build intelligent apps.",
      "You’ll master real-world skills like RAG, agent workflows, function calling, and LLMOps.",
      "This course prepares you to build production-grade apps using LLMs for search, automation, summarization, and decision-making."
    ]
  },
  modules: [
    {
      title: "Module 1: Foundations of Prompt Engineering",
      topics: [
        "What is Prompt Engineering?",
        "Zero-shot, Few-shot, Chain-of-Thought Prompting",
        "System vs User Prompts",
        "Best Practices & Anti-patterns"
      ]
    },
    {
      title: "Module 2: Getting Started with LLMs",
      topics: [
        "OpenAI GPT-4 API & Playground",
        "Hugging Face Transformers Basics",
        "Prompt Templates & Parameter Tuning",
        "Intro to Claude, Gemini, LLaMA"
      ]
    },
    {
      title: "Module 3: Building with LangChain",
      topics: [
        "LangChain Core Concepts",
        "Chains: Sequential, Router, MapReduce",
        "Memory & Conversation Buffers",
        "Chat Agents with Tools (e.g. Calculator, API Calls)"
      ]
    },
    {
      title: "Module 4: Retrieval-Augmented Generation (RAG)",
      topics: [
        "What is RAG and Why it Matters",
        "Embedding Models: OpenAI, Cohere, BGE",
        "Vector DBs: FAISS, Chroma, Pinecone",
        "Build a RAG-powered Search App"
      ]
    },
    {
      title: "Module 5: Function Calling & Tool Use",
      topics: [
        "Function Calling in OpenAI",
        "Toolchains with LangChain Agents",
        "Calling APIs and returning structured data",
        "Autonomous Task Completion via Tools"
      ]
    },
    {
      title: "Module 6: Advanced Prompting & Guardrails",
      topics: [
        "Reflexion, ReAct, Self-Ask Techniques",
        "Guardrails AI & Output Validation",
        "Content Moderation & Token Limits",
        "LLM Limitations & Workarounds"
      ]
    },
    {
      title: "Module 7: End-to-End Projects",
      topics: [
        "AI Chatbot for Customer Support",
        "Doc QA with PDFs & Embeddings",
        "AutoGPT-style Agent Workflow",
        "LLM-powered AI Search Engine"
      ]
    },
    {
      title: "Module 8: Deployment, LLMOps & Scaling",
      topics: [
        "Deploying LLM apps with Streamlit/Next.js",
        "Serverless & Edge Deployment",
        "LLMOps: Monitoring, Caching, Logging",
        "Ethics & Future of LLMs"
      ]
    }
  ],
  topColor: "linear-gradient(to right, #f59e0b, #f97316)", // Amber to Orange
  difficultyBar: "#f59e0b"
},
{
  id: 9,
  slug: "generative-ai-mastery",
  title: "Generative AI Mastery: From Diffusion to LLMs",
  level: "Intermediate to Advanced",
  badge: "Advanced",
  badgeColor: "#a855f7", // Violet
  duration: "10 weeks",
  students: 5214,
  tag: "Generative AI",
  description: "Learn to build, fine-tune, and deploy cutting-edge generative models, from image synthesis with Stable Diffusion to text generation with GPT and beyond.",
  image: "/assets/images/courses/genai-mastery-icon.png",
  why: {
    heading: "Why master Generative AI?",
    points: [
      "GenAI is the most transformative shift in tech, powering tools like ChatGPT, Midjourney, and Copilot.",
      "It combines the magic of creativity with the rigor of ML, enabling new forms of design, writing, code, and art.",
      "You’ll learn how these models actually work, not just how to use them.",
      "Unlock career paths in AI research, content automation, creative tooling, and more.",
      "Build portfolio-ready projects with state-of-the-art GenAI tools."
    ]
  },
  modules: [
    {
      title: "Module 1: Foundations of Generative Models",
      topics: [
        "What is Generative AI?",
        "Latent Space, Sampling, & Creativity",
        "GANs vs VAEs vs Diffusion",
        "Ethics of Content Generation"
      ]
    },
    {
      title: "Module 2: Image Generation with Diffusion Models",
      topics: [
        "Stable Diffusion & DALL·E",
        "ControlNet, DreamBooth",
        "Fine-tuning on Custom Concepts",
        "Image-to-Image & Inpainting"
      ]
    },
    {
      title: "Module 3: Text Generation with LLMs",
      topics: [
        "GPT-3/4 vs Claude vs LLaMA",
        "Prompt Crafting for Creativity",
        "Storytelling, Poem, Email, Resume Gen",
        "Content Quality Tuning"
      ]
    },
    {
      title: "Module 4: Multimodal GenAI",
      topics: [
        "Text-to-Image",
        "Text-to-Video (RunwayML, Sora overview)",
        "Image-to-Text & Speech-to-Text",
        "Vision + LLM Fusion"
      ]
    },
    {
      title: "Module 5: Real-World GenAI Projects",
      topics: [
        "Portfolio Generator App",
        "AI Art Generator",
        "Auto Resume Builder",
        "Creative Writing Assistant"
      ]
    },
    {
      title: "Module 6: Deployment & Safety",
      topics: [
        "Deploying GenAI Apps with Streamlit",
        "AI Watermarking & Detection",
        "Toxicity Filters & Prompt Shields",
        "Monetizing GenAI Apps"
      ]
    }
  ],
  topColor: "linear-gradient(to right, #8b5cf6, #ec4899)", // Purple to Pink
  difficultyBar: "#a855f7"
},
{
  id: 10,
  slug: "chatgpt-prompt-engineering",
  title: "ChatGPT Prompt Engineering Bootcamp",
  level: "Beginner to Intermediate",
  badge: "Intermediate",
  badgeColor: "#0ea5e9", // Sky Blue
  duration: "6 weeks",
  students: 8743,
  tag: "Generative AI",
  description: "Master the art of writing powerful prompts for ChatGPT and other LLMs. Learn to craft creative, technical, and structured outputs for real-world tasks.",
  image: "/assets/images/courses/chatgpt-prompt-icon.png",
  why: {
    heading: "Why Prompt Engineering with ChatGPT?",
    points: [
      "Prompting is a new literacy, every role from developer to marketer needs it.",
      "ChatGPT powers AI tools in content, code, planning, customer support, and ideation.",
      "You’ll unlock skills to create structured, creative, and purposeful outputs using only words.",
      "Perfect for solopreneurs, students, content creators, and tech teams.",
      "Includes prompt libraries, templates, and AI tools integration."
    ]
  },
  modules: [
    {
      title: "Module 1: Intro to ChatGPT Prompting",
      topics: [
        "System vs User Prompts",
        "Prompt Formatting",
        "Zero-shot, Few-shot, CoT",
        "Prompt Engineering Tools"
      ]
    },
    {
      title: "Module 2: Prompt Templates for Workflows",
      topics: [
        "Content Creation & SEO",
        "Coding & Refactoring",
        "Learning Assistant",
        "Research Assistant"
      ]
    },
    {
      title: "Module 3: Creative & Structured Prompts",
      topics: [
        "Persona-based Prompts",
        "Prompt Chaining & Memory",
        "CSV/Markdown/Table Outputs",
        "Roleplaying, Games, and Quizzes"
      ]
    },
    {
      title: "Module 4: Real-world ChatGPT Use Cases",
      topics: [
        "Automate Email Responses",
        "Summarize Research Papers",
        "Generate Custom Study Plans",
        "Write Blogs & Ads with AI"
      ]
    }
  ],
  topColor: "linear-gradient(to right, #0ea5e9, #38bdf8)", // Sky blue gradient
  difficultyBar: "#0ea5e9"
},
{
  id: 11,
  slug: "agentic-ai-course",
  title: "Agentic AI with LangGraph & OpenAI Tools",
  level: "Advanced",
  badge: "Expert",
  badgeColor: "#ef4444", // Red
  duration: "8 weeks",
  students: 3211,
  tag: "Agentic AI",
  description: "Build autonomous AI agents using LangGraph, LangChain, and OpenAI Tools. Design multi-step, goal-seeking AI that reasons, acts, and adapts.",
  image: "/assets/images/courses/agentic-ai-icon.png",
  why: {
    heading: "Why Agentic AI?",
    points: [
      "Agentic workflows are the future of automation, from AI assistants to research bots.",
      "LangGraph enables memory, tools, routing, retries, and persistent state.",
      "Agents can read, write, search, browse, and decide, like autonomous co-workers.",
      "Prepares you to build AutoGPT-style and research-assistant tools.",
      "Real-world project deployment: code agents, data agents, research agents."
    ]
  },
  modules: [
    {
      title: "Module 1: What is Agentic AI?",
      topics: [
        "Agents vs Prompts",
        "Planning, Acting, Reflecting",
        "LLM-as-a-Service Architecture",
        "OpenAI Functions & Tool Use"
      ]
    },
    {
      title: "Module 2: LangChain Agents Deep Dive",
      topics: [
        "Toolkits, Memory, Multi-Agent",
        "Conversational Agents",
        "Agent Executor, Agent Types",
        "Adding Tools: Search, Calculator, API"
      ]
    },
    {
      title: "Module 3: LangGraph + State Machines",
      topics: [
        "LangGraph Setup and Concepts",
        "Node & Edge Graph Modeling",
        "Control Flow, Loops, Retry, Error States",
        "Multi-Agent Workflow Construction"
      ]
    },
    {
      title: "Module 4: End-to-End Agentic Projects",
      topics: [
        "Autonomous Research Assistant",
        "Multi-Step Data Analysis Bot",
        "AI Workflow Orchestrator",
        "Autonomous Coding Assistant"
      ]
    }
  ],
  topColor: "linear-gradient(to right, #f43f5e, #fb7185)", // Red-Pink
  difficultyBar: "#ef4444"
},
{
  id: 12,
  slug: "data-science-certification",
  title: "Data Science Certification Course",
  level: "Intermediate to Advanced",
  badge: "Advanced",
  badgeColor: "#3b82f6",
  duration: "24 weeks",
  students: 40000,
   isFeatured: true,
  tag: "Data Science & Analytics",
  description: "A holistic data science program covering the entire data lifecycle, from collection, cleansing, EDA, feature engineering, ML/DL to deployment using Python, R, Spark & more." ,
  image: "/assets/images/courses/data-science-icon.png",
  why: {
    heading: "Why choose this Data Science Certification?",
    points: [
      "Master the full data lifecycle, from acquisition to deployment as seen in MNCs like Accenture, VMware, Infosys .",
      "Attain expertise in statistics, ML, NLP, and Data Engineering tools used in real-world applications.",
      "Obtain a recognized IIT/Pravartak-certified credential and access robust placement support.",
      "Gain hands-on experience with live datasets and case studies across domains.",
      "Fast-track your career into high-growth roles with data-driven organizations."
    ]
  },
  modules: [
    { title: "Module 1: Data Collection & Cleaning", topics: ["Web Scraping & APIs", "Missing Value Strategies", "Normalization & Sampling"] },
    { title: "Module 2: Exploratory Data Analysis (EDA)", topics: ["Univariate & Multivariate Analysis", "Correlation & Visualization", "Outlier Handling"] },
    { title: "Module 3: Feature Engineering", topics: ["Encoding & Scaling", "Polynomial & Interaction Features", "Feature Selection"] },
    { title: "Module 4: Statistical Modelling", topics: ["Hypothesis Testing", "Regression Techniques", "ANOVA & Minitab Demo"] },
    { title: "Module 5: Supervised ML", topics: ["Decision Trees", "Ensemble Methods", "SVMs & Naive Bayes"] },
    { title: "Module 6: Unsupervised & Advanced ML", topics: ["Clustering", "PCA & Dimensionality Reduction", "Time Series Analysis"] },
    { title: "Module 7: Deep Learning & NLP", topics: ["ANN/CNN/RNN", "Word Embeddings", "Text Classification"] },
    { title: "Module 8: Big Data & Spark", topics: ["Hadoop Ecosystem", "Spark MLlib", "PySpark Projects"] },
    { title: "Module 9: Reporting & Visualization", topics: ["Tableau, Power BI", "Storytelling with Dashboards"] },
    { title: "Module 10: Deployment & Capstone", topics: ["Model Serving (Flask/Streamlit)", "Docker/AWS Deployment", "End-to-End Project"] }
  ],
  topColor: "linear-gradient(to right, #3b82f6, #6366f1)",
  difficultyBar: "#3b82f6"
},
{
  id: 13,
  slug: "data-science-python",
  title: "Data Science with Python",
  level: "Intermediate",
  badge: "Intermediate",
  badgeColor: "#22c55e",
  duration: "16 weeks",
  students: 20000,
  tag: "Data Science & Analytics",
  description: "Focused on Python-powered data science, this course teaches Pandas, ML, DL, and data storytelling, ideal for analysts and aspiring data scientists.",
  image: "/assets/images/courses/python-ds-icon.png",
  why: {
    heading: "Why specialize in Python for Data Science?",
    points: [
      "Python is the preferred language of data professionals globally.",
      "Tools like Pandas, Scikit-Learn, and Keras power real-world analytics workflows.",
      "Learn to build data-rich applications, dashboards, and ML models end-to-end.",
      "Boost employability in data-driven roles with portfolio-ready projects."
    ]
  },
  modules: [
    { title: "Python Foundations", topics: ["Pandas Dataframes", "Data Cleaning", "Visualization with Seaborn/Matplotlib"] },
    { title: "Statistical Analysis", topics: ["Descriptive Stats", "Hypothesis Testing", "ANOVA"] },
    { title: "Supervised Learning", topics: ["Regression", "Classification", "Model Metrics & Tuning"] },
    { title: "Unsupervised Learning", topics: ["K-means", "Clustering", "PCA"] },
    { title: "Deep Learning Intro", topics: ["Neural Networks with Keras", "Building ANN/CNN Models"] },
    { title: "Time Series & NLP", topics: ["Forecasting Models", "Sentiment & Text Analysis"] },
    { title: "Capstone Projects", topics: ["Finance/Data/Operations Analytics Projects"] }
  ],
  topColor: "linear-gradient(to right, #22c55e, #10b981)",
  difficultyBar: "#22c55e"
},
{
  id: 14,
  slug: "business-analytics-powerbi",
  title: "Business Analytics with Excel & Power BI",
  level: "Beginner to Intermediate",
  badge: "Intermediate",
  badgeColor: "#f59e0b",
  duration: "6 weeks",
  students: 15000,
  tag: "Data Science & Analytics",
  description: "Master business reporting with Excel, data modelling, Power BI, DAX, and dashboard storytelling, the essential skills for BI and analyst roles.",
  image: "/assets/images/courses/powerbi-icon.png",
  why: {
    heading: "Why Business Analytics with Excel & Power BI?",
    points: [
      "Excel & Power BI are staples in corporate analytics and reporting .",
      "Learn advanced analytics, charting, and interactive dashboard creation.",
      "Prepare yourself for roles like Business Analyst, Data Analyst, and BI Developer.",
      "Gain a certification from ExcelR and IIT Pravartak for enhanced credibility."
    ]
  },
  modules: [
    { title: "Excel for Analytics", topics: ["Advanced Formulas", "PivotTables & Charts", "Power Pivot"] },
    { title: "Data Modelling", topics: ["Tables & Relationships", "Data Modelling Concepts", "Power Query"] },
    { title: "DAX & Measures", topics: ["Calculated Columns vs Measures", "Common DAX Functions", "Time Intelligence"] },
    { title: "Power BI Visuals", topics: ["Custom Visuals", "Slicers & Filters", "Report Interactions"] },
    { title: "Publishing & Sharing", topics: ["Power BI Service", "Row-level Security", "Report Refresh & Gateways"] },
    { title: "Dashboard Storytelling", topics: ["Design Principles", "Performance Optimization", "Real Case Studies"] }
  ],
  topColor: "linear-gradient(to right, #f59e0b, #f97316)",
  difficultyBar: "#f59e0b"
},
{
  id: 15,
  slug: "data-analytics-r",
  title: "Data Analytics using R",
  level: "Beginner to Intermediate",
  badge: "Intermediate",
  badgeColor: "#ef4444",
  duration: "8 weeks",
  students: 9405,
  tag: "Data Science & Analytics",
  description: "Use R for statistical analysis, data visualization, reporting, and analytics, perfect for analysts in finance, marketing, and research.",
  image: "/assets/images/courses/r-analytics-icon.png",
  why: {
    heading: "Why choose Data Analytics using R?",
    points: [
      "R is one of the most powerful statistical and analytical tools available .",
      "Used in academia, research, finance, and analytics-heavy roles.",
      "Comprehensive packages like dplyr, ggplot2, Shiny boost productivity.",
      "Gain practical experience analyzing real datasets and automating reports."
    ]
  },
  modules: [
    { title: "R Basics & Dataframes", topics: ["Setup R & RStudio", "Vectors, Lists, Dataframes", "Tidyverse Introduction"] },
    { title: "Statistical Analysis", topics: ["Descriptive Stats", "T-tests & ANOVA", "Correlation & Regression"] },
    { title: "Data Visualization", topics: ["ggplot2 Grammar", "Custom Visuals", "Shiny App Basics"] },
    { title: "Data Manipulation", topics: ["dplyr: filter, mutate, group_by", "tidyr: pivot & nest", "data.table"] },
    { title: "Reporting & Automation", topics: ["RMarkdown", "Shiny Deployment", "Batch Reporting"] },
    { title: "Project Showcase", topics: ["Finance Case Study", "Marketing Analytics", "Customer Segmentation"] }
  ],
  topColor: "linear-gradient(to right, #ef4444, #f87171)",
  difficultyBar: "#ef4444"
},
{
  id: 16,
  slug: "aws-solutions-architect",
  title: "AWS Certified Solutions Architect – Associate",
  level: "Beginner to Intermediate",
  badge: "Intermediate",
  badgeColor: "#ff9900", // AWS orange
  duration: "35 hours",
  students: 15213,
  tag: "Cloud & DevOps",
  description: "Master AWS core services, architecture best practices, and deployment strategies needed to pass the SAA‑C03 exam and build scalable cloud solutions.",
  image: "/assets/images/courses/aws-architect-icon.png",
  why: {
    heading: "Why become an AWS Solutions Architect?",
    points: [
      "AWS holds over 30% of the global cloud market,architects are in high demand.",
      "SAA‑C03 is a leading cloud certification with global recognition.",
      "Roles like Cloud Architect, DevOps, and Infrastructure Engineer pay 2‑3 × more than general IT roles.",
      "Gain expertise in EC2, VPC, IAM, RDS, S3, Lambda, and more with hands‑on labs.",
      "Includes practice exams, real-world scenarios, and certification guidance." 
    ]
  },
  modules: [
    { title: "Module 1: AWS Fundamentals", topics: ["Cloud Concepts & AWS Overview", "AWS Global Infrastructure", "IAM & Security Best Practices"] },
    { title: "Module 2: Compute Services", topics: ["EC2 Setup & Optimization", "Load Balancing & Auto Scaling", "Serverless with Lambda & FaaS"] },
    { title: "Module 3: Networking & VPC", topics: ["VPC, Subnets & NACLs", "Peering, VPN & Direct Connect", "Route53 & DNS"] },
    { title: "Module 4: Storage & Databases", topics: ["S3, Glacier & EFS", "RDS, DynamoDB, Redshift", "Backup, Snapshot & Encryption"] },
    { title: "Module 5: Monitoring & Cost Control", topics: ["CloudWatch, CloudTrail", "Billing & Cost Explorer", "Trusted Advisor"] },
    { title: "Module 6: Architecture Best Practices", topics: ["Well‑Architected Framework", "Building Resilient Systems", "High Availability"] },
    { title: "Module 7: Exam Simulation & Labs", topics: ["Practice Questions", "Blended Concepts", "Exam Strategies"] }
  ],
  topColor: "linear-gradient(to right, #ff9900, #e65100)",
  difficultyBar: "#ff9900"
},
{
  id: 17,
  slug: "azure-fundamentals",
  title: "Microsoft Azure Fundamentals (AZ‑900)",
  level: "Beginner",
  badge: "Beginner",
  badgeColor: "#008AD7", // Azure blue
  duration: "1 day workshop / 6 weeks self-paced",
  students: 312,
  tag: "Cloud & DevOps",
  description: "Accelerate your cloud journey with a solid foundation in Microsoft Azure concepts, services, security, and pricing, ideal for AZ‑900 certification.",
  image: "/assets/images/courses/azure-icon.png",
  why: {
    heading: "Why start with Azure Fundamentals?",
    points: [
      "AZ‑900 is the gateway credential for Microsoft Azure and cloud roles.",
      "Presents a unified base for solutions, administrators, security, or developer tracks.",
      "Hands‑on labs using the Azure portal prepare you for real-world use.",
      "Covers management tools, compute, storage, networking, and governance.",
    ]
  },
  modules: [
    { title: "Module 1: Cloud Concepts", topics: ["Cloud Benefits & Models", "Shared Responsibility Model"] },
    { title: "Module 2: Core Azure Services", topics: ["Compute: VM, App Services", "Storage: Blobs, Files", "Networking Basics"] },
    { title: "Module 3: Security & Governance", topics: ["Azure AD", "RBAC & Policies", "Azure Security Center"] },
    { title: "Module 4: Pricing & Support", topics: ["Cost Management", "SLA & Cycle", "Azure Support Plans"] }
  ],
  topColor: "linear-gradient(to right, #008AD7, #00ADEF)",
  difficultyBar: "#008AD7"
},


{
  id: 18,
  slug: "devops-engineer-cicd",
  title: "DevOps Engineer with CI/CD",
  level: "Intermediate",
  badge: "Intermediate",
  badgeColor: "#22c55e", // Green accent
  duration: "60 hours",
  students: 8200,
  tag: "Cloud & DevOps",
  description: "Deep dive into DevOps culture and practices using CI/CD pipelines, containerization, IaC, monitoring, and collaboration with tools like Jenkins, Docker, Kubernetes, Terraform, and AWS/Azure.",
  image: "/assets/images/courses/devops-icon.png",
  why: {
    heading: "Why become a DevOps Engineer?",
    points: [
      "DevOps roles have high salary premiums and industry demand.",
      "CI/CD pipelines reduce release cycles and improve quality.",
      "Master modern tools: Docker, Kubernetes, Terraform, and CI servers.",
      "Learn to build scalable, observable, and automated systems.",
      "Hands-on labs reflect real-world production environments."
    ]
  },
  modules: [
    { title: "Module 1: DevOps Principles", topics: ["DevOps Lifecycle & Culture", "CI vs CD vs CT"] },
    { title: "Module 2: Version Control", topics: ["Git Strategies", "Branching & Merging", "GitHub Workflows"] },
    { title: "Module 3: CI Pipelines", topics: ["Jenkins Basics", "Pipeline as Code", "Testing & Quality Gates"] },
    { title: "Module 4: Containers & Orchestration", topics: ["Docker Images", "K8s Deployment & Services"] },
    { title: "Module 5: Infrastructure as Code", topics: ["Terraform & CloudFormation", "Resource Provisioning"] },
    { title: "Module 6: Monitoring & Logging", topics: ["Prometheus, Grafana", "ELK Stack Overview"] },
    { title: "Module 7: Security & Automation", topics: ["Secrets Management", "Security Scans"] },
    { title: "Module 8: Capstone Project", topics: ["End-to-end CICD Pipeline", "Deployment to AWS/Azure"] }
  ],
  topColor: "linear-gradient(to right, #22c55e, #10b981)",
  difficultyBar: "#22c55e"
},
{
  id: 19,
  slug: "big-data-hadoop",
  title: "Big Data & Hadoop Ecosystem",
  level: "Intermediate",
  badge: "Intermediate",
  badgeColor: "#f97316", // Orange
  duration: "80 hours",
  students: 4500,
  tag: "Cloud & DevOps",
  description: "Master the Hadoop ecosystem (HDFS, MapReduce, Spark, Hive, Pig) and process large-scale data efficiently using industry-standard tools and frameworks.",
  image: "/assets/images/courses/hadoop-icon.png",
  why: {
    heading: "Why study Big Data & Hadoop?",
    points: [
      "Companies process petabytes of data daily using Hadoop and Spark.",
      "Skills in distributed computing and SQL-on-Hadoop are in rising demand.",
      "Learn ETL, streaming, and analytics pipelines at scale.",
      "Ideal for Big Data Engineer, Data Lake Architect, and Analytics roles."
    ]
  },
  modules: [
    { title: "Module 1: Hadoop Fundamentals", topics: ["HDFS Architecture", "YARN", "MapReduce Basics"] },
    { title: "Module 2: Data Processing with Hive & Pig", topics: ["HiveQL", "Partitioning & Bucketing", "Pig Latin Scripts"] },
    { title: "Module 3: Apache Spark Basics", topics: ["Spark Core RDDs", "DataFrames", "Spark SQL"] },
    { title: "Module 4: Spark Advanced", topics: ["MLlib: Machine Learning", "Structured Streaming", "GraphX"] },
    { title: "Module 5: Data Ingestion & Workflow", topics: ["Sqoop, Flume, Kafka", "Workflow: Oozie & Airflow"] },
    { title: "Module 6: Big Data Projects", topics: ["ETL Pipeline", "Real-time Dashboard", "Batch Analytics"] }
  ],
  topColor: "linear-gradient(to right, #f97316, #facc15)",
  difficultyBar: "#f97316"
},
{
  id: 20,
  slug: "mern-stack-web-development",
  title: "MERN Stack Web Development",
  level: "Intermediate",
  badge: "Intermediate",
  badgeColor: "#f97316", // Orange
  duration: "6 months / 250 hours",
  students: 15213,
  tag: "Full Stack Development",
  description: "Master full‑stack JavaScript using MongoDB, Express, React, and Node.js. Build real projects, deploy on cloud, and get job-ready.",
  image: "/assets/images/courses/mern-icon.png",
  why: {
    heading: "Why learn MERN Stack?",
    points: [
      "Full JavaScript stack from client to server accelerates development velocity.",
      "React powers modern UIs, and Node/Express handle scalable backend services.",
      "MongoDB offers flexible NoSQL storage and fast prototyping.",
      "You’ll build real-world apps like To‑Do, E‑commerce, Expense Tracker, and more.",
      "ExcelR’s MERN program has 15k+ enrollments and a strong placement record.",
    ]
  },
  modules: [
    {
      title: "Module 1: Frontend with React",
      topics: [
        "JSX, Components, Props & State",
        "Hooks: useState, useEffect",
        "Routing with React Router",
        "Forms & Validation"
      ]
    },
    {
      title: "Module 2: Backend with Node & Express",
      topics: [
        "REST API Design",
        "Express Middleware",
        "JWT Authentication",
        "Error Handling & Validation"
      ]
    },
    {
      title: "Module 3: Database with MongoDB",
      topics: [
        "MongoDB Basics & CRUD",
        "Modeling Relationships",
        "Aggregation Framework",
        "Indexing & Performance"
      ]
    },
    {
      title: "Module 4: Full Stack Integration",
      topics: [
        "Connecting React with APIs",
        "State Management",
        "User Authentication Flow",
        "Error & UI Handling"
      ]
    },
    {
      title: "Module 5: DevOps & Deployment",
      topics: [
        "Dockerizing MERN Apps",
        "CI/CD (GitHub Actions)",
        "Frontend & Backend Deployment",
        "Env Management & Monitoring"
      ]
    },
    {
      title: "Module 6: Capstone Projects",
      topics: [
        "To‑Do App",
        "Recipe App",
        "E‑Commerce Store",
        "Expense Tracker",
        "Weather App"
      ]
    }
  ],
  topColor: "linear-gradient(to right, #f97316, #fb923c)",
  difficultyBar: "#f97316"
},
{
  id: 21,
  slug: "java-full-stack-spring-angular",
  title: "Java Full Stack Developer (Spring Boot + Angular)",
  level: "Intermediate to Advanced",
  badge: "Advanced",
  badgeColor: "#3b82f6", // Blue
  duration: "6 months / 350 hours",
  students: 15213,
  
  tag: "Full Stack Development",
  description: "Become a full‑stack engineer with Java Spring Boot backend and Angular frontend. Learn microservices, REST API, data persistence, and modern UI.",
  image: "/assets/images/courses/java-fullstack-icon.png",
  why: {
    heading: "Why choose Java Full Stack?",
    points: [
      "Spring Boot powers enterprise backends at scale, Angular builds robust frontends.",
      "This combo is highly valued in fintech, e-commerce, and enterprise-grade systems.",
      "You’ll work on real projects: project management, e‑commerce, tax apps, etc.",
      "Includes DevOps essentials like Docker, Jenkins, AWS deployment." 
    ]
  },
  modules: [
    {
      title: "Module 1: Frontend - Angular",
      topics: [
        "Components, Data Binding",
        "Services & HTTP",
        "Routing & Guards",
        "Forms & Validation"
      ]
    },
    {
      title: "Module 2: Backend - Spring Boot",
      topics: [
        "Spring Basics & Beans",
        "REST API Development",
        "Security & JWT",
        "ORM with Hibernate"
      ]
    },
    {
      title: "Module 3: Data & Persistence",
      topics: [
        "MySQL/PostgreSQL Design",
        "JPA Repositories",
        "OData & Pagination",
        "Data Fetching Strategies"
      ]
    },
    {
      title: "Module 4: DevOps & Deployment",
      topics: [
        "Docker & Docker Compose",
        "Jenkins Pipelines",
        "AWS EC2 Deployment",
        "Monitoring & Logging"
      ]
    },
    {
      title: "Module 5: Capstone Projects",
      topics: [
        "Task Management System",
        "Meal/Recipe App",
        "E‑Commerce Store",
        "Weather App",
        "Expense Tracker",
        "Income Tax Tool"
      ]
    }
  ],
  topColor: "linear-gradient(to right, #3b82f6, #60a5fa)",
  difficultyBar: "#3b82f6"
},
{
  id: 22,
  slug: "python-full-stack-django-react",
  title: "Python Full Stack Developer (Django + React)",
  level: "Intermediate",
  badge: "Intermediate",
  badgeColor: "#10b981", // Green
  duration: "6 months",
  students: 5400,
   isFeatured: true,
  tag: "Full Stack Development",
  description: "Build scalable full‑stack applications using Django backend and React frontend. Includes REST APIs, token auth, deployment, and CI/CD.",
  image: "/assets/images/courses/python-fullstack-icon.png",
  why: {
    heading: "Why learn Django + React Full Stack?",
    points: [
      "Django is a robust backend framework; React builds dynamic UIs.",
      "Perfect for building modern web apps: blogs, stores, dashboards.",
      "Includes authentication, role-based access, REST, and deployment.",
      "Ideal for careers in startups, SaaS, and data-driven web services."
    ]
  },
  modules: [
    {
      title: "Module 1: Backend - Django",
      topics: [
        "Project Setup & Models",
        "Django REST Framework",
        "Token & JWT Authentication",
        "Admin Panel & ORM"
      ]
    },
    {
      title: "Module 2: Frontend - React",
      topics: [
        "Components, State, Props",
        "API Integration",
        "Forms & Error Handling",
        "Routing & Redux Basics"
      ]
    },
    {
      title: "Module 3: Full Stack Integration",
      topics: [
        "CORS, CSRF Handling",
        "Error & Token Handling",
        "State Sync (Redux)",
        "Email & File Uploads"
      ]
    },
    {
      title: "Module 4: DevOps & Hosting",
      topics: [
        "Dockerizing Django & React",
        "CI/CD with GitHub Actions",
        "Deploy on AWS/GCP",
        "Monitoring & Backups"
      ]
    },
    {
      title: "Module 5: Final Projects",
      topics: [
        "Blog/Forum Platform",
        "Analytics Dashboard",
        "E‑Commerce with Payments"
      ]
    }
  ],
  topColor: "linear-gradient(to right, #10b981, #06b6d4)",
  difficultyBar: "#10b981"
},
{
  id: 23,
  slug: "ethical-hacking-ceh",
  title: "Ethical Hacking (CEH) Certification",
  level: "Intermediate",
  badge: "Intermediate",
  badgeColor: "#ef4444", // Red
  duration: "12 weeks",
  students: 6820,
  tag: "Cybersecurity",
  description: "Learn to think like a hacker, understand vulnerabilities, simulate attacks, and secure networks and systems with hands-on tools aligned to the CEH standard.",
  image: "/assets/images/courses/ceh-icon.png",
  why: {
    heading: "Why pursue Ethical Hacking & CEH?",
    points: [
      "CEH is one of the most recognized cybersecurity certifications globally.",
      "Develop offensive security skills to detect and fix vulnerabilities.",
      "Ideal for roles like Security Analyst, Pen Tester, and Security Auditor.",
      "Gain hands-on experience with tools like Metasploit, Wireshark, Burp Suite.",
      "Build a strong resume with lab work, assessments, and certification readiness."
    ]
  },
  modules: [
    { title: "Module 1: Ethical Hacking Fundamentals", topics: ["Security Concepts", "Ethical Hacking Process", "Types of Hackers"] },
    { title: "Module 2: Footprinting & Reconnaissance", topics: ["WHOIS, DNS, Network Mapping", "OSINT Tools", "Recon Techniques"] },
    { title: "Module 3: Scanning & Enumeration", topics: ["Nmap, Nessus", "Port & Vulnerability Scans", "Service Enumeration"] },
    { title: "Module 4: System Hacking", topics: ["Privilege Escalation", "Password Cracking", "Rootkits & Backdoors"] },
    { title: "Module 5: Malware Threats", topics: ["Trojan, Worm & Virus Analysis", "Malware Tools", "Sandboxing"] },
    { title: "Module 6: Sniffing, Social Engineering", topics: ["Packet Sniffing", "Phishing Tactics", "Social Engineering Defense"] },
    { title: "Module 7: Web App & Wireless Hacking", topics: ["OWASP Top 10", "SQLi, XSS", "WiFi Attacks & Security (WPA, WEP)"] },
    { title: "Module 8: CEH Exam Prep & Lab", topics: ["Mock Assessments", "Report Writing", "Certification Guidance"] }
  ],
  topColor: "linear-gradient(to right, #ef4444, #f97316)",
  difficultyBar: "#ef4444"
},
{
  id: 24,
  slug: "cybersecurity-analyst",
  title: "Cybersecurity Analyst Course",
  level: "Beginner to Intermediate",
  badge: "Beginner",
  badgeColor: "#2563eb", // Blue
  duration: "10 weeks",
  students: 5320,
  tag: "Cybersecurity",
  description: "Become a Security Analyst, learn threat detection, SIEM, incident response, and vulnerability management tailored for SOC and enterprise environments.",
  image: "/assets/images/courses/cyber-analyst-icon.png",
  why: {
    heading: "Why become a Cybersecurity Analyst?",
    points: [
      "Cyber threats are increasing-security analysts are crucial for enterprise defense.",
      "Learn to configure SIEM tools (Splunk, ELK), detect anomalies, and respond to incidents.",
      "Gain hands-on skills in vulnerability scanning, malware analysis, and forensics.",
      "Perfect for entry-level security roles with global demand and growing salaries.",
      "Build SOC-ready skills and career-ready capabilities."
    ]
  },
  modules: [
    { title: "Module 1: Security Foundations", topics: ["CIA Triad", "Threats & Malware Types", "Network Fundamentals"] },
    { title: "Module 2: SIEM & Log Management", topics: ["What is SIEM?", "Splunk/ELK Setup", "Log Analysis & Alerts"] },
    { title: "Module 3: Vulnerability & Risk Management", topics: ["Scanning Tools", "Risk Assessment", "Patch & Remediation"] },
    { title: "Module 4: Incident Response", topics: ["IR Lifecycle", "Digital Forensics Intro", "Labs & Simulations"] },
    { title: "Module 5: Network & Endpoint Security", topics: ["IDS/IPS Concepts", "Firewall Config", "Endpoint Protection"] },
    { title: "Module 6: Reporting & Compliance", topics: ["Security Documentation", "Compliance Standards", "SOC Playbooks"] },
    { title: "Module 7: Analyst Tools & Techniques", topics: ["Packet Analysis", "Threat Intel", "SIEM Dashboards"] },
    { title: "Module 8: Career Prep & Certification", topics: ["Resume & Interview Tips", "Mock Assessments", "Cert Guide"] }
  ],
  topColor: "linear-gradient(to right, #2563eb, #22c55e)",
  difficultyBar: "#2563eb"
},
{
  id: 25,
  slug: "soc-analyst",
  title: "SOC Analyst Course",
  level: "Intermediate",
  badge: "Intermediate",
  badgeColor: "#8b5cf6", // Violet
  duration: "8 weeks",
  students: 2890,
  tag: "Cybersecurity",
  description: "Train as a Security Operations Center (SOC) Analyst,learn real-time monitoring, alert triage, and incident response using SIEM and security tools in a simulated SOC environment.",
  image: "/assets/images/courses/soc-analyst-icon.png",
  why: {
    heading: "Why become a SOC Analyst?",
    points: [
      "SOC Analysts are frontline defenders in modern IT environments.",
      "Learn to monitor networks 24/7, triage alerts, perform incident response.",
      "Gain experience with Splunk, SIEM, endpoint logs, and threat intelligence.",
      "Entry point to cybersecurity careers with strong growth and specialization paths.",
      "Includes simulated SOC labs and shift-based scenarios."
    ]
  },
  modules: [
    { title: "Module 1: SOC Fundamentals", topics: ["Roles & Responsibilities", "SOC Levels 1‑3", "SOC Tools Overview"] },
    { title: "Module 2: SIEM Basics", topics: ["Log Collection & Parsing", "Alert Triage", "Search Queries"] },
    { title: "Module 3: Threat Detection", topics: ["Use Case Creation", "MITRE ATT&CK", "IOC/TTP Hunting"] },
    { title: "Module 4: Incident Management", topics: ["Triage to Response", "Playbooks", "Communication & Reporting"] },
    { title: "Module 5: Threat Intelligence", topics: ["Intel Feeds", "Threat Modeling", "OSINT Tools"] },
    { title: "Module 6: Automation & Orchestration", topics: ["SOAR Concepts", "XDR Platforms", "Automated Playbooks"] },
    { title: "Module 7: SOC Labs & Simulation", topics: ["Mock Dashboards", "Tier‑based Response", "Shift Handover"] },
    { title: "Module 8: Career & Interview Prep", topics: ["Resume, CV Tips", "Mock Interviews", "Cert Guidance"] }
  ],
  topColor: "linear-gradient(to right, #8b5cf6, #ec4899)",
  difficultyBar: "#8b5cf6"
},
{
  id: 26,
  slug: "aptitude-reasoning-softskills",
  title: "Aptitude + Reasoning + Soft Skills",
  level: "Beginner",
  badge: "Foundation",
  badgeColor: "#3b82f6", // Blue
  duration: "6 weeks",
  students: 7410,
  tag: "Foundation & Career Launchers",
  description: "Sharpen your aptitude, reasoning, and communication skills, the essential trio for cracking campus placements, internships, and top tech jobs.",
  image: "/assets/images/courses/aptitude-icon.png",
  why: {
    heading: "Why master Aptitude, Reasoning, and Soft Skills?",
    points: [
      "Over 80% of hiring assessments start with aptitude & logical reasoning tests.",
      "Strong communication & soft skills are key for HR + tech interviews.",
      "Excel in campus placements and job assessments.",
      "Improves confidence, articulation, and professional presence.",
      "Recommended for all students aiming for internships or fresher roles."
    ]
  },
  modules: [
    {
      title: "Module 1: Quantitative Aptitude",
      topics: [
        "Time, Speed & Distance",
        "Profit & Loss, Ratio & Proportion",
        "Probability, Permutation & Combination"
      ]
    },
    {
      title: "Module 2: Logical Reasoning",
      topics: [
        "Syllogisms, Puzzles",
        "Coding-Decoding, Blood Relations",
        "Data Interpretation, Series"
      ]
    },
    {
      title: "Module 3: Verbal Ability & Grammar",
      topics: [
        "Sentence Correction",
        "Reading Comprehension",
        "Word Usage, Error Spotting"
      ]
    },
    {
      title: "Module 4: Soft Skills Training",
      topics: [
        "Group Discussions",
        "Presentation Skills",
        "Time & Email Management"
      ]
    },
    {
      title: "Module 5: Mock Tests & Feedback",
      topics: [
        "Section-wise Practice Tests",
        "Peer Evaluation",
        "Performance Review"
      ]
    }
  ],
  topColor: "linear-gradient(to right, #3b82f6, #06b6d4)",
  difficultyBar: "#3b82f6"
},
{
  id: 27,
  slug: "resume-interview-prep",
  title: "Resume Building & Interview Preparation",
  level: "All Levels",
  badge: "Career Boost",
  badgeColor: "#f59e0b", // Amber
  duration: "3 weeks",
  students: 4980,
  tag: "Foundation & Career Launchers",
  description: "Create a job-winning resume, perfect your personal pitch, and master behavioral & technical interview rounds with expert guidance.",
  image: "/assets/images/courses/resume-icon.png",
  why: {
    heading: "Why focus on Resume & Interview Prep?",
    points: [
      "Your resume is your first impression, make it impactful.",
      "Learn what recruiters really look for in fresher/entry-level profiles.",
      "Crack technical + HR interviews with practice & structured preparation.",
      "Includes mock interviews, feedback, and LinkedIn optimization.",
      "Perfect for final-year students and early-career professionals."
    ]
  },
  modules: [
    {
      title: "Module 1: Resume Writing",
      topics: [
        "Building a Tech Resume",
        "Keyword Optimization",
        "Portfolio & Project Inclusion"
      ]
    },
    {
      title: "Module 2: LinkedIn & GitHub Setup",
      topics: [
        "Optimizing LinkedIn Profiles",
        "Showcasing Projects & Repositories",
        "Professional Networking"
      ]
    },
    {
      title: "Module 3: Interview Preparation",
      topics: [
        "Common HR Questions",
        "STAR Method for Behavioral Answers",
        "Tech Interview Structuring"
      ]
    },
    {
      title: "Module 4: Mock Interviews & Reviews",
      topics: [
        "1-on-1 Mock Sessions",
        "Feedback & Improvement Plan",
        "Interview Confidence Boosting"
      ]
    }
  ],
  topColor: "linear-gradient(to right, #f59e0b, #fbbf24)",
  difficultyBar: "#f59e0b"
},
{
  id: 28,
  slug: "git-github-course",
  title: "Git, GitHub & Version Control",
  level: "Beginner",
  badge: "Essential",
  badgeColor: "#10b981", // Emerald
  duration: "2 weeks",
  students: 6380,
  tag: "Foundation & Career Launchers",
  description: "Learn how to manage and collaborate on code using Git and GitHub, a must-have skill for every developer and data scientist.",
  image: "/assets/images/courses/git-icon.png",
  why: {
    heading: "Why learn Git & GitHub?",
    points: [
      "Industry-standard for version control and collaboration.",
      "Crucial for contributing to team projects, open source, and internships.",
      "Master branching, commits, pull requests, and conflict resolution.",
      "Showcase your portfolio with GitHub Projects & Repos.",
      "Essential for interviews and technical assessments."
    ]
  },
  modules: [
    {
      title: "Module 1: Git Basics",
      topics: [
        "Version Control Concepts",
        "Initializing & Cloning Repositories",
        "Commits, Branches, Merge"
      ]
    },
    {
      title: "Module 2: GitHub Essentials",
      topics: [
        "Push & Pull to GitHub",
        "Pull Requests & Code Reviews",
        "GitHub Profile Setup"
      ]
    },
    {
      title: "Module 3: Collaboration & Best Practices",
      topics: [
        "Handling Merge Conflicts",
        "Team Collaboration Flows (Git Flow)",
        "CI/CD Integration Basics"
      ]
    }
  ],
  topColor: "linear-gradient(to right, #10b981, #3b82f6)",
  difficultyBar: "#10b981"
},
{
  id: 29,
  slug: "sql-basics-course",
  title: "SQL Basics for Beginners",
  level: "Beginner",
  badge: "Essential",
  badgeColor: "#6366f1", // Indigo
  duration: "3 weeks",
  students: 4820,
  tag: "Foundation & Career Launchers",
  description: "Learn the fundamentals of SQL to query, analyze, and manipulate data, essential for developers, analysts, and data scientists.",
  image: "/assets/images/courses/sql-icon.png",
  why: {
    heading: "Why learn SQL?",
    points: [
      "SQL is used in every data role, analytics, science, and engineering.",
      "Mastering queries gives you power over relational data systems.",
      "Prepare for technical interviews (SQL is often tested).",
      "Learn hands-on with MySQL/PostgreSQL labs.",
      "Fundamental for career roles in Data, AI, and Full Stack."
    ]
  },
  modules: [
    {
      title: "Module 1: SQL Basics",
      topics: [
        "Introduction to RDBMS",
        "SELECT, WHERE, ORDER BY",
        "Joins & Aggregations"
      ]
    },
    {
      title: "Module 2: Advanced Queries",
      topics: [
        "Subqueries & Nested Queries",
        "GROUP BY, HAVING",
        "Window Functions"
      ]
    },
    {
      title: "Module 3: Practice Labs",
      topics: [
        "Real-World Data Scenarios",
        "Hands-on Practice Sets",
        "Mock SQL Test Questions"
      ]
    }
  ],
  topColor: "linear-gradient(to right, #6366f1, #8b5cf6)",
  difficultyBar: "#6366f1"
},
{
  id: 30,
  slug: "capstone-ai-ml-ds",
  title: "Capstone Projects in AI, ML & Data Science",
  level: "Intermediate to Advanced",
  badge: "Capstone",
  badgeColor: "#ef4444", // Red
  duration: "6 weeks",
  students: 3921,
  tag: "AI Capstone & Labs",
  description: "Build industry-grade capstone projects across Machine Learning, Deep Learning, NLP, and Data Analytics to strengthen your portfolio and job readiness.",
  image: "/assets/images/courses/capstone-icon.png",
  why: {
    heading: "Why Capstone Projects?",
    points: [
      "Bridge the gap between theory and real-world applications.",
      "Strengthen your portfolio for job interviews and hiring assessments.",
      "Work on real datasets and build end-to-end pipelines.",
      "Capstones include deployment & documentation for GitHub.",
      "Projects mimic real client problems from the tech industry."
    ]
  },
  modules: [
    {
      title: "Module 1: AI & ML Capstones",
      topics: [
        "Loan Default Prediction (ML Pipeline)",
        "Face Recognition Attendance System",
        "Time Series Forecasting for Energy Demand"
      ]
    },
    {
      title: "Module 2: Deep Learning Capstones",
      topics: [
        "Real-Time Emotion Detection",
        "Chest X-ray Image Classification",
        "Sign Language Translator (CNN + LSTM)"
      ]
    },
    {
      title: "Module 3: Data Science Capstones",
      topics: [
        "Customer Segmentation Using Clustering",
        "EDA on COVID-19 & Visualization Dashboard",
        "Recommendation Engine (Collaborative Filtering)"
      ]
    },
    {
      title: "Module 4: Deployment & Presentation",
      topics: [
        "Streamlit / Flask App Deployment",
        "Heroku & AWS Deployment",
        "GitHub Repository Setup",
        "Pitching Your Project (Resume + LinkedIn)"
      ]
    }
  ],
  topColor: "linear-gradient(to right, #ef4444, #f97316)",
  difficultyBar: "#ef4444"
},
{
  id: 31,
  slug: "ai-labs",
  title: "AI Labs: Real-Time Use Case Implementation",
  level: "Advanced",
  badge: "Hands-On",
  badgeColor: "#10b981", // Green
  duration: "4 weeks",
  students: 2165,
  tag: "AI Capstone & Labs",
  description: "Hands-on AI Labs to simulate real-world use cases in Healthcare, Finance, E-commerce, and Security, applying ML/DL/NLP in practical scenarios.",
  image: "/assets/images/courses/ai-labs-icon.png",
  why: {
    heading: "Why AI Labs?",
    points: [
      "Gives real-world simulation for enterprise problem solving.",
      "Focuses on model interpretability, ethics, and production constraints.",
      "Build confidence for client-facing project roles.",
      "Explore multi-modal AI use cases with deployment.",
      "Backed by expert mentorship and code review cycles."
    ]
  },
  modules: [
    {
      title: "Module 1: Industry Domains",
      topics: [
        "Healthcare - Cancer Diagnosis with CNN",
        "Finance - Fraud Detection System",
        "Retail - Product Recommendation AI"
      ]
    },
    {
      title: "Module 2: AI Ethics & Bias",
      topics: [
        "Explainability with SHAP, LIME",
        "Bias Detection in Models",
        "Fair AI Design Principles"
      ]
    },
    {
      title: "Module 3: Scaling & Deployment",
      topics: [
        "Model Versioning & MLflow",
        "Dockerize ML Pipelines",
        "Batch vs Real-time Inference"
      ]
    }
  ],
  topColor: "linear-gradient(to right, #10b981, #14b8a6)",
  difficultyBar: "#10b981"
},
{
  id: 32,
  slug: "ai-career-tracks",
  title: "AI Career Tracks: Guided Job Prep Roadmap",
  level: "Beginner to Advanced",
  badge: "Career Track",
  badgeColor: "#6366f1", // Indigo
  duration: "12+ weeks",
  students: 5620,
  tag: "AI Capstone & Labs",
  description: "Structured roadmap for AI/ML/Data Science careers, includes mentorship, mock interviews, GitHub projects, resume sessions, and job application strategies.",
  image: "/assets/images/courses/ai-career-icon.png",
  why: {
    heading: "Why Career Tracks?",
    points: [
      "Combines tech skills + projects + career grooming in one track.",
      "Live mentorship, weekly goal tracking, and job referrals.",
      "Crack interviews with mock technical + HR rounds.",
      "Curated roadmap with checkpoints for consistency.",
      "Resume, GitHub, and LinkedIn profile perfection included."
    ]
  },
  modules: [
    {
      title: "Phase 1: Foundations + Portfolio",
      topics: [
        "DSA + Python Fundamentals",
        "ML/DS Mini Projects",
        "GitHub Project Setup"
      ]
    },
    {
      title: "Phase 2: Resume & LinkedIn Grooming",
      topics: [
        "Tech Resume Structuring",
        "LinkedIn Optimization",
        "Pitching Projects in Interviews"
      ]
    },
    {
      title: "Phase 3: Mock Interview Rounds",
      topics: [
        "Mock HR + Technical Rounds",
        "Code + Case Study Rounds",
        "Feedback with Improvement Plan"
      ]
    },
    {
      title: "Phase 4: Job Application Strategy",
      topics: [
        "Tracking & Targeting Roles",
        "Cold Outreach Scripts",
        "Follow-up Strategies"
      ]
    }
  ],
  topColor: "linear-gradient(to right, #6366f1, #8b5cf6)",
  difficultyBar: "#6366f1"
},
{
  id: 40,
  slug: "power-bi-course",
  title: "Power BI Mastery for Data Professionals",
  level: "Beginner to Intermediate",
  badge: "Popular",
  badgeColor: "#3b82f6", // Blue
  duration: "6 weeks",
  students: 4675,
  tag: "Programming Fundamentals",
  description: "Master data modeling, DAX, and interactive dashboards using Microsoft Power BI for business and data analytics.",
  image: "/assets/images/courses/powerbi-icon.png",
  why: {
    heading: "Why Learn Power BI?",
    points: [
      "One of the most widely used BI tools in enterprise environments.",
      "Essential for business analysts, data analysts, and PMs.",
      "Build real-time dashboards with automated data refresh.",
      "No-code/low-code modeling and visualization capabilities.",
      "Highly valued in BFSI, Retail, Marketing, and E-commerce domains."
    ]
  },
  modules: [
    {
      title: "Module 1: Power BI Foundations",
      topics: [
        "Power BI Interface Overview",
        "Importing Data from Excel, SQL, Web APIs",
        "Data Types and Transformations (Power Query)"
      ]
    },
    {
      title: "Module 2: Data Modeling & DAX",
      topics: [
        "Data Relationships and Star Schema",
        "Calculated Columns vs Measures",
        "Common DAX Functions"
      ]
    },
    {
      title: "Module 3: Dashboards & Interactivity",
      topics: [
        "Visualizations: Cards, Slicers, KPIs, Maps",
        "Drill-Through, Bookmarks, Tooltips",
        "Publishing and Sharing on Power BI Service"
      ]
    },
    {
      title: "Module 4: Capstone Project",
      topics: [
        "Build a Sales Performance Dashboard",
        "Dynamic Filters and UX Enhancements",
        "Data Refresh with Schedule"
      ]
    }
  ],
  topColor: "linear-gradient(to right, #3b82f6, #06b6d4)", // Blue to Cyan
  difficultyBar: "#3b82f6"
},
{
  id: 41,
  slug: "tableau-course",
  title: "Tableau for Data Storytelling & Dashboards",
  level: "Beginner to Intermediate",
  badge: "Trending",
  badgeColor: "#f97316", // Orange
  duration: "5 weeks",
  students: 3882,
  tag: "Programming Fundamentals",
  description: "Build stunning visual dashboards and tell compelling data stories using Tableau, the industry standard for BI & analytics.",
  image: "/assets/images/courses/tableau-icon.png",
  why: {
    heading: "Why Learn Tableau?",
    points: [
      "Industry-preferred BI tool used in Fortune 500 companies.",
      "Drag-and-drop dashboard creation with advanced filters.",
      "Empowers decision-makers with interactive data stories.",
      "High ROI for analyst roles and reporting automation.",
      "Connect to any data source and publish live dashboards."
    ]
  },
  modules: [
    {
      title: "Module 1: Getting Started with Tableau",
      topics: [
        "Connecting to Excel/SQL Files",
        "Data Preparation and Cleansing",
        "Basic Charts and Formatting"
      ]
    },
    {
      title: "Module 2: Visual Analytics & Interactions",
      topics: [
        "Filters, Parameters, and Sets",
        "Hierarchies and Drilldowns",
        "Color Coding and Tooltips"
      ]
    },
    {
      title: "Module 3: Dashboards and Storyboards",
      topics: [
        "Dashboard Layout and UX",
        "Mobile Optimization",
        "Actions and Navigation"
      ]
    },
    {
      title: "Module 4: Real-World Project",
      topics: [
        "Executive Sales Dashboard",
        "Marketing Analytics Visuals",
        "Publish to Tableau Public"
      ]
    }
  ],
  topColor: "linear-gradient(to right, #f97316, #fb923c)", // Orange gradient
  difficultyBar: "#f97316"
},
{
  id: 50,
  slug: "data-analytics-certification",
  title: "Data Analytics Certification Course",
  level: "Beginner to Intermediate",
  badge: "Popular",
  badgeColor: "#3b82f6", // Blue
  duration: "12 weeks",
  students: 6237,
  tag: "Data Analytics",
  description: "Become a job-ready Data Analyst by learning Excel, SQL, Python, Power BI, and storytelling with data.",
  image: "/assets/images/courses/data-analytics-cert.png",
  why: {
    heading: "Why Learn Data Analytics?",
    points: [
      "Fastest-growing skill in the job market (especially post-2023).",
      "Used in every industry: finance, healthcare, e-commerce, and more.",
      "Combines logic, business sense, and tool-based execution.",
      "High-paying job profiles and freelance potential.",
      "Data-driven decisions power the future of every organization."
    ]
  },
  modules: [
    {
      title: "Module 1: Excel for Analytics",
      topics: [
        "Data Cleaning & Formatting",
        "Pivot Tables & Charts",
        "Lookup Functions & Data Validation"
      ]
    },
    {
      title: "Module 2: SQL for Data Analysis",
      topics: [
        "Select, Joins, Aggregations",
        "Window Functions & Subqueries",
        "Real-life Case Studies on SQL"
      ]
    },
    {
      title: "Module 3: Data Analytics with Python",
      topics: [
        "NumPy & Pandas for Data Manipulation",
        "Matplotlib & Seaborn for Visualization",
        "EDA and Real-Time Datasets"
      ]
    },
    {
      title: "Module 4: Power BI & Storytelling",
      topics: [
        "Interactive Dashboards",
        "Data Modeling with DAX",
        "Sharing & Publishing Reports"
      ]
    },
    {
      title: "Module 5: Capstone & Job Preparation",
      topics: [
        "End-to-End Analytics Project",
        "Resume Building & Mock Interviews",
        "GitHub Project Publishing"
      ]
    }
  ],
  topColor: "linear-gradient(to right, #3b82f6, #06b6d4)", // Blue to Cyan
  difficultyBar: "#3b82f6"
},
{
  id: 51,
  slug: "data-analytics-using-r",
  title: "Data Analytics Using R",
  level: "Intermediate",
  badge: "Statistical",
  badgeColor: "#9333ea", // Purple
  duration: "6 weeks",
  students: 1427,
  tag: "Data Analytics",
  description: "Harness the power of R for statistical analysis, data visualization, and reporting.",
  image: "/assets/images/courses/data-analytics-r.png",
  why: {
    heading: "Why R for Analytics?",
    points: [
      "R is built for statistics and visualization.",
      "Preferred in research, pharma, and academia.",
      "Packages like ggplot2 and dplyr are industry standards.",
      "R Markdown helps build reproducible analysis reports.",
      "Essential for analysts who want statistical depth."
    ]
  },
  modules: [
    {
      title: "Module 1: Introduction to R",
      topics: [
        "RStudio & Data Types",
        "Data Frames, Vectors, and Factors",
        "Importing Data from CSV, Excel"
      ]
    },
    {
      title: "Module 2: Data Manipulation",
      topics: [
        "Using dplyr for Data Wrangling",
        "Piping & Filtering",
        "Group By and Summarize"
      ]
    },
    {
      title: "Module 3: Statistical Analysis",
      topics: [
        "T-tests, ANOVA, Correlation",
        "Regression Analysis",
        "Chi-Square & Hypothesis Testing"
      ]
    },
    {
      title: "Module 4: Visualization & Reporting",
      topics: [
        "ggplot2 for Visualizations",
        "Shiny Dashboards",
        "Reporting with R Markdown"
      ]
    }
  ],
  topColor: "linear-gradient(to right, #8b5cf6, #ec4899)",
  difficultyBar: "#9333ea"
},
{
  id: 52,
  slug: "excel-powerbi-sql-track",
  title: "Excel + Power BI + SQL Combo Track",
  level: "Beginner Friendly",
  badge: "Career Starter",
  badgeColor: "#14b8a6", // Teal
  duration: "8 weeks",
  students: 4885,
  tag: "Data Analytics",
  description: "Master foundational tools Excel, Power BI, and SQL to launch your data analytics career.",
  image: "/assets/images/courses/excel-powerbi-sql.png",
  why: {
    heading: "Why This Combo?",
    points: [
      "These 3 tools cover 80% of analytics job descriptions.",
      "Best track for freshers or non-coders.",
      "From raw data to dashboards, full pipeline.",
      "Excel helps you reason; SQL fetches data; Power BI presents it.",
      "Portfolio-ready projects included."
    ]
  },
  modules: [
    {
      title: "Module 1: Excel Basics to Advanced",
      topics: [
        "Cleaning, Formatting, Formulas",
        "Pivot Table Dashboards",
        "Excel Shortcuts & Tricks"
      ]
    },
    {
      title: "Module 2: SQL for Analysts",
      topics: [
        "SQL Syntax & Filtering",
        "Joins & Aggregates",
        "Use Case Projects"
      ]
    },
    {
      title: "Module 3: Power BI Dashboards",
      topics: [
        "DAX for Calculations",
        "Interactive Visuals",
        "Publishing to Power BI Service"
      ]
    }
  ],
  topColor: "linear-gradient(to right, #14b8a6, #06b6d4)", // Teal to Blue
  difficultyBar: "#14b8a6"
},





























  
  

];
