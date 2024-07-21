import { forwardRef } from "react";
const Cover = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-8 border bg-[#F4ECE8] border-gray-300 shadow-lg h-full w-full"
    >
      <h1>HAHAHAHAH</h1>
    </div>
  );
});

Cover.displayName = "Cover";
export default Cover;
