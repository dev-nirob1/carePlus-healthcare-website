import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "./TestimonialCard.css";

function TestimonialCard({ testimonial }) {
  return (
    <div className="premium-testimonial-card bg-white">
      {/* Decorative Quote Icon */}
      <div className="quote-watermark text-light-accent">
        <FaQuoteLeft />
      </div>

      <div className="testimonial-content-wrapper relative z-10">
        {/* Rating Stars */}
        <div className="testimonial-rating mb-2 flex gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <FaStar key={i} className="text-warning" size={14} />
          ))}
        </div>

        {/* The Quote */}
        <p className="testimonial-quote text-main-color">
          "{testimonial.text}"
        </p>

        {/* User Info */}
        <div className="testimonial-author mt-4 pt-3 flex align-center gap-2">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="author-avatar"
          />
          <div>
            <h5 className="mb-0 text-primary">{testimonial.name}</h5>
            <span className="text-small text-muted">{testimonial.role}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
