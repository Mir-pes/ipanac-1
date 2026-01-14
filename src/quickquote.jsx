import { useState } from "react";
import "./enquire.css"; 
import { User, Mail, Phone, Calendar, MapPin, Zap, Package, FileText, Building2, Smartphone, Sofa, Plug, Palette, Car } from "lucide-react";  
import logo from "./assets/IpanacRelocationLogo.png";
import { submitForm } from './services/api';

function Quote() {
    const [locationType, setLocationType] = useState("local");
    const [selectedItems, setSelectedItems] = useState([]);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        relocationType: 'local',
        baseLocation: '',
        destination: '',
        movingDate: '',
        details: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    
    const internationalCountries = ["United Arab Emirates", "United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "Singapore", "India", "Pakistan", "Saudi Arabia", "Qatar", "Bahrain", "Kuwait", "Oman", "Egypt", "Jordan", "Lebanon", "Turkey", "China", "Japan", "South Korea", "Malaysia", "Philippines", "Thailand", "Indonesia"];
    
    const places = internationalCountries;
    
    const items = [
        { id: "electronics", label: "Electronics", icon: Smartphone },
        { id: "furniture", label: "Furniture", icon: Sofa },
        { id: "appliances", label: "Appliances", icon: Plug },
        { id: "decor", label: "Decor", icon: Palette },
        { id: "vehicle", label: "Vehicle", icon: Car }
    ];

    const toggleItem = (itemId) => {
        setSelectedItems(prev => 
            prev.includes(itemId) 
                ? prev.filter(id => id !== itemId)
                : [...prev, itemId]
        );
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleLocationTypeChange = (e) => {
        const newType = e.target.value;
        setLocationType(newType);
        setFormData(prev => ({
            ...prev,
            relocationType: newType,
            baseLocation: '',
            destination: ''
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const submitData = {
                ...formData,
                items: selectedItems
            };
            await submitForm('international-relocation-dubai', submitData);
            setSubmitStatus({ type: 'success', message: 'Thank you! Our team will get back to you within 24 hours with your quote.' });
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                relocationType: 'local',
                baseLocation: '',
                destination: '',
                movingDate: '',
                details: ''
            });
            setSelectedItems([]);
            setLocationType('local');
        } catch (error) {
            setSubmitStatus({ type: 'error', message: 'Failed to submit form. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
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
                        <h2>International Relocation</h2>
                        <p>Let's make your move seamless and stress-free</p>
                    </div>

                    <form className="modern-form" onSubmit={handleSubmit}>
                        {submitStatus && (
                            <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-error'}`}>
                                {submitStatus.message}
                            </div>
                        )}
                        
                        <div className="form-grid">
                            <div className="modern-input-group">
                                <label className="modern-label">
                                    <User size={18} />
                                    <span>Full Name</span>
                                </label>
                                <input 
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
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
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
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
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
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
                                            <span className="item-icon"><item.icon size={24} color="#E63946" /></span>
                                            <span className="item-label">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="modern-input-group">
                                <label className="modern-label">
                                    <MapPin size={18} />
                                    <span>From</span>
                                </label>
                                <select 
                                    className="modern-select"
                                    name="baseLocation"
                                    value={formData.baseLocation}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select your origin</option>
                                    {places.map((place, index) => (
                                        <option key={index} value={place}>{place}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="modern-input-group">
                                <label className="modern-label">
                                    <MapPin size={18} />
                                    <span>To</span>
                                </label>
                                <select 
                                    className="modern-select"
                                    name="destination"
                                    value={formData.destination}
                                    onChange={handleChange}
                                    required
                                >
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
                                    name="movingDate"
                                    value={formData.movingDate}
                                    onChange={handleChange}
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
                                    name="details"
                                    value={formData.details}
                                    onChange={handleChange}
                                    className="modern-textarea"
                                    rows={5}
                                    placeholder="Provide any additional information about your move, special items, or specific requirements..."
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-footer-modern">
                            <button type="submit" className="submit-btn-modern quote-submit" disabled={isSubmitting}>
                                <span>{isSubmitting ? 'Submitting...' : 'Submit Your Interest'}</span>
                                <Zap size={20} />
                            </button>
                            
                            <p className="form-note">
                                Our Team will get back to you within 24 hours
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
                                <span>+971-527155024</span>
                            </div>
                            <div className="contact-item">
                                <Mail size={18} />
                                <span>relocation@ipanacllc.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); 
}  

export default Quote;
