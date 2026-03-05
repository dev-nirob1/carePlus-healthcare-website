import { Link } from "react-router-dom";
import {
  FiAward,
  FiShield,
  FiHeart,
  FiClock,
  FiUsers,
  FiActivity,
} from "react-icons/fi";
import whyChooseUsHero from "../../../../../assets/why-choose-us-hero.png";
import "./WhyChooseUs.css";

const reasons = [
  {
    icon: <FiAward />,
    title: "Award-Winning Care",
    desc: "Nationally recognized for excellence in patient care and modern infrastructure.",
  },
  {
    icon: <FiShield />,
    title: "Advanced Medical Tech",
    desc: "Latest diagnostic and surgical technology for precise results.",
  },
  {
    icon: <FiHeart />,
    title: "Compassionate Approach",
    desc: "Every patient is treated with empathy, dignity, and real care.",
  },
  {
    icon: <FiClock />,
    title: "24/7 Emergency Support",
    desc: "Our emergency team is ready around the clock, 365 days a year.",
  },
  {
    icon: <FiUsers />,
    title: "Expert Specialists",
    desc: "Over 150 internationally trained physicians across all disciplines.",
  },
  {
    icon: <FiActivity />,
    title: "Proven Outcomes",
    desc: "98% patient satisfaction rate backed by clinical outcome reporting.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-section section-padding relative overflow-hidden">
      <div className="container relative z-10">
        <div className="why-split-container">
          {/* Left Side: Premium Image Collage */}
          <div className="why-image-wrapper">
            <div className="why-image-inner">
              <img
                src={whyChooseUsHero}
                alt="Hospital doctors working together"
                className="why-main-img"
              />
              <div className="why-experience-badge glassmorphism">
                <span className="badge-years text-primary">15+</span>
                <span className="badge-text text-muted">
                  Years of Excellence
                  <br />
                  in Healthcare
                </span>
              </div>
            </div>
            {/* Decorative pattern behind image */}
            <div className="why-image-blob"></div>
          </div>

          {/* Right Side: Content & Mini Grid */}
          <div className="why-content-wrapper">
            <div className="why-header mb-4">
              <span className="sub-title flex align-center gap-1">
                <span className="title-line"></span> Why Choose Us
              </span>
              <h2 className="premium-title text-primary m-0 mb-3">
                The CarePlus Difference
              </h2>
              <p className="why-intro text-muted m-0">
                We combine world-class expertise with genuine compassion to
                deliver healthcare you can trust — every step of your journey to
                better health.
              </p>
            </div>

            <div className="why-mini-grid mb-4">
              {reasons.map((r, i) => (
                <div key={i} className="why-mini-card">
                  <div className="why-mini-icon text-primary bg-light flex-center">
                    {r.icon}
                  </div>
                  <div className="why-mini-info">
                    <h5 className="text-primary m-0 mb-1">{r.title}</h5>
                    <p className="text-muted m-0">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="why-cta mt-4">
              <Link to="/appointments" className="btn bg-primary">
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
