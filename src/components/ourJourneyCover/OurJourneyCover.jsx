import { forwardRef } from "react";

const OurJourneyCover = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-8 border bg-[#F4ECE8] border-gray-300 shadow-lg h-screen w-screen"
    >
      <div className="flex flex-col items-center">
        <div className="w-20 h-[1px] bg-gray-400 mt-48 mb-6"></div>
        <h1 className="text-center text-4xl font-bold leading-relaxed mb-6 font-playfair">
          Our Journey
        </h1>
        <div className="w-20 h-[1px] bg-gray-400 mb-6"></div>
      </div>
    </div>
  );
});

OurJourneyCover.displayName = "OurJourneyCover";
export default OurJourneyCover;
