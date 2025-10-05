import React from "react";

const SkyElement = ({
  src,
  alt = "Sky Element",
  top,
  bottom,
  left,
  right,
  width = "100px",
  height = "100px",
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className="absolute object-contain"
      style={{
        top: top,
        bottom: bottom,
        left: left,
        right: right,
        width: width,
        height: height,
      }}
    />
  );
};

export default SkyElement;
