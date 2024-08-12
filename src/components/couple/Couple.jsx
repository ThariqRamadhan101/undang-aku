import { forwardRef } from "react";
import FlowerTop from "../../assets/frame-top.png";
import FlowerBottom from "../../assets/frame-bottom.png";
import "./Couple.css";

const Couple = forwardRef((props, ref) => {
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
      <div className="w-20 h-[1px] bg-gray-400 mb-12"></div>

      <div className="flex flex-col  w-full space-x-8">
        {/* Section for Mempelai Pria */}
        <div className="flex-1 flex flex-col items-start text-left mb-10 ">
          <h2 className="text-2xl mb-2 font-playfair">Mempelai Pria</h2>
          <h3 className="text-xl font-extrabold font-montserrat">
            Thariq Ramadhan
          </h3>
          <h3 className="text-xl font-extrabold font-montserrat mb-2">
            Alchandra Yasrial
          </h3>
          <h4 className="text-xs font-semibold mb-1">Putra pertama dari</h4>
          <h4 className="text-xs">
            Bpk. Ir. H. Yasrial Yasin & Ibu Hj. Teti Chandrayanti
          </h4>
        </div>

        {/* Full Line Divider with Text */}
        <div className="flex items-center mb-10">
          <div className="flex-1 h-[1px] bg-gray-400"></div>
          <span className="px-4 text-gray-600 font-semibold font-dancing">
            dan
          </span>
          <div className="flex-1 h-[1px] bg-gray-400"></div>
        </div>

        {/* Section for Mempelai Wanita */}
        <div className="flex-1 flex flex-col items-end text-right mb-6">
          <h2 className="text-2xl font-semibold mb-2 font-playfair">
            Mempelai Wanita
          </h2>
          <h3 className="text-xl font-extrabold font-montserrat mb-2">
            Sherly Ekaputri Arnas
          </h3>
          <h4 className="text-xs font-semibold mb-1">Putri pertama dari</h4>
          <h4 className="text-xs">Bpk. Anasril & Ibu Armaini</h4>
        </div>
      </div>
      <div className="block absolute bottom-4 left-5 transform -translate-x-1/2 text-gray-600 text-sm pulse-animation">
        <p>&lt;&lt;&lt;</p>
      </div>
      <div className="block absolute bottom-4 left-5 transform -translate-x-1/2 text-gray-600 text-sm pulse-animation">
        <p>&lt;&lt;&lt;</p>
      </div>
      <div className="block absolute bottom-4 right-5 transform -translate-x-1/2 text-gray-600 text-sm pulse-animation">
        <p>&gt;&gt;&gt;</p>
      </div>
      <img
        src={FlowerBottom}
        alt="FlowerBottom"
        className="absolute -bottom-0 -left-5  w-80"
      />
    </div>
  );
});

Couple.displayName = "Couple";
export default Couple;
