import React from "react";

const SubTitle = ({ children, className = "", ...props }) => {
  return (
    <h5 className={`sub-title ${className}`} {...props}>
      {children}
    </h5>
  );
};

export default SubTitle;
