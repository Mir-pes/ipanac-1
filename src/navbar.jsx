import React from "react";
import "./Navbar.css"; // Import the CSS file
import {Menu , X} from "lucide-react";
import { useState } from "react";
import {Link} from "react-router-dom";
import img from "./assets/IPANAC.jpg";


function Navbar() {
    const [mobileDrawerOpen , setMobileDrawerOpen] = useState(false);
    
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }
    
    return (
        <nav className="navbar">
            <div className="container">
                {/* Contact Info Section */}
                <div className="contact-info">
                    <span className="address">104 | Khalid Bin Al Waleed Bldg | Near Sharaf DG Metro Stn | Bur Dubai | P.O.Box – 111923 | Dubai | UAE</span>
                    <span className="phone">+971-4-3272129</span>
                    <span className="emailid">relocation@ipanacllc.com</span>
                </div>

                {/* Navbar Content */}
                <div className={`navbar-content ${mobileDrawerOpen ? 'mobileDrawerOpen' : ''}`}>
                    {/* Logo and Title */}
                    <div className="logo-container">
                        <img className="logo" src={img} alt="logo" />
                        <Link to="/" className="title">IPANAC Relocation</Link>
                        <div className="mobile-menu-button">
                            <button onClick={toggleNavbar}>
                                {mobileDrawerOpen ? <X/> : <Menu/>}
                            </button>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="nav-links">
                        <Link to="/about" className="nav-item">About Us</Link>
                        <Link to="/services" className="nav-item">Services</Link>
                        {/* <Link to="/locations" className="nav-item">Locations</Link> */}
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
