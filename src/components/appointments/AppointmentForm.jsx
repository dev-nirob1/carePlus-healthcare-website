import React, { useState } from "react";
import "./AppointmentForm.css";

function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    doctor: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    console.log("Form Submitted:", formData);
    alert("Thank you! Your appointment request has been submitted.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      doctor: "",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <div className="appointment-form-container">
      <form className="appointment-form" onSubmit={handleSubmit}>
        <h2>Book Your Visit</h2>

        <div className="form-grid">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="John Doe"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="form-input"
              placeholder="+1 (555) 000-0000"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="john@example.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Department</label>
            <select
              name="department"
              className="form-select"
              required
              value={formData.department}
              onChange={handleChange}
            >
              <option value="">Select Department</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Dermatology">Dermatology</option>
              <option value="General Practice">General Practice</option>
              <option value="Orthopedics">Orthopedics</option>
            </select>
          </div>

          <div className="form-group">
            <label>Preferred Date</label>
            <input
              type="date"
              name="date"
              className="form-input"
              required
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Preferred Time</label>
            <input
              type="time"
              name="time"
              className="form-input"
              required
              value={formData.time}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full-width">
            <label>Reason for Visit (Optional)</label>
            <textarea
              name="message"
              className="form-textarea"
              placeholder="Describe your symptoms or reason for visit..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Schedule Appointment
        </button>
      </form>
    </div>
  );
}

export default AppointmentForm;
