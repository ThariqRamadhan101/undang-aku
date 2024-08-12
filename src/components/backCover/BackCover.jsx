import { forwardRef } from "react";
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
      <div
        className="bg-cover bg-center bg-no-repeat w-[340px] h-[695px]"
        style={{
          backgroundImage: `url(${BackCoverImg})`,
        }}
      >
        <div className="pt-14 px-12">
          <h1 className="text-4xl font-bold mb-4 font-dancing">Epilog</h1>
          <p className="text-sm  font-montserrat">
            &quot;Semerbak <i>atsiri</i>, <i>linalol</i>, <i>kumarin</i>,{" "}
            <i>etil vanilin</i>, dan <i>benzil asetat</i> telah hadir. Di
            lembar-lembar berikutnya,
            <b>{sebagaiValue ? " " + sebagaiValue + "," : ""}</b> kaulah
            bunganya. Aromamu telah dipanggil untuk menyempurnakan cerita di
            halaman buku ini.&quot;
          </p>
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
