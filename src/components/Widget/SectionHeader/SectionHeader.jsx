import React from "react";
import BaseTitle from "../../Element/BaseTitle";
import BaseParagraph from "../../Element/BaseParagraph";
import "./SectionHeader.css";

function SectionHeader({ title, subtitle, className = "" }) {
  return (
    <div className={`section-header ${className}`}>
      <BaseTitle className="mb-1 text-primary">{title}</BaseTitle>
      {subtitle && (
        <BaseParagraph className="text-muted">{subtitle}</BaseParagraph>
      )}
    </div>
  );
}

export default SectionHeader;
