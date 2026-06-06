import { useState } from "react";

function Projects() {

    const [selectedProject, setSelectedProject] =
        useState(null);

    const projects = [

        {
            title: "Agriharvest",

            image: "/images/agriharvest.png",

            description:
                "Smart AgriTech platform designed to empower farmers with real-time insights and digital support.",

            tech: [
                "HTML,CSS,JS",
                "MYSQL",
                "SPRING BOOT",
            ],

            live: "#",

            github: "https://github.com/Vivek003-coder/AgriHarvest",
        },

        {
            title: "Portfolio V2",

            image: "/images/portfolio_V2.png",

            description:
                "A modern and responsive personal portfolio website showcasing projects, technical skills, and achievements. Built with a clean UI, smooth animations, and optimized performance for an engaging user experience.",

            tech: [
                "React",
                "JavaScript",
                "CSS3",
                "React Router",
            ],

            live: "#",

            github: "https://github.com/Vivek003-coder/Portfolio_V2",
        },

        {
            title: "Online Voting System",

            image: "/images/online-voting-system.png",

            description:
                "A secure web-based voting platform that enables users to register, authenticate, and cast votes digitally. The system provides efficient election management, transparent vote counting, and real-time result tracking through an intuitive user interface.",

            tech: [
                "Java",
                "JSP",
                "Servlet",
                "MySQL",
                "HTML",
                "CSS",
                "JavaScript",
            ],

            live: "#",

            github: "https://github.com/Vivek003-coder/online-voting-system",
        },

        {
            title: "Adgorithm",

            image: "/images/Adgorithm.png",

            description:
                "A service providing website focused on modern UI and animations.",

            tech: [
                "React",
                "React-router-dom",
                "NodeJS",
            ],

            live: "#",

            github: "#",
        },

        {
            title: "DevGemini",

            image: "/images/DevGemini.png",

            description:
                "Hospital and bed management system useful for medical conditions.",

            tech: [
                "React",
                "NodeJS",
                "Express",
            ],

            live: "#",

            github: "#",
        },
    ];

    return (

        <section
            id="projects"
            className="section projects-section"
        >

            <h2>Projects</h2>

            <div className="project-grid">

                {projects.map((project, index) => (

                    <div
                        className="project-card"
                        key={index}
                        onClick={() =>
                            setSelectedProject(project)
                        }
                    >

                        <div className="project-image">

                            <img
                                src={project.image}
                                alt={project.title}
                            />

                        </div>

                        <div className="project-content">

                            <h3>{project.title}</h3>

                            <p>
                                {project.description}
                            </p>

                            <div className="project-tech">

                                {project.tech.map(
                                    (item, i) => (

                                        <span key={i}>
                                            {item}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* MODAL */}
            {selectedProject && (
                <div className="project-modal">
                    <div className="modal-content">
                        {/* CLOSE */}
                        <button
                            className="close-btn"
                            onClick={() =>
                                setSelectedProject(null)
                            }
                        >
                            ✕
                        </button>
                        {/* LEFT */}
                        <div className="modal-image">
                            <img
                                src={selectedProject.image}
                                alt=""
                            />
                        </div>
                        {/* RIGHT */}
                        <div className="modal-details">
                            <h3>
                                {selectedProject.title}
                            </h3>
                            <h4>
                                TECHNOLOGIES USED
                            </h4>
                            <div className="project-tech">
                                {selectedProject.tech.map(
                                    (item, i) => (
                                        <span key={i}>
                                            {item}
                                        </span>
                                    )
                                )}
                            </div>
                            <h4>
                                PROJECT OVERVIEW
                            </h4>
                            <p>
                                {
                                    selectedProject.description
                                }
                            </p>
                            <div className="project-buttons">

                                <a
                                    href={
                                        selectedProject.live
                                    }
                                    className="view-btn primary"
                                >
                                    Live
                                </a>

                                <a
                                    href={
                                        selectedProject.github
                                    }
                                    className="view-btn secondary"
                                >
                                    Github
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
export default Projects;