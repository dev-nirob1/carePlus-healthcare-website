import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../../data/servicesData";
import "./ServicesSection.css";

function ServicesSection() {
  // Take first 6 services for the homepage preview
  const featuredServices = servicesData.slice(0, 6);

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
          {featuredServices.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.shortDescription}</p>
                <Link to={`/services/${service.slug}`} className="service-link">
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
