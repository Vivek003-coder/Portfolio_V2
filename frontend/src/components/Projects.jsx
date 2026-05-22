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

            github: "#",
        },

        {
            title: "Adgorithm",

            image: "/images/agriharvest.png",

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

            image: "/images/agriharvest.png",

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