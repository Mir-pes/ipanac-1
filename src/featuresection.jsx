import { features } from "./constants";
import "./FeatureSection.css";
import { ArrowRight } from "lucide-react";

function FeatureSection() {
  return (
    <div className="services-section">
      <div className="services-container">
        <div className="services-header" data-aos="fade-up">
          <span className="services-badge">Our Services</span>
          <h2 className="services-heading">
            Easily transit from
            <span className="services-gradient-text"> one Location to another</span>
          </h2>
          <p className="services-subheading">
            Comprehensive relocation solutions tailored to your needs
          </p>
        </div>
        
        <div className="services-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="service-card" 
              data-aos="fade-up" 
              data-aos-delay={100 + index * 50}
            >
              <div className="service-image-wrapper">
                <img 
                  src={feature.image} 
                  alt={feature.text} 
                  className="service-image" 
                />
                <div className="service-image-overlay"></div>
              </div>
              
              <div className="service-content">
                <h3 className="service-title">{feature.text}</h3>
                <p className="service-description">{feature.description}</p>
                
                <a href="#" className="service-learn-more">
                  Learn More
                  <ArrowRight className="learn-more-icon" size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;