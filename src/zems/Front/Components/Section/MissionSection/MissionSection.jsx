import React from "react";
import BaseTitle from "../../../../../components/Element/BaseTitle";
import BaseParagraph from "../../../../../components/Element/BaseParagraph";
import {
  FaHandHoldingHeart,
  FaUserMd,
  FaHospital,
  FaAward,
} from "react-icons/fa";
import "./MissionSection.css";

const missionStats = [
  {
    id: 1,
    icon: <FaHandHoldingHeart />,
    value: "50k+",
    label: "Happy Patients",
  },
  { id: 2, icon: <FaUserMd />, value: "120+", label: "Expert Doctors" },
  { id: 3, icon: <FaAward />, value: "15+", label: "Years of Trust" },
  { id: 4, icon: <FaHospital />, value: "24/7", label: "Emergency Care" },
];

function MissionSection() {
  return (
    <section className="mission-section py-5 overflow-hidden">
      <div className="container">
        <div className="grid medium-2 gap-4 align-center">
          {/* Unique Image Composition */}
          <div className="mission-media relative">
            <div className="main-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2000&auto=format&fit=crop"
                alt="Medical Team"
                className="img-fluid rounded-lg shadow-lg"
              />
            </div>
            <div className="overlay-image-wrapper shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
                alt="Care"
                className="img-fluid rounded-md"
              />
            </div>
            <div className="experience-badge-floating bg-primary text-white p-3 text-center rounded-lg shadow-lg">
              <h2 className="mb-0 text-white">18+</h2>
              <p className="mb-0 fs-sm">Years Exp.</p>
            </div>
          </div>

          {/* Content & Floating Stats */}
          <div className="mission-content">
            <BaseTitle className="mb-3">
              Dedicated to Your Health & Well-being
            </BaseTitle>
            <BaseParagraph className="mb-4 text-muted">
              At CarePlus, our mission is to provide compassionate,
              patient-centered care of the highest quality. We believe that
              everyone deserves access to exceptional healthcare in a safe and
              welcoming environment.
            </BaseParagraph>

            <div className="grid small-2 gap-2 mt-4">
              {missionStats.map((stat) => (
                <div
                  key={stat.id}
                  className="floating-stat-card p-3 bg-white border rounded-lg flex align-center gap-2 transition-transform"
                >
                  <div className="stat-icon text-primary fs-xl op-8">
                    {stat.icon}
                  </div>
                  <div>
                    <h3 className="mb-0 fs-lg fw-700">{stat.value}</h3>
                    <p className="mb-0 fs-sx text-muted uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
