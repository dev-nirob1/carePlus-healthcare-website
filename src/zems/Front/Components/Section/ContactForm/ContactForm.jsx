import React, { useState } from "react";
import "./ContactForm.css";
import InputField from "../../../../../components/Element/InputField";
import BaseTextArea from "../../../../../components/Element/BaseTextArea";
import BaseButton from "../../../../../components/Element/BaseButton";
import BaseParagraph from "../../../../../components/Element/BaseParagraph";
import BaseTitle from "../../../../../components/Element/BaseTitle";
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
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="mb-1">
          <BaseTitle>Send us a Message</BaseTitle>
          <BaseParagraph>
            Fill out the form below and we'll be in touch shortly.
          </BaseParagraph>
        </div>

        <div className="medium-2 medium-gap-1">
          <div>
            <label>Your Name</label>
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
            <label>Your Email</label>
            <InputField
              type="email"
              name="email"
              placeholder="john@example.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label>Subject</label>
          <InputField
            type="text"
            name="subject"
            placeholder="How can we help?"
            required
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Message</label>
          <BaseTextArea
            name="message"
            className="form-input"
            placeholder="Write your message here..."
            required
            value={formData.message}
            onChange={handleChange}
            rows={5}
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "0.5rem",
              border: "1px solid #e2e8f0",
              backgroundColor: "#f8fafc",
              transition: "all 0.3s ease",
              fontSize: "1rem",
            }}
          ></BaseTextArea>
        </div>

        <BaseButton className="bg-primary width-full mt-1" type="submit">
          Send Message <FaPaperPlane style={{ marginLeft: "0.5rem" }} />
        </BaseButton>
      </form>
    </div>
  );
}

export default ContactForm;
