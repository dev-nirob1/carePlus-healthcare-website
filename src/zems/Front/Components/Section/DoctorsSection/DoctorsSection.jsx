import React from "react";
import SectionHeader from "../../../../../components/Widget/SectionHeader/SectionHeader";
import DoctorCard from "../../../../../components/Widget/DoctorCard/DoctorCard";
import "./DoctorsSection.css";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Head Cardiologist",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    id: 2,
    name: "Dr. James Wilson",
    specialty: "Chief Neurologist",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    id: 3,
    name: "Dr. Emily Parker",
    specialty: "Senior Pediatrician",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000&auto=format&fit=crop",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    id: 4,
    name: "Dr. Michael Chen",
    specialty: "Lead Dental Surgeon",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
];

function DoctorsSection() {
  return (
    <section className="premium-doctors-section section-padding bg-light relative">
      <div className="container">
        {/* Minimal Premium Header */}
        <div className="text-center mb-4">
          <span className="sub-title flex-center gap-1 mx-auto">
            <span className="title-line"></span> Our Medical Team{" "}
            <span className="title-line"></span>
          </span>
          <h2 className="premium-title text-primary max-w-700 mx-auto">
            Meet Our Board-Certified Specialists
          </h2>
        </div>

        {/* Premium Doctors Grid */}
        <div className="premium-doctors-grid">
          {doctors.map((doctor, index) => (
            <DoctorCard key={doctor.id} doctor={doctor} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DoctorsSection;
