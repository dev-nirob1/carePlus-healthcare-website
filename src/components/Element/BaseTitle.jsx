import React from "react";

const BaseTitle = ({ children, className = "", ...props }) => {
  return (
    <h3 className={`title ${className}`} {...props}>
      {children}
    </h3>
  );
};

export default BaseTitle;
