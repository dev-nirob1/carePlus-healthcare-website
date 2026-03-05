import React from "react";
import AppointmentForm from "./AppointmentForm";
import AppointmentHelper from "./AppointmentHelper";
import "./AppointmentSection.css";

function AppointmentSection() {
  return (
    <section className="appointment-section container">
      <div className="large-8 gap-2">
        <div className="large-span-5">
          <AppointmentForm />
        </div>
        <div className="large-span-3">
          <AppointmentHelper />
        </div>
      </div>
    </section>
  );
}

export default AppointmentSection;
