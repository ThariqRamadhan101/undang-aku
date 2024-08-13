/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import ThariqImage from "../../assets/thariq.jpg";
import SherlyImage from "../../assets/sherly.jpg";
import FlowerTop from "../../assets/frame-top.png";
import FlowerBottom from "../../assets/frame-bottom.png";
import PagePagination from "../pagePagination/PagePagination";

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
          <LazyLoadImage
            src={ThariqImage}
            alt="Thariq"
            className="w-52 h-40 object-cover mb-4 border-4 border-white shadow-md transform -rotate-2"
            style={{ objectPosition: "center 20%" }}
            effect="opacity"
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
          <LazyLoadImage
            src={SherlyImage}
            alt="Sherly"
            className="w-52 h-40 object-cover mb-4 border-4 border-white shadow-md -rotate-2"
            style={{ objectPosition: "center 20%" }}
            effect="opacity"
          />
          <h2 className="text-xl mb-2 font-playfair">Sherly</h2>
        </div>
      </div>
      <img
        src={FlowerBottom}
        alt="FlowerBottom"
        className="absolute -bottom-0 -left-5  w-80"
      />
      <PagePagination />
    </div>
  );
});

CouplePhoto.displayName = "CouplePhoto";
export default CouplePhoto;
