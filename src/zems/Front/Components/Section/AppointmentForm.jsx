import React, { useState } from "react";
import "./AppointmentForm.css";
import InputField from "../../../../components/Element/InputField";
import SelectDropdown from "../../../../components/Element/SelectDropdown";
import BaseButton from "../../../../components/Element/BaseButton";
import BaseParagraph from "../../../../components/Element/BaseParagraph";
import BaseTitle from "../../../../components/Element/BaseTitle";

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your appointment request has been submitted.");
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
        <div className="mb-2">
          <BaseTitle>Book Your Visit</BaseTitle>
          <BaseParagraph>
            Fill out the form below to schedule an appointment with our medical
            professionals.
          </BaseParagraph>
        </div>
        <div className="medium-2 medium-gap-1">
          <div>
            <label>Full Name</label>
            <InputField
              type="text"
              name="name"
              placeholder="John Doe"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Phone Number</label>
            <InputField
              type="tel"
              name="phone"
              placeholder="+1 (555) 000-0000"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label>Email Address</label>
          <InputField
            type="email"
            name="email"
            placeholder="example@email.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="medium-2 medium-gap-1">
          <div>
            <label>Preferred Date</label>
            <InputField
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Preferred Time</label>
            <InputField
              type="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label>Department</label>
          <SelectDropdown
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
          </SelectDropdown>
        </div>
        <BaseButton className="bg-primary width-full mt-1">
          Schedule Appointment
        </BaseButton>
      </form>
    </div>
  );
}

export default AppointmentForm;
