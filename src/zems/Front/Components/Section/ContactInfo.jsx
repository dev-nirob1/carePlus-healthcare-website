import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import SubTitle from "../../../../components/Element/SubTitle";
import BaseParagraph from "../../../../components/Element/BaseParagraph";

function ContactInfo() {
  return (
    <div className="contact-info-wrapper">
      <div className="contact-info-header">
        <SubTitle>Contact Information</SubTitle>
        <BaseParagraph>
          Reach out to us directly through any of these channels. Our team is
          here to assist you.
        </BaseParagraph>
      </div>

      <div className="contact-cards-container">
        <div className="contact-info-card">
          <div className="info-icon">
            <FaPhoneAlt />
          </div>
          <div className="info-content">
            <SubTitle>Phone Number</SubTitle>
            <p>+1 (555) 123-4567</p>
            <p>+1 (555) 987-6543</p>
          </div>
        </div>
        <div className="contact-info-card">
          <div className="info-icon">
            <FaEnvelope />
          </div>
          <div className="info-content">
            <SubTitle>Email Address</SubTitle>
            <p>info@careplus.com</p>
            <p>support@careplus.com</p>
          </div>
        </div>
        <div className="contact-info-card">
          <div className="info-icon">
            <FaMapMarkerAlt />
          </div>
          <div className="info-content">
            <SubTitle>Location</SubTitle>
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
            <SubTitle>Business Hours</SubTitle>
            <p>Mon - Fri: 8am - 8pm</p>
            <p>Sat - Sun: 10am - 4pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
