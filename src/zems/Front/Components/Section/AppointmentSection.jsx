import React from "react";
import AppointmentForm from "./AppointmentForm";
import AppointmentHelper from "./AppointmentHelper";
import "./AppointmentSection.css";

function AppointmentSection() {
  return (
    <section className="appointment-section">
      <div className="appointment-container">
        <AppointmentForm />
        <AppointmentHelper />
      </div>
    </section>
  );
}

export default AppointmentSection;
