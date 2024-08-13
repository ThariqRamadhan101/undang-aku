import { forwardRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

import BackCoverImg from "../../assets/back-cover.png";

const BackCover = forwardRef((props, ref) => {
  // Get the query parameter `sebagai`
  const queryParams = new URLSearchParams(window.location.search);
  const sebagaiValue = queryParams.get("sebagai");
  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center justify-center border bg-[#F4ECE8] border-gray-300 shadow-lg h-full w-full overflow-hidden"
    >
      <div className="w-[340px] h-[695px] relative">
        <LazyLoadImage
          src={BackCoverImg}
          alt="Back Cover"
          effect="opacity"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col">
          <div className="pt-14 px-12">
            <h1 className="text-4xl font-bold mb-4 font-dancing">Epilog</h1>
            <p className="text-sm font-montserrat">
              &quot;Semerbak <i>atsiri</i>, <i>linalol</i>, <i>kumarin</i>,{" "}
              <i>etil vanilin</i>, dan <i>benzil asetat</i> telah hadir. Di
              lembar-lembar berikutnya.
              <b>{sebagaiValue ? " " + sebagaiValue + ", " : " "}</b>
              {sebagaiValue ? "kaulah " : "Kaulah "}
              bunganya. Aromamu telah dipanggil untuk menyempurnakan cerita di
              halaman buku ini.&quot;
            </p>
          </div>
        </div>
      </div>
      <div className="block absolute bottom-4 left-5 transform -translate-x-1/2 text-gray-600 text-sm pulse-animation">
        <p>&lt;&lt;&lt;</p>
      </div>
    </div>
  );
});

BackCover.displayName = "BackCover";
export default BackCover;
