import { Link } from "react-router-dom";
import SubTitle from "../../../../../components/Element/SubTitle";
import BaseParagraph from "../../../../../components/Element/BaseParagraph";
import "./serviceCard.css";
import { FaArrowRight } from "react-icons/fa";
function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <div className="icon">{service.icon}</div>
      <div>
        <SubTitle>{service.title}</SubTitle>
        <BaseParagraph>{service.shortDescription}</BaseParagraph>
        <Link to={`/services/${service.slug}`}>
          Learn More <FaArrowRight className="arrow-icon" />
        </Link>
      </div>
    </div>
  );
}
export default ServiceCard;
