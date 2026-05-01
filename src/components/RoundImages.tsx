import React from "react";
import Image from "next/image";

interface ImageWithRoundedCornersProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  position?: string;
  margin?: string;
  className?: string;
}

const parsePx = (value: string, fallback: number): number => {
  const parsed = parseInt(value.replace(/[^0-9]/g, ""), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
};

const ImageWithRoundedCorners: React.FC<ImageWithRoundedCornersProps> = ({
  src,
  alt,
  width = "300px",
  height = "300px",
  margin = "0px",
}) => {
  const w = parsePx(width, 300);
  const h = parsePx(height, 300);

  return (
    <Image
      src={src}
      alt={alt}
      width={w}
      height={h}
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
