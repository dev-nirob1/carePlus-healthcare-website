import React from "react";
import { FaUserMd, FaAmbulance, FaRegClock } from "react-icons/fa";
import BaseTitle from "../../../../../components/Element/BaseTitle";
import BaseParagraph from "../../../../../components/Element/BaseParagraph";
import "./StatsSection.css";

const stats = [
  {
    id: 1,
    icon: <FaRegClock />,
    title: "24/7 Service",
    description: "Available whenever you need us most.",
  },
  {
    id: 2,
    icon: <FaUserMd />,
    title: "Qualified Doctors",
    description: "Expert professionals for your care.",
  },
  {
    id: 3,
    icon: <FaAmbulance />,
    title: "Emergency Care",
    description: "Rapid response for critical situations.",
  },
];

function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-panel">
          {stats.map((stat) => (
            <div className="stat-item flex align-center gap-2" key={stat.id}>
              <div className="stat-icon flex-center bg-light">{stat.icon}</div>
              <div className="stat-content">
                <BaseTitle className="mb-1">{stat.title}</BaseTitle>
                <BaseParagraph>{stat.description}</BaseParagraph>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
