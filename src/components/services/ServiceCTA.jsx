import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCTA.css";

function ServiceCTA() {
  return (
    <section className="service-cta-section">
      <div className="service-cta-container">
        <div className="service-cta-content">
          <h2>Need Specialized Care?</h2>
          <p>
            Our expert team is ready to provide you with the best medical
            treatment. Book an appointment today and take the first step towards
            better health.
          </p>
          <Link to="/appointments" className="cta-btn-large">
            Book an Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServiceCTA;
