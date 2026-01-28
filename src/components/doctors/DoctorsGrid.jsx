import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./DoctorsGrid.css";

const doctorsData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    category: "Cardiology",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    id: 2,
    name: "Dr. James Wilson",
    specialty: "Neurologist",
    category: "Neurology",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    id: 3,
    name: "Dr. Emily Parker",
    specialty: "Pediatrician",
    category: "Pediatrics",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000&auto=format&fit=crop",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    id: 4,
    name: "Dr. Michael Chen",
    specialty: "Dermatologist",
    category: "Dermatology",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    id: 5,
    name: "Dr. Lisa Wong",
    specialty: "General Practitioner",
    category: "General Practice",
    image:
      "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1000&auto=format&fit=crop",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    id: 6,
    name: "Dr. Robert Martinez",
    specialty: "Orthopedic Surgeon",
    category: "Orthopedics",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1000&auto=format&fit=crop",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    id: 7,
    name: "Dr. Amanda White",
    specialty: "Cardiologist",
    category: "Cardiology",
    image:
      "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=1000&auto=format&fit=crop",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    id: 8,
    name: "Dr. David Kim",
    specialty: "Neurologist",
    category: "Neurology",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1000&auto=format&fit=crop",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
];

const categories = [
  "All",
  "Cardiology",
  "Neurology",
  "Pediatrics",
  "Dermatology",
  "General Practice",
  "Orthopedics",
];

function DoctorsGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredDoctors =
    activeFilter === "All"
      ? doctorsData
      : doctorsData.filter((doctor) => doctor.category === activeFilter);

  return (
    <section className="doctors-grid-section">
      <div className="doctors-grid-container">
        {/* Filter Buttons */}
        <div className="filter-container">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? "active" : ""}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="doctors-grid-full">
          {filteredDoctors.map((doctor) => (
            <div className="doctor-card-enhanced" key={doctor.id}>
              <div className="doctor-image-wrapper">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="doctor-image-full"
                />
                <div className="doctor-social-overlay">
                  <div className="social-links">
                    <a href={doctor.social.facebook} className="social-icon">
                      <FaFacebookF />
                    </a>
                    <a href={doctor.social.twitter} className="social-icon">
                      <FaTwitter />
                    </a>
                    <a href={doctor.social.linkedin} className="social-icon">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
              <div className="doctor-info-enhanced">
                <h3 className="doctor-name">{doctor.name}</h3>
                <span className="doctor-role">{doctor.specialty}</span>
                <div style={{ marginTop: "1rem" }}>
                  <Link to="/appointments">
                    <button className="book-btn-sm">Book Appointment</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DoctorsGrid;
