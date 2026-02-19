import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    alert("Thank you for reaching out! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-form-wrapper">
      <h2>Send us a Message</h2>
      <p>Fill out the form below and we'll be in touch shortly.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Your Name</label>
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
            <label>Your Email</label>
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
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            className="form-input"
            placeholder="How can we help?"
            required
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            className="form-textarea"
            placeholder="Write your message here..."
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="send-btn">
          Send Message <FaPaperPlane />
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
