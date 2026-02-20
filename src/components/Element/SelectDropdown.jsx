import React from "react";

const SelectDropdown = ({ children, className = "", ...props }) => {
  return (
    <select className={className} {...props}>
      {children}
    </select>
  );
};

export default SelectDropdown;
