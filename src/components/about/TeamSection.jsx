import React from "react";
import "./TeamSection.css";

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Medical Director",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Dr. James Wilson",
    role: "Chief Surgeon",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Dr. Emily Parker",
    role: "Head of Pediatrics",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Dr. Michael Chen",
    role: "Senior Neurologist",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Dr. Lisa Wong",
    role: "Dermatologist",
    image:
      "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Dr. Robert Martinez",
    role: "Cardiologist",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Amanda Smith",
    role: "Head Nurse",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "John Davis",
    role: "Physical Therapist",
    image:
      "https://images.unsplash.com/photo-1580281657533-95c4020781c0?q=80&w=600&auto=format&fit=crop",
  },
];

function TeamSection() {
  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-header">
          <h2>Meet Our Experts</h2>
          <p>
            Our diverse team of medical professionals is here to support you on
            your journey to better health.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-image-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
