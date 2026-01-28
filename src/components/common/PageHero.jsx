import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import "./PageHero.css";

function PageHero({ title, bgImage, pageTitle }) {
  return (
    <section
      className="page-hero"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className="page-hero-content">
        <h1>{title}</h1>
        <div className="page-breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-separator">
            <FaChevronRight size={12} />
          </span>
          <span className="current-page">{pageTitle}</span>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
