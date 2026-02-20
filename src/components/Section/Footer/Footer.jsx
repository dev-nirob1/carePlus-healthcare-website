import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import BaseButton from "../../Element/BaseButton";
import BaseTitle from "../../Element/BaseTitle";
import BaseParagraph from "../../Element/BaseParagraph";
import InputField from "../../Element/InputField";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content grid medium-2 large-4 gap-3">
          <div className="footer-column footer-brand">
            <BaseTitle>CarePlus Clinic</BaseTitle>
            <BaseParagraph>
              Providing world-class healthcare with a compassionate touch. Your
              health is our priority, and we are dedicated to your well-being.
            </BaseParagraph>
            <div className="social-links flex gap-1 mt-2">
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
            <BaseTitle>Quick Links</BaseTitle>
            <div className="footer-links flex flex-column gap-1">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/doctors">Our Doctors</Link>
              <Link to="/appointments">Book Appointment</Link>
              <Link to="/blog">Health Blog</Link>
            </div>
          </div>

          <div className="footer-column">
            <BaseTitle>Our Services</BaseTitle>
            <div className="footer-links flex flex-column gap-1">
              <Link to="/services/cardiology">Cardiology</Link>
              <Link to="/services/neurology">Neurology</Link>
              <Link to="/services/pediatrics">Pediatrics</Link>
              <Link to="/services/orthopedics">Orthopedics</Link>
              <Link to="/services/dental">Dental Care</Link>
            </div>
          </div>

          <div className="footer-column">
            <BaseTitle>Stay Updated</BaseTitle>
            <BaseParagraph className="mb-2">
              Subscribe to our newsletter for health tips and clinic updates.
            </BaseParagraph>
            <form
              className="newsletter-form flex flex-column gap-1"
              onSubmit={(e) => e.preventDefault()}
            >
              <InputField
                type="email"
                placeholder="Your email address"
                required
              />
              <BaseButton type="submit" className="bg-primary width-full">
                Subscribe
              </BaseButton>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom mt-4">
        <div className="container">
          <BaseParagraph className="text-center">
            &copy; {new Date().getFullYear()} CarePlus Clinic. All rights
            reserved.
          </BaseParagraph>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
