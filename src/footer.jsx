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
                                    <span>104 | Khalid Bin Al Waleed Building<br/>Dubai, UAE</span>
                                </div>
                                <div className="contact-item-footer">
                                    <Phone size={18} className="footer-icon" />
                                    <span>+971-4-3272129</span>
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
                            <p>© 2024 IPANAC Relocation. All rights reserved.</p>
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
