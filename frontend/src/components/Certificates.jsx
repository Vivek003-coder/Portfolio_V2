import React, { useState } from "react";

import {
    X,
    Award,
    ExternalLink,
    ZoomIn,
} from "lucide-react";

import "../styles/certificates.css";

function Certificates() {

    const [selectedCert, setSelectedCert] = useState(null);

    const certificates = [

        {
            id: 1,
            title: "Java Full Stack",
            organization: "Virtual Internship",
            date: "2025",
            image: "/certificates/java.jpg",
        },

        {
            id: 2,
            title: "MySQL",
            organization: "Oracle",
            date: "2024",
            image: "/certificates/mysql.jpg",
        },

        {
            id: 3,
            title: "Google Cloud Arcade",
            organization: "Google",
            date: "2025",
            image: "/certificates/google.jpg",
        },
    ];

    return (

        <section
            id="certificates"
            className="section"
        >

            <h2>Certificates</h2>

            <div className="certificates-grid">

                {certificates.map((cert) => (

                    <div
                        key={cert.id}
                        className="certificate-card"
                        onClick={() => setSelectedCert(cert)}
                    >

                        <div className="certificate-image-wrapper">

                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="certificate-image"
                            />

                            <div className="certificate-overlay">

                                <ZoomIn size={30} />

                                <span>View Certificate</span>

                            </div>

                        </div>

                        <div className="certificate-content">

                            <h3>{cert.title}</h3>

                            <p>{cert.organization}</p>

                            <span>{cert.date}</span>

                        </div>

                    </div>
                ))}

            </div>

            {selectedCert && (

                <div
                    className="certificate-modal"
                    onClick={() => setSelectedCert(null)}
                >

                    <div
                        className="certificate-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            className="modal-close-btn"
                            onClick={() => setSelectedCert(null)}
                        >

                            <X size={24} />

                        </button>

                        <img
                            src={selectedCert.image}
                            alt={selectedCert.title}
                            className="modal-full-img"
                        />

                        <div className="modal-info">

                            <div className="modal-badge">

                                <Award size={18} />

                                Certificate

                            </div>

                            <h2>{selectedCert.title}</h2>

                            <p>{selectedCert.organization}</p>

                            <span>{selectedCert.date}</span>

                            <a
                                href="#"
                                className="verify-btn"
                            >

                                <ExternalLink size={18} />

                                Verify

                            </a>

                        </div>

                    </div>

                </div>
            )}

        </section>
    );
}

export default Certificates;