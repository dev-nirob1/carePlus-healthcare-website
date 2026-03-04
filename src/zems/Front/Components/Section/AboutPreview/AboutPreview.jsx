import { Link } from "react-router-dom";
import { FiCheck, FiArrowRight, FiActivity } from "react-icons/fi";
import "./AboutPreview.css";

function AboutPreview() {
  return (
    <section className="premium-about section-padding bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="about-bg-pattern"></div>

      <div className="container relative z-10">
        <div className="about-preview-grid">
          {/* Left Side: Premium Image Composition */}
          <div className="about-image-composition">
            {/* Main Image with Soft Shadow */}
            <div className="img-box main-img-box">
              <img
                src="https://images.unsplash.com/photo-1538108149393-cebb47ac80bc?q=80&w=2070&auto=format&fit=crop"
                alt="Modern Medical Facility"
              />
              <div className="img-overlay-gradient"></div>
            </div>

            {/* Secondary Overlapping Image */}
            <div className="img-box sub-img-box">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop"
                alt="Expert Doctor"
              />
            </div>

            {/* Floating Experience Badge (Glassmorphic) */}
            <div className="experience-badge glass-panel flex align-center gap-2">
              <div className="badge-icon bg-secondary text-white flex-center">
                <FiActivity size={28} />
              </div>
              <div className="badge-text">
                <h3 className="mb-0 text-primary">25+</h3>
                <p className="mb-0 text-muted">Years of Excellence</p>
              </div>
            </div>

            {/* Abstract Shape */}
            <div className="about-shape"></div>
          </div>

          {/* Right Side: Elegant Content */}
          <div className="about-content-wrapper">
            <span className="sub-title flex align-center gap-1">
              <span className="title-line"></span> About CarePlus
            </span>

            <h2 className="premium-title mb-3 text-primary">
              Committed To Providing World-Class Healthcare.
            </h2>

            <p className="about-description mb-4">
              At CarePlus, we combine state-of-the-art medical technology with
              compassionate, personalized care. Our award-winning facility is
              designed to provide you with the highest standard of treatment in
              a calming, patient-focused environment.
            </p>

            {/* Premium Feature List */}
            <div className="premium-features-grid mb-4">
              <div className="feature-item flex gap-1">
                <div className="feature-icon bg-light text-secondary flex-center">
                  <FiCheck />
                </div>
                <div>
                  <h5 className="mb-0 text-primary">Top Specialists</h5>
                  <p className="text-small text-muted mb-0">
                    Internationally trained experts.
                  </p>
                </div>
              </div>

              <div className="feature-item flex gap-1">
                <div className="feature-icon bg-light text-secondary flex-center">
                  <FiCheck />
                </div>
                <div>
                  <h5 className="mb-0 text-primary">Modern Tech</h5>
                  <p className="text-small text-muted mb-0">
                    Latest medical equipment.
                  </p>
                </div>
              </div>

              <div className="feature-item flex gap-1">
                <div className="feature-icon bg-light text-secondary flex-center">
                  <FiCheck />
                </div>
                <div>
                  <h5 className="mb-0 text-primary">24/7 Care</h5>
                  <p className="text-small text-muted mb-0">
                    Emergency support always ready.
                  </p>
                </div>
              </div>

              <div className="feature-item flex gap-1">
                <div className="feature-icon bg-light text-secondary flex-center">
                  <FiCheck />
                </div>
                <div>
                  <h5 className="mb-0 text-primary">Patient First</h5>
                  <p className="text-small text-muted mb-0">
                    Compassionate and caring approach.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-actions pt-2 border-top">
              <Link to="/about" className="btn bg-primary premium-btn">
                Discover Our Story <FiArrowRight className="ml-1" />
              </Link>

              <div className="ceo-signature mt-3 flex align-center gap-2">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop"
                  alt="CEO"
                  className="ceo-avatar"
                />
                <div>
                  <h6 className="mb-0 text-primary">Dr. Richard Matthews</h6>
                  <span className="text-small text-muted">
                    Chief Medical Officer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
