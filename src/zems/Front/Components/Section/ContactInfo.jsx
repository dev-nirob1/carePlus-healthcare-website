import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function ContactInfo() {
  return (
    <div className="contact-info-wrapper">
      <div className="contact-info-card">
        <div className="info-icon">
          <FaPhoneAlt />
        </div>
        <div className="info-content">
          <h3>Phone Number</h3>
          <p>+1 (555) 123-4567</p>
          <p>+1 (555) 987-6543</p>
        </div>
      </div>
      <div className="contact-info-card">
        <div className="info-icon">
          <FaEnvelope />
        </div>
        <div className="info-content">
          <h3>Email Address</h3>
          <p>info@careplus.com</p>
          <p>support@careplus.com</p>
        </div>
      </div>
      <div className="contact-info-card">
        <div className="info-icon">
          <FaMapMarkerAlt />
        </div>
        <div className="info-content">
          <h3>Location</h3>
          <p>
            123 Healthcare Avenue,
            <br />
            Medical District, NY 10001
          </p>
        </div>
      </div>
      <div className="contact-info-card">
        <div className="info-icon">
          <FaClock />
        </div>
        <div className="info-content">
          <h3>Business Hours</h3>
          <p>Mon - Fri: 8am - 8pm</p>
          <p>Sat - Sun: 10am - 4pm</p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
