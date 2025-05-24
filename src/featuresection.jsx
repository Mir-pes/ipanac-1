import { features } from "./constants";
import "./FeatureSection.css";

function FeatureSection() {
  return (
    <div className="feature-section">
      <div className="feature-container" data-aos="fade-up">
        <span className="service-badge" data-aos="zoom-in" data-aos-delay="100">
          Our Services
        </span>
        
        <h2 className="heading" data-aos="fade-up" data-aos-delay="200">
          Easily transit from 
          <span className="gradient-text">
            {" "}one Location to another
          </span>
        </h2>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item" data-aos="fade-up" data-aos-delay={300 + index * 100}>
              <h5 className="feature-title">{feature.text}</h5>
              <div className="flex">
                <div className="icon-container">
                  <img src={feature.image} alt={feature.text} className="feature-image" />
                </div>
              </div>
              
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
