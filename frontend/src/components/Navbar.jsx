import { useState, useEffect } from "react";

import {
    Sun,
    Moon,
    Palette,
    Menu,
    X,
} from "lucide-react";

function Navbar() {

    const [menuOpen, setMenuOpen] =
        useState(false);

    const [theme, setTheme] =
        useState("blue");

    /* THEME CHANGE */

    useEffect(() => {

        document.body.classList.remove(
            "light-theme",
            "dark-theme",
            "blue-theme"
        );

        document.body.classList.add(
            `${theme}-theme`
        );

    }, [theme]);

    return (

        <header className="navbar">

            {/* LOGO */}

            <div className="logo">
                Vivek<span>.</span>
            </div>

            {/* LINKS */}

            <nav
                className={`nav-links ${
                    menuOpen ? "open" : ""
                }`}
            >

                <a href="#home">Home</a>

                <a href="#about">About</a>

                <a href="#skills">Skills</a>

                <a href="#projects">
                    Projects
                </a>

                <a href="#certificates">
                    Certificates
                </a>

                <a href="#contact">
                    Contact
                </a>

            </nav>

            {/* ACTIONS */}

            <div className="nav-actions">

                {/* WHITE */}

                <button
                    className={`icon-btn ${
                        theme === "light"
                            ? "active"
                            : ""
                    }`}
                    onClick={() =>
                        setTheme("light")
                    }
                >
                    <Sun size={18} />
                </button>

                {/* BLACK */}

                <button
                    className={`icon-btn ${
                        theme === "dark"
                            ? "active"
                            : ""
                    }`}
                    onClick={() =>
                        setTheme("dark")
                    }
                >
                    <Moon size={18} />
                </button>

                {/* BLUE */}

                <button
                    className={`icon-btn ${
                        theme === "blue"
                            ? "active"
                            : ""
                    }`}
                    onClick={() =>
                        setTheme("blue")
                    }
                >
                    <Palette size={18} />
                </button>

                {/* MOBILE */}

                <button
                    className="mobile-menu-btn"
                    onClick={() =>
                        setMenuOpen(
                            !menuOpen
                        )
                    }
                >
                    {menuOpen ? (
                        <X size={22} />
                    ) : (
                        <Menu size={22} />
                    )}
                </button>

            </div>
        </header>
    );
}

export default Navbar;