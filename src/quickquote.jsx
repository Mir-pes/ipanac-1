import { useState } from "react";
import "./enquire.css"; 
import { User, Mail, Phone, Calendar, MapPin, Zap, Package, FileText, Building2 } from "lucide-react";  
import logo from "./assets/IpanacRelocationLogo.png";

function Quote() {
    const [locationType, setLocationType] = useState("local");
    const [selectedItems, setSelectedItems] = useState([]);
    
    const localPlaces = ["Ajman", "Ras Al Khaimah", "Abu Dhabi", "Dubai", "Sharjah", "Fujairah", "Umm Al Quwain"];
    const internationalCountries = ["C1", "C2", "C3", "C4", "C5", "C6", "C7"];
    
    const places = locationType === "local" ? localPlaces : internationalCountries;
    
    const items = [
        { id: "electronics", label: "Electronics", icon: "📱" },
        { id: "furniture", label: "Furniture", icon: "🛋️" },
        { id: "appliances", label: "Appliances", icon: "🔌" },
        { id: "decor", label: "Decor", icon: "🎨" }
    ];

    const toggleItem = (itemId) => {
        setSelectedItems(prev => 
            prev.includes(itemId) 
                ? prev.filter(id => id !== itemId)
                : [...prev, itemId]
        );
    };
    
    return (        
        <div className="enquire-page-modern">
            <div className="enquire-hero-section">
                <div className="hero-gradient-bg">
                    <div className="gradient-orb orb-1"></div>
                    <div className="gradient-orb orb-2"></div>
                </div>
                
                <div className="enquire-hero-content">
                    <div className="hero-badge-enquire">
                        <Zap size={16} />
                        <span>Fast & Easy</span>
                    </div>
                    
                    <h1 className="enquire-title">
                        Get Your <span className="text-gradient">Instant Quote</span>
                    </h1>
                    
                    <p className="enquire-subtitle">
                        Receive a customized quote in minutes - no hidden fees, transparent pricing
                    </p>
                </div>
            </div>

            <div className="enquire-container-modern">
                <div className="enquire-form-card">
                    <div className="form-header-modern">
                        <div className="form-icon-badge quote-badge">
                            <Zap size={28} />
                        </div>
                        <h2>Quick Quote Request</h2>
                        <p>Get an accurate estimate for your relocation needs</p>
                    </div>

                    <form className="modern-form">
                        <div className="form-grid">
                            <div className="modern-input-group">
                                <label className="modern-label">
                                    <User size={18} />
                                    <span>Full Name</span>
                                </label>
                                <input 
                                    type="text" 
                                    className="modern-input" 
                                    placeholder="Enter your name" 
                                    required
                                />
                            </div>

                            <div className="modern-input-group">
                                <label className="modern-label">
                                    <Mail size={18} />
                                    <span>Email Address</span>
                                </label>
                                <input 
                                    type="email" 
                                    className="modern-input" 
                                    placeholder="your.email@example.com" 
                                    required
                                />
                            </div>

                            <div className="modern-input-group full-width">
                                <label className="modern-label">
                                    <Phone size={18} />
                                    <span>Phone Number</span>
                                </label>
                                <input 
                                    type="tel" 
                                    className="modern-input" 
                                    placeholder="+971 XX XXX XXXX" 
                                    required
                                />
                            </div>

                            <div className="modern-input-group full-width">
                                <label className="modern-label">
                                    <Package size={18} />
                                    <span>Items to Move</span>
                                </label>
                                <div className="items-grid">
                                    {items.map(item => (
                                        <div 
                                            key={item.id}
                                            className={`item-card ${selectedItems.includes(item.id) ? 'selected' : ''}`}
                                            onClick={() => toggleItem(item.id)}
                                        >
                                            <input 
                                                type="checkbox" 
                                                checked={selectedItems.includes(item.id)}
                                                onChange={() => {}}
                                                className="item-checkbox"
                                            />
                                            <span className="item-icon">{item.icon}</span>
                                            <span className="item-label">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="modern-input-group">
                                <label className="modern-label">
                                    <MapPin size={18} />
                                    <span>Origin Type</span>
                                </label>
                                <div className="radio-group-modern">
                                    <label className="radio-option">
                                        <input 
                                            type="radio" 
                                            name="locationType" 
                                            value="local" 
                                            checked={locationType === "local"}
                                            onChange={() => setLocationType("local")}
                                            required
                                        />
                                        <span className="radio-custom"></span>
                                        <span className="radio-label">Local</span>
                                    </label>
                                </div>
                            </div>

                            <div className="modern-input-group">
                                <label className="modern-label">
                                    <MapPin size={18} />
                                    <span>Base Location</span>
                                </label>
                                <select className="modern-select" required>
                                    <option value="">Select your origin</option>
                                    {places.map((place, index) => (
                                        <option key={index} value={place}>{place}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="modern-input-group">
                                <label className="modern-label">
                                    <MapPin size={18} />
                                    <span>Destination</span>
                                </label>
                                <select className="modern-select" required>
                                    <option value="">Select destination</option>
                                    {places.map((place, index) => (
                                        <option key={index} value={place}>{place}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="modern-input-group">
                                <label className="modern-label">
                                    <Calendar size={18} />
                                    <span>Moving Date</span>
                                </label>
                                <input 
                                    type="date" 
                                    className="modern-input" 
                                    required
                                />
                            </div>

                            <div className="modern-input-group full-width">
                                <label className="modern-label">
                                    <FileText size={18} />
                                    <span>Additional Details</span>
                                </label>
                                <textarea 
                                    className="modern-textarea"
                                    rows={5}
                                    placeholder="Provide any additional information about your move, special items, or specific requirements..."
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-footer-modern">
                            <button type="submit" className="submit-btn-modern quote-submit">
                                <span>Get Instant Quote</span>
                                <Zap size={20} />
                            </button>
                            
                            <p className="form-note">
                                You'll receive your quote via email within 15 minutes
                            </p>
                        </div>
                    </form>
                </div>

                <div className="enquire-info-sidebar">
                    <div className="info-card quote-info">
                        <img src={logo} alt="iPANAC Relocation" className="sidebar-logo" />
                        <h3>What's Included?</h3>
                        <ul className="benefits-list">
                            <li>
                                <div className="benefit-icon">✓</div>
                                <span>Detailed Cost Breakdown</span>
                            </li>
                            <li>
                                <div className="benefit-icon">✓</div>
                                <span>No Hidden Charges</span>
                            </li>
                            <li>
                                <div className="benefit-icon">✓</div>
                                <span>Flexible Payment Options</span>
                            </li>
                            <li>
                                <div className="benefit-icon">✓</div>
                                <span>Free Consultation</span>
                            </li>
                            <li>
                                <div className="benefit-icon">✓</div>
                                <span>Quick Response Time</span>
                            </li>
                        </ul>
                    </div>

                    <div className="contact-card">
                        <h4>Questions?</h4>
                        <p>We're here to help you</p>
                        <div className="contact-info">
                            <div className="contact-item">
                                <Phone size={18} />
                                <span>+971 XX XXX XXXX</span>
                            </div>
                            <div className="contact-item">
                                <Mail size={18} />
                                <span>quotes@ipanac.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); 
}  

export default Quote;
