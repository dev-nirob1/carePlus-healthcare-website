import React from "react";
import {
  FaUserMd,
  FaHeartbeat,
  FaChild,
  FaBrain,
  FaNotesMedical,
  FaMicroscope,
} from "react-icons/fa";
import "./ServicesList.css";

const servicesData = [
  {
    id: 1,
    title: "General Practice",
    description:
      "Comprehensive primary care for individuals and families. We focus on prevention, diagnosis, and treatment of common adult health problems.",
    icon: <FaUserMd />,
    image:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=800&auto=format&fit=crop",
    features: [
      "Annual Checkups",
      "Immunizations",
      "Chronic Disease Management",
      "Health Screenings",
    ],
  },
  {
    id: 2,
    title: "Cardiology",
    description:
      "Expert heart care using state-of-the-art diagnostic and therapeutic procedures. Your heart health is our top priority.",
    icon: <FaHeartbeat />,
    image:
      "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=800&auto=format&fit=crop",
    features: [
      "Heart Screenings",
      "ECG & EKG",
      "Blood Pressure Management",
      "Cardiac Rehabilitation",
    ],
  },
  {
    id: 3,
    title: "Pediatrics",
    description:
      "Dedicated healthcare for infants, children, and adolescents. We provide a friendly and safe environment for your little ones.",
    icon: <FaChild />,
    image:
      "https://images.unsplash.com/photo-1632053001835-512c011e5a87?q=80&w=800&auto=format&fit=crop",
    features: [
      "Well-child Visits",
      "Vaccinations",
      "Developmental Screenings",
      "Pediatric Acute Care",
    ],
  },
  {
    id: 4,
    title: "Neurology",
    description:
      "Advanced care for disorders of the nervous system, including the brain, spinal cord, and peripheral nerves.",
    icon: <FaBrain />,
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop",
    features: [
      "Stroke Care",
      "Migraine Management",
      "Epilepsy Treatment",
      "Memory Disorders",
    ],
  },
  {
    id: 5,
    title: "Dermatology",
    description:
      "Specialized care for skin, hair, and nail conditions. We offer both medical and cosmetic dermatology services.",
    icon: <FaNotesMedical />,
    image:
      "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=800&auto=format&fit=crop",
    features: [
      "Skin Cancer Screening",
      "Acne Treatment",
      "Eczema & Psoriasis",
      "Cosmetic Procedures",
    ],
  },
  {
    id: 6,
    title: "Diagnostics & Imaging",
    description:
      "High-quality imaging and laboratory services to support accurate diagnosis and treatment planning.",
    icon: <FaMicroscope />,
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
    features: [
      "X-Ray & MRI",
      "Blood Tests",
      "Ultrasound",
      "Pathology Services",
    ],
  },
];

function ServicesList() {
  return (
    <section className="services-list-section">
      <div className="services-list-container">
        {servicesData.map((service, index) => (
          <div
            className={`service-item ${index % 2 !== 0 ? "reverse" : ""}`}
            key={service.id}
          >
            <div className="service-image-wrapper">
              <img
                src={service.image}
                alt={service.title}
                className="service-item-image"
              />
            </div>
            <div className="service-content">
              <div className="service-icon-box">{service.icon}</div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesList;
