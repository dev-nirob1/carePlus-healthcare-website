import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import SectionHeader from "../../../../../components/Widget/SectionHeader/SectionHeader";
import TestimonialCard from "../../../../../components/Widget/TestimonialCard/TestimonialCard";
import "./TestimonialsSection.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    text: "The care I received at CarePlus was exceptional. The doctors were attentive and the staff was friendly. I felt safe and well-cared for throughout my entire medical stay.",
    name: "Robert Fox",
    role: "Patient",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: 2,
    text: "Professionalism at its best. Dr. Johnson explained everything clearly and made me feel at ease. The modern facilities are also a huge plus for anyone seeking quality care.",
    name: "Jenny Wilson",
    role: "Patient",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: 3,
    text: "I brought my son here for a checkup and the pediatric team was wonderful. They knew exactly how to handle children and make the whole experience completely stress-free.",
    name: "Kristin Watson",
    role: "Mother",
    avatar:
      "https://images.unsplash.com/photo-1554151228-14d9def656ec?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
];

function TestimonialsSection() {
  return (
    <section className="testimonials-section bg-light overflow-hidden">
      <div className="container">
        <SectionHeader
          className="text-center mb-3"
          title="Patient Testimonials"
          subtitle="Don't just take our word for it. Here is what our patients have to say about their experience with us."
        />

        <div className="testimonials-carousel-wrapper">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={true}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
