import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import ServicesSection from "../components/home/ServicesSection";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
    </div>
  );
}

export default Home;
