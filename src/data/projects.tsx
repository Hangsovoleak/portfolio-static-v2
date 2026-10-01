export interface Project {
  id: number;
  step?: string;
  category: string;
  subCategory?: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  bullets: string[];
  metrics?: { label: string; value: string };
  duration?: string;
  tags: string[];
  link: string;
  demoLink?: string;
  figmaLink?: string;
  image?: string;
  mockupType?: "auth" | "weather" | "dijkstra" | "countdown";
  featured?: boolean;
  institution?: string;
  architecture?: string[];
  role?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    step: "01",
    category: "Full Stack",
    subCategory: "Client Work",
    title: "E-Robot Cambodia Website V2",
    tagline: "Official platform for Cambodian youth robotics & STEM community",
    description: "Designed responsive UI in Figma, held multiple client review rounds, and engineered the complete static platform using React.js and Tailwind CSS.",
    longDescription: "Collaborated directly with E-Robot Cambodia leadership to modernize their public portal. Created Figma design systems, implemented accessible components in React, ensured responsive behavior across mobile and desktop devices, and set up Git workflow for seamless deployment.",
    duration: "March – June 2026",
    role: "Frontend Engineer & UI Designer",
    institution: "E-Robot Cambodia Organization",
    image: "/assets/erobot_cambodia.png",
    featured: true,
    bullets: [
      "Engineered responsive components using React.js, Tailwind CSS, and modular layout principles.",
      "Designed high-fidelity mockups in Figma, leading design critiques with organizational stakeholders.",
      "Delivered production-ready static site with clean version control and structured component architecture."
    ],
    architecture: ["React.js", "Tailwind CSS", "Figma Design System", "Git Collaboration"],
    metrics: { label: "Client Handover", value: "Production Ready" },
    tags: ["React.js", "Tailwind CSS", "Figma", "Git", "Client Project"],
    link: "https://github.com/Hangsovoleak/e-robot-cambodia-v2.git",
    figmaLink: "https://www.figma.com/design/eYExtVG9Swtr3so26n6bDK/E-Robot?node-id=0-1&t=RP0uCX0TDvgBTzZ8-1"
  },
  {
    id: 2,
    step: "02",
    category: "Full Stack",
    subCategory: "REST API & Real-Time Data",
    title: "Weather Global City of Cambodia",
    tagline: "Dynamic weather surveillance consuming OpenWeatherMap REST API",
    description: "Django-based weather intelligence portal fetching real-time meteorological metrics, forecasts, and atmospheric indicators for Cambodian provinces and global metropolitan centers.",
    longDescription: "Engineered a full-stack weather application integrating external REST APIs with Python/Django backend. Implemented server-side caching, dynamic city lookups across Phnom Penh, Siem Reap, and international capitals, and deployed directly to Vercel.",
    duration: "2-3 weeks",
    role: "Full-Stack Developer",
    institution: "Personal Engineering Project",
    mockupType: "weather",
    featured: true,
    bullets: [
      "Integrated OpenWeatherMap REST API via Python Django backend with request formatting and error handling.",
      "Engineered dynamic UI displaying temperature, humidity, wind velocity, and condition forecasts.",
      "Deployed to Vercel with automated build configurations and environment variable management."
    ],
    architecture: ["Python", "Django", "OpenWeatherMap API", "REST Architecture", "Vercel"],
    metrics: { label: "Deployment", value: "Live on Vercel" },
    tags: ["Django", "Python", "REST API", "OpenWeatherMap", "Vercel"],
    link: "https://github.com/Hangsovoleak/Weather-Global-City-Web.git",
    demoLink: "https://weather-global-city.vercel.app/"
  },
  {
    id: 3,
    step: "03",
    category: "Algorithms & Systems",
    subCategory: "Graph Theory & DSA",
    title: "Angkor Heritage Navigation System",
    tagline: "Shortest route calculation between Angkor temples using Dijkstra's Algorithm",
    description: "Algorithmic navigation engine calculating optimal tour routes between Angkor archaeological monuments using graph theory, adjacency matrices, stacks, queues, and Dijkstra's algorithm.",
    longDescription: "Developed as an advanced Data Structures and Algorithms capstone. Modeled the Angkor temple complex (Angkor Wat, Bayon, Ta Prohm, Banteay Srei) as a weighted graph, implementing Dijkstra's algorithm to compute shortest paths with sub-millisecond execution times.",
    duration: "3 weeks",
    role: "Systems & Algorithm Developer",
    institution: "Royal University of Phnom Penh · Computer Science",
    mockupType: "dijkstra",
    featured: true,
    bullets: [
      "Modeled temple complexes as a weighted graph structure using custom node and edge adjacency abstractions.",
      "Implemented Dijkstra's algorithm with priority queues for optimal shortest-path discovery.",
      "Structured navigation state management using Stack and Queue data structures in Python."
    ],
    architecture: ["Python", "Graph Theory", "Dijkstra Algorithm", "Stack & Queue", "DSA"],
    metrics: { label: "Algorithm Efficiency", value: "O(E log V)" },
    tags: ["Python", "Data Structures", "Algorithms", "Graph Theory", "Dijkstra"],
    link: "https://github.com/Hangsovoleak/angkor-heritage-site-navigation-system.git"
  },
  {
    id: 4,
    step: "04",
    category: "Backend & APIs",
    subCategory: "Security & Authentication",
    title: "Secure Authentication & SMTP Dispatch",
    tagline: "Django security workflow with automated Gmail SMTP transactional email",
    description: "Robust authentication system featuring user registration, cryptographic password hashing, role-based session management, and automated transactional email dispatch via Gmail SMTP.",
    longDescription: "Engineered secure backend authentication pipelines using Django's built-in cryptographic security layer. Configured automated SMTP notifications with Gmail App Passwords, Crispy Forms validation, and protected route decorators.",
    duration: "1 week",
    role: "Backend Developer",
    institution: "Royal University of Phnom Penh · Computer Science",
    mockupType: "auth",
    featured: false,
    bullets: [
      "Constructed secure registration, session login, logout, and protected user profiles in Django.",
      "Integrated Gmail SMTP with secure app passwords for automated welcome and verification emails.",
      "Implemented server-side form validation and CSRF protection with Crispy Forms templates."
    ],
    architecture: ["Python", "Django", "SQLite", "Gmail SMTP", "PBKDF2"],
    metrics: { label: "Security Level", value: "CSRF & Salt Hashing" },
    tags: ["Python", "Django", "SQLite", "Gmail SMTP", "Security"],
    link: "https://github.com/Hangsovoleak/signup-and-login-form-with-python.git"
  },
  {
    id: 5,
    step: "05",
    category: "Full Stack",
    subCategory: "Social Impact Portal",
    title: "Donation Platform Cambodia",
    tagline: "Unified humanitarian donation portal with Postgres relational storage",
    description: "Web application connecting donors to verified charitable initiatives in Cambodia, built with React frontend, Node.js backend services, and PostgreSQL database architecture.",
    longDescription: "Architected a centralized humanitarian platform facilitating transparent contributions to Cambodian causes. Designed relational data schemas in PostgreSQL for campaign management, donor ledgers, and transaction histories.",
    duration: "Academic Practicum",
    role: "Full-Stack Developer",
    institution: "Tux Global Institute · Web Practicum",
    image: "/assets/donationPlatform.jpg",
    featured: true,
    bullets: [
      "Built multi-tier donation portal allowing exploration of certified Cambodian non-profits.",
      "Designed PostgreSQL relational schemas for campaigns, donations, and donor profiles.",
      "Engineered responsive contribution flows with real-time campaign progress tracking."
    ],
    architecture: ["React.js", "Node.js", "PostgreSQL", "Tailwind CSS", "REST API"],
    metrics: { label: "Database", value: "PostgreSQL Schema" },
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "Database Design"],
    link: "https://github.com/Hangsovoleak/donation-ngo-project.git"
  },
  {
    id: 6,
    step: "06",
    category: "Algorithms & Systems",
    subCategory: "Enterprise Systems",
    title: "Market Inventory & Sales Management",
    tagline: "Desktop/enterprise inventory tracker with Java & MySQL relational persistence",
    description: "Desktop enterprise software for market stall and retail operations, orchestrating inventory control, product categorization, stock alerts, and transactional ledger tracking with JDBC and MySQL.",
    longDescription: "Developed a comprehensive enterprise desktop application in Java with MySQL database persistence. Included product categorization, dynamic inventory deduction, automated sales receipt calculations, and stock threshold warnings.",
    duration: "Academic Capstone",
    role: "Software Developer",
    institution: "Royal University of Phnom Penh · Computer Science",
    image: "/assets/marketsys.jpg",
    featured: false,
    bullets: [
      "Developed Java enterprise application managing stock inventories and retail transactions.",
      "Engineered bidirectional data persistence using JDBC connections to MySQL database.",
      "Implemented inventory alert triggers, sales reporting logic, and tabular management UI."
    ],
    architecture: ["Java", "MySQL", "JDBC", "Desktop UI", "Relational Models"],
    metrics: { label: "Data Persistence", value: "MySQL / JDBC" },
    tags: ["Java", "MySQL", "JDBC", "Desktop Application", "Database"],
    link: "https://github.com/Hangsovoleak/market-system-java.git"
  },
  {
    id: 7,
    step: "07",
    category: "Backend & APIs",
    subCategory: "Time-Series Logic",
    title: "Event Countdown & Scheduling System",
    tagline: "Event scheduling and real-time interval streaming in Django",
    description: "Django event scheduler allowing organizers to publish milestones, store temporal metadata in Django ORM models, and stream live countdown timers.",
    longDescription: "Created a temporal scheduling web application in Django. Utilized Django ORM models to store event dates, timestamps, and metadata, streaming dynamic countdown states to the client with precise client-server time synchronization.",
    duration: "1-2 weeks",
    role: "Backend & Web Developer",
    institution: "Personal Engineering Project",
    mockupType: "countdown",
    featured: false,
    bullets: [
      "Engineered Django models to store and query temporal event parameters.",
      "Built dynamic frontend ticker calculating remaining days, hours, minutes, and seconds.",
      "Designed clean administrative dashboard for event creation and status toggles."
    ],
    architecture: ["Python", "Django", "Django ORM", "JavaScript", "HTML/CSS"],
    metrics: { label: "Real-time Logic", value: "Tick Synchronization" },
    tags: ["Django", "Python", "JavaScript", "Temporal Logic"],
    link: "https://github.com/Hangsovoleak/Timing-count-for-Event.git"
  },
  {
    id: 8,
    step: "08",
    category: "Frontend",
    subCategory: "Design Engineering",
    title: "Personal Portfolio & Developer Showcase",
    tagline: "High-performance developer portfolio with dark/light themes & tactile UX",
    description: "Custom-built software engineering portfolio featuring responsive component architecture, interactive project simulators, accessible design systems, and fast loading performance.",
    longDescription: "Engineered a modern, professional portfolio that emphasizes craft, typography, accessibility, and interactive features without relying on generic template clichés.",
    duration: "Continuous",
    role: "Frontend Engineer & Designer",
    institution: "Independent Work",
    image: "/assets/portfolioImage.jpg",
    featured: false,
    bullets: [
      "Implemented fluid dark and light theme switching with localStorage persistence.",
      "Engineered custom interactive project simulators for algorithm and API demonstrations.",
      "Designed responsive layout adhering to modern accessibility and typography standards."
    ],
    architecture: ["React 19", "TypeScript", "Tailwind CSS", "Lucide Icons"],
    metrics: { label: "Performance", value: "100% Mobile Ready" },
    tags: ["React", "TypeScript", "Tailwind CSS", "UI/UX", "Responsive Design"],
    link: "https://github.com/Hangsovoleak/static-portfolio.git",
    demoLink: "#"
  }
];