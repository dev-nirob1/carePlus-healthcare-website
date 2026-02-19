import React, { useEffect } from "react";
import PageHero from "../Components/Widget/PageHero";
import DoctorsGrid from "../Components/Section/DoctorsGrid";

function DoctorsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Doctors | CarePlus Clinic";
  }, []);

  return (
    <div className="doctors-page">
      <PageHero
        title="Meet Our Specialists"
        bgImage="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2600&auto=format&fit=crop"
        pageTitle="Our Doctors"
      />
      <DoctorsGrid />
    </div>
  );
}

export default DoctorsPage;
