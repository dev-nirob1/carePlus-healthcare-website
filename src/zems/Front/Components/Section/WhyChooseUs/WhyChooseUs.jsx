import { Link } from "react-router-dom";
import {
  FiCheckCircle,
  FiShield,
  FiHeart,
  FiAward,
  FiClock,
} from "react-icons/fi";
import "./WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <section className="premium-why-us section-padding bg-white relative">
      <div className="container">
        {/* Header Section */}
        <div className="why-us-header text-center mb-4">
          <span className="sub-title flex-center gap-1 mx-auto">
            <span className="title-line"></span> Why Choose Us{" "}
            <span className="title-line"></span>
          </span>
          <h2 className="premium-title text-primary max-w-700 mx-auto">
            Setting the Standard for Modern Healthcare Excellence
          </h2>
        </div>

        {/* Premium Bento Box Grid */}
        <div className="bento-grid">
          {/* Item 1: Large Image Feature */}
          <div className="bento-item bento-large-img relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
              alt="Modern Facility"
              className="bento-bg-img"
            />
            <div className="bento-overlay"></div>
            <div className="bento-content text-white z-10 relative">
              <div className="bento-icon bg-white text-primary mb-2 flex-center">
                <FiAward size={24} />
              </div>
              <h3 className="mb-1 text-white">Award-Winning Facility</h3>
              <p className="text-white opacity-80 mb-0">
                Recognized nationally for excellence in patient care, safety,
                and modern infrastructure.
              </p>
            </div>
          </div>

          {/* Item 2: Standard Feature (Top Right) */}
          <div className="bento-item bg-light border-card flex flex-col justify-center">
            <div className="bento-icon bg-white text-secondary mb-2 flex-center shadow-sm">
              <FiShield size={24} />
            </div>
            <h4 className="text-primary mb-1">Advanced Medical Tech</h4>
            <p className="text-muted text-small mb-0">
              Equipped with the latest diagnostic and surgical technology to
              ensure precision.
            </p>
          </div>

          {/* Item 3: Standard Feature (Middle Right) */}
          <div className="bento-item bg-primary text-white flex flex-col justify-center relative overflow-hidden">
            {/* Decorative Circle */}
            <div className="bento-decor-circle"></div>

            <div className="bento-icon bg-white text-primary mb-2 flex-center shadow-sm relative z-10">
              <FiHeart size={24} />
            </div>
            <h4 className="text-white mb-1 relative z-10">
              Compassionate Care
            </h4>
            <p className="opacity-80 text-small mb-0 relative z-10">
              Our approach centers around empathy, ensuring every patient feels
              heard and valued.
            </p>
          </div>

          {/* Item 4: Wide Feature (Bottom Left) */}
          <div className="bento-item bento-wide bg-white border-card flex align-center gap-2">
            <div
              className="bento-icon bg-light text-primary flex-center shadow-sm shrink-0"
              style={{ width: "80px", height: "80px" }}
            >
              <FiClock size={32} />
            </div>
            <div>
              <h4 className="text-primary mb-1">24/7 Emergency Support</h4>
              <p className="text-muted mb-0">
                Medical emergencies do not wait. Our dedicated emergency
                response team is available around the clock, 365 days a year.
              </p>
            </div>
          </div>

          {/* Item 5: CTA Feature (Bottom Right) */}
          <div className="bento-item bg-secondary text-white flex flex-col justify-center align-center text-center">
            <h4 className="text-white mb-1">Need Consultation?</h4>
            <p className="opacity-90 text-small mb-3">
              Speak with our experts today.
            </p>
            <Link
              to="/appointments"
              className="btn bg-white text-secondary"
              style={{ width: "100%" }}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
