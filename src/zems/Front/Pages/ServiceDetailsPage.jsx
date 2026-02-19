import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaCalendarCheck } from "react-icons/fa";
import { servicesData } from "../../../data/servicesData";
import PageHero from "../Components/Widget/PageHero";
import "../Components/Section/ServiceDetails.css";

function ServiceDetailsPage() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (service) {
      document.title = `${service.title} | CarePlus Clinic`;
    }
  }, [service]);

  if (!service) {
    return (
      <div className="service-details-section">
        <div
          className="service-details-container"
          style={{ textAlign: "center", padding: "5rem 0" }}
        >
          <h1>Service Not Found</h1>
          <p>The medical service you're looking for doesn't exist.</p>
          <Link
            to="/services"
            className="more-services-link"
            style={{ marginTop: "2rem" }}
          >
            <FaArrowLeft /> Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="service-details-page">
      <PageHero
        title={service.title}
        bgImage={service.image}
        pageTitle="Service Details"
      />

      <section className="service-details-section">
        <div className="service-details-container">
          <div className="service-main-content">
            <div className="service-intro">
              <h1>Specialized {service.title} Care</h1>
              <p>{service.fullDescription}</p>
            </div>

            <div className="service-features-grid">
              {service.features.map((feature, index) => (
                <div className="service-feature-item" key={index}>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="service-additional-info">
              <h2>Key Information</h2>
              <ul
                className="service-details-list"
                style={{ listStyle: "none", padding: 0 }}
              >
                {service.details.map((detail, index) => (
                  <li
                    key={index}
                    style={{
                      marginBottom: "1rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        background: "#0ea5e9",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <span style={{ color: "#64748b", fontSize: "1.1rem" }}>
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="service-sidebar">
            <img
              src={service.image}
              alt={service.title}
              className="service-sidebar-image"
            />
            <div className="service-cta-card">
              <h2>Need Help?</h2>
              <p>
                Book an appointment with our {service.title} specialists today
                and get the care you deserve.
              </p>
              <Link to="/appointments" className="book-btn-white">
                Book Appointment <FaCalendarCheck />
              </Link>
            </div>
            <Link to="/services" className="more-services-link">
              <FaArrowLeft /> Explore All Services
            </Link>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetailsPage;
