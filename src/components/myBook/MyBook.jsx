import { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import Cover from "../cover/Cover";
import Couple from "../couple/Couple";
import AgendaWeddContract from "../agendaWeddContract/AgendaWeddContract";
import AgendaWeddReception from "../agendaWeddReception/AgendaWeddReception";
import Poem from "../poem/Poem";
import Gift from "../gift/Gift";
import Greetings from "../greetings/Greetings";
import OurJourney from "../ourJourney/OurJourney";

export default function MyBook() {
  const [showGreetings, setShowGreetings] = useState(false);

  const toggleGreetings = () => {
    setShowGreetings(!showGreetings);
  };

  return (
    <div className="grid place-items-center h-screen">
      {!showGreetings && (
        <div>
          <HTMLFlipBook width={331} height={729} maxShadowOpacity={0.3}>
            <Cover />
            <Couple />
            <AgendaWeddContract />
            <AgendaWeddReception />
            <Poem />
            <OurJourney />
            <Gift />
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
    </div>
  );
}
