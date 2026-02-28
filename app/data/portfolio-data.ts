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
    ],
    features: [
      "Built with Next.js App Router server components and API routes for role, salary, and trend analytics.",
      "Backed by Neon Postgres + Drizzle migrations with normalized company data and deduplicated job ingestion.",
      "Integrated a FastAPI ML service (LightGBM/scikit-learn) for salary prediction and skill-gap intelligence.",
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
    ],
    features: [
      "Windows desktop app automating client meeting prep across Redtail CRM, Envestnet, and MoneyGuidePro.",
      "Generates Excel/PowerPoint outputs via xlwings, openpyxl, python-pptx, and PyInstaller packaging.",
      "Cut meeting-prep time by about 75% by automating folder setup, data capture, and document generation.",
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
  { href: "#education", label: "Education" },
] as const;
