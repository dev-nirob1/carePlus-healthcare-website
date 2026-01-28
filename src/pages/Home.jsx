import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import ServicesSection from "../components/home/ServicesSection";
import DoctorsSection from "../components/home/DoctorsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import ServiceCTA from "../components/services/ServiceCTA";
import "./Home.css";

function Home() {
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

export default Home;
