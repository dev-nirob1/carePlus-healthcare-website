import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import SubTitle from "../../Element/SubTitle";
import BaseParagraph from "../../Element/BaseParagraph";
import "./DoctorCard.css";

function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card bg-white">
      <div className="doctor-image-container">
        <img src={doctor.image} alt={doctor.name} className="image" />
        <div className="doctor-overlay flex-center">
          <div className="doctor-social flex gap-1">
            <a
              href={doctor.social?.facebook || "#"}
              className="social-link flex-center"
            >
              <FaFacebookF />
            </a>
            <a
              href={doctor.social?.twitter || "#"}
              className="social-link flex-center"
            >
              <FaTwitter />
            </a>
            <a
              href={doctor.social?.linkedin || "#"}
              className="social-link flex-center"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="doctor-info p-1">
        <SubTitle>{doctor.name}</SubTitle>
        <BaseParagraph>{doctor.specialty || doctor.role}</BaseParagraph>
      </div>
    </div>
  );
}

export default DoctorCard;
