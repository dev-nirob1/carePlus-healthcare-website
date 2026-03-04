import { Link } from "react-router-dom";
import { FiCalendar, FiPhoneCall } from "react-icons/fi";
import "./CTASection.css";

function CTASection() {
  return (
    <section className="premium-cta-section relative flex-center">
      {/* Background with Animated Gradient */}
      <div className="cta-bg-wrapper">
        <div className="cta-animated-gradient"></div>
        {/* Subtle overlay pattern */}
        <div className="cta-pattern-overlay"></div>
      </div>

      <div className="container relative z-10 text-center">
        <div className="cta-content max-w-700 mx-auto">
          <span className="sub-title flex-center gap-1 mx-auto text-white opacity-80 mb-2">
            <span className="title-line bg-white"></span> Your Health Matters{" "}
            <span className="title-line bg-white"></span>
          </span>

          <h2 className="premium-title text-white mb-3">
            Ready to Experience Premium Healthcare?
          </h2>

          <p className="cta-description text-white opacity-90 mb-4">
            Join thousands of satisfied patients. Book your appointment today
            and take the first step towards a healthier, happier life with
            CarePlus.
          </p>

          <div className="premium-cta-group flex-center gap-2 flex-wrap">
            <Link
              to="/appointments"
              className="btn btn-light premium-btn-large"
            >
              <FiCalendar /> Book Appointment
            </Link>
            <Link
              to="/contact"
              className="btn btn-outline-light premium-btn-large"
            >
              <FiPhoneCall /> Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
