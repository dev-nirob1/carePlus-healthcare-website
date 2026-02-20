import React from "react";

const InputField = ({ className = "", ...props }) => {
  return <input className={className} {...props} />;
};

export default InputField;
