import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import "./serviceCard.css";

function ServiceCard({ service, index }) {
  // Add staggering animation delay based on index
  const delayStyle = { animationDelay: `${index * 0.1}s` };

  return (
    <div className="premium-service-card fade-in-up" style={delayStyle}>
      <div className="service-card-bg-gradient"></div>

      <div className="service-card-content">
        <div className="premium-service-icon bg-light text-primary flex-center">
          {service.icon}
        </div>

        <h4 className="service-title text-primary mb-2">{service.title}</h4>

        <p className="service-desc text-muted mb-3">
          {service.shortDescription}
        </p>

        <div className="service-card-footer">
          <Link
            to={`/services/${service.slug}`}
            className="service-link flex align-center gap-1"
          >
            <span>Read More</span>
            <div className="link-arrow flex-center bg-accent text-primary">
              <FiArrowRight />
            </div>
          </Link>

          <div className="service-number text-muted">0{index + 1}</div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
