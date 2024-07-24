import { forwardRef } from "react";
import flowerDoodle from "../../assets/flower-doodle.avif";

const BackCover = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center justify-center p-8 border bg-[#F4ECE8] border-gray-300 shadow-lg h-full w-full overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-repeat bg-center opacity-20"
        style={{
          backgroundImage: `url(${flowerDoodle})`,
          backgroundSize: "500px", // Adjust size as needed
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center p-6 bg-[#F4ECE8] shadow-2xl shadow-[#F4ECE8] rounded-3xl max-w-md mx-auto top-44 bg-opacity-50">
        <h1 className="text-4xl font-bold mb-4 text-center font-dancing">
          Epilog
        </h1>
        <p className="text-sm text-center font-montserrat">
          Kata-kata epilog yang menarik pembaca untuk datang ke acara pernikahan
        </p>
      </div>
    </div>
  );
});

BackCover.displayName = "BackCover";
export default BackCover;
