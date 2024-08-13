/* eslint-disable react/prop-types */
import { useEffect } from "react";

const ImagePreloader = ({ images }) => {
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [images]);

  return null; // This component does not render anything
};

export default ImagePreloader;
