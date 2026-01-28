import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactSection;
