import HeroSection from "../Components/Section/HeroSection/HeroSection";
import StatsSection from "../Components/Section/StatsSection/StatsSection";
import AboutPreview from "../Components/Section/AboutPreview/AboutPreview";
import ServicesSection from "../Components/Section/ServicesSection/ServicesSection";

import DoctorsSection from "../Components/Section/DoctorsSection/DoctorsSection";
import TestimonialsSection from "../Components/Section/TestimonialsSection/TestimonialsSection";
import CTASection from "../Components/Section/CTASection/CTASection";

function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutPreview />
      <ServicesSection />

      <DoctorsSection />
      <TestimonialsSection />
      <StatsSection />
      <CTASection />
    </div>
  );
}

export default HomePage;
