import React, { useEffect } from 'react';
import "./FeatureSection.css";
import { ArrowRight, Sparkles, TrendingUp, Star, MapPin, Globe2, Package, Building2, Shield, CheckCircle2, Clock, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

// Import service images
import internationalRelocation from './assets/Interantional.png';
import Corporate from './assets/corporate.png';
import Local from './assets/local.png';
import pau from './assets/PAU.png';
import Storage from './assets/storage.png';

function FeatureSection() {
  useEffect(() => {
    document.title = 'Services - IPANAC Relocation Dubai | Local, Domestic & International Moving Services';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive relocation services in Dubai, UAE. Local relocation within Dubai, UAE domestic relocation, international relocation, home relocation, office relocation, packing & unpacking, storage solutions, and vehicle relocation. Get free consultation today!');
    }
  }, []);

  return (
    <div className="services-page-modern">
      {/* Hero Section */}
      <section className="services-hero-section">
        <div className="services-hero-background"></div>
        <div className="services-hero-container">
          <div className="services-hero-badge">
            <Sparkles size={18} strokeWidth={2.5} />
            <span>Premium Relocation Services</span>
          </div>
          
          <h2 className="services-hero-title">
            Comprehensive <span className="gradient-text">Relocation Services in Dubai, UAE</span>
          </h2>
          
          <p className="services-hero-subtitle">
            From local moves within Dubai to international relocations, we offer end-to-end relocation solutions 
            tailored to your needs. Our professional team handles everything from packing and unpacking to storage 
            and vehicle relocation, ensuring a seamless moving experience.
          </p>

          <div className="services-hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-number">1000+</div>
              <div className="hero-stat-label">Successful Relocations</div>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <div className="hero-stat-number">10+</div>
              <div className="hero-stat-label">Years Experience</div>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <div className="hero-stat-number">100%</div>
              <div className="hero-stat-label">Client Satisfaction</div>
            </div>
          </div>

          <div className="services-hero-cta">
            <Link to="/contact" className="services-primary-cta">
              Get Free Consultation
              <ArrowRight size={20} strokeWidth={2.5} />
            </Link>
            <Link to="/quickquote" className="services-secondary-cta">
              Get Quick Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="services-main-section">
        <div className="services-section-container">
          <div className="section-header-center">
            <div className="section-label">
              <Package size={16} strokeWidth={2.5} />
              <span>Our Services</span>
            </div>
            <h2 className="section-heading">
              Complete <span className="gradient-text">Relocation Solutions in Dubai</span>
            </h2>
            <p className="section-subtitle">
              Whether you're moving locally within Dubai, relocating across the UAE, or making an international 
              move, we provide comprehensive relocation services designed to make your journey seamless and stress-free.
            </p>
          </div>

          {/* Local Relocation Service */}
          <div className="service-block-large">
            <div className="service-visual">
              <img src={Local} alt="Local Relocation in Dubai" className="service-image-large" />
              <div className="service-overlay"></div>
            </div>
            <div className="service-content-large">
              <div className="service-badge">Local Relocation</div>
              <h2 className="service-title-large">Local Relocation Within Dubai</h2>
              <p className="service-description-large">
                Moving between Dubai neighborhoods? We specialize in local relocations within Dubai—from Downtown 
                to Marina, Business Bay to Jumeirah, Arabian Ranches to Palm Jumeirah. Our team knows every building, 
                every area, and every requirement to ensure a smooth move.
              </p>
              <ul className="service-features-list">
                <li>
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                  <span>Expert knowledge of Dubai buildings and areas</span>
                </li>
                <li>
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                  <span>Same-day and scheduled relocation options</span>
                </li>
                <li>
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                  <span>Handling of building access and parking permits</span>
                </li>
                <li>
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                  <span>Furniture disassembly and reassembly</span>
                </li>
                <li>
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                  <span>Professional packing and unpacking services</span>
                </li>
              </ul>
              <Link to="/contact" className="service-cta-link">
                Get Local Relocation Free Quote
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          {/* UAE Domestic Relocation Service */}
          <div className="service-block-large reverse">
            <div className="service-content-large">
              <div className="service-badge">Domestic Relocation</div>
              <h2 className="service-title-large">UAE Domestic Relocation</h2>
              <p className="service-description-large">
                Relocating between Dubai, Abu Dhabi, Sharjah, or other Emirates? We handle inter-emirate relocations 
                with precision, managing all documentation, logistics, and transportation requirements. Our team ensures 
                seamless moves across the UAE.
              </p>
              <ul className="service-features-list">
                <li>
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                  <span>Inter-emirate documentation and permits</span>
                </li>
                <li>
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                  <span>Coordinated logistics across multiple Emirates</span>
                </li>
                <li>
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                  <span>Long-distance transportation solutions</span>
                </li>
                <li>
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                  <span>Storage solutions during transition</span>
                </li>
                <li>
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                  <span>Complete door-to-door service</span>
                </li>
              </ul>
              <Link to="/contact" className="service-cta-link">
                Get Domestic Relocation Free Quote
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
            </div>
            <div className="service-visual">
              <img src={Local} alt="UAE Domestic Relocation" className="service-image-large" />
              <div className="service-overlay"></div>
            </div>
          </div>

          {/* International Relocation Service */}
          <div className="service-block-large">
            <div className="service-visual">
              <img src={internationalRelocation} alt="International Relocation from Dubai" className="service-image-large" />
              <div className="service-overlay"></div>
            </div>
            <div className="service-content-large">
              <div className="service-badge">International Relocation</div>
              <h2 className="service-title-large">International Relocation from Dubai</h2>
              <p className="service-description-large">
                Moving internationally from Dubai? We simplify the complexities of international relocation, handling 
                everything from customs clearance and documentation to international shipping and delivery. Our global 
                network ensures your belongings reach destinations worldwide safely and on time.
              </p>
              <ul className="service-features-list">
                <li>
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                  <span>Customs clearance and documentation</span>
                </li>
                <li>
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                  <span>International shipping to 50+ countries</span>
                </li>
                <li>
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                  <span>Sea and air freight options</span>
                </li>
                <li>
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                  <span>Visa and documentation assistance</span>
                </li>
                <li>
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                  <span>Destination country coordination</span>
                </li>
              </ul>
              <Link to="/contact" className="service-cta-link">
                Get International Relocation Free Quote
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          {/* Home Relocation Service */}
          <div className="service-block-large reverse">
            <div className="service-content-large">
              <div className="service-badge">Home Relocation</div>
              <h2 className="service-title-large">Home Relocation Services in Dubai</h2>
              <p className="service-description-large">
                Moving your entire home? We provide comprehensive home relocation services, handling everything from 
                initial planning and packing to transportation and unpacking. Our team ensures your home relocation 
                is smooth, safe, and stress-free.
              </p>
              <ul className="service-features-list">
                <li>
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                  <span>Free pre-move survey and consultation</span>
                </li>
                <li>
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                  <span>Complete home packing and unpacking</span>
                </li>
                <li>
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                  <span>Furniture disassembly and assembly</span>
                </li>
                <li>
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                  <span>Appliance installation and setup</span>
                </li>
                <li>
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                  <span>Home staging and organization</span>
                </li>
              </ul>
              <Link to="/contact" className="service-cta-link">
                Get Home Relocation Free Quote
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
            </div>
            <div className="service-visual">
              <img src={pau} alt="Home Relocation Services Dubai" className="service-image-large" />
              <div className="service-overlay"></div>
            </div>
          </div>

          {/* Office & Corporate Relocation Service */}
          <div className="service-block-large">
            <div className="service-visual">
              <img src={Corporate} alt="Office & Corporate Relocation Dubai" className="service-image-large" />
              <div className="service-overlay"></div>
            </div>
            <div className="service-content-large">
              <div className="service-badge">Corporate Relocation</div>
              <h2 className="service-title-large">Office & Corporate Relocation in Dubai</h2>
              <p className="service-description-large">
                Relocating your business or office? We specialize in corporate relocations, minimizing downtime and 
                ensuring seamless transitions. From small offices to large corporate headquarters, we handle every 
                aspect of your business move with precision and professionalism.
              </p>
              <ul className="service-features-list">
                <li>
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                  <span>Minimal business downtime planning</span>
                </li>
                <li>
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                  <span>IT equipment and server relocation</span>
                </li>
                <li>
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                  <span>Office furniture and equipment handling</span>
                </li>
                <li>
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                  <span>After-hours and weekend relocation options</span>
                </li>
                <li>
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                  <span>Employee relocation assistance</span>
                </li>
              </ul>
              <Link to="/contact" className="service-cta-link">
                Get Corporate Relocation Free Quote
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="services-process-section">
        <div className="services-section-container">
          <div className="section-header-center">
            <div className="section-label">
              <Clock size={16} strokeWidth={2.5} />
              <span>How It Works</span>
            </div>
            <h2 className="section-heading">
              Your Relocation Journey <span className="gradient-text">Made Simple</span>
            </h2>
            <p className="section-subtitle">
              Our streamlined process ensures a smooth, stress-free relocation experience from start to finish.
            </p>
          </div>

          <div className="process-timeline">
            <div className="process-step">
              <div className="process-step-number">01</div>
              <div className="process-step-content">
                <h3>Free Consultation & Survey</h3>
                <p>
                  We start with a free consultation to understand your relocation needs. Our team conducts 
                  an on-site survey (for local moves) or virtual consultation (for international moves) to 
                  assess your requirements and provide a detailed quote.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-step-number">02</div>
              <div className="process-step-content">
                <h3>Customized Relocation Plan</h3>
                <p>
                  Based on your needs, we create a personalized relocation plan outlining timelines, services, 
                  and costs. We address all your questions and concerns, ensuring you're fully informed before 
                  we begin.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-step-number">03</div>
              <div className="process-step-content">
                <h3>Professional Packing & Preparation</h3>
                <p>
                  Our trained professionals pack your belongings using premium materials, ensuring maximum 
                  protection. We handle everything from fragile items to large furniture, creating a detailed 
                  inventory as we go.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-step-number">04</div>
              <div className="process-step-content">
                <h3>Safe Transportation</h3>
                <p>
                  Your belongings are transported using our fleet of modern, well-maintained vehicles. For 
                  international moves, we coordinate with trusted shipping partners to ensure safe passage 
                  across borders.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-step-number">05</div>
              <div className="process-step-content">
                <h3>Delivery & Unpacking</h3>
                <p>
                  Upon arrival at your new location, we deliver your belongings and professionally unpack 
                  everything. We help organize your new space, ensuring a smooth transition to your new home 
                  or office.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-step-number">06</div>
              <div className="process-step-content">
                <h3>Post Move Support</h3>
                <p>
                  Our service doesn't end at delivery. We provide post-move support, addressing any concerns 
                  and ensuring your complete satisfaction. We're here to help you settle in comfortably.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Guarantees Section */}
      <section className="services-benefits-section">
        <div className="services-section-container">
          <div className="section-header-center">
            <div className="section-label">
              <Shield size={16} strokeWidth={2.5} />
              <span>Benefits & Guarantees</span>
            </div>
            <h2 className="section-heading">
              Why Choose <span className="gradient-text">IPANAC Relocation , Dubai</span>
            </h2>
            <p className="section-subtitle">
              We're committed to providing the highest standards of service, ensuring your peace of mind 
              throughout your relocation journey.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <Shield size={32} strokeWidth={2} />
              </div>
              <h3>Fully Insured</h3>
              <p>
                All shipments are comprehensively insured, providing you with complete peace of mind. 
                Your belongings are protected throughout the entire relocation process.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <Award size={32} strokeWidth={2} />
              </div>
              <h3>Licensed & Certified</h3>
              <p>
                We're properly licensed in Dubai and the UAE with all necessary certifications. 
                Part of IPANAC Consultancy LLC FZ, a trusted name in Dubai's business landscape.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <Users size={32} strokeWidth={2} />
              </div>
              <h3>Experienced Team</h3>
              <p>
                Our team brings years of experience in Dubai relocations. We know the city, the regulations, 
                and the best practices to ensure smooth moves every time.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <Clock size={32} strokeWidth={2} />
              </div>
              <h3>Timely Delivery</h3>
              <p>
                We understand the importance of timing in relocations. Our team works efficiently to ensure 
                your belongings arrive on schedule, every time.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <MapPin size={32} strokeWidth={2} />
              </div>
              <h3>Local Expertise</h3>
              <p>
                Deep knowledge of Dubai's buildings, areas, regulations, and customs. We know the city 
                inside out, ensuring smooth relocations within Dubai and across the UAE.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <CheckCircle2 size={32} strokeWidth={2} />
              </div>
              <h3>100% Satisfaction Guarantee</h3>
              <p>
                Your satisfaction is our top priority. We're committed to exceeding your expectations 
                and ensuring you're completely satisfied with our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="services-cta-section">
        <div className="services-section-container">
          <div className="cta-content-large">
            <h2>Ready to Start Your Relocation in Dubai?</h2>
            <p>
              Get in touch for a free consultation and personalized relocation plan. Our team is ready 
              to make your move to, from, or within Dubai smooth, safe, and stress-free.
            </p>
            <div className="cta-buttons-large">
              <Link to="/contact" className="cta-primary-large">
                Get Free Consultation
                <ArrowRight size={20} strokeWidth={2.5} />
              </Link>
              <Link to="/quickquote" className="cta-secondary-large">
                Get Quick Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeatureSection;
