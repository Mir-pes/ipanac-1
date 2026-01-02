import { resourcesLinks, platformLinks, communityLinks } from "./constants";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import "./footer.css";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="footer-wrapper">
            <footer className="modern-footer">
                <div className="footer-container">
                    <div className="footer-top">
                        <div className="footer-brand">
                            <h3 className="brand-name">IPANAC Relocation</h3>
                            <p className="brand-tagline">Smooth Move. Easy Relocation</p>
                            <p className="brand-description">
                                Your trusted partner for seamless relocation services across the globe.
                            </p>
                            <div className="contact-details">
                                <div className="contact-item-footer">
                                    <MapPin size={18} className="footer-icon" />
                                    <a href="https://www.google.com/maps/place/25%C2%B006'33.0%22N+55%C2%B012'15.2%22E/@25.109167,55.20423,18z/data=!4m4!3m3!8m2!3d25.109167!4d55.20423?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>
                                        <span>Barsha Horizon Building - Office # 101 1st floor<br/>Al Barsha 1 - Al Barsha - Dubai</span>
                                    </a>
                                </div>
                                <div className="contact-item-footer">
                                    <Phone size={18} className="footer-icon" />
                                    <span>+971-527155024</span>
                                </div>
                                <div className="contact-item-footer">
                                    <Mail size={18} className="footer-icon" />
                                    <span>relocation@ipanacllc.com</span>
                                </div>
                            </div>
                        </div>

                        <div className="footer-links-section">
                            <div className="footer-column">
                                <h4 className="footer-heading">Explore</h4>
                                <ul className="footer-list">
                                    {resourcesLinks.map((link, index) => (
                                        <li key={index}>
                                            <a className="footer-link" href={link.href}>
                                                <span className="link-arrow">→</span>
                                                {link.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="footer-column">
                                <h4 className="footer-heading">Platform</h4>
                                <ul className="footer-list">
                                    {platformLinks.map((link, index) => (
                                        <li key={index}>
                                            <a className="footer-link" href={link.href}>
                                                <span className="link-arrow">→</span>
                                                {link.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="footer-column">
                                <h4 className="footer-heading">Additional Services</h4>
                                <ul className="footer-list">
                                    {communityLinks.map((link, index) => (
                                        <li key={index}>
                                            <a className="footer-link" href={link.href}>
                                                <span className="link-arrow">→</span>
                                                {link.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="copyright">
                            <p>© 2025 IPANAC Relocation. All rights reserved.</p>
                        </div>
                        <button onClick={scrollToTop} className="back-to-top" aria-label="Back to top">
                            <ArrowUp size={20} />
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
