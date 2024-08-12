import { useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import Cover from "../cover/Cover";
import Couple from "../couple/Couple";
import CouplePhoto from "../couplePhoto/CouplePhoto";
import AgendaWeddContract from "../agendaWeddContract/AgendaWeddContract";
import AgendaWeddReception from "../agendaWeddReception/AgendaWeddReception";
import Poem from "../poem/Poem";
import Gift from "../gift/Gift";
import Greetings from "../greetings/Greetings";
import OurJourney from "../ourJourney/OurJourney";
import BackCover from "../backCover/BackCover";
import pageFlipSound from "../../assets/page-flip.mp3";
import "./MyBook.css";
import PhotoGallery from "../photoGallery/PhotoGallery";

export default function MyBook() {
  const [showGreetings, setShowGreetings] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [totalPages, setTotalPages] = useState(0); // State for total pages
  const audioRef = useRef(null);
  const flipBookRef = useRef(null);

  const toggleGreetings = () => {
    setShowGreetings(!showGreetings);
  };

  const handlePageFlip = (event) => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    setCurrentPage(event.data + 1); // Update current page number
  };

  const handleBookLoad = () => {
    if (flipBookRef.current) {
      setTotalPages(flipBookRef.current.pageFlip().getPageCount()); // Update total pages when the book is loaded
    }
  };

  return (
    <div className="grid place-items-center h-screen gap-2">
      {!showGreetings && (
        <div className="fade-in-up">
          <HTMLFlipBook
            width={340}
            height={695}
            maxShadowOpacity={0.5}
            showCover={true}
            onFlip={(event) => handlePageFlip(event)}
            ref={flipBookRef}
            onInit={handleBookLoad} // Initialize total pages on book load
          >
            <Cover />
            <Couple />
            <CouplePhoto />
            <AgendaWeddContract />
            <AgendaWeddReception />
            <Poem />
            <OurJourney />
            <Gift />
            <PhotoGallery />
            <BackCover />
          </HTMLFlipBook>
          <div className="flex justify-center items-center mt-4 text-sm font-bold text-gray-800">
            Halaman {currentPage} dari {totalPages}
          </div>
        </div>
      )}

      <div className="flex flex-col items-center">
        <button
          className="btn btn-wide bg-gray-200 mb-10 transition-transform transform hover:scale-105 hover:bg-gray-300"
          onClick={toggleGreetings}
        >
          {!showGreetings ? "Kirim Ucapan" : "Lihat Undangan"}
        </button>
        {showGreetings && (
          <div>
            <Greetings />
          </div>
        )}
      </div>
      <audio ref={audioRef} src={pageFlipSound} preload="auto"></audio>
    </div>
  );
}
