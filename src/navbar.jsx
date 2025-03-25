import React from "react";
import "./Navbar.css"; // Import the CSS file
import { Menu, X, Instagram, Linkedin } from "lucide-react"; // Add Instagram and Linkedin icons
import { useState } from "react";
import { Link } from "react-router-dom";
import img from "./assets/IPANAC.jpg";

function Navbar() {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <nav className="navbar">
            <div className="container">
                {/* Contact Info Section */}
                <div className="contact-info">
                    <span className="address">104 | Khalid Bin Al Waleed Building | P.O.Box – 111923 | Dubai | UAE</span>
                    <span className="phone">+971-4-3272129</span>
                    <div className="email-and-social">
                        <span className="emailid">relocation@ipanacllc.com</span>
                        <div className="social-handles">
                            <a href="https://www.instagram.com/ipanacrelocation/" target="_blank" rel="noopener noreferrer">
                                <Instagram className="social-icon" size={20} />
                            </a>
                            <a href="https://www.linkedin.com/company/ipanac-relocation/" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="social-icon" size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Navbar Content */}
                <div className={`navbar-content ${mobileDrawerOpen ? 'mobileDrawerOpen' : ''}`}>
                    {/* Logo and Title */}
                    <div className="logo-container">
                        <img className="logo" src={img} alt="logo" />
                        <Link to="/" className="title">IPANAC Relocation</Link>
                        <div className="mobile-menu-button">
                            <button onClick={toggleNavbar}>
                                {mobileDrawerOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="nav-links">
                        <Link to="/about" className="nav-item">About Us</Link>
                        <Link to="/services" className="nav-item">Services</Link>
                        <Link to="/contact" className="nav-item">Contact Us</Link>
                    </div>

                    {/* Sign In & Register Buttons */}
                    <div className="auth-buttons">
                        <Link to="/enquire" className="sign-in">Enquire</Link>
                        <Link to="/quickquote" className="register">Quick Quote</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
