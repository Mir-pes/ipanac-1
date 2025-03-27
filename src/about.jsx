import React from 'react';
import './about.css';
import aboutimg from "./assets/about.png";
import { Globe, Lock, Package, Shield, Brain, ArrowUpCircle , HandshakeIcon, Clock } from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page">
        <div className="about">
          <h3 className="statement-heading">
            About IPANAC
          </h3>

          <div className="start-content">
            At IPanac Relocation, we believe that moving to a new country should be an exciting journey, not a stressful one.
            <br></br>
            Our mission is to provide a seamless and hassle-free relocation experience for individuals, families, and businesses looking to establish themselves in a new country.

            <div className="image-container">
              <img src={aboutimg} className="image"/>
            </div>
          </div>

        <div className="Work-container">
          <div className="Work">
            How We Work With <br></br>Our Clients

            
            {/* <button className="contact">Contact Us</button> */}
            <Link to = "/contact" className="contact">Contact Us</Link>
            
          </div>
          </div>
        

        <div className="Clients">
          <div className="Client-content">
            <span>
            With expertise in immigration, visa processing, accounting, and anti-money laundering compliance,
            <span className="end-end">we offer end-to-end solutions that simplify the transition process. </span>
              <br></br>
              <br></br>
            Whether you're seeking a work permit, permanent residency, or business setup assistance, our team is <span className="end-end1">committed to guiding you every step of the way.</span>

           </span>
          </div>
        </div>
        
        <div className="story-container">
          <h3 className="statement-heading1">
            Our Story – The Personal Touch
          </h3>
          <div className="story-content">
            IPanac Relocation was founded with a simple yet powerful vision: to make relocation effortless and stress-free.
            <br></br> 
            We understand that moving to a new country comes with uncertainties—finding a home, understanding legal requirements, 
            <br></br>
            and adapting to a new environment. 
            <br></br>
            
            Having personally experienced the challenges of relocation, our founders saw a 
            need for a trustworthy, client-centric service that prioritizes transparency, efficiency, and personalized care.
            <br></br>
            At IPanac Relocation, we don't just offer services—we build relationships. Our team takes the time to understand your goals, provide tailored solutions, and ensure that your journey is smooth and successful.
            <br></br>
            Whether you are an aspiring professional, an international student, or a business looking to expand, we are here to turn your relocation dreams into reality.
          </div>
        </div>
        
        {/* Core Values section added after the story content */}
        <div className="our-core-values">
        
          <h2 className="statement-heading">Our Core Values</h2>
         
          <p className="values-subtitle">Our values shape the culture of our organization and define the character of our company.</p>
          
          <div className="values-grid">
            {/* Row 1 */}
            <div className="value-card">
              <div className="icon-container">
                <Package className="value-icon"/>
              </div>
              <h3>Customer-Centric Approach</h3>
              <p>We put our clients first, ensuring personalized and hassle-free relocation experiences tailored to their needs.</p>
            </div>
            
            {/* Integrity & Transparency */}
            <div className="value-card">
              <div className="icon-container">
              <Lock className="value-icon" />
              </div>
              <h3>Integrity & Transparency</h3>
              <p>Honesty and trust are at the heart of our services. We operate with full transparency, ensuring our clients feel informed and confident at every step.</p>
            </div>
            
            {/* Excellence & Efficiency */}
            <div className="value-card">
              <div className="icon-container">
              <ArrowUpCircle className="value-icon" />
              </div>
              <h3>Excellence & Efficiency</h3>
              <p>We are committed to delivering top-quality relocation services with precision, professionalism, and attention to detail.</p>
            </div>
            
            {/* Row 2 */}
            {/* Innovation & Adaptability */}
            <div className="value-card">
              <div className="icon-container">
              <Brain className="value-icon" />
              </div>
              <h3>Innovation & Adaptability</h3>
              <p>The relocation industry is ever-changing, and we embrace new technologies and processes to provide modern, efficient, and seamless solutions.</p>
            </div>
            
            {/* Global Mindset */}
            <div className="value-card">
              <div className="icon-container">
              <Globe className="value-icon" />
              </div>
              <h3>Global Mindset</h3>
              <p>With a deep understanding of international relocation challenges, we bridge cultures and make global transitions easier for individuals and businesses.</p>
            </div>
            
            {/* Reliability & Commitment */}
            <div className="value-card">
              <div className="icon-container">
              <Clock className="value-icon" />
              </div>
              <h3>Reliability & Commitment</h3>
              <p>We are dedicated to delivering on our promises, ensuring smooth and stress-free relocations every time.</p>
            </div>
          </div>
        </div>
          
      </div>
    </div>
  );
}

export default About;
