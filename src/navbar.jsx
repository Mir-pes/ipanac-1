import React, { useState } from "react";
import "./Navbar.css";
import { Menu, X, Instagram, Linkedin, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import img from "./assets/IpanacRelocationLogo.png";

function Navbar() {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <nav className="modern-navbar">
            {/* Top Bar with Contact Info */}
            <div className="navbar-top">
                <div className="navbar-top-content">
                    <div className="contact-quick-links">
                        <a href="tel:+97143272129" className="contact-link">
                            <Phone size={16} />
                            <span>+971-4-3272129</span>
                        </a>
                        <a href="mailto:relocation@ipanacllc.com" className="contact-link">
                            <Mail size={16} />
                            <span>relocation@ipanacllc.com</span>
                        </a>
                        <div className="contact-link">
                            <MapPin size={16} />
                            <span>Dubai, UAE</span>
                        </div>
                    </div>
                    
                    <div className="social-links">
                        <a href="https://www.instagram.com/ipanacrelocation/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <Instagram size={16} />
                        </a>
                        <a href="https://www.linkedin.com/company/ipanac-relocation/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <Linkedin size={16} />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61574697290210/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <Facebook size={16} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="navbar-main">
                <div className="navbar-main-content">
                    {/* Logo */}
                    <Link to="/" className="navbar-logo">
                        <img src={img} alt="IPANAC Relocation" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="nav-menu">
                        <Link to="/about" className="nav-link">About Us</Link>
                        <Link to="/services" className="nav-link">Services</Link>
                        <Link to="/contact" className="nav-link">Contact Us</Link>
                    </div>

                    {/* CTA Buttons */}
                    <div className="nav-actions">
                        <Link to="/enquire" className="btn-enquire">Enquire</Link>
                        <Link to="/quickquote" className="btn-quote">Quick Quote</Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="mobile-toggle" onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileDrawerOpen ? 'active' : ''}`}>
                <div className="mobile-menu-content">
                    <Link to="/about" className="mobile-nav-link" onClick={toggleNavbar}>About Us</Link>
                    <Link to="/services" className="mobile-nav-link" onClick={toggleNavbar}>Services</Link>
                    <Link to="/contact" className="mobile-nav-link" onClick={toggleNavbar}>Contact Us</Link>
                    
                    <div className="mobile-actions">
                        <Link to="/enquire" className="mobile-btn-enquire" onClick={toggleNavbar}>Enquire</Link>
                        <Link to="/quickquote" className="mobile-btn-quote" onClick={toggleNavbar}>Quick Quote</Link>
                    </div>

                    <div className="mobile-contact">
                        <a href="tel:+97143272129" className="mobile-contact-item">
                            <Phone size={18} />
                            <span>+971-4-3272129</span>
                        </a>
                        <a href="mailto:relocation@ipanacllc.com" className="mobile-contact-item">
                            <Mail size={18} />
                            <span>relocation@ipanacllc.com</span>
                        </a>
                    </div>

                    <div className="mobile-social">
                        <a href="https://www.instagram.com/ipanacrelocation/" target="_blank" rel="noopener noreferrer" className="mobile-social-link">
                            <Instagram size={20} />
                        </a>
                        <a href="https://www.linkedin.com/company/ipanac-relocation/" target="_blank" rel="noopener noreferrer" className="mobile-social-link">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61574697290210/" target="_blank" rel="noopener noreferrer" className="mobile-social-link">
                            <Facebook size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
