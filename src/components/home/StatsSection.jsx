import React from "react";
import { FaUserMd, FaAmbulance, FaClock } from "react-icons/fa";
import "./StatsSection.css";

const stats = [
  {
    icon: <FaClock />,
    title: "24/7 Hours Service",
    description: "We are available when you need us most.",
  },
  {
    icon: <FaUserMd />,
    title: "Qualified Doctors",
    description: "Expert medical professionals for your care.",
  },
  {
    icon: <FaAmbulance />,
    title: "Emergency Care",
    description: "Rapid response for critical situations.",
  },
];

function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <h3>{stat.title}</h3>
              <p>{stat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
