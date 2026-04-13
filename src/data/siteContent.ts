export type NavItem = {
  label: string;
  href: string;
};

export type Highlight = {
  value: string;
  label: string;
  detail: string;
};

export type Principle = {
  title: string;
  description: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
};

export type Project = {
  title: string;
  category: string;
  objective: string;
  stack: string[];
  outcome: string;
  githubUrl?: string;
  liveUrl?: string;
};

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const highlights: Highlight[] = [
  {
    value: "3.5+ Years",
    label: "Hands-On Experience",
    detail: "Building and shipping production-grade GenAI, agentic AI, and ML systems.",
  },
  {
    value: "11+ Engineers",
    label: "Leadership",
    detail: "Led teams across concurrent AI projects from architecture to client delivery.",
  },
  {
    value: "95%+ Accuracy",
    label: "Impact",
    detail: "Reduced healthcare analysis workflows from months to under 10 minutes.",
  },
];

const principles: Principle[] = [
  {
    title: "Production-Ready AI",
    description:
      "I work across the full AI stack, from RAG and fine-tuning to workflow orchestration, APIs, and user-facing delivery.",
  },
  {
    title: "Client-Facing Execution",
    description:
      "I translate business requirements into reliable AI systems, run demos, iterate quickly, and keep delivery aligned with outcomes.",
  },
  {
    title: "Cross-Domain Problem Solving",
    description:
      "My work spans healthcare, aerospace, manufacturing, sales, edtech, and fintech, which sharpens how I design practical systems.",
  },
];

const skillGroups: SkillGroup[] = [
  {
    title: "LLM & GenAI",
    items: [
      "LangChain",
      "LangGraph",
      "RAG Pipelines",
      "FAISS",
      "Prompt Engineering",
      "LoRA/PEFT",
      "Agentic Workflows",
      "Multi-agent Systems",
    ],
  },
  {
    title: "ML & NLP",
    items: [
      "Supervised Learning",
      "Classification & Regression",
      "Transformer Models",
      "Hugging Face",
      "BERT",
      "Llama 3.1",
      "Scikit-learn",
      "TensorFlow",
    ],
  },
  {
    title: "APIs & Platforms",
    items: [
      "OpenAI GPT-4o",
      "Claude",
      "Gemini",
      "Azure Document Intelligence",
      "ElevenLabs",
      "LangSmith",
      "MCP",
      "N8N",
    ],
  },
  {
    title: "Backend & Analytics",
    items: [
      "Python",
      "FastAPI",
      "Docker",
      "REST APIs",
      "ETL Pipelines",
      "SQL",
      "Pandas",
      "Power BI",
    ],
  },
];

const experience: ExperienceItem[] = [
  {
    company: "Vserv Infosystems Private Limited",
    location: "Remote",
    role: "AI Engineer",
    period: "Sep 2025 - Present",
    bullets: [
      "Built a patient journey agent using ElevenLabs transcription and LangGraph orchestration, processing 100+ disease-specific patient recordings with 95%+ extraction accuracy.",
      "Implemented a Claude Sonnet PII masking pipeline to support HIPAA-aligned healthcare workflows before downstream analysis.",
      "Developed a medical journal intelligence agent using LangGraph, GPT-4 web search, and Claude to structure live medical research knowledge bases.",
    ],
  },
  {
    company: "CS Soft Solutions",
    location: "Chandigarh, Mohali",
    role: "AI Engineer / AI Team Lead",
    period: "Jan 2025 - Sep 2025",
    bullets: [
      "Led a team of 11 AI/ML engineers across 8+ concurrent projects covering healthcare, aerospace, manufacturing, sales, and edtech.",
      "Built Avonica, a real-time flight intelligence system using LangGraph to help pilots query operational flight data in natural language.",
      "Delivered an invoice verification system using Azure Document Intelligence and rule-based matching with 100% reconciliation accuracy.",
    ],
  },
  {
    company: "Translation India",
    location: "Noida, Uttar Pradesh",
    role: "AI Engineer & Team Lead",
    period: "Apr 2024 - Oct 2024",
    bullets: [
      "Led a team of 5 engineers while coordinating directly with senior management on milestones and technical direction.",
      "Benchmarked multiple speech-to-speech translation approaches before selecting Facebook AI SeamlessStreaming for production use.",
      "Delivered a real-time multilingual interpreter supporting 10+ languages for live communication scenarios.",
    ],
  },
  {
    company: "FennecFox Solutions LLP",
    location: "Lucknow, Uttar Pradesh",
    role: "Data Analyst",
    period: "Aug 2022 - Jan 2024",
    bullets: [
      "Built interactive Power BI and Excel dashboards that informed conversion strategy and sales optimization.",
      "Trained sentiment analysis models using supervised ML and fine-tuned open-source LLMs including GPT-NeoX-7B.",
      "Applied feature engineering, EDA, and evaluation pipelines with Pandas, NumPy, Scikit-learn, Matplotlib, and Seaborn.",
    ],
  },
];

const projects: Project[] = [
  {
    title: "Patient Journey Agent",
    category: "Healthcare AI",
    objective:
      "Automate disease-specific patient journey analysis from recorded transcriptions using agentic AI.",
    stack: ["ElevenLabs", "Claude Sonnet", "LangGraph", "FAISS"],
    outcome:
      "Processed 100+ patient recordings at 95%+ accuracy and reduced analysis time from months to under 10 minutes.",
    githubUrl: "https://github.com/Saurabh-Shukla-AI",
  },
  {
    title: "Avonica",
    category: "Aerospace Flight Intelligence",
    objective:
      "Build a real-time agentic system for pilots to query live flight data and retrieve operational information via natural language.",
    stack: ["LangGraph", "OpenAI GPT-4", "REST APIs", "Python"],
    outcome:
      "Enabled conversational flight decision support for aerospace use cases using real-time operational data.",
    githubUrl: "https://github.com/Saurabh-Shukla-AI",
  },
  {
    title: "Invoice Verification & Reconciliation System",
    category: "Document AI",
    objective:
      "Automate invoice extraction and Excel-based verification using rule-driven reconciliation logic.",
    stack: ["Azure Document Intelligence", "Python", "Pandas", "Excel"],
    outcome:
      "Achieved 100% reconciliation accuracy and eliminated manual invoice verification entirely.",
    githubUrl: "https://github.com/Saurabh-Shukla-AI",
  },
  {
    title: "Medical Journal Intelligence Agent",
    category: "Research Automation",
    objective:
      "Extract, clean, and query key findings from medical research conferences using a multi-agent workflow.",
    stack: ["LangGraph", "GPT-4 Web Search", "Claude API", "SQL"],
    outcome:
      "Enabled non-technical users to query a live medical knowledge database through natural language.",
    githubUrl: "https://github.com/Saurabh-Shukla-AI",
  },
];

const certifications = [
  "Full Stack Data Science & AI - AlmaBetter",
  "IBM Data Science - IBM / Coursera",
  "Prompt Engineering Specialization - DeepLearning.AI",
  "Supervised Machine Learning - DeepLearning.AI / Stanford",
  "Advanced SQL, Microsoft Power BI, Advanced Python",
];

export const siteContent = {
  name: "Saurabh Shukla",
  shortName: "Saurabh",
  role: "AI Engineer | GenAI & Agentic AI Developer | ML Engineer | Prompt Engineer",
  intro:
    "Results-driven AI Engineer with 3.5+ years of experience building production-grade GenAI, Agentic AI, and Machine Learning systems across healthcare, aerospace, manufacturing, sales, and edtech.",
  email: "saurabhshukla.contact@gmail.com",
  phone: "+91 7310441335",
  githubUrl: "https://github.com/Saurabh-Shukla-AI",
  linkedinUrl: "https://linkedin.com/in/saurabh-shukla-data",
  profileUrl: "https://novypro.com/profile_projects/saurabh-shukla",
  navItems,
  highlights,
  about:
    "I build and ship AI systems end to end, from LLM fine-tuning, RAG pipeline design, and multi-agent orchestration to REST API integration and direct client-facing delivery. My work consistently focuses on practical impact, measurable outcomes, and moving complex AI systems into production without losing clarity in the user experience.",
  principles,
  domains: [
    "Healthcare",
    "Aerospace & Aviation",
    "Sales",
    "Manufacturing",
    "Edtech",
    "Fintech",
  ],
  skillGroups,
  experience,
  projects,
  certifications,
  education:
    "B.Tech in Mechanical Engineering, Madan Mohan Malaviya University of Technology, Gorakhpur (2022)",
};