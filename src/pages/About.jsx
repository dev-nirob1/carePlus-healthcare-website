import React, { useEffect } from "react";
import AboutHero from "../components/about/AboutHero";
import MissionSection from "../components/about/MissionSection";
import TeamSection from "../components/about/TeamSection";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us | CarePlus Clinic";
  }, []);

  return (
    <div className="about-page">
      <AboutHero />
      <MissionSection />
      <TeamSection />
    </div>
  );
}

export default About;
