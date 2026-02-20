import React from "react";

const HeroTitle = ({ children, className = "", ...props }) => {
  return (
    <h1 className={`hero-title ${className}`} {...props}>
      {children}
    </h1>
  );
};

export default HeroTitle;
