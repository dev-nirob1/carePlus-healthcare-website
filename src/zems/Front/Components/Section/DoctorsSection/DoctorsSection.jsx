import React from "react";
import SectionHeader from "../../../../../components/Widget/SectionHeader/SectionHeader";
import DoctorCard from "../../../../../components/Widget/DoctorCard/DoctorCard";
import "./DoctorsSection.css";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    id: 2,
    name: "Dr. James Wilson",
    specialty: "Neurologist",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    id: 3,
    name: "Dr. Emily Parker",
    specialty: "Pediatrician",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000&auto=format&fit=crop",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    id: 4,
    name: "Dr. Michael Chen",
    specialty: "Dental Surgeon",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    id: 5,
    name: "Dr. Amanda Lee",
    specialty: "Orthopedic",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    id: 6,
    name: "Dr. Robert Fox",
    specialty: "Dermatologist",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1000&auto=format&fit=crop",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
];

function DoctorsSection() {
  return (
    <section className="doctors-section bg-white">
      <div className="container">
        <SectionHeader
          className="text-center mb-3"
          title="Meet Our Specialists"
          subtitle="Top-tier medical professionals dedicated to providing you with the best possible care and treatment."
        />

        {/* Global Grid System handling responsiveness automatically */}
        <div className="medium-2 large-3 gap-2">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DoctorsSection;
