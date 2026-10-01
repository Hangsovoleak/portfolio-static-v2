export interface SkillItem {
  name: string;
  category: "Frontend" | "Backend" | "Databases" | "Tools & Workflow";
  level: "Primary Stack" | "Advanced" | "Proficient";
  context: string;
  iconId: string;
}

export const skillsData: SkillItem[] = [
  // Frontend
  {
    name: "React.js",
    category: "Frontend",
    level: "Primary Stack",
    context: "Client sites (E-Robot Cambodia V2), SPAs, dynamic state management & hooks",
    iconId: "react"
  },
  {
    name: "TypeScript",
    category: "Frontend",
    level: "Advanced",
    context: "Type-safe component contracts, interfaces, and maintainable frontend architecture",
    iconId: "typescript"
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    level: "Primary Stack",
    context: "DOM manipulation, asynchronous fetch APIs, event loops, and algorithm scripting",
    iconId: "javascript"
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Primary Stack",
    context: "Production responsive layouts, custom design systems, dark/light themes",
    iconId: "tailwind"
  },
  {
    name: "HTML5 / Semantic Web",
    category: "Frontend",
    level: "Primary Stack",
    context: "Accessible document architecture, SEO optimization, and standard web compliance",
    iconId: "html"
  },

  // Backend
  {
    name: "Python",
    category: "Backend",
    level: "Primary Stack",
    context: "Algorithms, Dijkstra graph routing, REST APIs, and backend scripting",
    iconId: "python"
  },
  {
    name: "Django",
    category: "Backend",
    level: "Primary Stack",
    context: "Authentication, ORM modeling, weather API endpoints, and SMTP dispatch",
    iconId: "django"
  },
  {
    name: "REST APIs",
    category: "Backend",
    level: "Advanced",
    context: "Third-party API consumption (OpenWeatherMap), JSON serialization, error handling",
    iconId: "api"
  },
  {
    name: "Node.js",
    category: "Backend",
    level: "Proficient",
    context: "Express backend services and API endpoints for donation platform",
    iconId: "nodejs"
  },
  {
    name: "Java",
    category: "Backend",
    level: "Proficient",
    context: "Object-oriented programming, market inventory desktop application & JDBC",
    iconId: "java"
  },
  {
    name: "C++",
    category: "Backend",
    level: "Proficient",
    context: "Data structures & algorithms coursework at RUPP, memory pointers, and OOP",
    iconId: "cpp"
  },

  // Databases
  {
    name: "PostgreSQL",
    category: "Databases",
    level: "Advanced",
    context: "Relational data schemas, foreign keys, and indexing for NGO donation platform",
    iconId: "postgres"
  },
  {
    name: "MySQL",
    category: "Databases",
    level: "Advanced",
    context: "Relational database tables and transactional queries for market system",
    iconId: "mysql"
  },
  {
    name: "SQLite",
    category: "Databases",
    level: "Primary Stack",
    context: "Embedded database storage for Django auth and rapid prototyping",
    iconId: "sqlite"
  },

  // Tools & Workflow
  {
    name: "Git & GitHub",
    category: "Tools & Workflow",
    level: "Primary Stack",
    context: "Branching, PRs, version control, collaboration on team repositories",
    iconId: "github"
  },
  {
    name: "VS Code",
    category: "Tools & Workflow",
    level: "Primary Stack",
    context: "Primary IDE configured with linting, debugging, and terminal workflows",
    iconId: "vscode"
  },
  {
    name: "Postman",
    category: "Tools & Workflow",
    level: "Advanced",
    context: "API debugging, request testing, response validation, and environment headers",
    iconId: "postman"
  },
  {
    name: "Figma",
    category: "Tools & Workflow",
    level: "Advanced",
    context: "UI/UX wireframing, client interactive prototypes (E-Robot Cambodia layout)",
    iconId: "figma"
  },
  {
    name: "Linux / CLI",
    category: "Tools & Workflow",
    level: "Proficient",
    context: "Bash commands, package management, IT support, and environment setup",
    iconId: "linux"
  },
  {
    name: "Vercel",
    category: "Tools & Workflow",
    level: "Advanced",
    context: "Continuous deployment and hosting for web applications and client portals",
    iconId: "vercel"
  }
];

export const skills: string[] = skillsData.map(s => s.name);