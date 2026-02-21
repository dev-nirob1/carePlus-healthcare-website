import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import SubTitle from "../../Element/SubTitle";
import BaseParagraph from "../../Element/BaseParagraph";
import "./TestimonialCard.css";

function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card bg-white">
      <div className="flex justify-between align-center">
        <FaQuoteLeft className="quote-icon" />
        <div className="rating flex">
          {[...Array(testimonial.rating)].map((_, i) => (
            <FaStar key={i} size={14} />
          ))}
        </div>
      </div>
      <BaseParagraph className="quote">"{testimonial.text}"</BaseParagraph>
      <div className="reviewer-info flex align-center gap-1">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="avatar"
        />
        <div className="reviewer-details">
          <SubTitle>{testimonial.name}</SubTitle>
          <BaseParagraph>{testimonial.role}</BaseParagraph>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
