import React, { useState } from 'react';
import { MapPin, Phone, Mail, Building2, Send, User, FileText } from 'lucide-react';
import logo from './assets/IpanacRelocationLogo.png';
import './enquire.css';
import { submitForm } from './services/api';

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    baseLocation: '',
    baseLocationDetails: '',
    destination: '',
    destinationDetails: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const places = ["Ajman", "Ras Al Khaimah", "Abu Dhabi", "Dubai", "Sharjah", "Fujairah", "Umm Al Quwain"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await submitForm('contact', formData);
      setSubmitStatus({ type: 'success', message: 'Thank you! We will contact you soon.' });
      setFormData({ fullName: '', email: '', phone: '', baseLocation: '', baseLocationDetails: '', destination: '', destinationDetails: '', message: '' });
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
                        <Building2 size={16} />
                        <span>Get Started Today</span>
                    </div>
                    
                    <h1 className="enquire-title">
                        Begin Your <span className="text-gradient">Relocation Journey</span>
                    </h1>
                    
                    <p className="enquire-subtitle">
                        Fill out the form below and our expert team will get back to you within 24 hours
                    </p>
                </div>
            </div>

            <div className="enquire-container-modern">
                <div className="enquire-form-card">
                    <div className="form-header-modern">
                        <div className="form-icon-badge">
                            <Send size={28} />
                        </div>
                        <h2>Register Your Interest</h2>
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
                                    placeholder="Enter your full name" 
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

                            <div className="modern-input-group">
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

                            <div className="modern-input-group">
                                <label className="modern-label">
                                    <MapPin size={18} />
                                    <span>Moving From</span>
                                </label>
                                <select 
                                    className="modern-select"
                                    name="baseLocation"
                                    value={formData.baseLocation}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select City</option>
                                    {places.map((place, index) => (
                                        <option key={index} value={place}>{place}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="modern-input-group">
                                <label className="modern-label">
                                    <MapPin size={18} />
                                    <span>Area / Building / Community</span>
                                </label>
                                <input 
                                    type="text"
                                    name="baseLocationDetails"
                                    value={formData.baseLocationDetails}
                                    onChange={handleChange}
                                    className="modern-input" 
                                    placeholder="Area / Building / Community" 
                                    required
                                />
                            </div>

                            <div className="modern-input-group">
                                <label className="modern-label">
                                    <MapPin size={18} />
                                    <span>Moving To</span>
                                </label>
                                <select 
                                    className="modern-select"
                                    name="destination"
                                    value={formData.destination}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select City</option>
                                    {places.map((place, index) => (
                                        <option key={index} value={place}>{place}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="modern-input-group">
                                <label className="modern-label">
                                    <MapPin size={18} />
                                    <span>Area / Building / Community</span>
                                </label>
                                <input 
                                    type="text"
                                    name="destinationDetails"
                                    value={formData.destinationDetails}
                                    onChange={handleChange}
                                    className="modern-input" 
                                    placeholder="Area / Building / Community" 
                                    required
                                />
                            </div>

                            
                            <div className="modern-input-group full-width">
                                <label className="modern-label">
                                    <FileText size={18} />
                                    <span>Please enter your Description Of Items </span>
                                </label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="modern-textarea"
                                    rows={5}
                                    placeholder="Tell us about the items you're moving, any special requirements, or questions you may have..."
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-footer-modern">
                            <button type="submit" className="submit-btn-modern" disabled={isSubmitting}>
                                <span>{isSubmitting ? 'Submitting...' : 'Submit Registration'}</span>
                                <Send size={20} />
                            </button>
                            
                            <p className="form-note">
                                By submitting this form, you agree to our terms and privacy policy
                            </p>
                        </div>
                    </form>
                </div>

                <div className="enquire-info-sidebar">
                    <div className="info-card">
                        <img src={logo} alt="iPANAC Relocation" className="sidebar-logo" />
                        <h3>Why Choose iPANAC?</h3>
                        <ul className="benefits-list">
                            <li>
                                <div className="benefit-icon">✓</div>
                                <span>20+ Years of Experience</span>
                            </li>
                            <li>
                                <div className="benefit-icon">✓</div>
                                <span>Fully Insured Services</span>
                            </li>
                            <li>
                                <div className="benefit-icon">✓</div>
                                <span>24/7 Customer Support</span>
                            </li>
                            <li>
                                <div className="benefit-icon">✓</div>
                                <span>Competitive Pricing</span>
                            </li>
                            <li>
                                <div className="benefit-icon">✓</div>
                                <span>Professional Team</span>
                            </li>
                        </ul>
                    </div>

                    <div className="contact-card">
                        <h4>Need Help?</h4>
                        <p>Our team is here to assist you</p>
                        <div className="contact-info">
                            <div className="contact-item">
                                <Phone size={18} />
                                <span>+971-4-3272129 </span>
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

export default ContactUs;
