/* eslint-disable react/prop-types */
import { useState } from "react";
import { forwardRef } from "react";
import ThariqImage from "../../assets/thariq.jpg";
import SherlyImage from "../../assets/sherly.jpg";
import FlowerTop from "../../assets/frame-top.png";
import FlowerBottom from "../../assets/frame-bottom.png";

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

const CouplePhoto = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col items-center p-8 border bg-[#F4ECE8] border-gray-300 shadow-lg h-full w-full"
    >
      <img
        src={FlowerTop}
        alt="Flower"
        className="absolute -top-7 -right-5  w-80"
      />
      <h1 className="text-3xl font-bold mb-12 font-playfair">
        Pasangan Penganten
      </h1>
      {/* Small Line Divider */}
      <div className="w-20 h-[1px] bg-gray-400 mb-4"></div>
      <div className="flex flex-col w-full space-x-8">
        <div className="flex-1 flex flex-col items-start text-left mb-2">
          <h2 className="text-xl mb-4 font-playfair">Thariq</h2>
          <ImageWithSpinner
            src={ThariqImage}
            alt="Thariq"
            className="w-52 h-40 object-cover mb-4 border-4 border-white shadow-md transform -rotate-2"
            style={{ objectPosition: "center 20%" }}
          />
        </div>

        {/* Full Line Divider with Text */}
        <div className="flex items-center mb-2">
          <div className="flex-1 h-[1px] bg-gray-400"></div>
          <span className="px-4 text-gray-600 font-semibold font-dancing">
            dan
          </span>
          <div className="flex-1 h-[1px] bg-gray-400"></div>
        </div>

        <div className="flex-1 flex flex-col items-end text-right mb-2">
          <ImageWithSpinner
            src={SherlyImage}
            alt="Sherly"
            className="w-52 h-40 object-cover mb-4 border-4 border-white shadow-md -rotate-2"
            style={{ objectPosition: "center 20%" }}
          />
          <h2 className="text-xl mb-2 font-playfair">Sherly</h2>
        </div>
      </div>
      <img
        src={FlowerBottom}
        alt="FlowerBottom"
        className="absolute -bottom-0 -left-5  w-80"
      />
    </div>
  );
});

CouplePhoto.displayName = "CouplePhoto";
export default CouplePhoto;