import React from "react";

interface ImageWithRoundedCornersProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  position?: string;
  margin?: string;
  className?: string;
}

const ImageWithRoundedCorners: React.FC<ImageWithRoundedCornersProps> = ({
  src,
  alt,
  width = "300px",
  height = "300px",
  position = "relative",
  margin = "1px",
}) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width,
        height,
        borderRadius: "24px",
        objectFit: "cover", 
        margin,
        boxShadow: "0 4px 130px rgba(150, 163, 181, .05)",
      }}
    />
  );
};

export default ImageWithRoundedCorners;
