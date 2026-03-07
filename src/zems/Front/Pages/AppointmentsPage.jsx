import React, { useEffect } from "react";
import PageHero from "../Components/Widget/PageHero";
import AppointmentSection from "../Components/Section/AppointmentSection/AppointmentSection";

function AppointmentsPage() {
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

export default AppointmentsPage;
