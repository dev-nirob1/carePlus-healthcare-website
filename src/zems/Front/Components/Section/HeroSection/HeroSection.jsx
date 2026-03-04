import { Link } from "react-router-dom";
import { FiCheckCircle, FiCalendar } from "react-icons/fi";
import { FaUserMd, FaHospitalAlt } from "react-icons/fa";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container hero-inner">
        {/* Left: Text Content */}
        <div className="hero-text">
          <span className="hero-badge">
            <FiCheckCircle /> Welcome to CarePlus
          </span>

          <h1 className="hero-title">
            Advanced Healthcare, <br />
            <span className="hero-title-accent">Made Personal.</span>
          </h1>

          <p className="hero-subtitle">
            Experience world-class medical care tailored to your needs, with
            award-winning specialists and state-of-the-art technology.
          </p>

          <div className="hero-cta-group">
            <Link to="/appointments" className="btn bg-primary">
              <FiCalendar /> Book Appointment
            </Link>
            <Link to="/services" className="btn outline">
              Discover Services
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-icon">
                <FaUserMd />
              </div>
              <div>
                <strong>150+</strong>
                <span>Expert Doctors</span>
              </div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <div className="hero-stat-icon">
                <FaHospitalAlt />
              </div>
              <div>
                <strong>24/7</strong>
                <span>Emergency Care</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="hero-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=900&auto=format&fit=crop"
            alt="Healthcare professionals"
            className="hero-image"
          />
          <div className="hero-image-badge">
            <span className="badge-dot" />
            Accepting New Patients
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
