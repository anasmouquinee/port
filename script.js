/**
 * Anas Mouquine - Interactive Portfolio Engine
 * Features:
 *  - Interactive Constellation Particle Canvas
 *  - 3D Holographic Card Tilt & Physics
 *  - Dynamic Projects & Categories Filtering
 *  - Code Snippets Terminal View & UI Screenshot Galleries
 *  - 11 Verified Coursera Credentials Showcase & Modal
 *  - Interactive Skills Matrix with Cross-Highlighting
 *  - Project Gallery Carousel Modal
 *  - Casablanca Morocco Live Clock
 *  - Clipboard Toast Notifications
 */

// Embedded projects dataset
const EMBEDDED_PROJECTS = [
  {
    "id": "ai-multi-agent",
    "title": "AI Multi-Agent Orchestrator",
    "category": "AI & Autonomous Systems",
    "filter": "ai",
    "featured": true,
    "hasCodeSnippet": true,
    "codeLanguage": "python",
    "codeSnippet": "class AgentOrchestrator:\n    def __init__(self, rag_engine, tools):\n        self.rag = rag_engine\n        self.tools = tools\n        self.agents = [ResearchAgent(), CodeAgent(), QAAgent()]\n    \n    async def execute_task(self, prompt: str) -> ExecutionResult:\n        # 1. Retrieve domain context via Vector RAG\n        context = await self.rag.retrieve_top_k(prompt, k=5)\n        # 2. Plan and delegate to specialized subagents\n        plan = await self.agents[0].create_plan(prompt, context)\n        return await self.dispatch_parallel(plan)",
    "img": "solo_top.png",
    "gallery": [],
    "tech": [
      "Python",
      "LangChain",
      "RAG",
      "FastAPI",
      "Multi-Agent"
    ],
    "desc": "Autonomous multi-agent orchestration framework featuring Retrieval-Augmented Generation (RAG), intelligent subagent delegation, dynamic tool execution, and automated QA pipelines.",
    "features": [
      "Autonomous Multi-Agent Task Delegation",
      "Vector RAG Knowledge Ingestion & Retrieval",
      "Automated QA & Evaluation Benchmark Pipeline",
      "Modular Tool Execution Engine"
    ],
    "github": "https://github.com/anasmouquinee/AI_MULTI_AGENT_PROJECT",
    "link": "https://github.com/anasmouquinee/AI_MULTI_AGENT_PROJECT"
  },
  {
    "id": "kaelar-novel",
    "title": "Kaelar's Novel Archive",
    "category": "Interactive Web & UI",
    "filter": "web",
    "featured": true,
    "hasCodeSnippet": false,
    "img": "kaelar_top.png",
    "gallery": [
      "kaelar_top.png",
      "kaelar_mid.png",
      "kaelar_bot.png",
      "kaelar_main.png"
    ],
    "tech": [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Thematic UI",
      "Netlify"
    ],
    "desc": "An expansive web novel reading library with dedicated immersive universes for Solo Leveling, Omniscient Reader, and Lord of the Mysteries.",
    "features": [
      "Custom Thematic Universe Design",
      "Distraction-free Reader Mode Layout",
      "Responsive Interactive Art Galleries",
      "Ultra-fast Static Delivery"
    ],
    "github": "https://github.com/anasmouquinee/mynovel-site",
    "link": "https://kaelarsnovel.netlify.app/"
  },
  {
    "id": "solo-leveling",
    "title": "Solo Leveling Experience",
    "category": "Immersive Universe Page",
    "filter": "web",
    "featured": true,
    "hasCodeSnippet": false,
    "img": "solo_top.png",
    "gallery": [
      "solo_top.png",
      "solo_mid.png",
      "solo_bot.png",
      "solo_leveling.png"
    ],
    "tech": [
      "HTML5",
      "CSS3",
      "Thematic UI",
      "JavaScript"
    ],
    "desc": "A dedicated, immersive dark-themed experience for the Solo Leveling series featuring custom character cards, hunters ranking, and dynamic visual storytelling.",
    "features": [
      "Hunter Rank & Character Showcases",
      "Shadow Monarch Aura Visual Effects",
      "Responsive Interactive Chapter Reader",
      "Custom Typography & Soundscapes"
    ],
    "github": "https://github.com/anasmouquinee/mynovel-site",
    "link": "https://kaelarsnovel.netlify.app/solo/solo.html"
  },
  {
    "id": "orv-hub",
    "title": "Omniscient Reader Hub",
    "category": "Interactive Story Universe",
    "filter": "web",
    "featured": true,
    "hasCodeSnippet": false,
    "img": "orv_top.png",
    "gallery": [
      "orv_top.png",
      "orv_mid.png",
      "orv_bot.png",
      "orv.png"
    ],
    "tech": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Fan Art Integration"
    ],
    "desc": "Interactive apocalypse-themed hub for Omniscient Reader's Viewpoint with constellation alerts, scenario timeline viewers, and atmospheric artwork integration.",
    "features": [
      "Constellation Scenario Timeline",
      "Doomsday Atmospheric Visuals",
      "Interactive Character Dossiers",
      "Mobile Optimized Layout"
    ],
    "github": "https://github.com/anasmouquinee/mynovel-site",
    "link": "https://kaelarsnovel.netlify.app/orv/orv.html"
  },
  {
    "id": "lotm-page",
    "title": "Lord of the Mysteries",
    "category": "Victorian Dark Fantasy UI",
    "filter": "web",
    "featured": true,
    "hasCodeSnippet": false,
    "img": "lotm_top.png",
    "gallery": [
      "lotm_top.png",
      "lotm_mid.png",
      "lotm_bot.png",
      "lotm.png"
    ],
    "tech": [
      "HTML5",
      "CSS3",
      "Lore-Accurate UI",
      "Tarot Cards"
    ],
    "desc": "A mysterious, Victorian steampunk-inspired landing page for Lord of the Mysteries, featuring Tarot Club interactive cards, potion pathways, and occult aesthetics.",
    "features": [
      "Tarot Club Pathways Visualizer",
      "Victorian Steampunk Aesthetics",
      "Lore-Accurate Potion System",
      "Smooth Parallax Scroll Design"
    ],
    "github": "https://github.com/anasmouquinee/mynovel-site",
    "link": "https://kaelarsnovel.netlify.app/lotm/lotm.html"
  },
  {
    "id": "ebook-website",
    "title": "Kaelar's E-Books & UI Prototype",
    "category": "UI/UX Design & Frontend",
    "filter": "web",
    "featured": true,
    "hasCodeSnippet": false,
    "img": "book_website_screenshot_1763671051794.png",
    "gallery": [
      "book_website_screenshot_1763671051794.png",
      "project/proj4.jpg",
      "project/proj4-2.jpg",
      "project/proj4-3.jpg"
    ],
    "tech": [
      "Figma",
      "UI/UX",
      "JavaScript",
      "HTML5",
      "CSS3"
    ],
    "desc": "Modern digital bookstore and reading challenge application with high-fidelity Figma design systems, curated reading shelves, and responsive UI components.",
    "features": [
      "Comprehensive Figma Design System",
      "Reading Goal & Analytics Tracker",
      "Dark & Light Mode Reading UI",
      "Clean Modular Component Structure"
    ],
    "github": "https://github.com/anasmouquinee/book-website",
    "link": "https://github.com/anasmouquinee/book-website"
  },
  {
    "id": "sews-connect",
    "title": "SEWS Connect Hub",
    "category": "Mobile & Industrial IoT",
    "filter": "mobile",
    "featured": true,
    "hasCodeSnippet": true,
    "codeLanguage": "dart",
    "codeSnippet": "class WorkstationScannerNotifier extends StateNotifier<ScannerState> {\n  final AgoraRtcEngine _rtcEngine;\n  final HiveBox<TaskModel> _taskCache;\n\n  Future<void> claimTaskByQr(String qrCode) async {\n    // First-scan-wins smart assignment\n    final task = await _taskRepository.claimTask(qrCode);\n    await _taskCache.put(task.id, task);\n    state = ScannerState.taskAssigned(task);\n    await _fcmService.notifyDepartment(task.departmentId);\n  }\n}",
    "img": "orv_top.png",
    "gallery": [],
    "tech": [
      "Flutter 3.19+",
      "Riverpod",
      "WebRTC",
      "Agora RTC",
      "Hive",
      "Firebase"
    ],
    "desc": "Enterprise communication and operations application tailored for SEWS manufacturing. Features WebRTC audio/video calls, QR workstation scanner, first-scan-wins task claiming, and offline local caching.",
    "features": [
      "WebRTC Audio & Video Calling Engine",
      "QR Code Workstation & Equipment Scanner",
      "Intelligent Task Dispatch & Assignment",
      "Offline-first Architecture with Hive Storage"
    ],
    "github": "https://github.com/anasmouquinee/SEWS-connect",
    "link": "https://github.com/anasmouquinee/SEWS-connect"
  },
  {
    "id": "gitpub",
    "title": "GitPub Developer Broadcaster",
    "category": "DevOps & Automation",
    "filter": "cloud",
    "featured": true,
    "hasCodeSnippet": true,
    "codeLanguage": "python",
    "codeSnippet": "@cli.command()\n@click.option(\"--repo-path\", required=True, help=\"Path to local Git repository\")\n@click.option(\"--dry-run\", is_flag=True, help=\"Preview post without publishing\")\ndef publish(repo_path: str, dry_run: bool):\n    sanitizer = LogSanitizer()\n    payload = extract_port_trigger(repo_path)\n    if dry_run:\n        click.echo(f\"[DRY-RUN] Verified Release: {payload.title}\")\n        return\n    LinkedInClient().share_update(payload)",
    "img": "kaelar_top.png",
    "gallery": [],
    "tech": [
      "Python",
      "GitHub Actions",
      "LinkedIn API",
      "CI/CD",
      "Pytest"
    ],
    "desc": "Automated developer release broadcasting CLI and CI/CD action. Generates release announcements from trigger files, runs dry-run validations, and securely publishes project updates directly to LinkedIn.",
    "features": [
      "GitHub Actions Automated Trigger Pipeline",
      "Interactive Dry-Run Simulation Mode",
      "Zero Secret Leakage Logging Sanitizer",
      "Automated Social Distribution Engine"
    ],
    "github": "https://github.com/anasmouquinee/gitpub",
    "link": "https://github.com/anasmouquinee/gitpub"
  },
  {
    "id": "bigdata-architecture",
    "title": "Media Lakehouse & ETL Platform",
    "category": "Big Data & Architecture",
    "filter": "cloud",
    "featured": true,
    "hasCodeSnippet": true,
    "codeLanguage": "python",
    "codeSnippet": "with DAG(dag_id=\"media_medallion_pipeline\", schedule=\"@daily\", catchup=False) as dag:\n    # Bronze: Raw Ingestion via Distributed Scraper\n    scrape_raw = PythonOperator(task_id=\"scrape_news_bronze\", python_callable=scrape)\n    # Silver: Cleansed & Normalized Delta Parquet\n    clean_silver = SparkSubmitOperator(task_id=\"transform_silver\", conn_id=\"spark\")\n    # Gold: Aggregated Analytics Warehouse\n    load_gold = PostgresOperator(task_id=\"aggregate_gold_warehouse\", sql=\"load.sql\")\n    scrape_raw >> clean_silver >> load_gold",
    "img": "lotm_top.png",
    "gallery": [],
    "tech": [
      "Python",
      "Docker",
      "Apache Airflow",
      "Medallion Lakehouse",
      "Kafka"
    ],
    "desc": "Distributed Big Data platform for ingesting, transforming, and visualizing media news articles using a Medallion Lakehouse architecture (Bronze, Silver, Gold layers) with Airflow scheduling.",
    "features": [
      "Distributed Automated Web Scraping Pipeline",
      "Apache Airflow DAG Scheduling & Monitoring",
      "Medallion Architecture ETL/ELT Processing",
      "Containerized Multi-Service Deployment"
    ],
    "github": "https://github.com/anasmouquinee/Projet-Architecture-de-donn-es",
    "link": "https://github.com/anasmouquinee/Projet-Architecture-de-donn-es"
  },
  {
    "id": "film-rec",
    "title": "FilmRec Movie Discovery",
    "category": "Full-Stack Web & Mobile",
    "filter": "web",
    "featured": true,
    "hasCodeSnippet": true,
    "codeLanguage": "javascript",
    "codeSnippet": "export const getRecommendations = async (userPreferences, watchlist) => {\n  const genres = watchlist.map(m => m.genre_ids).flat();\n  const response = await api.get('/discover/movie', {\n    params: {\n      with_genres: [...new Set(genres)].join(','),\n      sort_by: 'popularity.desc',\n      vote_count_gte: 100\n    }\n  });\n  return response.data.results;\n};",
    "img": "book_website_screenshot_1763671051794.png",
    "gallery": [],
    "tech": [
      "React",
      "Node.js",
      "Express",
      "REST API",
      "Vercel"
    ],
    "desc": "Full-stack movie discovery and recommendation platform featuring dynamic TMDB search, custom watchlists, curated genres, and a companion mobile client.",
    "features": [
      "Live Deployed Production Architecture",
      "Personalized Film Recommendation Engine",
      "Dynamic Genre & Rating Filtering",
      "Responsive Web & Mobile Synergy"
    ],
    "github": "https://github.com/anasmouquinee/film-rec",
    "link": "https://film-rec.vercel.app"
  },
  {
    "id": "global-newsstream-enterprise-lakehouse-real-time-media-intelligence-platform",
    "title": "Global-NewsStream-Enterprise-Lakehouse-Real-Time-Media-Intelligence-Platform",
    "category": "Big Data & Architecture",
    "filter": "cloud",
    "featured": false,
    "hasCodeSnippet": true,
    "codeLanguage": "python",
    "codeSnippet": "from kafka import KafkaProducer\nimport json\n\nproducer = KafkaProducer(\n    bootstrap_servers=['kafka:9092'],\n    value_serializer=lambda v: json.dumps(v).encode('utf-8')\n)\n\ndef publish_scraped_article(article_data):\n    \"\"\"Publishes a scraped article to the raw_news Kafka topic.\"\"\"\n    producer.send('raw_news', article_data)\n    print(f\"Published article: {article_data['title']}\")",
    "img": null,
    "gallery": [],
    "tech": [
      "Python",
      "Apache Kafka",
      "Apache Airflow",
      "MinIO",
      "Apache Superset",
      "Docker & Kubernetes"
    ],
    "desc": "This distributed enterprise lakehouse platform ingests, processes, and visualizes real-time media intelligence from global news articles. It establishes a robust data foundation for advanced analytics and strategic insights through a medallion architecture and comprehensive ETL/ELT pipelines.",
    "features": [
      "Distributed, real-time data ingestion from diverse news sources using custom scrapers.",
      "Scalable Enterprise Lakehouse Architecture for structured and unstructured data storage (MinIO & PostgreSQL).",
      "Automated ETL/ELT pipelines orchestrated by Apache Airflow for data transformation and quality.",
      "Real-time media intelligence dashboards and monitoring via Superset, Prometheus, and Grafana."
    ],
    "github": "https://github.com/anasmouquinee/Global-NewsStream-Enterprise-Lakehouse-Real-Time-Media-Intelligence-Platform",
    "link": "https://github.com/anasmouquinee/Global-NewsStream-Enterprise-Lakehouse-Real-Time-Media-Intelligence-Platform"
  },
  {
    "id": "omnipulse-ai-studio",
    "title": "omnipulse-ai-studio",
    "category": "Full-Stack & Web",
    "filter": "web",
    "featured": false,
    "hasCodeSnippet": true,
    "codeLanguage": "typescript",
    "codeSnippet": "import axios from 'axios';\n\ninterface PromptRequest {\n  prompt: string;\n  model?: string;\n}\n\nasync function submitAiPrompt(data: PromptRequest): Promise<string> {\n  try {\n    const response = await axios.post('/api/ai/generate', data);\n    return response.data.output;\n  } catch (error) {\n    console.error('AI prompt submission failed:', error);\n    throw new Error('Could not generate AI response.');\n  }\n}",
    "img": null,
    "gallery": [],
    "tech": [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Docker",
      "Vercel"
    ],
    "desc": "This project is a sophisticated web-based AI studio application, enabling users to interact with and manage AI prompts effectively. It demonstrates a robust full-stack architecture, combining a modern frontend with a capable backend to deliver a seamless and powerful AI development experience.",
    "features": [
      "Leveraged React, TypeScript, and Vite for a high-performance, type-safe, and modular web frontend with Hot Module Replacement (HMR).",
      "Implemented robust code quality standards using Oxlint, including type-aware linting for enhanced developer productivity and maintainability.",
      "Designed and integrated a scalable API backend to manage AI prompt processing and core studio functionalities.",
      "Streamlined development and deployment workflows with Docker containerization and Vercel for continuous integration and delivery."
    ],
    "github": "https://github.com/anasmouquinee/omnipulse-ai-studio",
    "link": "https://omnipulse-ai-studio.vercel.app"
  }
];

const EMBEDDED_CERTS = [
  {
    id: "G2064X5FGLVB",
    name: "Agile Project Management",
    issuer: "Google",
    issuerIcon: "fab fa-google",
    date: "2024",
    color: "text-yellow-400",
    accentColor: "#eab308",
    bg: "rgba(234, 179, 8, 0.1)",
    border: "rgba(234, 179, 8, 0.25)",
    badge: "Agile & Leadership",
    shareUrl: "https://coursera.org/share/4ff37e31e732f4b4fc12ebd8861ca8f9",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/G2064X5FGLVB",
    skills: ["Agile Project Management", "Scrum & Sprint Planning", "Product Roadmaps", "User Stories & Backlogs", "Team Leadership", "Prioritization"]
  },
  {
    id: "NCRUXK7BVMLJ",
    name: "React Native",
    issuer: "Meta",
    issuerIcon: "fab fa-react",
    date: "2024",
    color: "text-cyan-400",
    accentColor: "#22d3ee",
    bg: "rgba(34, 211, 238, 0.1)",
    border: "rgba(34, 211, 238, 0.25)",
    badge: "Mobile Engineering",
    shareUrl: "https://coursera.org/share/4d61818815951a542ad0bac26fbd2c3d",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/NCRUXK7BVMLJ",
    skills: ["React Native", "Cross-Platform Mobile Dev", "UI Components", "Mobile Architecture", "Interactive Design"]
  },
  {
    id: "EOQZZ5AJA4PN",
    name: "Advanced React",
    issuer: "Meta",
    issuerIcon: "fab fa-react",
    date: "2024",
    color: "text-blue-400",
    accentColor: "#60a5fa",
    bg: "rgba(96, 165, 250, 0.1)",
    border: "rgba(96, 165, 250, 0.25)",
    badge: "Frontend Architecture",
    shareUrl: "https://coursera.org/share/e08573d01e864b68add1e79eb26fa354",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/EOQZZ5AJA4PN",
    skills: ["React Hooks & Context API", "State Management", "Performance Optimization", "Unit Testing (Jest)", "Custom Hooks", "Software Design Patterns"]
  },
  {
    id: "7I9S1PQCF5V3",
    name: "React Basics",
    issuer: "Meta",
    issuerIcon: "fab fa-react",
    date: "2024",
    color: "text-sky-400",
    accentColor: "#38bdf8",
    bg: "rgba(56, 189, 248, 0.1)",
    border: "rgba(56, 189, 248, 0.25)",
    badge: "Frontend Core",
    shareUrl: "https://coursera.org/share/d350c1763426eb95e9c27e9767e61561",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/7I9S1PQCF5V3",
    skills: ["React.js & JSX", "Component Lifecycle", "Props & Data Flow", "Event Handling", "Webpack & Tooling"]
  },
  {
    id: "VJC3EUC85T53",
    name: "Programming with JavaScript",
    issuer: "Meta",
    issuerIcon: "fab fa-js-square",
    date: "2024",
    color: "text-amber-400",
    accentColor: "#fbbf24",
    bg: "rgba(251, 191, 36, 0.1)",
    border: "rgba(251, 191, 36, 0.25)",
    badge: "Core Programming",
    shareUrl: "https://coursera.org/share/b26c92209ec2d45a5b6bb455d60df359",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/VJC3EUC85T53",
    skills: ["JavaScript ES6+", "Asynchronous JS", "Object-Oriented Programming", "Jest Unit Testing", "Node.js", "Data Structures"]
  },
  {
    id: "3HIOWYMU2G7V",
    name: "Using Python to Access Web Data",
    issuer: "Univ. of Michigan",
    issuerIcon: "fab fa-python",
    date: "2024",
    color: "text-emerald-400",
    accentColor: "#34d399",
    bg: "rgba(52, 211, 153, 0.1)",
    border: "rgba(52, 211, 153, 0.25)",
    badge: "Data & Backend",
    shareUrl: "https://coursera.org/share/57706b3a06ea5d0d4fcea0bb93528275",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/3HIOWYMU2G7V",
    skills: ["Python Programming", "RESTful APIs", "Web Scraping", "JSON & XML Parsing", "Network Protocols (HTTP/Sockets)"]
  },
  {
    id: "HX5EFZ91RJYY",
    name: "Interactivity with JavaScript",
    issuer: "Univ. of Michigan",
    issuerIcon: "fab fa-js",
    date: "2024",
    color: "text-yellow-300",
    accentColor: "#fde047",
    bg: "rgba(253, 224, 71, 0.1)",
    border: "rgba(253, 224, 71, 0.25)",
    badge: "Interactive Web",
    shareUrl: "https://coursera.org/share/6a1490d428a5f78696926ccf480e2f7e",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/HX5EFZ91RJYY",
    skills: ["DOM Manipulation", "Event-Driven Architecture", "Web Accessibility (WCAG 2.2)", "Interactive UI Design"]
  },
  {
    id: "PYISBTHNMK4R",
    name: "Software Engineering: Design & Management",
    issuer: "HKUST",
    issuerIcon: "fas fa-laptop-code",
    date: "2024",
    color: "text-indigo-400",
    accentColor: "#818cf8",
    bg: "rgba(129, 140, 248, 0.1)",
    border: "rgba(129, 140, 248, 0.25)",
    badge: "System Architecture",
    shareUrl: "https://coursera.org/share/8459bab8390a13da8ee112ed898f86e4",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/PYISBTHNMK4R",
    skills: ["Software Architecture", "Design Patterns", "Unified Modeling Language (UML)", "SDLC & SQA", "Systems Analysis"]
  },
  {
    id: "PSEWVE6G37XO",
    name: "Fundamentals of UI/UX Design",
    issuer: "Microsoft",
    issuerIcon: "fab fa-microsoft",
    date: "2024",
    color: "text-purple-400",
    accentColor: "#c084fc",
    bg: "rgba(192, 132, 252, 0.1)",
    border: "rgba(192, 132, 252, 0.25)",
    badge: "Product & UI/UX",
    shareUrl: "https://coursera.org/share/1fcd2903ecb6b2040eea25e08165a1e6",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/PSEWVE6G37XO",
    skills: ["UI/UX Design", "Wireframing & Prototyping", "Human-Centered Design", "Design Systems & Thinking", "User Experience"]
  },
  {
    id: "402FN9N1EN8K",
    name: "Programmation Orientée Objet (en C++)",
    issuer: "EPFL",
    issuerIcon: "fas fa-code",
    date: "2024",
    color: "text-rose-400",
    accentColor: "#fb7185",
    bg: "rgba(251, 113, 133, 0.1)",
    border: "rgba(251, 113, 133, 0.25)",
    badge: "Systems & OOP",
    shareUrl: "https://coursera.org/share/99672f0899704076acecffcf0748f1f2",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/402FN9N1EN8K",
    skills: ["C++ & Modern OOP", "Memory Management & Pointers", "Class Hierarchies & Polymorphism", "Algorithms & Complexity"]
  },
  {
    id: "ZEC0HV4KGGCC",
    name: "Successful Negotiation Strategies",
    issuer: "Univ. of Michigan",
    issuerIcon: "fas fa-handshake",
    date: "2024",
    color: "text-teal-400",
    accentColor: "#2dd4bf",
    bg: "rgba(45, 212, 191, 0.1)",
    border: "rgba(45, 212, 191, 0.25)",
    badge: "Strategy & Leadership",
    shareUrl: "https://coursera.org/share/d8057cade3be0df82a2b00beea4c55aa",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/ZEC0HV4KGGCC",
    skills: ["Negotiation Strategy", "Contract Analysis", "Conflict Resolution", "Stakeholder Communication", "Decision Making"]
  }
];

// App State
let state = {
  projects: EMBEDDED_PROJECTS,
  certificates: EMBEDDED_CERTS,
  currentFilter: 'all',
  featuredIndex: 0,
  featuredTimer: null,
  activeModalProject: null,
  activeGalleryIndex: 0,
  activeModalCert: null
};

// Syntax Highlighting Helper
function highlightCode(code, lang) {
  if (!code) return '';
  let esc = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  const tokens = [];

  // Match comments first
  esc = esc.replace(/(#.*|\/\/.*)/g, (match) => {
    const placeholder = `___TOK_COM_${tokens.length}___`;
    tokens.push(`<span class="code-comment">${match}</span>`);
    return placeholder;
  });

  // Match strings
  esc = esc.replace(/("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/g, (match) => {
    const placeholder = `___TOK_STR_${tokens.length}___`;
    tokens.push(`<span class="code-string">${match}</span>`);
    return placeholder;
  });

  // Match keywords
  esc = esc.replace(/\b(class|def|return|async|await|import|export|from|const|let|var|function|with|as|Future|final|StateNotifier|void|public|private|new|try|catch|if|else)\b/g, '<span class="code-keyword">$1</span>');

  // Match function calls
  esc = esc.replace(/\b([a-zA-Z0-9_]+)(?=\s*\()/g, '<span class="code-func">$1</span>');

  // Restore tokens
  tokens.forEach((token, idx) => {
    esc = esc.replace(`___TOK_COM_${idx}___`, token).replace(`___TOK_STR_${idx}___`, token);
  });

  return esc;
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', async () => {
  initBackgroundCanvas();
  initTiltCards();
  initClock();
  initTypewriter();
  initToast();

  try {
    const projRes = await fetch('data/projects.json?t=' + Date.now(), { cache: 'no-store' });
    if (projRes.ok) state.projects = await projRes.json();
    const certRes = await fetch('data/certificates.json?t=' + Date.now(), { cache: 'no-store' });
    if (certRes.ok) state.certificates = await certRes.json();
  } catch (e) {
    // using embedded data
  }

  renderProjects();
  renderCertificates();
  renderSkills();
  initFeaturedCarousel();
  initModals();
});

// --- 1. Interactive Background Particle Canvas ---
function initBackgroundCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const count = Math.floor((width * height) / 16000);
  const mouse = { x: -1000, y: -1000, radius: 150 };

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.6 + 0.6,
      alpha: Math.random() * 0.5 + 0.2,
      color: Math.random() > 0.5 ? '#a855f7' : '#3b82f6'
    });
  }

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Mouse repulsion
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius) {
        const force = (1 - dist / mouse.radius) * 1.5;
        p.x -= (dx / dist) * force;
        p.y -= (dy / dist) * force;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();

      // Connect close particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const d2x = p.x - p2.x;
        const d2y = p.y - p2.y;
        const d2 = Math.sqrt(d2x * d2x + d2y * d2y);

        if (d2 < 100) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = '#a855f7';
          ctx.globalAlpha = (1 - d2 / 100) * 0.12;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(animate);
  }

  animate();
}

// --- 2. 3D Card Holographic Physics ---
function initTiltCards() {
  const tiltCards = document.querySelectorAll('.tilt-card');

  tiltCards.forEach((card) => {
    const inner = card.querySelector('.tilt-inner') || card;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;

      inner.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

      const glare = card.querySelector('.tilt-glare');
      if (glare) {
        glare.style.background = `radial-gradient(circle at ${(x / rect.width) * 100}% ${(y / rect.height) * 100}%, rgba(255,255,255,0.2), transparent 60%)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      inner.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}

// --- 3. Hero Subtitle Typewriter ---
function initTypewriter() {
  const el = document.getElementById('role-rotator');
  if (!el) return;

  const roles = [
    'Full Stack Engineer',
    'AI Multi-Agent & RAG Architect',
    'Flutter & Mobile Developer',
    'UI/UX Creative Engineer',
    'Big Data & Lakehouse Builder'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let delay = 100;

  function type() {
    const current = roles[roleIdx];

    if (isDeleting) {
      el.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      delay = 50;
    } else {
      el.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      delay = 90;
    }

    if (!isDeleting && charIdx === current.length) {
      isDeleting = true;
      delay = 2000;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

// --- 4. Casablanca Live Clock ---
function initClock() {
  const clockEl = document.getElementById('casablanca-clock');
  if (!clockEl) return;

  function update() {
    const now = new Date();
    const options = { timeZone: 'Africa/Casablanca', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    clockEl.textContent = new Intl.DateTimeFormat('en-GB', options).format(now) + ' GMT+1';
  }

  update();
  setInterval(update, 1000);
}

// --- 5. Featured Project Carousel ---
function initFeaturedCarousel() {
  const banner = document.getElementById('featured-banner');
  if (!banner) return;

  const featured = state.projects.filter(p => p.featured);
  if (featured.length === 0) return;

  function renderBanner(index) {
    const p = featured[index];
    state.featuredIndex = index;

    const visualHtml = p.hasCodeSnippet
      ? `
        <div class="code-terminal-preview absolute inset-0 !h-full bg-[#060814]/90 z-0">
          <div class="terminal-header">
            <div class="terminal-dots">
              <span class="terminal-dot terminal-dot-red"></span>
              <span class="terminal-dot terminal-dot-yellow"></span>
              <span class="terminal-dot terminal-dot-green"></span>
            </div>
            <span class="text-xs text-gray-500 font-mono">${p.codeLanguage.toUpperCase()} Architecture</span>
          </div>
          <div class="terminal-body !p-8 text-sm opacity-60">
            <pre><code>${highlightCode(p.codeSnippet, p.codeLanguage)}</code></pre>
          </div>
        </div>
      `
      : `
        <img src="${p.img}" alt="${p.title}" class="absolute inset-0 w-full h-full object-cover opacity-45 transition-transform duration-700 hover:scale-105" onerror="this.src='kaelar_top.png'"/>
      `;

    banner.innerHTML = `
      <div class="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-transparent z-10"></div>
      ${visualHtml}
      <div class="relative z-20 h-full flex flex-col justify-between p-6 md:p-10">
        <div>
          <div class="flex items-center gap-2 mb-3">
            <span class="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
            <span class="text-primary text-xs font-mono font-bold uppercase tracking-widest">Featured Innovation</span>
            <span class="ml-auto text-xs font-mono text-gray-400 bg-white/10 px-2.5 py-0.5 rounded-full">${index + 1} / ${featured.length}</span>
          </div>
          <h3 class="text-2xl md:text-4xl font-bold mb-3 text-white">${p.title}</h3>
          <p class="text-gray-300 text-sm md:text-base max-w-xl mb-5 line-clamp-2">${p.desc}</p>
          <div class="flex flex-wrap gap-2 mb-6">
            ${p.tech.slice(0, 4).map(t => `<span class="px-3 py-1 bg-white/10 border border-white/15 rounded-full text-xs text-gray-200">${t}</span>`).join('')}
          </div>
        </div>
        <div class="flex items-center justify-between mt-auto">
          <button onclick="openProjectModal('${p.id}')" class="btn-primary text-sm py-2.5 px-5">
            <span>Explore Deep Dive</span>
            <i class="fas fa-arrow-right text-xs"></i>
          </button>
          <div class="flex gap-1.5">
            ${featured.map((_, i) => `
              <button onclick="event.stopPropagation(); changeFeaturedSlide(${i})" class="h-2 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-primary' : 'w-2.5 bg-white/20 hover:bg-white/40'}"></button>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  renderBanner(0);

  clearInterval(state.featuredTimer);
  state.featuredTimer = setInterval(() => {
    const nextIdx = (state.featuredIndex + 1) % featured.length;
    renderBanner(nextIdx);
  }, 6000);
}

window.changeFeaturedSlide = function(idx) {
  const featured = state.projects.filter(p => p.featured);
  if (idx >= 0 && idx < featured.length) {
    const banner = document.getElementById('featured-banner');
    if (!banner) return;
    initFeaturedCarousel();
  }
};

// --- 6. Render Projects Grid ---
function updateFilterTabCounts() {
  const counts = { all: state.projects.length, ai: 0, mobile: 0, web: 0, cloud: 0 };
  state.projects.forEach(p => {
    if (counts[p.filter] !== undefined) counts[p.filter]++;
  });

  const elAll = document.getElementById('tab-all');
  if (elAll) elAll.textContent = `All (${counts.all})`;
  const elAi = document.getElementById('tab-ai');
  if (elAi) elAi.textContent = `AI & Agents (${counts.ai})`;
  const elMobile = document.getElementById('tab-mobile');
  if (elMobile) elMobile.textContent = `Mobile & IoT (${counts.mobile})`;
  const elWeb = document.getElementById('tab-web');
  if (elWeb) elWeb.textContent = `Full-Stack & Web (${counts.web})`;
  const elCloud = document.getElementById('tab-cloud');
  if (elCloud) elCloud.textContent = `Cloud & Systems (${counts.cloud})`;
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  updateFilterTabCounts();

  const filtered = state.currentFilter === 'all'
    ? state.projects
    : state.projects.filter(p => p.filter === state.currentFilter);

  grid.innerHTML = filtered.map(p => {
    const visualHeader = p.hasCodeSnippet
      ? `
        <div class="code-terminal-preview">
          <div class="terminal-header">
            <div class="terminal-dots">
              <span class="terminal-dot terminal-dot-red"></span>
              <span class="terminal-dot terminal-dot-yellow"></span>
              <span class="terminal-dot terminal-dot-green"></span>
            </div>
            <span class="text-[11px] text-gray-500 font-mono">${p.codeLanguage.toUpperCase()}</span>
          </div>
          <div class="terminal-body">
            <pre><code>${highlightCode(p.codeSnippet, p.codeLanguage)}</code></pre>
          </div>
        </div>
      `
      : `
        <div class="project-card-image">
          <span class="project-badge">${p.category}</span>
          <img src="${p.img}" alt="${p.title}" loading="lazy" onerror="this.src='kaelar_top.png'"/>
        </div>
      `;

    return `
      <div class="bento-card project-card group" onclick="openProjectModal('${p.id}')">
        ${visualHeader}
        <div class="p-6 flex flex-col flex-grow justify-between">
          <div>
            <h4 class="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">${p.title}</h4>
            <p class="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">${p.desc}</p>
          </div>
          <div>
            <div class="flex flex-wrap gap-1.5 mb-5">
              ${p.tech.slice(0, 3).map(t => `<span class="px-2.5 py-0.5 bg-white/5 border border-white/10 rounded-md text-xs text-gray-300 font-mono">${t}</span>`).join('')}
              ${p.tech.length > 3 ? `<span class="px-2 py-0.5 bg-white/5 text-gray-400 text-xs rounded-md font-mono">+${p.tech.length - 3}</span>` : ''}
            </div>
            <div class="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-semibold text-gray-400 group-hover:text-white transition-colors">
              <span class="flex items-center gap-1.5 text-primary">
                <i class="fas fa-eye"></i> View Deep Dive
              </span>
              <span class="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <i class="fas fa-chevron-right text-[10px]"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

window.filterProjects = function(category, btn) {
  state.currentFilter = category;
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderProjects();
};

// --- 7. Render 11 Verified Certificates ---
function renderCertificates() {
  const container = document.getElementById('certs-container');
  if (!container) return;

  container.innerHTML = state.certificates.map(cert => `
    <div class="cert-card bg-white/[0.02] hover:bg-white/[0.06] cursor-pointer" onclick="openCertModal('${cert.id}')">
      <div class="cert-icon-box ${cert.color}">
        <i class="${cert.issuerIcon}"></i>
      </div>
      <div class="flex-grow min-w-0">
        <div class="flex items-center justify-between gap-2 mb-1">
          <span class="text-[11px] font-mono font-bold uppercase tracking-wider ${cert.color}">${cert.issuer} • ${cert.date}</span>
          <span class="text-[10px] bg-white/10 px-2 py-0.5 rounded-full text-gray-300 flex items-center gap-1">
            <i class="fas fa-check-circle text-emerald-400 text-[9px]"></i> Verified
          </span>
        </div>
        <h4 class="text-sm font-bold text-white mb-2 truncate">${cert.name}</h4>
        <div class="flex flex-wrap gap-1">
          ${cert.skills.slice(0, 2).map(s => `<span class="px-2 py-0.5 bg-white/5 rounded text-[11px] text-gray-400">${s}</span>`).join('')}
          ${cert.skills.length > 2 ? `<span class="px-1.5 py-0.5 text-[10px] text-gray-500 font-mono">+${cert.skills.length - 2}</span>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

// --- 8. Render Skills Matrix ---
function renderSkills() {
  const skillsGrid = document.getElementById('skills-matrix');
  if (!skillsGrid) return;

  const skillGroups = [
    {
      category: "Frontend & UI/UX",
      icon: "fas fa-palette",
      color: "text-purple-400",
      skills: ["React.js", "React Native", "TypeScript", "JavaScript (ES6+)", "UI/UX Design", "Tailwind CSS", "Framer Motion", "Jest Testing"]
    },
    {
      category: "AI & Multi-Agent Systems",
      icon: "fas fa-brain",
      color: "text-cyan-400",
      skills: ["Autonomous Multi-Agents", "RAG Systems", "LangChain", "Python", "Prompt Engineering", "FastAPI", "Vector Search", "LLM Tool Calling"]
    },
    {
      category: "Mobile & Industrial IoT",
      icon: "fas fa-mobile-alt",
      color: "text-blue-400",
      skills: ["Flutter 3.19+", "Riverpod", "WebRTC Video/Audio", "Agora RTC", "Hive Local Storage", "Expo", "QR Scanning Engine", "Cross-Platform UI"]
    },
    {
      category: "Backend & Systems Concurrency",
      icon: "fas fa-server",
      color: "text-emerald-400",
      skills: ["Node.js & Express", "Python Backend", "C++ (OOP & Memory)", "Java & Maven", ".NET C#", "TCP Sockets", "RESTful APIs", "Docker Containers"]
    },
    {
      category: "Big Data, Lakehouse & DevOps",
      icon: "fas fa-database",
      color: "text-indigo-400",
      skills: ["Apache Airflow", "Medallion Lakehouse", "Data Scraping", "GitHub Actions CI/CD", "Docker Compose", "ETL/ELT Pipelines", "Kafka", "Data Quality"]
    },
    {
      category: "Strategy, Agile & Architecture",
      icon: "fas fa-chess-knight",
      color: "text-amber-400",
      skills: ["Agile & Scrum Planning", "Software Architecture", "UML & Systems Design", "Sprint Retrospectives", "Contract Negotiation", "Stakeholder Leadership"]
    }
  ];

  skillsGrid.innerHTML = skillGroups.map(group => `
    <div class="bento-card">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center ${group.color} text-lg">
          <i class="${group.icon}"></i>
        </div>
        <h4 class="font-bold text-white text-base">${group.category}</h4>
      </div>
      <div class="flex flex-wrap gap-2">
        ${group.skills.map(s => `<span class="skill-chip">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// --- 9. Modal Management ---
function initModals() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeCertModal();
    }
  });

  const projModal = document.getElementById('project-modal');
  if (projModal) {
    projModal.addEventListener('click', (e) => {
      if (e.target === projModal) closeProjectModal();
    });
  }

  const certModal = document.getElementById('cert-modal');
  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) closeCertModal();
    });
  }
}

window.openProjectModal = function(id) {
  const p = state.projects.find(x => x.id === id);
  if (!p) return;

  state.activeModalProject = p;
  state.activeGalleryIndex = 0;

  const modal = document.getElementById('project-modal');
  const body = document.getElementById('project-modal-body');

  const leftPanelHtml = p.hasCodeSnippet
    ? `
      <div class="w-full lg:w-1/2 bg-[#060814] relative min-h-[360px] lg:min-h-full flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 font-mono">
        <div class="p-4 bg-white/5 border-b border-white/10 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="terminal-dot terminal-dot-red"></span>
            <span class="terminal-dot terminal-dot-yellow"></span>
            <span class="terminal-dot terminal-dot-green"></span>
            <span class="text-xs text-gray-400 ml-2">${p.codeLanguage.toUpperCase()} Code Snippet</span>
          </div>
          <button onclick="copyCodeSnippet('${p.id}')" class="text-xs text-gray-400 hover:text-white px-2.5 py-1 rounded bg-white/5 border border-white/10 flex items-center gap-1.5 transition-colors">
            <i class="fas fa-copy"></i> Copy Code
          </button>
        </div>
        <div class="p-6 text-sm text-gray-300 overflow-x-auto leading-relaxed flex-grow">
          <pre><code>${highlightCode(p.codeSnippet, p.codeLanguage)}</code></pre>
        </div>
      </div>
    `
    : `
      <div class="w-full lg:w-1/2 bg-black/40 relative min-h-[320px] lg:min-h-full flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
        <div class="relative flex-grow flex items-center justify-center p-4">
          <img id="modal-active-img" src="${p.gallery[0] || p.img}" alt="${p.title}" class="max-h-[420px] w-full object-contain rounded-xl shadow-2xl transition-all duration-300" onerror="this.src='kaelar_top.png'"/>
        </div>
        
        <div class="p-4 bg-dark/60 backdrop-blur border-t border-white/10 flex items-center justify-between gap-2">
          <button onclick="prevGalleryImage()" class="w-9 h-9 rounded-full bg-white/10 hover:bg-primary text-white flex items-center justify-center transition-colors">
            <i class="fas fa-chevron-left text-xs"></i>
          </button>
          
          <div class="flex gap-2 overflow-x-auto py-1 max-w-[280px]">
            ${p.gallery.map((img, i) => `
              <button onclick="setGalleryImage(${i})" class="w-12 h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${i === 0 ? 'border-primary scale-105' : 'border-white/20 opacity-60 hover:opacity-100'}">
                <img src="${img}" class="w-full h-full object-cover" onerror="this.src='kaelar_top.png'"/>
              </button>
            `).join('')}
          </div>

          <button onclick="nextGalleryImage()" class="w-9 h-9 rounded-full bg-white/10 hover:bg-primary text-white flex items-center justify-center transition-colors">
            <i class="fas fa-chevron-right text-xs"></i>
          </button>
        </div>
      </div>
    `;

  body.innerHTML = `
    <div class="flex flex-col lg:flex-row min-h-[500px]">
      ${leftPanelHtml}

      <div class="w-full lg:w-1/2 p-6 md:p-10 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2 mb-3">
            <span class="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-mono uppercase tracking-wider font-bold">
              ${p.category}
            </span>
          </div>

          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">${p.title}</h2>
          
          <p class="text-gray-300 text-base leading-relaxed mb-6">${p.desc}</p>

          <div class="mb-6">
            <h4 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Technology Stack</h4>
            <div class="flex flex-wrap gap-2">
              ${p.tech.map(t => `<span class="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-gray-200">${t}</span>`).join('')}
            </div>
          </div>

          <div class="mb-8">
            <h4 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Key Features & Architecture</h4>
            <ul class="space-y-2.5">
              ${p.features.map(f => `
                <li class="flex items-start gap-3 text-sm text-gray-300">
                  <i class="fas fa-check-circle text-primary mt-1 text-xs"></i>
                  <span>${f}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>

        <div class="pt-6 border-t border-white/10 flex flex-wrap gap-3">
          ${p.link && p.link !== '#' && !p.link.includes('github.com') ? `
            <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="btn-primary flex-1 text-center justify-center py-3.5">
              <i class="fas fa-external-link-alt text-xs"></i>
              <span>Live Demo</span>
            </a>
          ` : ''}
          ${p.github ? `
            <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn-secondary flex-1 text-center justify-center py-3.5">
              <i class="fab fa-github text-base"></i>
              <span>GitHub Repository</span>
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeProjectModal = function() {
  const modal = document.getElementById('project-modal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
};

window.setGalleryImage = function(index) {
  if (!state.activeModalProject) return;
  state.activeGalleryIndex = index;
  const imgEl = document.getElementById('modal-active-img');
  if (imgEl) imgEl.src = state.activeModalProject.gallery[index] || state.activeModalProject.img;

  const thumbs = document.querySelectorAll('#project-modal-body button img');
  thumbs.forEach((t, i) => {
    const parent = t.parentElement;
    if (i === index) {
      parent.className = 'w-12 h-12 rounded-lg overflow-hidden border-2 border-primary scale-105 transition-all flex-shrink-0';
    } else {
      parent.className = 'w-12 h-12 rounded-lg overflow-hidden border-2 border-white/20 opacity-60 hover:opacity-100 transition-all flex-shrink-0';
    }
  });
};

window.prevGalleryImage = function() {
  if (!state.activeModalProject || !state.activeModalProject.gallery.length) return;
  const total = state.activeModalProject.gallery.length;
  const prev = (state.activeGalleryIndex - 1 + total) % total;
  setGalleryImage(prev);
};

window.nextGalleryImage = function() {
  if (!state.activeModalProject || !state.activeModalProject.gallery.length) return;
  const total = state.activeModalProject.gallery.length;
  const next = (state.activeGalleryIndex + 1) % total;
  setGalleryImage(next);
};

window.copyCodeSnippet = function(id) {
  const p = state.projects.find(x => x.id === id);
  if (p && p.codeSnippet) {
    navigator.clipboard.writeText(p.codeSnippet).then(() => {
      showToast(`Copied ${p.codeLanguage.toUpperCase()} snippet to clipboard!`, 'fas fa-check-circle');
    });
  }
};

// Certificate Modal
window.openCertModal = function(id) {
  const cert = state.certificates.find(c => c.id === id);
  if (!cert) return;

  const modal = document.getElementById('cert-modal');
  const body = document.getElementById('cert-modal-body');

  body.innerHTML = `
    <div class="p-8 md:p-12 text-center max-w-xl mx-auto">
      <div class="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center text-4xl ${cert.color}" style="background: ${cert.bg}; border: 1px solid ${cert.border};">
        <i class="${cert.issuerIcon}"></i>
      </div>

      <span class="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${cert.color} bg-white/5 border border-white/10 mb-3">
        ${cert.issuer} • ${cert.badge}
      </span>

      <h3 class="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">${cert.name}</h3>

      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 font-mono mb-6">
        <i class="fas fa-fingerprint text-primary"></i>
        <span>Credential ID: ${cert.id}</span>
      </div>

      <div class="text-left bg-white/[0.02] border border-white/10 rounded-2xl p-6 mb-8">
        <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Verified Skill Competencies</h4>
        <div class="flex flex-wrap gap-2">
          ${cert.skills.map(s => `<span class="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-200"><i class="fas fa-check text-emerald-400 mr-1.5 text-[10px]"></i>${s}</span>`).join('')}
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary py-3.5 px-6">
          <i class="fas fa-shield-alt"></i>
          <span>Verify Official Credential</span>
        </a>
        <a href="${cert.shareUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary py-3.5 px-6">
          <i class="fas fa-share-alt"></i>
          <span>Coursera Share View</span>
        </a>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeCertModal = function() {
  const modal = document.getElementById('cert-modal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
};

// --- 10. Toast Notification System ---
let toastContainer;
function initToast() {
  toastContainer = document.createElement('div');
  toastContainer.className = 'toast-container';
  document.body.appendChild(toastContainer);
}

window.showToast = function(message, icon = 'fas fa-check-circle') {
  if (!toastContainer) initToast();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="${icon} text-primary text-base"></i><span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
};

window.copyEmail = function() {
  const email = 'anasmouqine@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    showToast(`Copied email (${email}) to clipboard!`, 'fas fa-copy');
  }).catch(() => {
    showToast(`Email: ${email}`, 'fas fa-envelope');
  });
};
