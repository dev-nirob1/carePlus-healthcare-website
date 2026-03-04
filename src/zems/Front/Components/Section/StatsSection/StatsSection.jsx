import React from "react";
import "./StatsSection.css";

const stats = [
  {
    value: "25+",
    label: "Years Experience",
  },
  {
    value: "10k",
    label: "Happy Patients",
  },
  {
    value: "150+",
    label: "Expert Doctors",
  },
  {
    value: "35+",
    label: "Medical Awards",
  },
];

function StatsSection() {
  return (
    <section className="premium-stats-section relative">
      <div className="container relative z-10">
        <div className="stats-glass-panel glass-panel">
          <div className="premium-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item text-center">
                <h2 className="premium-stat-value mb-1">{stat.value}</h2>
                <p className="stat-label text-muted mb-0">{stat.label}</p>

                {/* Decorative Divider Line (Except last item) */}
                {index < stats.length - 1 && (
                  <div className="stat-divider hidden-mobile"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
