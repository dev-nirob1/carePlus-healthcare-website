import React, { useEffect } from "react";
import PageHero from "../components/common/PageHero";
import AppointmentSection from "../components/appointments/AppointmentSection";

function Appointments() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Book Appointment | CarePlus Clinic";
  }, []);

  return (
    <div className="appointments-page">
      <PageHero
        title="Book an Appointment"
        bgImage="https://images.unsplash.com/photo-1540306385312-dce8b6408284?q=80&w=2600&auto=format&fit=crop"
        pageTitle="Appointments"
      />
      <AppointmentSection />
    </div>
  );
}

export default Appointments;
