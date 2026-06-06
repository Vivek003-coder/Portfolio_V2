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
            title: "Java Full Stack Developer Virtual Internship",
            organization: "EduSkills / AICTE",
            date: "2025",
            image: "/images/java-fullstack-internship.png",
            credentialUrl: "https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=0afa90a4cca2daadcb1f27133921008e",
        },

        {
            id: 2,
            title: "MySQL",
            organization: "GUVI - HCL",
            date: "January 2025",
            image: "/images/mysql-guvi.png",
            credentialUrl: "https://www.guvi.in/share-certificate/8sl77j5ri164p335w4",
        },

        {
            id: 3,
            title: "Mastering MongoDB",
            organization: "GUVI - HCL",
            date: "January 2025",
            image: "/images/mongodb-guvi.png",
            credentialUrl: "https://www.guvi.in/share-certificate/8sl77j5ri164p335w4",
        },

        {
            id: 4,
            title: "Google Cloud Arcade",
            organization: "Google Cloud",
            date: "2026",
            image: "/images/google-cloud-arcade.png",
            credentialUrl: "https://www.skills.google/public_profiles/dec543af-4113-4984-b2a0-60ad25c8095c",
        },

        {
            id: 5,
            title: "Java for Beginners",
            organization: "GUVI - HCL",
            date: "January 2025",
            image: "/images/java-guvi.png",
            credentialUrl: "https://www.guvi.in/share-certificate/45M1n8d36718u3sxce",
        },

        {
            id: 6,
            title: "AWS Academy Graduate - Cloud Foundations",
            organization: "AWS Academy",
            date: "June 2025",
            image: "/images/aws-cloud-foundations.png",
            credentialUrl: "https://www.credly.com/go/V9oLjn0R",
        },

        {
            id: 7,
            title: "AWS Academy Graduate - Cloud Architecting",
            organization: "AWS Academy",
            date: "January 2026",
            image: "/images/aws-cloud-architecting.png",
            credentialUrl: "https://www.credly.com/go/6ewoWx9X",
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

                            {selectedCert.credentialUrl && (
                                <a
                                    href={selectedCert.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="verify-btn"
                                >
                                    <ExternalLink size={18} />
                                    Verify
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Certificates;