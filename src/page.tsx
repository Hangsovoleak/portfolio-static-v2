/**
 * Description:
 *      Primary public-facing portfolio page.
 *      Orchestrates the loading of all portfolio data and renders the various sections.
 */

/*------------------------------------------------------------------------------
                                   IMPORTS
------------------------------------------------------------------------------*/
import { useEffect, useState } from "react";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import AboutSection from "./sections/About";
import EducationSection from "./sections/Education";
import ExperienceSection from "./sections/Experience";
import ProjectsSection from "./sections/Projects";
import ResourcesSection from "./sections/Resources";
import ToolsSection from "./sections/Tools";
import SkillsSection from "./sections/Skills";

import { fetchPortfolioData } from "./services/portfolioService";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

/*------------------------------------------------------------------------------
                                PROGRAM CONSTANTS
------------------------------------------------------------------------------*/
const NAVIGATION_LINKS = [
    { id: "about", title: "ABOUT ME" },
    { id: "education", title: "MY JOURNEY" },
    { id: "experience", title: "EXPERIENCE" },
    { id: "projects", title: "PROJECT" },
    { id: "resources", title: "LEARNING RESOURCE" },
    { id: "tools", title: "TOOLS" },
    { id: "skills", title: "SKILLS" },
    { id: "contact", title: "CONTACTS" },
];

/*------------------------------------------------------------------------------
                            MAIN CONTENT COMPONENT
------------------------------------------------------------------------------*/
function PortfolioContent() {
    const { isDark } = useTheme();

    // State management for portfolio data
    const [profile, setProfile] = useState(null);
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);

    // UI State
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        async function loadPortfolio() {
            try {
                setIsLoading(true);
                setErrorMessage("");

                const portfolioData = await fetchPortfolioData();

                setProfile(portfolioData.profile);
                setEducation(portfolioData.education);
                setExperience(portfolioData.experience);
                setProjects(portfolioData.projects);
                setSkills(portfolioData.skills);
            } catch (error) {
                console.error("Portfolio Data Fetch Error:", error);
                setErrorMessage("Failed to load portfolio data. Please ensure the backend is reachable.");
            } finally {
                setIsLoading(false);
            }
        }

        loadPortfolio();
    }, []);

    // Loader View
    if (isLoading) {
        return (
            <div className={`grid min-h-screen place-items-center font-mono ${isDark ? "bg-[#080C16] text-white" : "bg-white text-[#09090B]"}`}>
                <div className="flex items-center gap-3">
                    <div className={`h-4 w-4 animate-spin rounded-full border-2 border-t-transparent ${isDark ? "border-[#0D9668]" : "border-[#0D9668]"}`} />
                    Loading Portfolio Components...
                </div>
            </div>
        );
    }

    // Error View
    if (errorMessage) {
        return (
            <div className={`grid min-h-screen place-items-center font-mono px-6 text-center ${isDark ? "bg-[#080C16] text-rose-400" : "bg-white text-rose-600"}`}>
                {errorMessage}
            </div>
        );
    }

    return (
        <div className={`overflow-y-auto scroll-smooth min-h-screen text-left transition-colors duration-300 ${
            isDark ? "bg-[#080C16] text-slate-100" : "bg-white text-[#09090B]"
        }`}>
            {/* Navigation Header */}
            <Header links={NAVIGATION_LINKS} />

            {/* Main Content Sections */}
            <main className={isDark ? "bg-[#080C16]" : "bg-white"}>
                <AboutSection profile={profile} />
                <EducationSection items={education} />
                <ExperienceSection items={experience} />
                <ProjectsSection projects={projects} />
                <ResourcesSection />
                <ToolsSection />
                <SkillsSection skills={skills} />
            </main>

            {/* Footer and Contact */}
            <Footer email={profile?.email || "hangsovoleak@example.com"} />
        </div>
    );
}

function Portfolio() {
    return (
        <ThemeProvider>
            <PortfolioContent />
        </ThemeProvider>
    );
}

/*------------------------------------------------------------------------------
                                   EXPORTS
------------------------------------------------------------------------------*/
export default Portfolio;
