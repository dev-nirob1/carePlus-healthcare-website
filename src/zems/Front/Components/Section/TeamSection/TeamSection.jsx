import SectionHeader from "../../../../../components/Widget/SectionHeader/SectionHeader";
import DoctorCard from "../../../../../components/Widget/DoctorCard/DoctorCard";
import "./TeamSection.css";

const leadershipMembers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Medical Director & Founder",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    id: 2,
    name: "James Wilson",
    specialty: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    id: 3,
    name: "Dr. Emily Parker",
    specialty: "Head of Operations",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=600&auto=format&fit=crop",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    id: 4,
    name: "Dr. Michael Chen",
    specialty: "Chief Surgeon",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop",
    social: { facebook: "#", twitter: "#", linkedin: "#" },
  },
];

function TeamSection() {
  return (
    <section className="team-section bg-light py-5">
      <div className="container">
        <SectionHeader
          className="text-center mb-5"
          title="Our Leadership Board"
          subtitle="Guided by world-class medical experts and administrators dedicated to revolutionizing patient care."
        />

        <div className="grid medium-2 large-4 gap-2 staggered-grid">
          {leadershipMembers.map((member, index) => (
            <div
              key={member.id}
              className={`team-card-wrapper ${index % 2 !== 0 ? "stagger-down" : ""}`}
            >
              <DoctorCard doctor={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
