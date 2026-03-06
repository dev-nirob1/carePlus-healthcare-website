import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="large-6 gap-2">
          <div className="large-span-2">
            <ContactInfo />
          </div>
          <div className="large-span-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
