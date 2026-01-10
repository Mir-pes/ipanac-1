import React from 'react';
import './about.css';
import aboutimg from "./assets/about.png";
import integrity from "./assets/Integrity.png";
import customer from "./assets/Customer.png";
import Excellence from "./assets/excellence.png";
import Innovation from "./assets/innovation.png";
import Globalimg from "./assets/Global.png";
import Reliable from "./assets/reliability.png";
import { Users, Heart, Target, Sparkles, Award, Globe2, Shield, TrendingUp, CheckCircle2, Building2, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page-modern">
      <div className="about-hero">
        <div className="hero-background-about">
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
        </div>
        
        <div className="hero-content-about">
          <div className="hero-badge-about">
            <Building2 size={16} />
            <span>Established Excellence</span>
          </div>
          
          <h1 className="about-hero-title">
            About <span className="gradient-about">IPANAC</span> Relocation Dubai
          </h1>
          
          <p className="about-hero-subtitle">
           
            IPANAC Relocation is a part of IPANAC consultancy LLC FZ, based in Dubai, UAE.
            <br></br>
            We serve our clients across Dubai, Abu Dhabi, and the GCC region in the following domains
          </p>

          <div className="company-domains">
            <div className="domain-card">
              <div className="domain-icon">
                <Globe2 size={24} />
              </div>
              <a href="https://IPANACllc.com/" target="_blank" rel="noopener noreferrer" className="domain-title">
                IPANAC Immigration
              </a>
              <p className="domain-desc">Global visa & immigration services</p>
            </div>
            
            <div className="domain-card">
              <div className="domain-icon">
                <Briefcase size={24} />
              </div>
              <a href="https://IPANACaccounting.com/" target="_blank" rel="noopener noreferrer" className="domain-title">
                IPANAC Accounting
              </a>
              <p className="domain-desc">Professional accounting & tax solutions</p>
            </div>
            
            <div className="domain-card active">
              <div className="domain-icon">
                <Building2 size={24} />
              </div>
              <div className="domain-title">
                IPANAC Relocation
              </div>
              <p className="domain-desc">Seamless moving & relocation services</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-mission-section">
        <div className="mission-content-wrapper">
          <div className="mission-text-block">
            <div className="section-badge">
              <Heart size={16} />
              <span>Who We Are</span>
            </div>
            
            <h2 className="section-title-about">
              Making Relocation in Dubai <span className="gradient-about">Effortless</span>
            </h2>
            
            <p className="mission-paragraph">
              At IPANAC Relocation Dubai, we believe that moving to a new location in Dubai, UAE, or internationally should be an exciting journey, not a stressful one. Our mission is to provide a seamless and hassle-free relocation experience for individuals, families, and businesses looking to establish themselves in Dubai, Abu Dhabi, or anywhere across the GCC region.
            </p>
            
            <div className="mission-features">
              <div className="mission-feature">
                <CheckCircle2 size={20} className="feature-check" />
                <span>Personalized service tailored to your needs</span>
              </div>
              <div className="mission-feature">
                <CheckCircle2 size={20} className="feature-check" />
                <span>End-to-end relocation support</span>
              </div>
              <div className="mission-feature">
                <CheckCircle2 size={20} className="feature-check" />
                <span>Professional care and expertise</span>
              </div>
            </div>
          </div>
          
          <div className="mission-image-block">
            <div className="image-frame">
              <img src={aboutimg} alt="iPANAC Relocation Services" className="about-main-image" />
              <div className="image-decoration"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="story-section-modern">
        <div className="story-content-modern">
          <div className="section-badge">
            <Sparkles size={16} />
            <span>Our Journey</span>
          </div>
          
          <h2 className="section-title-about">
            Professional Services with a <span className="gradient-about">Personal Touch</span>
          </h2>
          
          <div className="story-timeline">
            <div className="timeline-item">
              <div className="timeline-icon">
                <Target size={24} />
              </div>
              <div className="timeline-content">
                <h3>Our Foundation</h3>
                <p>
                  IPANAC Relocation was founded with a simple yet powerful vision: to make relocation effortless and stress-free. We understand that moving to a new location comes with uncertainties—finding a home, understanding legal requirements, and adapting to a new environment.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-icon">
                <Users size={24} />
              </div>
              <div className="timeline-content">
                <h3>Expert Team</h3>
                <p>
                  Our founders, having personally faced the challenges of relocation, recognized the need for a reliable, client-centric service. They assembled a team with a combined experience of over 20 years in the relocation industry—committed to transparency, efficiency, and personalized support.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-icon">
                <Heart size={24} />
              </div>
              <div className="timeline-content">
                <h3>Client-Centric Approach</h3>
                <p>
                  At IPANAC Relocation, we go beyond providing services—we cultivate meaningful relationships. Our team takes the time to understand your unique goals, deliver customized solutions, and make your relocation journey smooth and successful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="values-section-modern">
        <div className="section-header-center">
          <div className="section-badge">
            <Award size={16} />
            <span>What Drives Us</span>
          </div>
          
          <h2 className="section-title-about">
            Our Core <span className="gradient-about">Values</span>
          </h2>
          
          <p className="section-subtitle-about">
            Our values shape the culture of our organization and define the character of our company
          </p>
        </div>

        <div className="values-grid-modern">
          <div className="value-card-modern">
            <div className="value-image-wrapper">
              <img src={customer} alt="Customer-Centric Approach" className="value-img" />
              <div className="value-overlay">
                <Users size={40} />
              </div>
            </div>
            <div className="value-card-content">
              <h3>Customer-Centric Approach</h3>
              <p>We put our clients first, ensuring personalized and hassle-free relocation experiences tailored to their needs.</p>
            </div>
          </div>

          <div className="value-card-modern">
            <div className="value-image-wrapper">
              <img src={integrity} alt="Integrity & Transparency" className="value-img" />
              <div className="value-overlay">
                <Shield size={40} />
              </div>
            </div>
            <div className="value-card-content">
              <h3>Integrity & Transparency</h3>
              <p>Honesty and trust are at the heart of our services. We operate with full transparency, ensuring our clients feel informed and confident at every step.</p>
            </div>
          </div>

          <div className="value-card-modern">
            <div className="value-image-wrapper">
              <img src={Innovation} alt="Excellence & Efficiency" className="value-img" />
              <div className="value-overlay">
                <Award size={40} />
              </div>
            </div>
            <div className="value-card-content">
              <h3>Excellence & Efficiency</h3>
              <p>We are committed to delivering top-quality relocation services with precision, professionalism, and attention to detail.</p>
            </div>
          </div>

          <div className="value-card-modern">
            <div className="value-image-wrapper">
              <img src={Excellence} alt="Innovation & Adaptability" className="value-img" />
              <div className="value-overlay">
                <Sparkles size={40} />
              </div>
            </div>
            <div className="value-card-content">
              <h3>Innovation & Adaptability</h3>
              <p>The relocation industry is ever-changing, and we embrace new technologies and processes to provide modern, efficient, and seamless solutions.</p>
            </div>
          </div>

          <div className="value-card-modern">
            <div className="value-image-wrapper">
              <img src={Globalimg} alt="Global Mindset" className="value-img" />
              <div className="value-overlay">
                <Globe2 size={40} />
              </div>
            </div>
            <div className="value-card-content">
              <h3>Global Mindset</h3>
              <p>With a deep understanding of international relocation challenges, we bridge cultures and make global transitions easier for individuals and businesses.</p>
            </div>
          </div>

          <div className="value-card-modern">
            <div className="value-image-wrapper">
              <img src={Reliable} alt="Reliability & Commitment" className="value-img" />
              <div className="value-overlay">
                <TrendingUp size={40} />
              </div>
            </div>
            <div className="value-card-content">
              <h3>Reliability & Commitment</h3>
              <p>We are dedicated to delivering on our promises, ensuring smooth and stress-free relocations every time.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-section-about">
        <div className="cta-about-content">
          <h2>Ready to Begin Your Journey?</h2>
          <p>Let's make your relocation smooth, stress-free, and successful</p>
          <Link to="/contact" className="cta-about-button">
            Get Started Today
            <span className="button-arrow-about">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
