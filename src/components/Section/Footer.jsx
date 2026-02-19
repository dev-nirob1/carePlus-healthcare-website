import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column footer-brand">
          <h3>CarePlus Clinic</h3>
          <p>
            Providing world-class healthcare with a compassionate touch. Your
            health is our priority, and we are dedicated to your well-being.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/doctors">Our Doctors</Link>
            <Link to="/appointments">Book Appointment</Link>
            <Link to="/blog">Health Blog</Link>
          </div>
        </div>

        <div className="footer-column">
          <h3>Our Services</h3>
          <div className="footer-links">
            <Link to="/services/cardiology">Cardiology</Link>
            <Link to="/services/neurology">Neurology</Link>
            <Link to="/services/pediatrics">Pediatrics</Link>
            <Link to="/services/orthopedics">Orthopedics</Link>
            <Link to="/services/dental">Dental Care</Link>
          </div>
        </div>

        <div className="footer-column">
          <h3>Stay Updated</h3>
          <p style={{ marginBottom: "1rem" }}>
            Subscribe to our newsletter for health tips and clinic updates.
          </p>
          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div
          className="container"
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}
        >
          <p>
            &copy; {new Date().getFullYear()} CarePlus Clinic. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
