export const profile = {
  name: "Nishtha Tiku",
  initials: "NT",
  role: "Java Backend Developer",
  company: "Siemens AMS",
  location: "Noida, India",
  email: "nishthatiku16@gmail.com",
  linkedin: "https://www.linkedin.com/in/nishtha-tiku-7778441b4/",
  github: "https://github.com/Nishtha-Tiku",
  resume: "/Nishtha_Tiku_Resume.pdf",
  summary: "I build secure, scalable backend services and APIs for enterprise applications.",
};

export function gmailCompose(subject = "", body = "") {
  const q = new URLSearchParams({ view: "cm", fs: "1", to: profile.email });
  if (subject) q.set("su", subject);
  if (body) q.set("body", body);
  return `https://mail.google.com/mail/?${q.toString()}`;
}

export const roles = [
  "Java Backend Developer",
  "Enterprise Integration Engineer",
  "Spring Boot, Kafka and Camel",
  "Building with LLMs and RAG",
];

export type Job = {
  role: string;
  org: string;
  place: string;
  period: string;
  points: string[];
  tags: string[];
  wide?: boolean;
};

export const experience: Job[] = [
  {
    role: "Software Developer I, Enterprise ERP Integration Platform",
    org: "Siemens AMS",
    place: "Noida, India",
    period: "Nov 2023 – Present",
    wide: true,
    points: [
      "Cut manual ERP data entry by 60% with a bidirectional sync microservice across enterprise ERPs.",
      "Built 20+ REST APIs and event-driven Kafka and Camel workflows across 4 ERP platforms, making releases about 40% faster.",
      "Integrated NetSuite, Dynamics 365, SAP and Brightly EAM to automate procurement, inventory and maintenance, using GraphQL against NetSuite APIs, and designed the relational schema for a new ERP-to-EAM integration.",
      "Designed OAuth2 and JWT authentication with a custom Camel interceptor to secure token generation and access across integration endpoints.",
      "Reduced connector effort by 35–45% with reusable adapter frameworks, backed by JUnit and Mockito tests.",
      "Built a React dashboard for the Brightly ERP-to-EAM integration and data mapping flow, using Claude and GitHub Copilot to accelerate debugging, documentation and unit test generation.",
      "Reviewed 150+ pull requests across 6 engineering teams and wrote 20+ architecture and troubleshooting docs, cutting repeat production issues by 30–40%.",
      "Prototyped RAG documentation search and LLM-driven data extraction with Spring AI and the Claude API.",
    ],
    tags: ["Java", "Spring Boot", "Quarkus", "Apache Camel", "Kafka", "GraphQL", "OAuth2 / JWT", "PostgreSQL", "React", "Docker"],
  },
  {
    role: "Data Analyst Intern",
    org: "UBoard India",
    place: "Gurgaon, India",
    period: "Aug 2022 – Sep 2022",
    points: [
      "Improved inventory forecasting accuracy by an estimated 15% across 100+ retail outlets.",
      "Analysed retail datasets and built forecasting and clustering models with Python, Pandas and NumPy, visualised with Matplotlib and Seaborn.",
    ],
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
];

export type Project = {
  name: string;
  period: string;
  text: string;
  bullets: string[];
  tags: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    name: "RAG-Based Enterprise Support Assistant",
    period: "Nov 2025 – Jan 2026",
    text: "Answers technical questions over ERP integration documentation using retrieval-augmented generation.",
    bullets: [
      "Built a hybrid BM25 and vector search pipeline for retrieval.",
      "Reached 85% answer relevance on a 50-question evaluation set.",
      "Packaged with Docker and deployable on Kubernetes.",
    ],
    tags: ["Spring Boot", "Spring AI", "PostgreSQL (pgvector)", "Claude API", "Docker", "Kubernetes"],
    github: "https://github.com/Nishtha-Tiku/rag-support-assistant",
  },
  {
    name: "LLM-Powered Data Mapping & Extraction Pipeline",
    period: "May 2026 – Jun 2026",
    text: "Converts unstructured invoice and purchase order documents into schema-validated JSON.",
    bullets: [
      "Used structured-output prompting with JSON Schema validation.",
      "Reached 92% field-level extraction accuracy on a 30-document evaluation set.",
      "Built with Java, Spring Boot and Kafka around the Claude API.",
    ],
    tags: ["Java", "Spring Boot", "Claude API", "Kafka", "JSON Schema", "Docker"],
  },
  {
    name: "Sagacity: Mental Health Support Platform",
    period: "Sep 2023 – Jan 2024",
    text: "A mental health support platform with a BERT-based NLP chatbot, a Flask backend and a React frontend.",
    bullets: [
      "Integrated a BERT-based NLP model into a Flask backend, reaching an F1-score of 0.86.",
      "A React chat interface talks to the Flask API.",
      "Co-authored the accompanying research paper, published in IJRAR (May 2024).",
    ],
    tags: ["Python", "BERT", "NLP", "Flask", "React"],
    github: "https://github.com/Nishtha-Tiku/Sagacity-A-HealthBot",
  },
  {
    name: "Stock Market Prediction with LSTM",
    period: "Learning project",
    text: "Forecasts Microsoft (MSFT) stock closing prices with a stacked LSTM network.",
    bullets: [
      "Three stacked LSTM layers trained on a 100-step lookback window of scaled closing prices.",
      "Chronological train/test split and recursive multi-step forecasting.",
      "Built with TensorFlow/Keras, scikit-learn and pandas.",
    ],
    tags: ["Python", "TensorFlow", "Keras", "LSTM", "Time Series"],
    github: "https://github.com/Nishtha-Tiku/Stock-Market-Prediction",
  },
  {
    name: "Federated Time-Series Learning under Heterogeneous Clients",
    period: "Research project",
    text: "A research-oriented FedAvg implementation studying how federated learning behaves across clients with different time-series data distributions.",
    bullets: [
      "Built an LSTM classifier over the UCI HAR raw inertial-signal dataset (128 timesteps × 9 sensor channels).",
      "Implemented sample-weighted FedAvg aggregation across 4 simulated clients under IID and subject-based partitioning.",
      "Compared federated runs against a centralized baseline over 5 communication rounds, with partition inspection and unit tests.",
    ],
    tags: ["Python", "PyTorch", "LSTM", "Federated Learning", "Time Series"],
    github: "https://github.com/Nishtha-Tiku/federated-timeseries-fedavg",
  },
];

export type Achievement = { title: string; meta: string; text: string; href?: string; linkLabel?: string };

export const achievements: Achievement[] = [
  {
    title: "B.Tech in Information Technology",
    meta: "ABES Engineering College (AKTU) · Aug 2020 – May 2024",
    text: "CGPA 7.91 / 10.",
  },
  {
    title: "Prime Minister's Special Scholarship Scheme",
    meta: "Government of India · PMSSS",
    text: "Awarded a merit scholarship for top-performing students, covering tuition and accommodation.",
  },
  {
    title: "Published research paper",
    meta: "IJRAR · May 2024",
    text: "Co-authored \"Mental Health Support Platform\", the paper behind the Sagacity project.",
    href: "https://drive.google.com/file/d/1ezjl3xHk-9R-VWVajx5WKdbGRMtmoXMj/view?usp=drive_link",
    linkLabel: "Read the paper",
  },
  {
    title: "Programming Essentials in Python",
    meta: "Cisco Networking Academy",
    text: "Certification covering core object-oriented programming principles.",
  },
];

export const skills = [
  { group: "Programming Languages", items: ["Java 17/21", "SQL", "Python"] },
  {
    group: "API & Backend Architecture",
    items: ["Spring Boot", "Quarkus", "Microservices", "REST APIs", "GraphQL", "OpenAPI / Swagger", "Contract-First API Design", "Idempotency", "API Versioning", "Design Patterns", "SOLID"],
  },
  {
    group: "Integration & Messaging",
    items: ["Apache Camel", "Apache Kafka", "Enterprise Integration Patterns", "Asynchronous Workflows", "Distributed Systems"],
  },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "Hibernate / JPA", "Liquibase", "pgvector"] },
  { group: "Security", items: ["OAuth2", "JWT", "API Security", "HashiCorp Vault"] },
  {
    group: "Generative AI",
    items: ["Spring AI", "RAG", "Claude API", "OpenAI API", "Vector Databases (pgvector)", "LangChain4j", "Prompt Engineering"],
  },
  {
    group: "AI-Assisted Development",
    items: ["Claude", "GitHub Copilot"],
  },
  {
    group: "Deployment & Infrastructure",
    items: ["Docker", "Kubernetes", "Grafana", "CI/CD", "Git", "Gradle", "Maven"],
  },
  { group: "Scripting", items: ["Python", "Bash"] },
  { group: "Testing & Quality", items: ["JUnit", "Mockito", "Postman", "SonarQube", "Code Reviews", "Agile/SDLC"] },
  // Frontend group removed: it only had one skill (React), which still appears in the project and experience tags.
];

export const reachOut = ["Job opportunities", "Referrals", "Collaboration and open source", "Questions about integrations and applied AI"];

export const impact = [
  "60% less manual ERP data entry",
  "20+ REST APIs and workflows",
  "4 ERP platforms integrated",
  "150+ pull requests reviewed",
];

export const footerRoles = "Java Backend Developer · Enterprise Integration · Applied AI";