import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { servicesData } from "../../../../data/servicesData";
import "./ServicesList.css";

function ServicesList() {
  return (
    <section className="services-list-section">
      <div className="services-list-container">
        {servicesData.map((service, index) => (
          <div
            className={`service-item ${index % 2 !== 0 ? "reverse" : ""}`}
            key={service.id}
          >
            <div className="service-image-wrapper">
              <img
                src={service.image}
                alt={service.title}
                className="service-item-image"
              />
            </div>
            <div className="service-content">
              <div className="service-icon-box">{service.icon}</div>
              <h2>{service.title}</h2>
              <p>{service.shortDescription}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature.title}</li>
                ))}
              </ul>
              <Link to={`/services/${service.slug}`} className="learn-more-btn">
                Learn More <FaArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesList;
