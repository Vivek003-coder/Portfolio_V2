import {
    FaJava,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaGithub,
} from "react-icons/fa";

import {
    SiSpringboot,
    SiMysql,
    SiJavascript,
    SiMongodb,
    SiPostgresql,
    SiC,
    SiCplusplus,
    SiApachemaven,
} from "react-icons/si";

import { MdApi } from "react-icons/md";
import { TbBraces } from "react-icons/tb";

function Skills() {
    const skills = [
        {
            icon: <FaJava />,
            name: "Java",
        },
        {
            icon: <SiSpringboot />,
            name: "Spring Boot",
        },
        {
            icon: <SiMysql />,
            name: "MySQL",
        },
        {
            icon: <SiPostgresql />,
            name: "PostgreSQL",
        },
        {
            icon: <SiMongodb />,
            name: "MongoDB",
        },
        {
            icon: <SiC />,
            name: "C",
        },
        {
            icon: <SiCplusplus />,
            name: "C++",
        },
        {
            icon: <FaHtml5 />,
            name: "HTML",
        },
        {
            icon: <FaCss3Alt />,
            name: "CSS",
        },
        {
            icon: <SiJavascript />,
            name: "JavaScript",
        },
        {
            icon: <FaGitAlt />,
            name: "Git",
        },
        {
            icon: <FaGithub />,
            name: "GitHub",
        },
        {
            icon: <SiApachemaven />,
            name: "Maven",
        },
        {
            icon: <MdApi />,
            name: "REST API",
        },
    ];

    return (
        <section
            id="skills"
            className="section skills-section"
        >
            <h2>Technical Expertise</h2>

            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="skill-card"
                    >
                        <div className="skill-icon">
                            {skill.icon}
                        </div>
                        <h3>{skill.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;