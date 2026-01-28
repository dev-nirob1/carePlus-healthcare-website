import React from "react";
import { Link } from "react-router-dom";
import {
  FaHeartbeat,
  FaBrain,
  FaBaby,
  FaTooth,
  FaEye,
  FaStethoscope,
} from "react-icons/fa";
import "./ServicesSection.css";

const services = [
  {
    icon: <FaHeartbeat />,
    title: "Cardiology",
    description:
      "Comprehensive care for your heart with advanced diagnostics and treatment plans.",
    link: "/services/cardiology",
  },
  {
    icon: <FaBrain />,
    title: "Neurology",
    description:
      "Expert care for disorders of the nervous system, brain, and spinal cord.",
    link: "/services/neurology",
  },
  {
    icon: <FaBaby />,
    title: "Pediatrics",
    description:
      "Specialized healthcare for infants, children, and adolescents.",
    link: "/services/pediatrics",
  },
  {
    icon: <FaTooth />,
    title: "Dental Care",
    description:
      "Complete oral health services including cosmetic and surgical dentistry.",
    link: "/services/dental",
  },
  {
    icon: <FaEye />,
    title: "Ophthalmology",
    description:
      "Advanced eye care services from routine exams to complex surgeries.",
    link: "/services/ophthalmology",
  },
  {
    icon: <FaStethoscope />,
    title: "General Medicine",
    description:
      "Primary care services for the prevention, diagnosis, and treatment of adult diseases.",
    link: "/services/general",
  },
];

function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="section-header">
          <h2>Our Medical Services</h2>
          <p>
            We provide a wide range of medical services to meet your health
            needs. Our team of specialists is dedicated to delivering the best
            care possible.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.link} className="service-link">
                  Learn More <span>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
