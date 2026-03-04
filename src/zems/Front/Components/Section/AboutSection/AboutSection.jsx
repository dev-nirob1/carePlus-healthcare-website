import React from "react";
import BaseTitle from "../../../../../components/Element/BaseTitle";
import BaseParagraph from "../../../../../components/Element/BaseParagraph";
import {
  FaHandHoldingHeart,
  FaUserMd,
  FaHospital,
  FaAward,
} from "react-icons/fa";
import "./AboutSection.css";

const aboutStats = [
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

function AboutSection() {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="grid medium-2 gap-5 align-center">
          {/* Elegant Media Side */}
          <div className="about-image-composition relative">
            <div className="about-main-image shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop"
                alt="Healthcare Excellence"
                className="img-fluid rounded-3xl"
              />
            </div>

            <div className="about-experience-badge px-4 py-3 bg-white shadow-xl rounded-2xl flex align-center gap-3">
              <div className="badge-value bg-primary text-white flex-center rounded-xl fw-900 fs-2xl">
                18+
              </div>
              <div>
                <p className="mb-0 fs-xs fw-800 uppercase tracking-widest text-primary">
                  Years
                </p>
                <p className="mb-0 fs-xs text-muted fw-600">Experience</p>
              </div>
            </div>
          </div>

          {/* Clean Content Side */}
          <div className="about-content">
            <span className="about-label mb-3 d-block uppercase tracking-widest fw-700 fs-xs text-primary">
              Our Legacy of Care
            </span>
            <BaseTitle className="mb-4 fs-4xl fw-900 leading-tight">
              A Healthier{" "}
              <span className="text-secondary italic">Tomorrow</span> Starts{" "}
              <span className="text-primary">Today</span>
            </BaseTitle>
            <BaseParagraph className="mb-5 text-muted leading-relaxed fs-md">
              For over 18 years, CarePlus has been at the forefront of medical
              innovation and compassionate patient care. We combine
              state-of-the-art technology with a human touch to ensure your
              well-being.
            </BaseParagraph>

            <div className="grid small-2 gap-3">
              {aboutStats.map((stat) => (
                <div
                  key={stat.id}
                  className="about-stat-card p-4 border rounded-3xl transition-all"
                >
                  <div className="stat-icon text-primary mb-3 fs-2xl">
                    {stat.icon}
                  </div>
                  <h3 className="mb-0 fs-2xl fw-800">{stat.value}</h3>
                  <p className="mb-0 fs-xs text-muted uppercase tracking-widest fw-700">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
