import React, { useState } from "react";
import "./Navbar.css";
import { Menu, X, Instagram, Linkedin, Facebook, MapPin, Phone, Mail, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import img from "./assets/IpanacRelocationLogo.png";

function Navbar() {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [proposalDropdownOpen, setProposalDropdownOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const toggleProposalDropdown = () => {
        setProposalDropdownOpen(!proposalDropdownOpen);
    };

    return (
        <nav className="modern-navbar">
            {/* Top Bar with Contact Info */}
            <div className="navbar-top">
                <div className="navbar-top-content">
                    <div className="contact-quick-links">
                        <a href="tel:+971527155024" className="contact-link">
                            <Phone size={16} />
                            <span>+971-527155024</span>
                        </a>
                        <a href="mailto:relocation@ipanacllc.com" className="contact-link">
                            <Mail size={16} />
                            <span>relocation@ipanacllc.com</span>
                        </a>
                        <a href="https://www.google.com/maps/place/25%C2%B006'33.0%22N+55%C2%B012'15.2%22E/@25.109167,55.20423,18z/data=!4m4!3m3!8m2!3d25.109167!4d55.20423?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D" target="_blank" rel="noopener noreferrer" className="contact-link">
                            <MapPin size={16} />
                            <span>Barsha Horizon Building - Office # 101 1st floor - Al Barsha 1 - Al Barsha - Dubai</span>
                        </a>
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
                        
                        {/* Get a Free Quote Dropdown */}
                        <div 
                            className="nav-dropdown"
                            onMouseEnter={() => setProposalDropdownOpen(true)}
                            onMouseLeave={() => setProposalDropdownOpen(false)}
                        >
                            <button className="nav-link dropdown-trigger">
                                Get a Free Quote
                                <ChevronDown size={16} className={`dropdown-icon ${proposalDropdownOpen ? 'open' : ''}`} />
                            </button>
                            
                            <div className={`dropdown-menu ${proposalDropdownOpen ? 'show' : ''}`}>
                                <Link to="/home-relocation-dubai" className="dropdown-item">Home Relocation</Link>
                                <Link to="/office-relocation-dubai" className="dropdown-item">Office Relocation</Link>
                                <Link to="/international-relocation-dubai" className="dropdown-item">International Relocation</Link>
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="nav-actions">
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
                    
                    {/* Get a Free Quote Mobile Dropdown */}
                    <div className="mobile-dropdown">
                        <button 
                            className="mobile-nav-link dropdown-trigger-mobile"
                            onClick={toggleProposalDropdown}
                        >
                            Get a Free Quote
                            <ChevronDown size={16} className={`dropdown-icon ${proposalDropdownOpen ? 'open' : ''}`} />
                        </button>
                        
                        <div className={`mobile-dropdown-menu ${proposalDropdownOpen ? 'show' : ''}`}>
                            <Link to="/home-relocation-dubai" className="mobile-dropdown-item" onClick={toggleNavbar}>Home Relocation</Link>
                            <Link to="/office-relocation-dubai" className="mobile-dropdown-item" onClick={toggleNavbar}>Office Relocation</Link>
                            <Link to="/international-relocation-dubai" className="mobile-dropdown-item" onClick={toggleNavbar}>International Relocation</Link>
                        </div>
                    </div>

                    <div className="mobile-contact">
                        <a href="tel:+971527155024" className="mobile-contact-item">
                            <Phone size={18} />
                            <span>+971527155024</span>
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
