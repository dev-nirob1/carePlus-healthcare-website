import { Link } from "react-router-dom";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { FaUserMd, FaAward, FaHeartbeat } from "react-icons/fa";
import aboutPreviewHero from "../../../../../assets/about-preview-hero.png";
import "./AboutPreview.css";

const features = [
  {
    icon: <FiCheck />,
    title: "Top Specialists",
    desc: "Internationally trained and certified experts.",
  },
  {
    icon: <FiCheck />,
    title: "Modern Equipment",
    desc: "State-of-the-art diagnostic technology.",
  },
  {
    icon: <FiCheck />,
    title: "24/7 Emergency",
    desc: "Round-the-clock critical care support.",
  },
  {
    icon: <FiCheck />,
    title: "Patient-Centered",
    desc: "Compassionate, personalized treatment plans.",
  },
];

const stats = [
  { icon: <FaUserMd />, value: "150+", label: "Specialists" },
  { icon: <FaAward />, value: "25+", label: "Years of Excellence" },
  { icon: <FaHeartbeat />, value: "98%", label: "Patient Satisfaction" },
];

function AboutPreview() {
  return (
    <section className="about-section section-padding bg-white">
      <div className="container about-grid">
        {/* Left: Image */}
        <div className="about-img-col">
          <div className="about-img-main">
            <img
              src={aboutPreviewHero}
              alt="CarePlus luxury medical facility at dusk"
            />
          </div>

          {/* Stats Card */}
          <div className="about-stats-card glass-panel">
            {stats.map((s, i) => (
              <div key={i} className="about-stat-item">
                <div className="about-stat-icon">{s.icon}</div>
                <div>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Content */}
        <div className="about-content">
          <span className="sub-title">About CarePlus</span>

          <h2 className="mb-2">
            Committed to World-Class{" "}
            <span className="text-secondary">Healthcare.</span>
          </h2>

          <p className="about-desc">
            At CarePlus, we combine cutting-edge medical technology with
            compassionate, personalized care. Our award-winning facility is
            designed to deliver the highest standard of treatment in a calm,
            patient-focused environment.
          </p>

          <div className="about-features">
            {features.map((f, i) => (
              <div key={i} className="about-feature-item">
                <div className="about-feature-icon">{f.icon}</div>
                <div>
                  <h5>{f.title}</h5>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link to="/about" className="btn bg-primary mt-2">
            Discover Our Story <FiArrowRight style={{ marginLeft: "0.4rem" }} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
