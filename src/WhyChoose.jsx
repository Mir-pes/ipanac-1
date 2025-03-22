import { CheckCircle2 } from "lucide-react";
import Img from "./assets/src2.jpg";
import { checklistItems } from "./constants";
import "./WhyChoose.css";

function Workflow() {
  return (
    <div className="workflow-container">
      <h2 className="workflow-heading">
        Why Choose
        <span className="gradient-text"> IPANAC?</span>
      </h2>
      
      <div className="mission-container">
        <h3 className="statement-heading">
          Our Mission
        </h3>
        <div className="mission-image-wrapper">
          <img 
            src="/api/placeholder/800/400" 
            alt="Team of relocation professionals helping clients"
            className="mission-image"
          />
        </div>
        <div className="statement-container">
          <p className="statement-text">
            "At IPanac Relocation, we simplify the relocation journey by providing personalized, efficient, and reliable services. Our goal is to ensure a smooth transition for individuals and businesses, helping them settle with ease and confidence in their new home. Through expertise, dedication, and innovation, we make every move a positive experience."
          </p>
        </div>
      </div>

      <div className="flex-container">
        <div className="image-container">
          <img src={Img} alt="Relocation Services" />
        </div>
        
        <div className="checklist-container">
          {checklistItems.map((item, index) => (
            <div className="checklist-item" key={index}>
              <div className="icon-wrapper">
                <CheckCircle2 size={20} />
              </div>
              <div className="item-content">
                <h4 className="item-content-title">
                  {item.title}
                </h4>
                <p className="item-content-description">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="vision-container">
        <h3 className="statement-heading">
          Our Vision
        </h3>
        <div className="vision-image-wrapper">
          <img 
            src="/api/placeholder/800/400" 
            alt="Global network of connected cities representing relocation"
            className="vision-image"
          />
        </div>
        <div className="statement-container">
          <p className="statement-text">
            "To be the leading global relocation partner, transforming the way people and businesses move by providing seamless, stress-free, and rewarding experiences. We envision a world where relocation is not a challenge but an opportunity—where individuals and organizations transition smoothly into new environments with confidence and ease. Through innovation, expertise, and personalized service, we aim to redefine global mobility, ensuring every move feels like a step toward a better future."
          </p>
        </div>
      </div>
    </div>
  );
}

export default Workflow;