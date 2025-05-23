import React from 'react';
import './about.css';
import aboutimg from "./assets/about.png";
import integrity from "./assets/Integrity.png";
import customer from "./assets/Customer.png";
import Excellence from "./assets/excellence.png";
import Innovation from "./assets/innovation.png";
import Globalimg from "./assets/Global.png";
import Reliable from "./assets/reliability.png";
import { Globe, Lock, Package, Shield, Brain, ArrowUpCircle, HandshakeIcon, Clock, GlobeIcon } from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page">
        <div className="about">
          <h3 className="statement-heading">
            About IPANAC
          </h3>
          
          <p>IPANAC Relocation is a part of IPANAC consultancy LLC FZ</p>
          
          <h6>We serve Our clients in the following domains</h6>
          <div className="domain-links">
            <a href="https://IPANACllc.com/" className="domain-link">IPANAC Immigration</a>
            <a href="https://IPANACaccounting.com/" className="domain-link">IPANAC Accounting & Tax</a>
            <a className="domain-link">IPANAC Relocation</a>
          </div>
          <br></br>
          <h3 className="statement-heading">IPANAC Relocation</h3>
          <br></br>

          <div className="start-content">
            At IPANAC Relocation, we believe that moving to a new location should be an exciting journey, not a stressful one.
            <br></br>
            <br></br>
            Our mission is to provide a seamless and hassle-free relocation experience for individuals, families, and businesses looking to establish themselves in a new location.
              
            <div className="image-container">
              <img src={aboutimg} className="image"/>
            </div>
          </div>

        {/* <div className="Work-container">
          <div className="Work">
            How We Work With <br></br>Our Clients

            <Link to="/contact" className="contact">Contact Us</Link>
          </div>
          </div> */}

        {/* <div className="Clients">
          <div className="Client-content">
          <span>
            <span className="content">
            With expertise in immigration, visa processing, accounting, and anti-money laundering compliance,</span>
            <br></br>
            <span className="end-end">we offer end-to-end solutions that simplify the transition process. </span>
              <br></br>
              <br></br>
            Whether you're seeking a work permit, permanent residency, or business setup assistance, our team is <span className="end-end1">committed to guiding you every step of the way.</span>
          </span>
          </div>
        </div> */}

        <div className="story-container">
          <h3 className="statement-heading1">
            Our Story – Professional Services with Personal Touch
          </h3>
          <div className="story-content">
            IPANAC Relocation was founded with a simple yet powerful vision: to make relocation effortless and stress-free.
            <br></br> 
            We understand that moving to a new location comes with uncertainties—finding a home, understanding legal requirements, 
            <br></br>
            and adapting to a new environment. 
            <br></br>
            Our founders, having personally faced the challenges of relocation, recognized the need for a reliable, client-centric service.
            <br></br>
            They assembled a team with a combined experience of over 20 years in the relocation industry—committed to transparency, efficiency, and personalized support.
            <br></br>
            At IPANAC Relocation, we go beyond providing services—we cultivate meaningful relationships.
            <br></br>
            Our team takes the time to understand your unique goals, deliver customized solutions, and make your relocation journey smooth and successful.
          </div>
        </div>

        <div className="our-core-values">
          <h2 className="statement-heading">Our Core Values</h2>
          <p className="values-subtitle">Our values shape the culture of our organization and define the character of our company.</p>
          
          <div className="values-grid">
            <div className="value-card">
            <h3>Customer-Centric Approach</h3>
            <div className="icon-container" style={{ width: '240px', height: '200px', marginLeft: '48px', borderRadius: '10px' }}>
              <img src={customer} className="value-image" />
            </div>
              <p>We put our clients first, ensuring personalized and hassle-free relocation experiences tailored to their needs.</p>
            </div>
            
            <div className="value-card">
            <h3>Integrity & Transparency</h3>
            <div className="icon-container" style={{ width: '240px', height: '200px', marginLeft: '48px', borderRadius: '10px' }}>
              <img src={integrity} className="value-image" />
            </div>
            <p>Honesty and trust are at the heart of our services. We operate with full transparency, ensuring our clients feel informed and confident at every step.</p>
          </div>
            
            <div className="value-card">
            <h3>Excellence & Efficiency</h3>
            <div className="icon-container" style={{ width: '240px', height: '200px', marginLeft: '48px', borderRadius: '10px' }}>
            <img src={Innovation} className="value-image" />
            </div>
              <p>We are committed to delivering top-quality relocation services with precision, professionalism, and attention to detail.</p>
            </div>
            
            <div className="value-card">
            <h3>Innovation & Adaptability</h3>
            <div className="icon-container" style={{ width: '240px', height: '200px', marginLeft: '48px', borderRadius: '10px' }}>
            <img src={Excellence} className="value-image" />
            </div>
              <p>The relocation industry is ever-changing, and we embrace new technologies and processes to provide modern, efficient, and seamless solutions.</p>
            </div>
            
            <div className="value-card">
            <h3>Global Mindset</h3>
            <div className="icon-container" style={{ width: '240px', height: '200px', marginLeft: '48px', borderRadius: '10px' }}>
            <img src={Globalimg} className="value-image" />
            </div>
              <p>With a deep understanding of international relocation challenges, we bridge cultures and make global transitions easier for individuals and businesses.</p>
            </div>
            
            <div className="value-card">
              <h3>Reliability & Commitment</h3>
            <div className="icon-container" style={{ width: '240px', height: '200px', marginLeft: '48px', borderRadius: '10px' }}>
            <img src={Reliable} className="value-image" />
            </div>
              <p>We are dedicated to delivering on our promises, ensuring smooth and stress-free relocations every time.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
