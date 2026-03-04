import React from "react";
import { servicesData } from "../../../../../data/servicesData";
import SectionHeader from "../../../../../components/Widget/SectionHeader/SectionHeader";
import "./ServicesSection.css";
import ServiceCard from "../../Widget/ServicesCard/ServiceCard";

function ServicesSection() {
  const featuredServices = servicesData.slice(0, 6);

  return (
    <section className="premium-services-section bg-light relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="services-blob"></div>

      <div className="container relative z-10">
        <div className="flex flex-wrap justify-between align-center mb-4 services-header-row">
          <div className="services-header-content">
            <span className="sub-title flex align-center gap-1">
              <span className="title-line"></span> Departments
            </span>
            <h2 className="premium-title text-primary m-0">
              Premium Healthcare Services
            </h2>
          </div>
          <p className="services-intro-text text-muted m-0">
            We provide a comprehensive range of medical services with a focus on
            patient comfort, utilizing the latest technology and top-tier
            specialists.
          </p>
        </div>

        {/* Premium Grid */}
        <div className="premium-services-grid">
          {featuredServices.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
