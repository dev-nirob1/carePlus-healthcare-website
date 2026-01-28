import React, { useEffect } from "react";
import PageHero from "../components/common/PageHero";
import MissionSection from "../components/about/MissionSection";
import TeamSection from "../components/about/TeamSection";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us | CarePlus Clinic";
  }, []);

  return (
    <div className="about-page">
      <PageHero
        title="About CarePlus"
        bgImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2600&auto=format&fit=crop"
        pageTitle="About Us"
      />
      <MissionSection />
      <TeamSection />
    </div>
  );
}

export default About;
