import React, { useState, useEffect } from "react";
import {
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";
import "./TestimonialsSection.css";

const testimonials = [
  {
    id: 1,
    text: "The care I received at CarePlus was exceptional. The doctors were attentive and the staff was incredibly friendly. I felt safe and well-cared for throughout my entire stay.",
    name: "Robert Fox",
    role: "Patient",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: 2,
    text: "Professionalism at its best. Dr. Johnson explained everything clearly and made me feel at ease. The modern facilities are also a huge plus. Highly recommended!",
    name: "Jenny Wilson",
    role: "Patient",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: 3,
    text: "I brought my son here for a checkup and the pediatric team was wonderful. They knew exactly how to handle children and make the experience stress-free.",
    name: "Kristin Watson",
    role: "Mother",
    avatar:
      "https://images.unsplash.com/photo-1554151228-14d9def656ec?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
];

function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="section-header">
          <h2>Patient Testimonials</h2>
          <p>
            Don't just take our word for it. Here is what our patients have to
            say about their experience with us.
          </p>
        </div>

        <div className="carousel-wrapper">
          <button
            className="carousel-btn prev-btn"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>

          <div className="carousel-viewport">
            <div
              className="carousel-slides"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div className="testimonial-card" key={testimonial.id}>
                  <FaQuoteLeft className="quote-icon" />
                  <p className="review-text">"{testimonial.text}"</p>
                  <div className="reviewer-info">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="reviewer-avatar"
                    />
                    <div className="reviewer-details">
                      <h4 className="reviewer-name">{testimonial.name}</h4>
                      <span className="reviewer-role">{testimonial.role}</span>
                      <div className="rating">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} size={14} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="carousel-btn next-btn"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
