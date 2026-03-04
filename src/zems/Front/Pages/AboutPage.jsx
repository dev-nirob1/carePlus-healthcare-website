import React, { useEffect } from "react";
import PageHero from "../Components/Widget/PageHero";
import AboutSection from "../Components/Section/AboutSection/AboutSection";
import TeamSection from "../Components/Section/TeamSection/TeamSection";

function AboutPage() {
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
      <AboutSection />
      <TeamSection />
    </div>
  );
}

export default AboutPage;
