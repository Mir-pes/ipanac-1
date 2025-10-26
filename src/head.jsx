import "./hero.css";
import { ArrowRight, Package, Globe, Truck } from "lucide-react";
import { Link } from "react-router-dom";

function Head(){
    return(
      <div className="modern-hero-container">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Your Trusted Relocation Partner
          </div>
          
          <h1 className="modern-hero-title">
            Your Journey Begins
            <span className="gradient-text-hero"> With Confidence</span>
          </h1>
          
          <p className="modern-hero-subtitle">
            Experience stress-free relocation with iPANAC. Whether moving across the globe 
            or within the GCC, we deliver personalized services tailored to your unique needs 
            with professionalism, care, and expertise.
          </p>

          <div className="hero-cta-container">
            <Link to="/quickquote" className="primary-cta">
              Get Free Quote
              <ArrowRight className="cta-icon" size={20} />
            </Link>
            <Link to="/services" className="secondary-cta">
              Our Services
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <Package className="stat-icon" size={24} />
              <div className="stat-content">
                <div className="stat-number">10,000+</div>
                <div className="stat-label">Successful Moves</div>
              </div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <Globe className="stat-icon" size={24} />
              <div className="stat-content">
                <div className="stat-number">50+</div>
                <div className="stat-label">Countries Covered</div>
              </div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <Truck className="stat-icon" size={24} />
              <div className="stat-content">
                <div className="stat-number">100%</div>
                <div className="stat-label">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    );
}

export default Head;
