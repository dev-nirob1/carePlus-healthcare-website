import { FaPhoneAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import SubTitle from "../../../../components/Element/SubTitle";
import ListItem from "../../../../components/Element/ListItem";
import BaseParagraph from "../../../../components/Element/BaseParagraph";

function AppointmentHelper() {
  return (
    <div className="appointment-helper">
      <div className="helper-card">
        <SubTitle>
          <FaPhoneAlt /> Emergency Contacts
        </SubTitle>
        <span className="emergency-contact">+1 (555) 123-4567</span>
      </div>

      <div className="helper-card">
        <SubTitle>
          <FaClock /> Opening Hours
        </SubTitle>
        <ul className="hours-list">
          <ListItem>
            <span>Mon - Fri</span>
            <span>8:00 AM - 8:00 PM</span>
          </ListItem>
          <ListItem>
            <span>Saturday</span>
            <span>9:00 AM - 6:00 PM</span>
          </ListItem>
          <ListItem>
            <span>Sunday</span>
            <span>10:00 AM - 4:00 PM</span>
          </ListItem>
        </ul>
      </div>

      <div className="helper-card">
        <SubTitle>
          <FaMapMarkerAlt /> Clinic Location
        </SubTitle>
        <BaseParagraph>
          123 Healthcare Avenue,
          <br />
          Medical District, NY 10001
        </BaseParagraph>
      </div>
    </div>
  );
}

export default AppointmentHelper;
