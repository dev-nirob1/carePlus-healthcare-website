import React from "react";

const BaseImage = ({ image, className = "", alt = "image", ...props }) => {
  return <img src={image} className={className} alt={alt} {...props} />;
};

export default BaseImage;
