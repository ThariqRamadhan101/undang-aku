import { forwardRef } from "react";
import Illustration from "../../assets/illustration.png";
import PagePagination from "../pagePagination/PagePagination";

const Poem = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-8 border bg-[#F4ECE8] border-gray-300 shadow-lg h-full w-full"
    >
      <p className="text-center text-lg font-serif leading-relaxed mt-24 mb-10">
        ***
        <br />
        Hari ini kau membuka buku.
        <br />
        Tidak ada susunan kata.
        <br />
        Melainkan semerbak aroma dari hamparan bunga.
        <br />
        Di halaman kedua kau bertanya, orang gila mana yang menanam mawar merah
        di alenia pertama.
        <br />
        Tapi kau tetap membaca.
        <br />
        ***
      </p>
      <img
        src={Illustration}
        alt="Ilustration Image"
        className="max-w-[200px] h-auto mx-auto"
      />
      <PagePagination />
    </div>
  );
});

Poem.displayName = "Poem";
export default Poem;
