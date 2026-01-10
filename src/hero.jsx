import React from "react";
import "./Hero.css"; // Import the CSS file

function Hero() {
  return (
    <div className="hero-container">
      <h1 className="hero-text">
        <b>Professional Movers and Packers in Dubai | IPANAC Relocation - Making Your Move Stress-Free,<br></br> 
        Smooth, and Efficient</b>
      </h1>
      <p className = "para">Whether you're moving internationally or relocating locally within Dubai, Abu Dhabi, or the GCC region, we are here to provide personalized relocation services tailored to your unique needs. From expert packing to settling in, we handle all aspects of your move across Dubai and UAE with professionalism, care, and expertise.
        </p>

    <div className="why-choose-card">
        <div className="card-inner">
            <h1 className="card-title">Why Choose IPANAC for Relocation in Dubai?</h1>
            <h2 className="card-subtitle"><b className="bold">Global Reach and Local Dubai Expertise:</b> We help you relocate anywhere in the world and within Dubai, Abu Dhabi, and the GCC region, leveraging our global network of partners and in-depth local knowledge of UAE's moving requirements.</h2>

            <h2 className = "card-subtitle2"><b className = "bold2">End-to-End Moving Solutions in Dubai: </b>From pre-move planning, logistics, professional packing, and transportation to settling into your new home in Dubai or across UAE, we take care of everything so you can focus on your new beginning.

            </h2>

            <h2 className = "card-subtitle3"><b className = "bold3">Reliable and Safe Movers in Dubai: </b> With years of experience serving Dubai residents and businesses, we ensure that your belongings are handled with the utmost care. Our commitment to safety means peace of mind every step of the way.
            </h2>

            <h2 className = "card-subtitle4"><b className = "bold4">Personalized Relocation Service:</b> No two moves in Dubai are the same. Our experienced team will work with you to understand your requirements and provide customized moving solutions that match your needs, timeline, and budget.

            </h2>

            
        </div>
    </div>


    {/* <div className = "services">
        <div className = "inner-layout">
            <h1 className = "title-card2">Our Services</h1>

            <h2 className = "card-subtitle5"><b className = "bold5">International Relocation: </b>We simplify the complexities of moving to a new country, handling everything from visas to customs clearance.
            </h2>


            <h2 className = "card-subtitle5"><b className = "bold5">Local Relocation: </b>Moving within the GCC region? Our local services ensure that every detail is taken care of, from packing to delivery at your new doorstep.

            </h2>

            <h2 className = "card-subtitle5"><b className = "bold5">Packing and Unpacking: </b>We offer professional packing services to protect your valuables during transit and unpacking services to help you settle in quickly.


            </h2>

            <h2 className = "card-subtitle5"><b className = "bold5">Storage Solutions: </b>Need temporary storage? Our secure storage facilities ensure your items are safe and accessible whenever you need them.
            
            </h2>

            <h2 className="card-subtitle4">
                
            <b className="bold4">Corporate Relocation:</b> We cater to businesses relocating employees, offering tailored solutions to ensure a smooth transition for both the individual and the company.
            </h2>

        </div>
    </div> */}
</div>

    
  );
}

export default Hero;