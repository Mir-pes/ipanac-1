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
                            <span>104 | Khalid Bin Al Waleed Building | Dubai | UAE</span>
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
                        
                        {/* Get a Proposal Dropdown */}
                        <div 
                            className="nav-dropdown"
                            onMouseEnter={() => setProposalDropdownOpen(true)}
                            onMouseLeave={() => setProposalDropdownOpen(false)}
                        >
                            <button className="nav-link dropdown-trigger">
                                Get a Proposal
                                <ChevronDown size={16} className={`dropdown-icon ${proposalDropdownOpen ? 'open' : ''}`} />
                            </button>
                            
                            <div className={`dropdown-menu ${proposalDropdownOpen ? 'show' : ''}`}>
                                <Link to="/enquire" className="dropdown-item">Home Relocation</Link>
                                <Link to="/contact" className="dropdown-item">Office Relocation</Link>
                                <Link to="/quickquote" className="dropdown-item">International Relocation</Link>
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
                    
                    {/* Get a Proposal Mobile Dropdown */}
                    <div className="mobile-dropdown">
                        <button 
                            className="mobile-nav-link dropdown-trigger-mobile"
                            onClick={toggleProposalDropdown}
                        >
                            Get a Proposal
                            <ChevronDown size={16} className={`dropdown-icon ${proposalDropdownOpen ? 'open' : ''}`} />
                        </button>
                        
                        <div className={`mobile-dropdown-menu ${proposalDropdownOpen ? 'show' : ''}`}>
                            <Link to="/enquire" className="mobile-dropdown-item" onClick={toggleNavbar}>Enquire</Link>
                            <Link to="/contact" className="mobile-dropdown-item" onClick={toggleNavbar}>Contact Us</Link>
                            <Link to="/quickquote" className="mobile-dropdown-item" onClick={toggleNavbar}>Quick Quote</Link>
                        </div>
                    </div>
                    
                    <div className="mobile-actions">
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
