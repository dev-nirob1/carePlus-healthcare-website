import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { servicesData } from "../../../../../data/servicesData";
import BaseTitle from "../../../../../components/Element/BaseTitle";
import BaseParagraph from "../../../../../components/Element/BaseParagraph";
import ListItem from "../../../../../components/Element/ListItem";
import "./ServicesList.css";

function ServicesList() {
  return (
    <section className="services-list-section">
      <div className="container">
        {servicesData.map((service, index) => (
          <div className=" medium-2 gap-2 mb-5 align-center" key={service.id}>
            <div
              className={`service-image-wrapper ${index % 2 !== 0 ? "large-order-2" : "large-order-1"} small-order-1`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="service-item-image"
              />
            </div>
            <div
              className={`service-content ${index % 2 !== 0 ? "large-order-1" : "large-order-2"} small-order-2`}
            >
              <div className="service-icon-box">{service.icon}</div>
              <BaseTitle>{service.title}</BaseTitle>
              <BaseParagraph>{service.shortDescription}</BaseParagraph>
              <ul className="service-features medium-2 gap-1">
                {service.features.map((feature, i) => (
                  <ListItem key={i}>{feature.title}</ListItem>
                ))}
              </ul>
              <Link
                to={`/services/${service.slug}`}
                className="learn-more-btn mt-1"
              >
                Learn More <FaArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesList;
