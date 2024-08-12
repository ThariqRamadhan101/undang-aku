import { forwardRef } from "react";
import BookLogo from "../../assets/book-logo.png";
import flowerDoodle from "../../assets/flower-doodle.avif";
import "./Cover.css";

const Cover = forwardRef((props, ref) => {
  // Get the query parameter `sebagai`
  const queryParams = new URLSearchParams(window.location.search);
  const sebagaiValue = queryParams.get("sebagai");

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-8 border bg-[#F4ECE8] border-gray-300 shadow-lg h-full w-full mx-auto text-center relative"
    >
      <div
        className="absolute inset-0 bg-repeat bg-center opacity-5 -z-10"
        style={{
          backgroundImage: `url(${flowerDoodle})`,
          backgroundSize: "500px", // Adjust size as needed
        }}
      ></div>
      <div className="relative w-full max-w-2xl p-4 mx-auto lg:max-w-x">
        <svg viewBox="0 0 500 200" className="w-full h-auto lg:h-40">
          <path id="curve" d="M10,150 Q250,50 490,150" fill="transparent" />
          <text>
            <textPath
              href="#curve"
              startOffset="50%"
              textAnchor="middle"
              className="text-5xl font-dancing text-gray-800"
            >
              Undangan Pernikahan
            </textPath>
          </text>
        </svg>
      </div>
      <img
        src={BookLogo}
        alt="Wedding Image"
        className="mb-6 max-w-[280px] h-auto mx-auto"
      />
      <h1 className="text-4xl font-bold mb-5 font-dancing">Thariq & Sherly</h1>
      <h1 className="text-xl font-bold mb-20 font-dancing">Agustus 2024</h1>
      <h3 className="text-xxl mb-2 font-montserrat">Kepada :</h3>
      <h3 className="text-2xl font-montserrat">
        {sebagaiValue || "Orang baik"}
      </h3>
      <div className="block absolute bottom-4 right-5 transform -translate-x-1/2 text-gray-600 text-sm hint mr-1 lg:right-0">
        <p>Klik untuk buka ...</p>
      </div>
    </div>
  );
});

Cover.displayName = "Cover";
export default Cover;