// Skills Data
export const backendSkills = [
  "Python",
  "REST APIs",
  "Web Scraping",
  "Selenium",
  "Database Management",
  "SQL",
  "Authentication",
  "File I/O",
];

export const frontendSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Responsive Design",
];

export const technologies = [
  { name: "Python", color: "from-yellow-500 to-yellow-600" },
  { name: "JavaScript", color: "from-yellow-400 to-orange-500" },
  { name: "TypeScript", color: "from-blue-500 to-blue-600" },
  { name: "React", color: "from-cyan-400 to-cyan-500" },
  { name: "Next.js", color: "from-gray-600 to-gray-700" },
  { name: "Tailwind CSS", color: "from-teal-400 to-cyan-500" },
  { name: "Node.js", color: "from-green-500 to-green-600" },
  { name: "Git", color: "from-orange-500 to-red-500" },
  { name: "Selenium", color: "from-green-400 to-green-500" },
  { name: "REST APIs", color: "from-indigo-500 to-purple-500" },
  { name: "SQL", color: "from-blue-400 to-blue-500" },
  { name: "VS Code", color: "from-blue-500 to-blue-600" },
  { name: "GitHub", color: "from-gray-500 to-gray-600" },
  { name: "OOP", color: "from-pink-500 to-rose-500" },
] as const;

// Education Data
export const educationData = [
  {
    institution: "John Wood Community College",
    location: "Quincy, Illinois",
    degree: "Associate in Arts, Computer Science",
    dateLabel: "Graduated May 2024",
    statusLabel: "Completed",
    statusColor: "bg-blue-500/20 text-blue-300",
    courseworkLabel: "Key Foundations",
    coursework: [
      "Programming Fundamentals",
      "Computer Architecture",
      "Discrete Mathematics",
      "Problem Solving",
      "Technical Writing",
    ],
    description:
      "Built a strong foundation in computer science fundamentals, programming concepts, algorithms, and computational theory that prepared me for advanced studies.",
    accentColor: "from-cyan-500 to-blue-600",
    borderColor: "border-cyan-500/30",
    shadowColor: "shadow-cyan-500/10 hover:shadow-cyan-500/20",
    dotColor: "bg-cyan-500",
  },
  {
    institution: "Culver-Stockton College",
    location: "Canton, Missouri",
    degree: "B.S. Computer and Data Science",
    dateLabel: "Expected May 2026",
    statusLabel: "In Progress",
    statusColor: "bg-green-500/20 text-green-300",
    courseworkLabel: "Relevant Coursework",
    coursework: [
      "Data Structures",
      "Algorithms",
      "Machine Learning",
      "Data Analysis",
      "Software Engineering",
      "Database Systems",
    ],
    description:
      "Deepening expertise in software development, algorithms, data analysis, and machine learning through hands-on projects and real-world applications.",
    accentColor: "from-purple-500 to-pink-600",
    borderColor: "border-purple-500/30",
    shadowColor: "shadow-purple-500/10 hover:shadow-purple-500/20",
    dotColor: "bg-purple-500",
  },
] as const;

// Stats Data
export const stats = [
  {
    value: "4+",
    label: "Years of Study",
    gradient: "from-cyan-400 to-purple-400",
  },
  {
    value: "10+",
    label: "Projects Completed",
    gradient: "from-purple-400 to-pink-400",
  },
] as const;

// Projects Data
export const projectsData = [
  {
    title: "Job Market Analytics Dashboard",
    subtitle: "Full-Stack Analytics Platform",
    image: "/images/job_postings_image.jpg",
    imageAlt: "Job Market Analytics Dashboard",
    tags: [
      { name: "Next.js", color: "bg-gray-600/20 text-gray-300" },
      { name: "TypeScript", color: "bg-blue-500/20 text-blue-300" },
      { name: "Neon Postgres", color: "bg-sky-500/20 text-sky-300" },
      { name: "Drizzle ORM", color: "bg-emerald-500/20 text-emerald-300" },
      { name: "FastAPI", color: "bg-green-500/20 text-green-300" },
      { name: "LightGBM", color: "bg-pink-500/20 text-pink-300" },
    ],
    features: [
      "Architected a three-tier production platform — Next.js 16 App Router on Vercel, Neon serverless PostgreSQL via Drizzle ORM, and a standalone FastAPI ML microservice on Fly.io — surfacing role, salary, skill, and geographic insights across 120,000+ job postings.",
      "Designed a 13-table relational schema with composite deduplication indexes (external_id, source, country), a role-alias normalization table, and UPSERT-safe batch ingestion via the Adzuna API with NLP skill extraction and DB-persisted quota tracking via GitHub Actions.",
      "Engineered a three-model LightGBM ensemble (median, P10, P90) with TargetEncoder preprocessing, role-specific skill premiums, company-scale adjustments, and per-prediction feature importance — proxied through Next.js with shared-secret auth, dual-layer rate limiting (token bucket + sliding window), and SSRF hardening.",
      "Built multi-dimensional analytics with anchored 7/30/90-day trend windows using SQL window functions, CTEs, and percentile_cont aggregations to track skill demand growth, salary benchmarks, and breakout role detection across locations.",
    ],
    githubUrl: "https://github.com/KalebDieterle/job-postings-analysis-app",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-teal-600",
    iconType: "database" as const,
  },
  {
    title: "PRL Automation IPI",
    subtitle: "Desktop Workflow Automation",
    image: "/images/swe_development_image.avif",
    imageAlt: "PRL Automation IPI Desktop App",
    tags: [
      { name: "Python", color: "bg-yellow-500/20 text-yellow-300" },
      { name: "Tkinter", color: "bg-indigo-500/20 text-indigo-300" },
      { name: "Selenium", color: "bg-green-500/20 text-green-300" },
      { name: "xlwings/openpyxl", color: "bg-orange-500/20 text-orange-300" },
      { name: "PyInstaller", color: "bg-purple-500/20 text-purple-300" },
    ],
    features: [
      "Architected a 6-service Windows desktop automation tool (Redtail CRM, Envestnet, MoneyGuidePro, Excel, PowerPoint, folder management) orchestrated by a Tkinter GUI across an 8-phase pipeline — cutting advisor meeting-prep time by ~75%.",
      "Engineered a two-step authenticated REST client for the Redtail CRM API (Basic Auth → UserKey token) using stdlib urllib; replaced brittle Selenium scraping for CRM data with typed query parameters, ISO 8601 date formatting, and paginated contact traversal.",
      "Built a resilient multi-portal Selenium pipeline with sequential CSS/XPath fallback selectors, JavaScript idle polling, adaptive file-size stabilization, and a 3-tier PDF export chain (PowerShell COM → PNG bitmap assembly via reportlab → python-pptx fallback).",
      "Implemented a multi-pass fuzzy folder-matching algorithm generating 5+ name candidates per client (nickname extraction, generational suffix stripping, spouse ordering) and packaged a ~75 MB portable .exe via PyInstaller with 89 hidden imports and advisor-to-office routing.",
    ],
    githubUrl: "https://github.com/KalebDieterle/PRL-Automation-IPI",
    gradientFrom: "from-amber-500",
    gradientTo: "to-orange-600",
    iconType: "code" as const,
  },
  {
    title: "PC E-Commerce Website Logic",
    subtitle: "Backend Development Project",
    image: "/images/swe_development_image.avif",
    imageAlt: "Software Development Image",
    tags: [
      { name: "Python", color: "bg-yellow-500/20 text-yellow-300" },
      { name: "Selenium", color: "bg-green-500/20 text-green-300" },
      { name: "OOP", color: "bg-purple-500/20 text-purple-300" },
    ],
    features: [
      "Core e-commerce functionality for PC parts shopping",
      "Web scraper with Selenium for dynamic data gathering",
      "User authentication, wishlists, carts & search filters",
    ],
    githubUrl:
      "https://github.com/KalebDieterle/Scraping-PC-E-Commerce-Website-Logic",
    gradientFrom: "from-cyan-500",
    gradientTo: "to-blue-600",
    iconType: "cart" as const,
  },
  {
    title: "Personal Portfolio Website",
    subtitle: "Full-Stack Web Development",
    image: "/images/portfolio_website_image.jpg",
    imageAlt: "Portfolio Website Development",
    tags: [
      { name: "Next.js", color: "bg-gray-600/20 text-gray-300" },
      { name: "TypeScript", color: "bg-blue-500/20 text-blue-300" },
      { name: "Tailwind CSS", color: "bg-teal-500/20 text-teal-300" },
    ],
    features: [
      "Showcases projects, skills & education",
      "Responsive design with Tailwind CSS",
      "Dynamic typewriter effect for intro",
    ],
    githubUrl: "https://github.com/KalebDieterle/portfolio-website",
    gradientFrom: "from-purple-500",
    gradientTo: "to-pink-600",
    iconType: "code" as const,
  },
];

// Contact Data
export const contactLinks = [
  {
    href: "mailto:kalebdieterle@gmail.com",
    label: "kalebdieterle@gmail.com",
    type: "email" as const,
    external: false,
  },
  {
    href: "https://github.com/KalebDieterle",
    label: "GitHub",
    type: "github" as const,
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/kaleb-dieterle-010341268/",
    label: "LinkedIn",
    type: "linkedin" as const,
    external: true,
  },
] as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
] as const;

// Work Experience Data
export const workExperienceData = [
  {
    company: "IPI Wealth Management",
    role: "Software Engineering Contractor",
    dateRange: "September 2025 – Present",
    location: "Quincy, IL",
    isCurrent: true,
    bullets: [
      "Engage as a contracted developer to design and implement custom web applications supporting personalized wealth management strategies.",
      "Collaborate with financial advisors to gather requirements, translate business needs into technical specifications, and deliver aligned solutions.",
      "Maintain and enhance production systems ensuring data accuracy, security, and compliance with financial industry standards.",
      "Provide ongoing technical support and feature development based on evolving business requirements and user feedback.",
    ],
    tags: [
      { name: "Python", color: "bg-yellow-500/20 text-yellow-300" },
      { name: "Next.js", color: "bg-gray-600/20 text-gray-300" },
      { name: "TypeScript", color: "bg-blue-500/20 text-blue-300" },
      { name: "REST APIs", color: "bg-indigo-500/20 text-indigo-300" },
    ],
    accentColor: "from-cyan-500 to-emerald-600",
    borderAccent: "border-l-cyan-500",
    shadowColor: "shadow-cyan-500/10 hover:shadow-cyan-500/20",
    dotColor: "bg-cyan-500",
    glowColor: "shadow-cyan-500/40",
    iconBg: "from-cyan-500 to-emerald-600",
  },
  {
    company: "FedEx Freight",
    role: "Team Lead",
    dateRange: "September 2022 – Present",
    location: "Quincy, IL",
    isCurrent: true,
    bullets: [
      "Led shift operations and dynamic staff reallocation across dock crews to sustain throughput efficiency during peak and variable freight volumes.",
      "Onboarded and mentored new hires in dock procedures, forklift operation, and hazmat handling while enforcing regulatory compliance and safety protocols across all shifts.",
      "Standardized documentation and inventory procedures using internal logistics software, improving shipment tracking accuracy and trailer closeout efficiency.",
    ],
    tags: [],
    accentColor: "from-amber-500 to-orange-600",
    borderAccent: "border-l-amber-500",
    shadowColor: "shadow-amber-500/10 hover:shadow-amber-500/20",
    dotColor: "bg-amber-500",
    glowColor: "shadow-amber-500/40",
    iconBg: "from-amber-500 to-orange-600",
  },
] as const;
