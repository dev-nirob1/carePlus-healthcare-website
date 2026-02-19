import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./DoctorsSection.css";

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Dr. James Wilson",
    specialty: "Neurologist",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Dr. Emily Parker",
    specialty: "Pediatrician",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000&auto=format&fit=crop",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Dental Surgeon",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
];

function DoctorsSection() {
  return (
    <section className="doctors-section">
      <div className="doctors-container">
        <div className="section-header">
          <h2>Meet Our Specialists</h2>
          <p>
            Top-tier medical professionals dedicated to providing you with the
            best possible care and treatment.
          </p>
        </div>

        <div className="doctors-grid">
          {doctors.map((doctor, index) => (
            <div className="doctor-card" key={index}>
              <div className="doctor-image-container">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="doctor-image"
                />
                <div className="doctor-overlay">
                  <div className="doctor-social">
                    <a href={doctor.social.facebook} className="social-link">
                      <FaFacebookF />
                    </a>
                    <a href={doctor.social.twitter} className="social-link">
                      <FaTwitter />
                    </a>
                    <a href={doctor.social.linkedin} className="social-link">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
              <div className="doctor-info">
                <h3 className="doctor-name">{doctor.name}</h3>
                <p className="doctor-specialty">{doctor.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DoctorsSection;
