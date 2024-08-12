/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import Image1 from "../../assets/photo-1.jpg";
import Image2 from "../../assets/photo-2.jpg";
import Image3 from "../../assets/photo-3.jpg";
import Image4 from "../../assets/photo-4.jpg";
import Image5 from "../../assets/photo-5.jpg";

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
          <LazyLoadImage
            src={Image1}
            alt="Gallery Image 1"
            className="w-full h-32 object-cover shadow-md"
            effect="opacity"
          />
        </div>
        <div className="col-span-7">
          <LazyLoadImage
            src={Image2}
            alt="Gallery Image 2"
            className="w-full h-32 object-cover shadow-md"
            style={{ objectPosition: "center 20%" }}
            effect="opacity"
          />
        </div>
        {/* Second row */}
        <div className="col-span-7">
          <LazyLoadImage
            src={Image3}
            alt="Gallery Image 3"
            className="w-full h-48 object-cover shadow-md"
            effect="opacity"
          />
        </div>
        <div className="col-span-5">
          <LazyLoadImage
            src={Image4}
            alt="Gallery Image 4"
            className="w-full h-48 object-cover shadow-md"
            effect="opacity"
          />
        </div>
        {/* Third row */}
        <div className="col-span-12 flex justify-center">
          <LazyLoadImage
            src={Image5}
            alt="Gallery Image 5"
            className="w-72 h-32 object-cover shadow-md"
            effect="opacity"
          />
        </div>
      </div>
      <div className="block absolute bottom-4 left-5 transform -translate-x-1/2 text-gray-600 text-sm pulse-animation">
        <p>&lt;&lt;&lt;</p>
      </div>
      <div className="block absolute bottom-4 right-5 transform -translate-x-1/2 text-gray-600 text-sm pulse-animation">
        <p>&gt;&gt;&gt;</p>
      </div>
    </div>
  );
});

PhotoGallery.displayName = "PhotoGallery";
export default PhotoGallery;
