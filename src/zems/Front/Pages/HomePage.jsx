import HeroSection from "../Components/Section/HeroSection/HeroSection";
import StatsSection from "../Components/Section/StatsSection/StatsSection";
import ServicesSection from "../Components/Section/ServicesSection";
import DoctorsSection from "../Components/Section/DoctorsSection";
import TestimonialsSection from "../Components/Section/TestimonialsSection";
import ServiceCTA from "../Components/Section/ServiceCTA";

function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <DoctorsSection />
      <TestimonialsSection />
      <ServiceCTA />
    </div>
  );
}

export default HomePage;
