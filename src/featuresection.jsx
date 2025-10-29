import { features } from "./constants";
import "./FeatureSection.css";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";

function FeatureSection() {
  return (
    <div className="modern-services-wrapper">
      <div className="floating-elements">
        <div className="float-circle float-1"></div>
        <div className="float-circle float-2"></div>
        <div className="float-circle float-3"></div>
      </div>

      <div className="services-hero-section">
        <div className="hero-content-center">
          <div className="services-badge-modern">
            <Sparkles size={18} strokeWidth={2.5} />
            <span>Premium Services</span>
            <div className="badge-glow"></div>
          </div>
          
          <h1 className="services-mega-title">
            <span className="title-line-1">Seamlessly Relocate</span>
            <span className="title-line-2">
              From <span className="gradient-flow">One Location</span>
            </span>
            <span className="title-line-3">To Another</span>
          </h1>
          
          <p className="services-hero-description">
            Experience world-class relocation solutions crafted with precision, 
            care, and expertise. Your journey to a new destination starts here.
          </p>

          <div className="stats-row">
            <div className="stat-item">
              <div className="stat-number">
                <TrendingUp size={20} />
                <span>1000+</span>
              </div>
              <div className="stat-label">Successful Moves</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">
                <Sparkles size={20} />
                <span>100%</span>
              </div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">
                <TrendingUp size={20} />
                <span>10+</span>
              </div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-showcase-section">
        <div className="services-container-modern">
          <div className="services-grid-premium">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="service-card-modern"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="card-glow-effect"></div>
                
                <div className="service-image-container">
                  <div className="image-overlay-gradient"></div>
                  <img 
                    src={feature.image} 
                    alt={feature.text} 
                    className="service-image-modern" 
                  />
                  <div className="image-shine"></div>
                </div>
                
                <div className="service-content-modern">
                  <div className="content-header">
                    <h3 className="service-title-modern">{feature.text}</h3>
                    <div className="title-underline"></div>
                  </div>
                  
                  <p className="service-description-modern">
                    {feature.description}
                  </p>
                  
                  <div className="card-footer">
                    <a href="#" className="service-cta-modern">
                      <span>Explore Service</span>
                      <div className="cta-icon-wrapper">
                        <ArrowRight className="cta-icon" size={18} strokeWidth={2.5} />
                      </div>
                    </a>
                  </div>
                </div>

                <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
              </div>
            ))}
          </div>

          <div className="services-bottom-cta">
            <div className="bottom-cta-content">
              <h3>Need a Custom Solution?</h3>
              <p>We're here to create a personalized relocation plan just for you</p>
            </div>
            <a href="#contact" className="bottom-cta-button">
              <span>Get in Touch</span>
              <ArrowRight size={20} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;