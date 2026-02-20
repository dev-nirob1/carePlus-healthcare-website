import React from "react";

const BaseParagraph = ({ children, className = "", ...props }) => {
  return (
    <p className={className} {...props}>
      {children}
    </p>
  );
};

export default BaseParagraph;
