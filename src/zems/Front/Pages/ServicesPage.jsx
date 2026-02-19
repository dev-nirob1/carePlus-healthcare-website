import React, { useEffect } from "react";
import PageHero from "../Components/Widget/PageHero";
import ServicesList from "../Components/Section/ServicesList";
import ServiceCTA from "../Components/Section/ServiceCTA";

function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Services | CarePlus Clinic";
  }, []);

  return (
    <div className="services-page">
      <PageHero
        title="Our Medical Services"
        bgImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2600&auto=format&fit=crop"
        pageTitle="Services"
      />
      <ServicesList />
      <ServiceCTA />
    </div>
  );
}

export default ServicesPage;
