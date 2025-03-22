import React from 'react';
import './about.css';
import aboutimg from "./assets/about.png";

function About() {
  return (
   
    <div className="about-page">

      {/* <section className="hero">
        <div className="container">
            <header className="head">
          <h1>About Us</h1>
          </header>
          <p className="para">Making your relocation journey seamless and stress-free</p>
        </div>
      </section> */}

      <section className="about-section">
        <div className="about-grid">
          <div className="about-content">
            <header className="head">
              <h2>Who We Are</h2>
            </header>
            <div className="Location">
              <p className="para"><b>Making your relocation journey seamless and stress-free</b></p>
              <br></br>
              <p>At IPanac Relocation, we believe that moving to a new country should be an exciting journey, not a stressful one. Our mission is to provide a seamless and hassle-free relocation experience for individuals,
                families, and businesses looking to establish themselves in a new country.</p><br></br>
              <p>With expertise in immigration, visa processing, accounting, and anti-money laundering compliance, we offer end-to-end solutions that simplify the transition process.</p>
              <br></br>
              <p>Whether you're seeking a work permit, permanent residency, or business setup assistance,
                our team is committed to guiding you every step of the way.</p>
            </div>
          </div>

          <div className="about-image">
            <img src={aboutimg} alt="Our team helping clients with relocation" />
          </div>
        </div>
      </section>

      <section className="story-section">
        <div className="container2">
          <div className="story-content">
            <header className="head1">
              <h2>Our Story – The Personal Touch</h2>
            </header>
            <div className="Story">
              <p>IPanac Relocation was founded with a simple yet powerful vision: to make relocation <b style={{ color: "red" }}>effortless and stress-free.</b></p>
              <br></br>
              <p>We understand that moving to a new country comes with uncertainties—finding a home, understanding legal requirements, and adapting to a new environment.
                <br></br><br></br>
                Having personally experienced the challenges of relocation, our founders saw a need for a trustworthy, client-centric service that prioritizes transparency, efficiency, and personalized care.</p><br></br>
              <p>At IPanac Relocation, we don't just offer services—we build relationships. Our team takes the time to understand your goals, provide tailored solutions, and ensure that your journey is smooth and successful.</p>
              <br></br>
              <p>Whether you are an aspiring professional, an international student, or a business looking to expand, we are here to turn your relocation dreams into reality.</p>
              <br></br>
            </div>
          </div>
        </div>
      </section>
      <br></br>

      <section className="cta-section">
        <div className="container3">
          <h1><b>Ready to Start Your Journey?</b></h1>
          <div className="button-content">
            <div className="cta-button">📞 Let's talk! Reach out to us today</div>
          </div>
          <p className="cta-subtext"><b>Take the first step toward a brighter future.</b></p>
        </div>
      </section>

      
      

    </div>
          
        
   
  );
}

export default About;