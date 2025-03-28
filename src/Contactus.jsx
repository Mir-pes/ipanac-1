import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import './contactus.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <div className="contact-page">
      <div className="contact-wrapper">
        <div className="contact-info-section">
          <h2>Contact Information</h2>
          
          <div className="contact-box">
            <div className="contact-box-icon">
              <MapPin size={24} />
            </div>
            <div className="contact-box-text">
              <h3>Address</h3>
              <p>Office 104 | Khalid Bin Al Waleed Bldg | Dubai | UAE</p>
            </div>
          </div>

          <div className="contact-box">
            <div className="contact-box-icon">
              <Phone size={24} />
            </div>
            <div className="contact-box-text">
              <h3>Phone</h3>
              <p>+971-4-3272129 | +971-52-699-8071</p>
            </div>
          </div>

          <div className="contact-box">
            <div className="contact-box-icon">
              <Mail size={24} />
            </div>
            <div className="contact-box-text">
              <h3>Email</h3>
              <p>relocation@ipanacllc.com</p>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-group">
              <label>Your Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required 
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
