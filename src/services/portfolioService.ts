import { profileDate as profile } from "../data/profile";
import { projectsData as projects } from "../data/projects";
import { skills } from "../data/skills";

export const fetchPortfolioData = async () => {
    return {
        profile,
        projects,
        skills: skills.map(skill => ({ name: skill })), // Converting string[] to expected Object[]
        education: [
            {
                id: 1,
                step: "01",
                category: "GPA 3.70",
                institution: "Royal University of Phnom Penh",
                degree: "Bachelor of Information Technology Engineering",
                period: "2025 - Present",
                description: "Specializing in software engineering, database design, algorithms, and full-stack web development. Gaining strong theoretical knowledge and software engineering principles."
            },
            {
                id: 2,
                step: "02",
                category: "GPT 2.77",
                institution: "Tux Global Institute",
                degree: "Associate Degree in App/Web Development",
                period: "2025 - Present",
                description: "Hands-on intensive training focused on modern web and application development. Building real-world project portfolios, responsive user interfaces, and software solutions."
            }
        ],
        experience: [
            {
                id: 1,
                step: "01",
                category: "01 / VOLUNTEER PROGRAM",
                type: "Volunteer",
                role: "IT Support",
                company: "Tech for Kids Academy",
                period: "October 2025 - January 2026",
                months: ["Oct 2025", "Nov 2025", "Dec 2025", "Jan 2026"],
                technologies: ["Windows OS", "Bootable USB", "Hardware Setup", "IT Troubleshooting"],
                bullets: [
                    "Provided hands-on IT support for laptops and desktop computers, including Windows installation and activation, creating bootable USB drives, and troubleshooting Windows boot errors.",
                    "Worked with team members to identify technical issues, communicate problems clearly, and follow troubleshooting procedures.",
                    "Researched installation methods and technical information to improve my knowledge and ensure computers were properly set up and working correctly."
                ]
            },
            {
                id: 2,
                step: "02",
                category: "02 / INTERNSHIP",
                type: "Internship",
                role: "Frontend Developer",
                company: "Simple Group Cambodia",
                period: "March 2026 – June 2026",
                months: ["Mar 2026", "Apr 2026", "May 2026", "Jun 2026"],
                technologies: ["React.js", "JavaScript", "Tailwind CSS", "Figma", "Git & GitHub"],
                bullets: [
                    "Designed the website layout in Figma, discussed requirements and design changes with the client, and updated the design based on their feedback.",
                    "Developed a responsive static website using React.js, JavaScript, and Tailwind CSS.",
                    "Used Git and GitHub for version control and collaboration.",
                    "Communicated with the client through several review rounds to confirm the final design and deliver a website that matched the agreed requirements."
                ],
                links: {
                    github: "https://github.com/Hangsovoleak/e-robot-cambodia-v2.git",
                    figma: "https://www.figma.com/design/eYExtVG9Swtr3so26n6bDK/E-Robot?node-id=0-1&t=RP0uCX0TDvgBTzZ8-1"
                }
            },
            {
                id: 3,
                step: "03",
                category: "03 / VOLUNTEER PROGRAM",
                type: "Volunteer",
                role: "Teacher of Scratch",
                company: "E-Robot",
                period: "March 2026 – June 2026",
                months: ["Mar 2026", "Apr 2026", "May 2026", "Jun 2026"],
                technologies: ["Scratch", "Teaching & Mentoring", "Lab Prep", "Classroom Management"],
                bullets: [
                    "Supported Scratch programming classes by adapting teaching slides and preparing computer labs for student practice.",
                    "Guided students in building their own Scratch projects, explained programming concepts in a simple and clear way, and helped students troubleshoot problems during practice.",
                    "Managed classroom activities and worked with team members to keep lessons organized and create a supportive learning environment."
                ]
            }
        ]
    };
};

