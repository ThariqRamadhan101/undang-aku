import { useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import Cover from "../cover/Cover";
import Couple from "../couple/Couple";
import AgendaWeddContract from "../agendaWeddContract/AgendaWeddContract";
import AgendaWeddReception from "../agendaWeddReception/AgendaWeddReception";
import Poem from "../poem/Poem";
import Gift from "../gift/Gift";
import Greetings from "../greetings/Greetings";
import OurJourney from "../ourJourney/OurJourney";
import BackCover from "../backCover/BackCover";
import pageFlipSound from "../../assets/page-flip.mp3";
import "./MyBook.css";

export default function MyBook() {
  const [showGreetings, setShowGreetings] = useState(false);
  const audioRef = useRef(null);

  const toggleGreetings = () => {
    setShowGreetings(!showGreetings);
  };

  const handlePageFlip = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="grid place-items-center h-screen gap-2">
      {!showGreetings && (
        <div className="fade-in-up">
          <HTMLFlipBook
            width={330}
            height={695}
            maxShadowOpacity={0.5}
            showCover={true}
            onFlip={handlePageFlip} // Handle page flip event
          >
            <Cover />
            <Couple />
            <AgendaWeddContract />
            <AgendaWeddReception />
            <Poem />
            <OurJourney />
            <Gift />
            <BackCover />
          </HTMLFlipBook>
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
