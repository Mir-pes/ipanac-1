import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './about.css';
import { Building2, MapPin, Shield, TrendingUp, Award, Users, Globe2, CheckCircle2, ArrowRight, Sparkles, Briefcase, Heart, Target, FileText, Truck, Map } from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Helmet>
        <title>About Us - IPANAC Relocation Dubai | Trusted Relocation Specialists in UAE</title>
        <meta name="description" content="IPANAC Relocation is Dubai's premier relocation specialist, offering comprehensive moving services across the UAE, GCC, and internationally. Learn about our local expertise, Dubai buildings knowledge, and trusted relocation services." />
        <link rel="canonical" href="https://ipanacrelocation.com/about" />
      </Helmet>
      <div className="about-page-modern">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-background"></div>
        <div className="about-hero-container">
          <div className="about-hero-badge">
            <Building2 size={18} strokeWidth={2.5} />
            <span>Dubai Relocation Specialists</span>
          </div>
          
          <h1 className="about-hero-title">
            Your Trusted Partner for <span className="gradient-text">Relocation in Dubai, UAE</span>
          </h1>
          
          <p className="about-hero-subtitle">
            IPANAC Relocation is Dubai's premier relocation specialist, offering comprehensive moving services 
            across the UAE, GCC, and internationally. With deep local expertise in Dubai's buildings, regulations, 
            customs, and logistics, we make your relocation journey seamless, safe, and stress-free.
          </p>

          <div className="about-hero-cta">
            <Link to="/contact" className="about-primary-cta">
              Start Your Relocation Journey
              <ArrowRight size={20} strokeWidth={2.5} />
            </Link>
            <Link to="/services" className="about-secondary-cta">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>


      
      <section className="about-stats-section">
        <div className="about-section-container">
          <div className="stats-grid-modern">
            <div className="stat-block-modern">
              <div className="stat-number-modern">1000+</div>
              <div className="stat-label-modern">Successful Relocations</div>
            </div>
            <div className="stat-block-modern">
              <div className="stat-number-modern">10+</div>
              <div className="stat-label-modern">Years of Experience</div>
            </div>
            <div className="stat-block-modern">
              <div className="stat-number-modern">100%</div>
              <div className="stat-label-modern">Client Satisfaction</div>
            </div>
            <div className="stat-block-modern">
              <div className="stat-number-modern">50+</div>
              <div className="stat-label-modern">Countries </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="about-intro-section">
        <div className="about-section-container">
          <div className="about-intro-content">
            <div className="section-intro-badge">
              <Heart size={16} strokeWidth={2.5} />
              <span>Who We Are</span>
            </div>
            <h2 className="section-intro-heading">
              Dubai-Based Relocation Experts <span className="gradient-text">You Can Trust</span>
            </h2>
            <p className="section-intro-description">
              IPANAC Relocation is part of <b><b>IPANAC Consultancy LLC FZ</b></b>, a trusted name in Dubai's business landscape. 
              We specialize in helping individuals, families, and businesses relocate within Dubai, across the UAE, 
              throughout the GCC region, and internationally. Our team understands the unique challenges of moving 
              in Dubai—from navigating building regulations and customs procedures to managing complex logistics in 
              one of the world's most dynamic cities.
            </p>
            <p className="section-intro-description">
              What sets us apart is our deep local knowledge combined with international expertise. We know Dubai 
              inside out—from the finest residential communities in Marina and Downtown to the bustling business 
              districts of DIFC and Business Bay. We're familiar with Dubai's customs requirements, documentation 
              processes, and the logistical nuances that make relocations here unique.
            </p>
          </div>
        </div>
      </section>

      {/* Local Expertise Features - Matching Image Style */}
      <section className="about-expertise-features">
        <div className="about-section-container">
          
          {/* Deep Knowledge of Dubai Buildings */}
          <div className="expertise-feature-block">
            <div className="expertise-feature-icon-wrapper">
              <div className="expertise-icon-background"></div>
              <Building2 size={32} strokeWidth={2} className="expertise-icon" />
            </div>
            <div className="expertise-feature-content">
              <h3 className="expertise-feature-heading">
                <span className="heading-line">Deep</span>
                <span className="heading-line">Knowledge</span>
                <span className="heading-line">of Dubai</span>
                <span className="heading-line">Buildings</span>
              </h3>
              <p className="expertise-feature-description">
                We understand Dubai's diverse residential and commercial properties—from luxury towers in 
                Burj Khalifa area to family-friendly communities in Jumeirah and Arabian Ranches. We know 
                access restrictions, parking regulations, and building-specific requirements that ensure smooth moves.
              </p>
            </div>
          </div>

          {/* Regulations & Compliance Expertise */}
          <div className="expertise-feature-block">
            <div className="expertise-feature-icon-wrapper">
              <div className="expertise-icon-background"></div>
              <Shield size={32} strokeWidth={2} className="expertise-icon" />
            </div>
            <div className="expertise-feature-content">
              <h3 className="expertise-feature-heading">
                <span className="heading-line">Regulations</span>
                <span className="heading-line">&</span>
                <span className="heading-line">Compliance</span>
                <span className="heading-line">Expertise</span>
              </h3>
              <p className="expertise-feature-description">
                Navigating Dubai's regulations can be complex. We handle all compliance requirements, from 
                customs documentation and permits to building management approvals and visa-related logistics. 
                Our team stays current with UAE regulations to keep your move legally compliant.
              </p>
            </div>
          </div>

          {/* Customs & International Logistics */}
          <div className="expertise-feature-block">
            <div className="expertise-feature-icon-wrapper">
              <div className="expertise-icon-background"></div>
              <Globe2 size={32} strokeWidth={2} className="expertise-icon" />
            </div>
            <div className="expertise-feature-content">
              <h3 className="expertise-feature-heading">
                <span className="heading-line">Customs</span>
                <span className="heading-line">&</span>
                <span className="heading-line">International</span>
                <span className="heading-line">Logistics</span>
              </h3>
              <p className="expertise-feature-description">
                Moving internationally from or to Dubai? We manage complex customs procedures, documentation, 
                and international shipping logistics. Our partnerships with global carriers ensure your belongings 
                reach their destination safely and on time, whether you're relocating within the GCC or to Europe, 
                Asia, or the Americas.
              </p>
            </div>
          </div>

          {/* Streamlined Logistics Management */}
          <div className="expertise-feature-block">
            <div className="expertise-feature-icon-wrapper">
              <div className="expertise-icon-background"></div>
              <Truck size={32} strokeWidth={2} className="expertise-icon" />
            </div>
            <div className="expertise-feature-content">
              <h3 className="expertise-feature-heading">
                <span className="heading-line">Streamlined</span>
                <span className="heading-line">Logistics</span>
                <span className="heading-line">Management</span>
              </h3>
              <p className="expertise-feature-description">
                Dubai's logistics can be challenging—from traffic considerations and access timing to coordinating 
                with multiple vendors. We excel at managing complex logistics, ensuring efficient timelines and 
                seamless coordination between packing, transportation, and delivery teams.
              </p>
            </div>
          </div>

          {/* Local Relocation Within Dubai */}
          <div className="expertise-feature-block">
            <div className="expertise-feature-icon-wrapper">
              <div className="expertise-icon-background"></div>
              <MapPin size={32} strokeWidth={2} className="expertise-icon" />
            </div>
            <div className="expertise-feature-content">
              <h3 className="expertise-feature-heading">
                <span className="heading-line">Local Relocation</span>
                <span className="heading-line">Within Dubai</span>
              </h3>
              <p className="expertise-feature-description">
                Expert moves between Dubai neighborhoods—from Downtown to Marina, Business Bay to Jumeirah. 
                We know every building, every area, and every requirement.<br></br>
                Seamless moves between Dubai, Abu Dhabi, Sharjah, and other Emirates. We handle inter-emirate 
                documentation and logistics with precision.
              </p>
            </div>
          </div>

          {/* UAE Domestic Relocation */}
          {/* <div className="expertise-feature-block">
            <div className="expertise-feature-icon-wrapper">
              <div className="expertise-icon-background"></div>
              <Target size={32} strokeWidth={2} className="expertise-icon" />
            </div>
            <div className="expertise-feature-content">
              <h3 className="expertise-feature-heading">
                <span className="heading-line">UAE Domestic</span>
                <span className="heading-line">Relocation</span>
              </h3>
              <p className="expertise-feature-description">
                Seamless moves between Dubai, Abu Dhabi, Sharjah, and other Emirates. We handle inter-emirate 
                documentation and logistics with precision.
              </p>
            </div>
          </div> */}

          {/* GCC Regional Relocation */}
          <div className="expertise-feature-block">
            <div className="expertise-feature-icon-wrapper">
              <div className="expertise-icon-background"></div>
              <Map size={32} strokeWidth={2} className="expertise-icon" />
            </div>
            <div className="expertise-feature-content">
              <h3 className="expertise-feature-heading">
                <span className="heading-line">GCC Regional</span>
                <span className="heading-line">Relocation</span>
              </h3>
              <p className="expertise-feature-description">
                Moving across the GCC region? We facilitate relocations to and from Saudi Arabia, Qatar, Kuwait, 
                Oman, and Bahrain with ease.
              </p>
            </div>
          </div>

          {/* International Relocation */}
          <div className="expertise-feature-block">
            <div className="expertise-feature-icon-wrapper">
              <div className="expertise-icon-background"></div>
              <Globe2 size={32} strokeWidth={2} className="expertise-icon" />
            </div>
            <div className="expertise-feature-content">
              <h3 className="expertise-feature-heading">
                <span className="heading-line">International</span>
                <span className="heading-line">Relocation</span>
              </h3>
              <p className="expertise-feature-description">
                Global moves from Dubai to destinations worldwide. Our international network and customs expertise 
                ensure smooth cross-border relocations.
              </p>
            </div>
          </div>

        </div>
      </section>



      {/* Why Choose Us Section */}
      <section className="about-why-choose-section">
        <div className="about-section-container">
          <div className="section-header-modern">
            <div className="section-label-modern">
              <Users size={16} strokeWidth={2.5} />
              <span>Why Choose Us</span>
            </div>
            <h2 className="section-heading-modern">
              Why Clients Relocating to <span className="gradient-text">Dubai Choose IPANAC</span>
            </h2>
            <p className="section-subtitle-modern">
              Our commitment to excellence and deep understanding of Dubai's unique relocation landscape 
              makes us the preferred choice for individuals and businesses moving to or within the UAE.
            </p>
          </div>

          <div className="why-choose-grid">
            <div className="why-choose-item">
              <div className="why-choose-icon">
                <CheckCircle2 size={28} strokeWidth={2.5} />
              </div>
              <h3>Local Expertise That Matters</h3>
              <p>We know Dubai—its buildings, regulations, customs, and logistics. This local knowledge translates to smoother, faster, and more cost-effective relocations.</p>
            </div>

            <div className="why-choose-item">
              <div className="why-choose-icon">
                <CheckCircle2 size={28} strokeWidth={2.5} />
              </div>
              <h3>Comprehensive Service Range</h3>
              <p>From packing and unpacking to storage solutions and vehicle relocation, we offer everything you need under one roof.</p>
            </div>

            <div className="why-choose-item">
              <div className="why-choose-icon">
                <CheckCircle2 size={28} strokeWidth={2.5} />
              </div>
              <h3>Proven Track Record</h3>
              <p>Over 1000 successful relocations speak to our expertise and reliability. We've helped countless families and businesses settle into Dubai and beyond.</p>
            </div>

            <div className="why-choose-item">
              <div className="why-choose-icon">
                <CheckCircle2 size={28} strokeWidth={2.5} />
              </div>
              <h3>Personalized Approach</h3>
              <p>Every relocation is unique. We work closely with you to understand your specific needs and tailor our services accordingly.</p>
            </div>

            <div className="why-choose-item">
              <div className="why-choose-icon">
                <CheckCircle2 size={28} strokeWidth={2.5} />
              </div>
              <h3>End-to-End Support</h3>
              <p>From initial consultation to settling into your new space, we're with you every step of the way, providing guidance and support throughout.</p>
            </div>

            <div className="why-choose-item">
              <div className="why-choose-icon">
                <CheckCircle2 size={28} strokeWidth={2.5} />
              </div>
              <h3>Trusted Partner</h3>
              <p>Part of IPANAC Consultancy LLC FZ—a reputable Dubai-based company with a proven track record in business services across the UAE.</p>
            </div>
          </div>
        </div>
      </section>



      


      {/* Our Values Section */}
      <section className="about-values-section">
        <div className="about-section-container">
          <div className="section-header-modern">
            <div className="section-label-modern">
              <Sparkles size={16} strokeWidth={2.5} />
              <span>Our Values</span>
            </div>
            <h2 className="section-heading-modern">
              Built on <span className="gradient-text">Trust, Safety & Transparency</span>
            </h2>
            <p className="section-subtitle-modern">
              Our core values guide every relocation we handle. They're not just words—they're our commitment to you.
            </p>
          </div>

          <div className="values-grid-modern">
            <div className="value-block-modern">
              <div className="value-number">01</div>
              <h3>Trust</h3>
              <p>We build lasting relationships based on reliability and integrity. Your belongings, your timeline, and your peace of mind are our top priorities.</p>
            </div>

            <div className="value-block-modern">
              <div className="value-number">02</div>
              <h3>Safety</h3>
              <p>Your possessions are handled with the utmost care. We use premium packing materials, insured transportation, and trained professionals to ensure everything arrives safely.</p>
            </div>

            <div className="value-block-modern">
              <div className="value-number">03</div>
              <h3>Transparency</h3>
              <p>No hidden fees, no surprises. We provide clear, upfront pricing and keep you informed at every step of your relocation journey.</p>
            </div>

            <div className="value-block-modern">
              <div className="value-number">04</div>
              <h3>Professionalism</h3>
              <p>Our team represents the highest standards of professional service. Punctual, courteous, and expert in every aspect of relocation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="about-trust-section">
        <div className="about-section-container">
          <div className="trust-indicators-grid">
            <div className="trust-indicator-block">
              <div className="trust-indicator-icon">
                <Shield size={48} strokeWidth={1.5} />
              </div>
              <h3>Fully Insured</h3>
              <p>All shipments are comprehensively insured for your peace of mind</p>
            </div>

            <div className="trust-indicator-block">
              <div className="trust-indicator-icon">
                <Award size={48} strokeWidth={1.5} />
              </div>
              <h3>Licensed & Certified</h3>
              <p>Properly licensed in Dubai and UAE with all necessary certifications</p>
            </div>

            <div className="trust-indicator-block">
              <div className="trust-indicator-icon">
                <Briefcase size={48} strokeWidth={1.5} />
              </div>
              <h3>Part of IPANAC Group</h3>
              <p>Backed by IPANAC Consultancy LLC FZ's reputation and resources</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="about-stats-section">
        <div className="about-section-container">
          <div className="stats-grid-modern">
            <div className="stat-block-modern">
              <div className="stat-number-modern">1000+</div>
              <div className="stat-label-modern">Successful Relocations</div>
            </div>
            <div className="stat-block-modern">
              <div className="stat-number-modern">10+</div>
              <div className="stat-label-modern">Years of Experience</div>
            </div>
            <div className="stat-block-modern">
              <div className="stat-number-modern">100%</div>
              <div className="stat-label-modern">Client Satisfaction</div>
            </div>
            <div className="stat-block-modern">
              <div className="stat-number-modern">50+</div>
              <div className="stat-label-modern">Countries </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="about-section-container">
          <div className="cta-content-modern">
            <h2>Ready to Begin Your Relocation Journey in Dubai?</h2>
            <p>
              Let us make your move to, from, or within Dubai smooth, stress-free, and successful. 
              Get in touch for a free consultation and personalized relocation plan.
            </p>
            <div className="cta-buttons-modern">
              <Link to="/contact" className="cta-primary-modern">
                Get Free Consultation
                <ArrowRight size={20} strokeWidth={2.5} />
              </Link>
              <Link to="/services" className="cta-secondary-modern">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default About;
