import { forwardRef } from "react";
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
      <div className="grid grid-cols-12 grid-r  gap-4 w-full">
        {/* First row */}
        <div className="col-span-5">
          <img
            src={Image1}
            alt="Gallery Image 1"
            className="w-full h-32 object-cover shadow-md"
          />
        </div>
        <div className="col-span-7">
          <img
            src={Image2}
            alt="Gallery Image 2"
            className="w-full h-32 object-cover shadow-md"
            style={{ objectPosition: "center 20%" }}
          />
        </div>
        {/* Second row */}
        <div className="col-span-7">
          <img
            src={Image3}
            alt="Gallery Image 3"
            className="w-full h-48 object-cover shadow-md"
          />
        </div>
        <div className="col-span-5">
          <img
            src={Image4}
            alt="Gallery Image 4"
            className="w-full h-48 object-cover shadow-md"
          />
        </div>
        {/* Third row */}
        <div className="col-span-12 flex justify-center">
          <img
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
