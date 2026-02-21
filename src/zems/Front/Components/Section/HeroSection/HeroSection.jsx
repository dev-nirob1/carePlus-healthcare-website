import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import HeroTitle from "../../../../../components/Element/HeroTitle";
import BaseParagraph from "../../../../../components/Element/BaseParagraph";
import BaseButton from "../../../../../components/Element/BaseButton";
import "./HeroSection.css";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    title: "Your Health, Our Priority",
    subtitle:
      "Providing compassionate and professional healthcare services for you and your family.",
    cta: "Book Appointment",
    ctaLink: "/appointments",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop",
    title: "Expert Medical Team",
    subtitle:
      "Our experienced doctors and healthcare professionals are dedicated to your wellness.",
    cta: "Meet Our Doctors",
    ctaLink: "/doctors",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    title: "Personalized Patient Care",
    subtitle:
      "We believe in treating every patient with respect, compassion, and excellence.",
    cta: "Our Services",
    ctaLink: "/services",
  },
];

function HeroSection() {
  return (
    <section className="hero-section">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        slidesPerView={1}
        navigation={{
          prevEl: ".hero-nav-prev",
          nextEl: ".hero-nav-next",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-slide-content">
              <img src={slide.image} alt={slide.title} className="hero-image" />
              <div className="hero-overlay"></div>

              <div className="hero-content container text-center">
                <HeroTitle className="mb-1">{slide.title}</HeroTitle>
                <BaseParagraph className="mb-2">{slide.subtitle}</BaseParagraph>
                <div className="flex gap-1 justify-center flex-wrap">
                  <Link to={slide.ctaLink}>
                    <BaseButton className="bg-primary">{slide.cta}</BaseButton>
                  </Link>
                  <Link to="/about">
                    <BaseButton className="outline">Learn More</BaseButton>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Small Icons for Navigation */}
        <button className="hero-nav hero-nav-prev">
          <FiChevronLeft />
        </button>
        <button className="hero-nav hero-nav-next">
          <FiChevronRight />
        </button>
      </Swiper>
    </section>
  );
}

export default HeroSection;
