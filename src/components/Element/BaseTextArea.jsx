import React from "react";

const BaseTextArea = ({ className = "", ...props }) => {
  return <textarea className={className} {...props}></textarea>;
};

export default BaseTextArea;
