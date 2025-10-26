import { CheckCircle2, Target, Users, Shield, Award } from "lucide-react";
import Img from "./assets/src2.jpg";
import { checklistItems } from "./constants";
import "./WhyChoose.css";
import { Link } from "react-router-dom";

function Workflow() {
  return (
    <div className="workflow-container">
      <div className="mission-vision-section">
        <div className="mission-card modern-card">
          <div className="card-icon-wrapper mission-icon">
            <Target size={32} />
          </div>
          <h3 className="card-heading">Our Mission</h3>
          <p className="card-description">
            "At iPanac Relocation, we simplify the relocation journey by providing personalized, efficient, and reliable services. Our goal is to ensure a smooth transition for individuals and businesses, helping them settle with ease and confidence in their new home. Through expertise, dedication, and innovation, we make every move a positive experience."
          </p>
        </div>

        <div className="vision-card modern-card">
          <div className="card-icon-wrapper vision-icon">
            <Award size={32} />
          </div>
          <h3 className="card-heading">Our Vision</h3>
          <p className="card-description">
            "To be the leading global relocation partner, transforming the way people and businesses move by providing seamless, stress-free, and rewarding experiences. We envision a world where relocation is not a challenge but an opportunity—where individuals and organizations transition smoothly into new environments with confidence and ease."
          </p>
        </div>
      </div>

      <div className="section-header">
        <h2 className="section-title">
          Why Choose <span className="gradient-text-section">iPANAC?</span>
        </h2>
        <p className="section-subtitle">
          Experience excellence in every aspect of your relocation journey
        </p>
      </div>
      
      <div className="why-choose-content">
        <div className="image-showcase">
          <div className="image-wrapper">
            <img 
              src={Img} 
              alt="Relocation Services" 
              className="showcase-image"
            />
            <div className="image-overlay">
              <div className="overlay-badge">
                <Users size={24} />
                <div>
                  <div className="overlay-number">15+</div>
                  <div className="overlay-text">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="features-grid">
          {checklistItems.map((item, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon-wrapper">
                <CheckCircle2 size={24} />
              </div>
              <div className="feature-content">
                <h4 className="feature-title">{item.title}</h4>
                <p className="feature-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="trust-indicators">
        <div className="trust-item">
          <Shield size={32} />
          <h4>Fully Insured</h4>
          <p>Complete protection for your belongings</p>
        </div>
        <div className="trust-item">
          <Award size={32} />
          <h4>Certified Team</h4>
          <p>Professional and trained specialists</p>
        </div>
        <div className="trust-item">
          <Users size={32} />
          <h4>24/7 Support</h4>
          <p>Always here when you need us</p>
        </div>
      </div>

      <div className="cta-section">
        <div className="cta-content">
          <h3 className="cta-heading">Ready to Start Your Journey?</h3>
          <p className="cta-text">Get a free consultation and personalized quote today</p>
        </div>
        <Link to="/contact" className="cta-button">
          Get Free Survey & Quote
          <span className="button-arrow">→</span>
        </Link>
      </div>
    </div>
  );
}

export default Workflow;
