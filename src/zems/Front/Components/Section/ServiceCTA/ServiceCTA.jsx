import React from "react";
import { Link } from "react-router-dom";
import BaseTitle from "../../../../../components/Element/BaseTitle";
import BaseParagraph from "../../../../../components/Element/BaseParagraph";
import "./ServiceCTA.css";

function ServiceCTA() {
  return (
    <section className="service-cta-section">
      <div className="service-cta-container">
        <div className="service-cta-content">
          <BaseTitle>Need Specialized Care?</BaseTitle>
          <BaseParagraph>
            Our expert team is ready to provide you with the best medical
            treatment. Book an appointment today and take the first step towards
            better health.
          </BaseParagraph>
          <Link to="/appointments" className="cta-btn-large">
            Book an Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServiceCTA;
