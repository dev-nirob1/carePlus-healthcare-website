import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import "./DoctorCard.css";

function DoctorCard({ doctor, index }) {
  const delayStyle = { animationDelay: `${index * 0.15}s` };

  return (
    <div className="premium-doctor-card bg-white fade-in-up" style={delayStyle}>
      {/* Image Wrapper */}
      <div className="doctor-img-wrapper">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="doctor-profile-img"
        />

        {/* Floating Action Button for Socials */}
        <div className="social-fab flex-center bg-primary text-white shadow-sm">
          <FiPlus />
          <div className="social-links-drawer flex gap-1">
            <a
              href={doctor.social?.facebook || "#"}
              className="social-link flex-center text-primary bg-white"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href={doctor.social?.twitter || "#"}
              className="social-link flex-center text-primary bg-white"
            >
              <FaTwitter size={14} />
            </a>
            <a
              href={doctor.social?.linkedin || "#"}
              className="social-link flex-center text-primary bg-white"
            >
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Doctor Info */}
      <div className="doctor-info-card text-center relative z-10">
        <h4 className="doctor-name text-primary mb-1">{doctor.name}</h4>
        <p className="doctor-specialty text-secondary mb-0">
          {doctor.specialty}
        </p>
      </div>
    </div>
  );
}

export default DoctorCard;
