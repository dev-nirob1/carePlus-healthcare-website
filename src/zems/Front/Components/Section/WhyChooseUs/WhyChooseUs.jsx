import { Link } from "react-router-dom";
import {
  FiAward,
  FiShield,
  FiHeart,
  FiClock,
  FiUsers,
  FiActivity,
} from "react-icons/fi";
import "./WhyChooseUs.css";

const reasons = [
  {
    icon: <FiAward />,
    title: "Award-Winning Care",
    desc: "Nationally recognized for excellence in patient care, safety, and modern infrastructure.",
  },
  {
    icon: <FiShield />,
    title: "Advanced Medical Tech",
    desc: "Latest diagnostic and surgical technology for precise, reliable results every time.",
  },
  {
    icon: <FiHeart />,
    title: "Compassionate Approach",
    desc: "Every patient is treated with empathy and dignity — you are never just a number.",
  },
  {
    icon: <FiClock />,
    title: "24/7 Emergency Support",
    desc: "Our dedicated emergency team is ready around the clock, 365 days a year.",
  },
  {
    icon: <FiUsers />,
    title: "Expert Specialists",
    desc: "Over 150 internationally trained physicians across all major medical disciplines.",
  },
  {
    icon: <FiActivity />,
    title: "Proven Outcomes",
    desc: "98% patient satisfaction rate backed by transparent clinical outcome reporting.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-section section-padding">
      <div className="container">
        {/* Header */}
        <div className="why-header text-center mb-4">
          <span className="sub-title">Why Choose Us</span>
          <h2>The CarePlus Difference</h2>
          <p className="why-intro">
            We combine world-class expertise with genuine compassion to deliver
            healthcare you can trust — every step of the way.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="why-grid">
          {reasons.map((r, i) => (
            <div key={i} className="why-card">
              <div className="why-card-icon">{r.icon}</div>
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="why-cta text-center mt-4">
          <Link to="/appointments" className="btn bg-primary">
            Book an Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
