import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import "./AboutHero.css";

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-content">
        <h1>About CarePlus</h1>
        <div className="about-breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-separator">
            <FaChevronRight size={12} />
          </span>
          <span className="current-page">About Us</span>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
