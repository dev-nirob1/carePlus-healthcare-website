import React from "react";
import { servicesData } from "../../../../../data/servicesData";
import SectionHeader from "../../../../../components/Widget/SectionHeader/SectionHeader";
import "./ServicesSection.css";
import ServiceCard from "../../Widget/ServicesCard/ServiceCard";

function ServicesSection() {
  const featuredServices = servicesData.slice(0, 6);

  return (
    <section className="services-section bg-light">
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          className="text-center mb-3"
          title="Our Medical Services"
          subtitle="We provide a wide range of medical services to meet your health needs. Our team of specialists is dedicated to delivering the best care possible."
        />

        {/* Services Grid & Cards */}
        <div className="medium-2 large-3 gap-2">
          {featuredServices.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
