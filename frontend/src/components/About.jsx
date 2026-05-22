function About() {
    return (
        <section
            id="about"
            className="section about-section"
        >
            <h2>About Me</h2>
            <div className="about-container">
                <div className="about-left">
                    <p className="about-text">
                        I'm a passionate <strong>aspiring Full Stack Java Developer</strong>,
                        eager to learn and grow.

                        I have hands-on experience with Java,
                        Spring Boot, and MySQL, and enjoy solving
                        problems, writing clean code, and improving
                        my development skills.
                    </p>
                    <div className="about-highlights">
                        <div className="highlight">
                            ⚡ Clean Architecture
                        </div>
                        <div className="highlight">
                            🚀 Spring Boot
                        </div>
                        <div className="highlight">
                            🧠 Strong in DSA
                        </div>
                        <div className="highlight">
                            🎯 Problem Solver
                        </div>
                    </div>
                </div>
                <div className="about-right">
                    <div className="about-card">
                        <div className="stat">
                            <h3>5</h3>
                            <p>Projects Built</p>
                        </div>
                        <div className="stat">
                            <h3>350</h3>
                            <p>DSA Problems</p>
                        </div>
                        <div className="stat">
                            <h3>Java</h3>
                            <p>Primary Stack</p>
                        </div>
                        <div className="stat">
                            <h3>Open</h3>
                            <p>To Work</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;