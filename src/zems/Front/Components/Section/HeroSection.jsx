import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./HeroSection.css";

const slides = [
  {
    id: 1,
    image: "/images/hero1.png",
    title: "Your Health, Our Priority",
    subtitle:
      "Providing compassionate and professional healthcare services for you and your family",
    cta: "Book Appointment",
    ctaLink: "/appointments",
  },
  {
    id: 2,
    image: "/images/hero2.png",
    title: "Expert Medical Team",
    subtitle:
      "Our experienced doctors and healthcare professionals are dedicated to your wellness",
    cta: "Meet Our Doctors",
    ctaLink: "/doctors",
  },
  {
    id: 3,
    image: "/images/hero3.png",
    title: "Personalized Patient Care",
    subtitle:
      "We believe in treating every patient with respect, compassion, and excellence",
    cta: "Our Services",
    ctaLink: "/services",
  },
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section className="hero-section">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? "active" : ""} ${
              index === currentSlide - 1 ||
              (currentSlide === 0 && index === slides.length - 1)
                ? "prev"
                : ""
            }`}
          >
            <div className="hero-image-container">
              <img src={slide.image} alt={slide.title} className="hero-image" />
              <div className="hero-overlay"></div>
            </div>
            <div className="hero-content container">
              <div className="hero-text">
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <div className="hero-cta">
                  <Link to={slide.ctaLink} className="btn btn-primary">
                    {slide.cta}
                  </Link>
                  <Link to="/about" className="btn btn-secondary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="hero-nav hero-nav-prev"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <FaChevronLeft />
      </button>
      <button
        className="hero-nav hero-nav-next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <FaChevronRight />
      </button>

      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
