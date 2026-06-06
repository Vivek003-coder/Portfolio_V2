import React, { useState, useRef } from "react";

import emailjs from "@emailjs/browser";

import {
    Mail,
    MapPin,
    Phone,
    Send,
    CheckCircle,
    AlertCircle,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedinIn,
} from "react-icons/fa6";

import "../styles/contact.css";

function Contact() {
    const form = useRef();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const onSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            await emailjs.sendForm(
                "service_awlcnan",
                "template_hbr3f0z",
                form.current,
                "oL1EJvjTRyGv46Ixy"
            );

            setSubmitStatus("success");
            form.current.reset();
        } catch (error) {
            console.error(error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section">
            <h2>Get In Touch</h2>

            <p className="contact-subtitle">
                Have a project in mind or just want to say hi?
            </p>

            <div className="contact-grid">

                {/* Left Side */}
                <div className="contact-info-cards">

                    <div className="contact-info-card glass-card">
                        <div className="icon-box">
                            <Mail size={28} />
                        </div>

                        <div>
                            <h4>Email</h4>

                            <a
                                href="mailto:viveksharma80ktr@gmail.com"
                                className="contact-link-value"
                            >
                                viveksharma80ktr@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="contact-info-card glass-card">
                        <div className="icon-box">
                            <MapPin size={28} />
                        </div>

                        <div>
                            <h4>Location</h4>

                            <p>
                                Greater Noida, Uttar Pradesh, India
                            </p>
                        </div>
                    </div>

                    <div className="contact-info-card glass-card">
                        <div className="icon-box">
                            <Phone size={28} />
                        </div>

                        <div>
                            <h4>Socials</h4>

                            <div className="social-icons">

                                <a
                                    href="https://github.com/Vivek003-coder"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/vivek-kumar-794b1929b/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedinIn />
                                </a>

                                <a
                                    href="https://leetcode.com/u/Vivek_23131012476/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bx bx-code-alt"></i>
                                </a>

                                <a
                                    href="https://codolio.com/profile/Vivek_003"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bx bx-laptop"></i>
                                </a>

                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Side */}
                <div className="contact-form-wrapper glass-card">

                    {submitStatus === "success" ? (
                        <div className="success-message">
                            <CheckCircle size={60} />
                            <h3>Message Sent Successfully!</h3>
                            <p>
                                Thank you for reaching out. I'll get back to you soon.
                            </p>
                        </div>
                    ) : (

                        <form
                            ref={form}
                            onSubmit={onSubmit}
                        >

                            <div className="form-row">

                                <div className="form-group">
                                    <label>Name</label>

                                    <input
                                        type="text"
                                        name="user_name"
                                        placeholder="Your Name"
                                        className="form-input"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Email</label>

                                    <input
                                        type="email"
                                        name="user_email"
                                        placeholder="you@gmail.com"
                                        className="form-input"
                                        required
                                    />
                                </div>

                            </div>

                            <div className="form-group">
                                <label>Message</label>

                                <textarea
                                    rows="5"
                                    name="message"
                                    placeholder="Your message..."
                                    className="form-textarea"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={18} />
                                    </>
                                )}
                            </button>

                            {submitStatus === "error" && (
                                <p className="error-text">
                                    <AlertCircle size={16} />
                                    Something went wrong. Please try again.
                                </p>
                            )}

                        </form>
                    )}

                </div>

            </div>
        </section>
    );
}

export default Contact;