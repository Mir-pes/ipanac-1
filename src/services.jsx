// Services.jsx
import React from "react";
import { FaGlobe, FaTruck, FaBox, FaWarehouse, FaPaw, FaBuilding } from "react-icons/fa";
import "./services.css"; // Import the CSS file

const services = [
  { title: "International Relocation from Dubai", icon: <FaGlobe />, description: "Seamless international moving solutions from Dubai to anywhere in the world, handling customs and logistics." },
  { title: "Local Relocation in Dubai & GCC", icon: <FaTruck />, description: "Effortless local moving services within Dubai, Abu Dhabi, and across the GCC region." },
  { title: "Packing & Unpacking Services Dubai", icon: <FaBox />, description: "Professional packing and unpacking services in Dubai for safe transportation of your valuables." },
  { title: "Storage Solutions in Dubai", icon: <FaWarehouse />, description: "Secure and flexible storage facilities in Dubai for short or long-term needs." },
  { title: "Pet Relocation Services Dubai", icon: <FaPaw />, description: "Safe and stress-free pet relocation services in Dubai with full compliance." },
  { title: "Corporate Relocation Dubai", icon: <FaBuilding />, description: "Comprehensive office and business relocation services across Dubai and UAE." },
];

function ServicesPage() {
  return (
    <div className="services-page-wrapper">
      <div className="container">
        <h1 className="page-title">Our Relocation Services in Dubai, UAE</h1>
        <p className="page-description">
          We offer top-tier moving and packing services in Dubai, including international relocation, local moves within UAE, professional packing, secure storage solutions, and corporate relocation across Dubai and GCC region.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
              <button className="button">Request a Free Consultation</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;