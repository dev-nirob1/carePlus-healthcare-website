import React, { useEffect } from "react";
import PageHero from "../Components/Widget/PageHero";
import ContactSection from "../Components/Section/ContactSection";

function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us | CarePlus Clinic";
  }, []);

  return (
    <div className="contact-page">
      <PageHero
        title="Get in Touch"
        bgImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2600&auto=format&fit=crop"
        pageTitle="Contact Us"
      />
      <ContactSection />
    </div>
  );
}

export default ContactPage;
