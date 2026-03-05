import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import TestimonialCard from "../../../../../components/Widget/TestimonialCard/TestimonialCard";
import "./TestimonialsSection.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  {
    id: 4,
    text: "From the moment I walked in, I felt cared for. The staff is incredibly friendly and the wait times are almost non-existent. Highly recommended!",
    name: "Michael Chen",
    role: "New Patient",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
];

function TestimonialsSection() {
  const swiperRef = useRef(null);

  return (
    <section className="premium-testimonials section-padding bg-light relative overflow-hidden">
      {/* Background Decor */}
      <div className="testimonial-bg-blob"></div>

      <div className="container relative z-10">
        {/* Centered Header Row */}
        <div className="testimonial-header mb-5 text-center">
          <span className="sub-title flex align-center justify-center gap-1 mx-auto">
            Patient Stories
          </span>
          <h2 className="premium-title text-primary m-0 mb-3">
            Trusted by Thousands of Happy Patients
          </h2>
          <p className="testimonial-intro-text text-muted mx-auto m-0">
            Our commitment to excellence translates into real stories of
            recovery, comfort, and exceptional care from people just like you.
          </p>
        </div>

        {/* Carousel & Custom Nav Container */}
        <div className="testimonial-carousel-wrapper">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            grabCursor={true}
            allowTouchMove={true}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="premium-testimonial-swiper pb-4"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Footer controls: Pagination (Center) and Navigation (Sides) */}
          <div className="testimonial-controls flex align-center justify-between mt-4">
            <button
              className="test-nav-btn test-prev flex-center"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <FiChevronLeft size={22} />
            </button>

            <div className="test-pagination-custom flex justify-center gap-1"></div>

            <button
              className="test-nav-btn test-next flex-center"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <FiChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
