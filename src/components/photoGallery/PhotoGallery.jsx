/* eslint-disable react/prop-types */
import { useState } from "react";
import { forwardRef } from "react";
import Image1 from "../../assets/photo-1.jpg";
import Image2 from "../../assets/photo-2.jpg";
import Image3 from "../../assets/photo-3.jpg";
import Image4 from "../../assets/photo-4.jpg";
import Image5 from "../../assets/photo-5.jpg";

const ImageWithSpinner = ({ src, alt, className, style }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${loading ? "hidden" : "block"}`}
        style={style}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

const PhotoGallery = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-8 bg-white border-gray-300 shadow-lg h-full w-full"
    >
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <h1 className="text-3xl font-bold mb-5 font-playfair">Photo Gallery</h1>

        {/* Small Line Divider */}
        <div className="w-20 h-[1px] bg-gray-400 mb-5"></div>
      </div>
      <div className="grid grid-cols-12 gap-4 w-full">
        {/* First row */}
        <div className="col-span-5">
          <ImageWithSpinner
            src={Image1}
            alt="Gallery Image 1"
            className="w-full h-32 object-cover shadow-md"
          />
        </div>
        <div className="col-span-7">
          <ImageWithSpinner
            src={Image2}
            alt="Gallery Image 2"
            className="w-full h-32 object-cover shadow-md"
            style={{ objectPosition: "center 20%" }}
          />
        </div>
        {/* Second row */}
        <div className="col-span-7">
          <ImageWithSpinner
            src={Image3}
            alt="Gallery Image 3"
            className="w-full h-48 object-cover shadow-md"
          />
        </div>
        <div className="col-span-5">
          <ImageWithSpinner
            src={Image4}
            alt="Gallery Image 4"
            className="w-full h-48 object-cover shadow-md"
          />
        </div>
        {/* Third row */}
        <div className="col-span-12 flex justify-center">
          <ImageWithSpinner
            src={Image5}
            alt="Gallery Image 5"
            className="w-72 h-32 object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
});

PhotoGallery.displayName = "PhotoGallery";
export default PhotoGallery;
