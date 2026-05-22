import profile from "../assets/profile.jpg";
import { useEffect, useState } from "react";

function Hero() {
    const texts = [
        "Full Stack Java Developer",
        "DSA Enthusiast",
        "Problem Solver"
    ];
    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] =
        useState("");
    const [isDeleting, setIsDeleting] =
        useState(false);
    useEffect(() => {
        const currentText = texts[textIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(
                    currentText.substring(
                        0,
                        displayText.length + 1
                    )
                );
                if (displayText === currentText) {
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, 1200);
                }
            } else {
                setDisplayText(
                    currentText.substring(
                        0,
                        displayText.length - 1
                    )
                );
                if (displayText === "") {
                    setIsDeleting(false);
                    setTextIndex(
                        (prev) =>
                            (prev + 1) % texts.length
                    );
                }
            }
        }, isDeleting ? 50 : 100);
        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, textIndex]);
    return (
        <section id="home" className="hero">
            <div className="hero-left">
                <h1>
                    Hello, I'm Vivek Kumar
                </h1>
                <h2>{displayText}</h2>
                <p>
                    Aspiring Full Stack Java Developer
                    skilled in building scalable backend
                    applications using Java, Spring Boot,
                    and MySQL.
                </p>
                <div className="hero-buttons">
                    <a
                        href="#contact"
                        className="primary-btn"
                    >
                        Hire Me
                    </a>
                    <a
                        href="/Vivek_Kumar_CV.pdf"
                        download
                        className="secondary-btn"
                    >
                        Download CV
                    </a>
                </div>
                {/* SOCIAL ICONS */}
                <div className="social-icons">
                    <a
                        href="https://www.linkedin.com/in/vivek-kumar-794b1929b/"
                        target="_blank"
                    >
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a
                        href="https://github.com/Vivek003-coder"
                        target="_blank"
                        >
                        <i className="bx bxl-github"></i>
                    </a>
                    <a
                        href="https://leetcode.com/u/Vivek_23131012476/"
                        target="_blank"
                        >
                        <i className="bx bx-code-alt"></i>
                    </a>
                    <a
                        href="https://codolio.com/profile/Vivek_003"
                        target="_blank"
                        >
                        <i className="bx bx-laptop"></i>
                    </a>
                </div>
            </div>
            <div className="hero-right">
                <img
                    src={profile}
                    alt="profile"
                />
            </div>
        </section>
    );
}

export default Hero;