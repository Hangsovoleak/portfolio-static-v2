export interface Project {
    id: number;
    step?: string;
    category?: string;
    title: string;
    description: string;
    bullets?: string[];
    metric?: string;
    duration?: string;
    tags: string[];
    link: string;
    demoLink?: string;
    figmaLink?: string;
    isGreen?: boolean;
    image?: string;
    institution?: string;
}

export const projectsData: Project[] = [
    {
        id: 1,
        step: "01",
        category: "BACKEND · AUTHENTICATION",
        title: "Signup & Login Authentication System",
        description: "Built user registration, login, logout, and protected profile pages using Django Authentication and Forms with automated Gmail SMTP integration.",
        duration: "1 week",
        institution: "ROYAL UNIVERSITY OF PHNOM PENH · COMPUTER SCIENCE",
        /* TODO: Upload Signup & Login project banner image to /public/images/project-auth.jpg */
        image: "/images/project-auth.jpg",
        bullets: [
            "Built user registration, login, logout, and protected profile pages using Django Auth & Forms.",
            "Integrated Gmail SMTP and a Gmail App Password to send automated registration emails.",
            "Used Crispy Forms and reusable Django templates for a clean, responsive authentication UI."
        ],
        metric: "1 WEEK BUILD",
        tags: ["Python", "Django", "SQLite", "Gmail SMTP"],
        link: "https://github.com/Hangsovoleak/signup-and-login-form-with-python.git",
        isGreen: true
    },
    {
        id: 2,
        step: "02",
        category: "FULL-STACK · WEATHER REST API",
        title: "Weather Global City of Cambodia",
        description: "A Django-based weather web application consuming the OpenWeatherMap API to retrieve and display dynamic weather information for Cambodian and global cities.",
        duration: "2-3 weeks",
        institution: "MINISTRY OF ENVIRONMENT & GEOGRAPHY SERVICES",
        /* TODO: Upload Weather Global City project banner image to /public/images/project-weather.jpg */
        image: "/images/project-weather.jpg",
        bullets: [
            "Built a Django weather app using OpenWeatherMap API for Cambodian and global cities.",
            "Developed Python/Django backend to send REST API requests and format dynamic data.",
            "Deployed live web application on Vercel platform."
        ],
        metric: "LIVE DEMO AVAILABLE",
        tags: ["Django", "Python", "SQLite", "OpenWeatherMap API"],
        link: "https://github.com/Hangsovoleak/Weather-Global-City-Web.git",
        demoLink: "https://weather-global-city.vercel.app/",
        isGreen: false
    },
    {
        id: 3,
        step: "03",
        category: "ALGORITHMS · GRAPH NAVIGATION",
        title: "Angkor Heritage Navigation System",
        description: "A Python-based navigation system finding optimal routes between Angkor heritage sites using graph theory, BST, stacks, queues, and Dijkstra's Algorithm.",
        duration: "3 weeks",
        institution: "HERITAGE PROTECTION COUNCIL · SIEM REAP ARCHAEOLOGY",
        /* TODO: Upload Angkor Heritage Navigation project banner image to /public/images/project-angkor.jpg */
        image: "/images/project-angkor.jpg",
        bullets: [
            "Built a Python navigation system to find shortest routes between Angkor heritage sites.",
            "Used Stack and Queue data structures to manage navigation tasks.",
            "Applied Dijkstra's Algorithm for shortest path calculation."
        ],
        metric: "DSA / DIJKSTRA",
        tags: ["Data Structures", "Algorithms", "Python", "Dijkstra"],
        link: "https://github.com/Hangsovoleak/angkor-heritage-site-navigation-system.git",
        isGreen: true
    },
    {
        id: 4,
        step: "04",
        category: "WEB APPLICATION · TIME STREAMING",
        title: "Event Countdown Timer App",
        description: "A Django-based event countdown application to store event dates and times using Django models and dynamically display real-time event countdowns.",
        duration: "1-2 weeks",
        institution: "NATIONAL EVENT & SCHEDULING SERVICES",
        /* TODO: Upload Event Countdown project banner image to /public/images/project-countdown.jpg */
        image: "/images/project-countdown.jpg",
        bullets: [
            "Built a Django event countdown application storing event schedules with Django models.",
            "Developed backend logic to stream real-time countdown status.",
            "Designed a clean interface to display event details dynamically."
        ],
        metric: "1-2 WEEKS BUILD",
        tags: ["Django", "Python", "HTML/CSS", "JavaScript"],
        link: "https://github.com/Hangsovoleak/Timing-count-for-Event.git",
        isGreen: false
    },
    {
        id: 5,
        step: "05",
        category: "CLIENT WORK · REACT & TAILWIND",
        title: "E-Robot Cambodia Website V2",
        description: "Designed website layout in Figma, communicated requirements with client through review rounds, and built a responsive static website using React.js and Tailwind CSS.",
        duration: "March - June 2026",
        institution: "E-ROBOT CAMBODIA ORGANIZATION",
        /* TODO: Upload E-Robot Cambodia project banner image to /public/assets/erobot_cambodia.png */
        image: "/assets/erobot_cambodia.png",
        bullets: [
            "Designed website layout in Figma, discussed client requirements, and updated feedback.",
            "Developed responsive static website using React.js, JavaScript, and Tailwind CSS.",
            "Used Git and GitHub for version control and collaborative client delivery."
        ],
        metric: "CLIENT DELIVERED",
        tags: ["React.js", "Tailwind CSS", "Figma", "Git"],
        link: "https://github.com/Hangsovoleak/e-robot-cambodia-v2.git",
        figmaLink: "https://www.figma.com/design/eYExtVG9Swtr3so26n6bDK/E-Robot?node-id=0-1&t=RP0uCX0TDvgBTzZ8-1",
        isGreen: true
    },
    {
        id: 6,
        step: "06",
        category: "COMMUNITY PORTAL · NGO DONATION",
        title: "Donation Platform Cambodia",
        description: "A web application that allows users to donate to various causes in Cambodia. Built with React, Node.js, and PostgreSQL database architecture.",
        institution: "CAMBODIAN NON-PROFIT COALITION · CHARITY FUND",
        /* TODO: Upload Donation Platform project banner image to /public/assets/donationPlatform.jpg */
        image: "/assets/donationPlatform.jpg",
        bullets: [
            "Single donation portal for multiple Cambodian non-profit organizations.",
            "Centralized campaign management and secure payment tracking.",
            "AI-assisted verification and donor transparency reporting."
        ],
        metric: "1 WEB PORTAL",
        tags: ["React", "Node.js", "PostgreSQL", "Tailwind"],
        link: "https://github.com/Hangsovoleak/donation-ngo-project.git",
        isGreen: false
    },
    {
        id: 7,
        step: "07",
        category: "SOFTWARE PORTFOLIO · WEB APP",
        title: "Personal Portfolio Website",
        description: "A personal portfolio website built with React and Tailwind CSS to showcase my software engineering projects, volunteer experience, and technical skills.",
        institution: "SOFTWARE ENGINEERING PORTFOLIO PLATFORM",
        /* TODO: Upload Personal Portfolio project banner image to /public/assets/portfolioImage.jpg */
        image: "/assets/portfolioImage.jpg",
        bullets: [
            "Interactive timeline & dynamic design system with modern aesthetic.",
            "Responsive mobile-first component architecture.",
            "SEO-optimized semantic HTML5 structure."
        ],
        metric: "100% RESPONSIVE",
        tags: ["React", "Tailwind CSS", "TypeScript"],
        link: "https://github.com/Hangsovoleak/static-portfolio.git",
        demoLink: "#",
        isGreen: true
    },
    {
        id: 8,
        step: "08",
        category: "ENTERPRISE · INVENTORY SYSTEM",
        title: "Market Management System",
        description: "A desktop/web application for managing and displaying products, inventory, and sales transactions in a market environment.",
        institution: "CAMBODIA COMMERCIAL & MARKET ADMINISTRATION",
        /* TODO: Upload Market Management System project banner image to /public/assets/marketsys.jpg */
        image: "/assets/marketsys.jpg",
        bullets: [
            "Product catalog & inventory synchronization.",
            "Bi-directional transaction streaming with MySQL database.",
            "Automated sales reporting & stock analytics dashboard."
        ],
        metric: "JAVA / MYSQL",
        tags: ["Java", "MySQL", "JDBC"],
        link: "https://github.com/Hangsovoleak/market-system-java.git",
        isGreen: false
    }
];