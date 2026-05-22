import {
    FaJava,
    FaReact,
    FaNodeJs,
    FaPython,
} from "react-icons/fa";
import {
    SiSpringboot,
    SiMysql,
    SiJavascript,
    SiMongodb,
} from "react-icons/si";
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
            icon: <FaReact />,
            name: "React",
            active: true,
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js",
        },
        {
            icon: <SiJavascript />,
            name: "JavaScript",
        },
        {
            icon: <SiMongodb />,
            name: "MongoDB",
        },
        {
            icon: <FaPython />,
            name: "Python",
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
                        className={`skill-card ${skill.active ? "active-skill" : ""
                            }`}
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