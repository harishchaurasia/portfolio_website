// src/components/ImageWithRoundedCorners.tsx
import React from 'react';

interface ImageWithRoundedCornersProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

const ImageWithRoundedCorners: React.FC<ImageWithRoundedCornersProps> = ({ 
  src, 
  alt, 
  width = '300px', 
  height = '300px', 
  top, 
  left, 
  right, 
  bottom 
}) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      style={{ 
        width, 
        height, 
        borderRadius: '15px', 
        objectFit: 'cover', 
        position: 'absolute', 
        top,
        left,
        right,
        bottom
      }} 
    />
  );
};

export default ImageWithRoundedCorners;
