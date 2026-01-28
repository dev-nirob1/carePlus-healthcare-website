import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import "./ServicesHero.css";

function ServicesHero() {
  return (
    <section className="services-hero">
      <div className="services-hero-content">
        <h1>Our Medical Services</h1>
        <div className="services-breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-separator">
            <FaChevronRight size={12} />
          </span>
          <span className="current-page">Services</span>
        </div>
      </div>
    </section>
  );
}

export default ServicesHero;
