import React from "react";
import { FaPhoneAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

function AppointmentHelper() {
  return (
    <div className="appointment-helper">
      <div className="helper-card">
        <h3>
          <FaPhoneAlt /> Emergency Contacts
        </h3>
        <p>For medical emergencies, please call:</p>
        <span className="emergency-contact">+1 (555) 123-4567</span>
        <p>Available 24/7</p>
      </div>

      <div className="helper-card">
        <h3>
          <FaClock /> Opening Hours
        </h3>
        <ul className="hours-list">
          <li>
            <span>Mon - Fri</span>
            <span>8:00 AM - 8:00 PM</span>
          </li>
          <li>
            <span>Saturday</span>
            <span>9:00 AM - 6:00 PM</span>
          </li>
          <li>
            <span>Sunday</span>
            <span>10:00 AM - 4:00 PM</span>
          </li>
        </ul>
      </div>

      <div className="helper-card">
        <h3>
          <FaMapMarkerAlt /> Clinic Location
        </h3>
        <p>
          123 Healthcare Avenue,
          <br />
          Medical District, NY 10001
        </p>
        <p>Free parking available for patients.</p>
      </div>
    </div>
  );
}

export default AppointmentHelper;
