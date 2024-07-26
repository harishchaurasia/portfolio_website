import React from 'react';

interface ImageWithRoundedCornersProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  position?: string;
  margin?: string;
}

const ImageWithRoundedCorners: React.FC<ImageWithRoundedCornersProps> = ({ 
  src, 
  alt, 
  width = '300px', 
  height = '300px', 
  position = 'relative',
  margin = '0'
}) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      style={{ 
        width, 
        height, 
        borderRadius: '15px', // Adjust border-radius as needed for rounded corners
        objectFit: 'cover', // Ensure the image covers the entire area
        margin,
        boxShadow:  "10px 10px 25px #3a3a3a"
      }} 
    />
  );
};

export default ImageWithRoundedCorners;
