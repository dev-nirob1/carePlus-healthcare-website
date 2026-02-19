import React from "react";
import {
  FaHandHoldingHeart,
  FaUserMd,
  FaHospital,
  FaAward,
} from "react-icons/fa";
import "./MissionSection.css";

function MissionSection() {
  return (
    <section className="mission-section">
      <div className="mission-container">
        <div className="mission-image-wrapper">
          <div className="image-stack">
            <img
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2000&auto=format&fit=crop"
              alt="Medical Team Meeting"
              className="mission-image-main"
            />
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
              alt="Doctor Checkup"
              className="mission-image-small"
            />
          </div>
          <div className="experience-badge">
            <span className="exp-number">18+</span>
            <span className="exp-text">Years of Experience</span>
          </div>
        </div>

        <div className="mission-content">
          <h2>Dedicated to Your Health &amp; Well-being</h2>
          <p className="mission-intro">
            At CarePlus, our mission is to provide compassionate,
            patient-centered care of the highest quality. We believe that
            everyone deserves access to exceptional healthcare in a safe and
            welcoming environment.
          </p>

          <div className="mission-stats-grid">
            <div className="mission-stat">
              <div className="stat-icon-wrapper">
                <FaHandHoldingHeart />
              </div>
              <div>
                <span className="stat-number">50k+</span>
                <span className="stat-label">Happy Patients</span>
              </div>
            </div>
            <div className="mission-stat">
              <div className="stat-icon-wrapper">
                <FaUserMd />
              </div>
              <div>
                <span className="stat-number">120+</span>
                <span className="stat-label">Expert Doctors</span>
              </div>
            </div>
            <div className="mission-stat">
              <div className="stat-icon-wrapper">
                <FaAward />
              </div>
              <div>
                <span className="stat-number">15+</span>
                <span className="stat-label">Years of Trust</span>
              </div>
            </div>
            <div className="mission-stat">
              <div className="stat-icon-wrapper">
                <FaHospital />
              </div>
              <div>
                <span className="stat-number">24/7</span>
                <span className="stat-label">Emergency Care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
