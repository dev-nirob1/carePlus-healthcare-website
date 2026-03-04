import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  Navigation,
  EffectCreative,
} from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import TestimonialCard from "../../../../../components/Widget/TestimonialCard/TestimonialCard";
import "./TestimonialsSection.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

const testimonials = [
  {
    id: 1,
    text: "The care I received at CarePlus was beyond exceptional. The doctors listened to every concern and the facilities feel more like a luxury hotel than a clinic.",
    name: "Robert Fox",
    role: "Recovered Patient",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: 2,
    text: "Absolute professionalism. Dr. Johnson explained my procedure clearly and made me feel completely at ease. I wouldn't trust my family's health with anyone else.",
    name: "Jenny Wilson",
    role: "Regular Patient",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: 3,
    text: "I brought my son here for an emergency and the pediatric team was phenomenal. Fast, empathetic, and incredibly effective under pressure.",
    name: "Kristin Watson",
    role: "Grateful Mother",
    avatar:
      "https://images.unsplash.com/photo-1554151228-14d9def656ec?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
];

function TestimonialsSection() {
  const swiperRef = useRef(null);

  return (
    <section className="premium-testimonials section-padding bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="testimonial-bg-blob"></div>

      <div className="container relative z-10 flex flex-wrap align-center">
        {/* Left Side: Sticky Premium Header */}
        <div className="testimonial-header-col pr-4">
          <span className="sub-title flex align-center gap-1 mb-2">
            <span className="title-line"></span> Patient Stories
          </span>
          <h2 className="premium-title text-primary mb-3">
            Trusted by Thousands of Happy Patients
          </h2>
          <p className="text-muted mb-4">
            Our commitment to excellence translates into real stories of
            recovery, comfort, and exceptional care.
          </p>

          {/* Custom Interactive Navigation */}
          <div className="testimonial-custom-nav flex gap-1">
            <button
              className="test-nav-btn test-prev flex-center"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              className="test-nav-btn test-next flex-center"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Right Side: Creative Slider */}
        <div className="testimonial-slider-col">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay, Navigation, Pagination, EffectCreative]}
            effect="creative"
            creativeEffect={{
              prev: { shadow: true, translate: [0, 0, -400] },
              next: { translate: ["100%", 0, 0] },
            }}
            grabCursor={true}
            allowTouchMove={true}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: ".test-pagination-custom" }}
            className="premium-testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="test-pagination-custom mt-3 flex justify-center gap-1"></div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
