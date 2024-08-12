import { forwardRef } from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GiBigDiamondRing } from "react-icons/gi";

const event = {
  title: "Akad Nikah",
  location: "Masjid Islamic Center Padang Panjang",
  mapLink: "https://maps.app.goo.gl/fVgW4v1e6qL9A9kq7",
  date: "Sabtu, 24 Agustus 2024",
  time: "08:00 - 10:00 WIB",
  icon: <GiBigDiamondRing className="text-4xl text-[#E0C9C2]" />,
};

const AgendaWeddContract = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex items-center justify-center p-8 border bg-[#F4ECE8] border-gray-300 shadow-lg h-full w-full"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold mb-5 font-playfair">Save The Date</h1>

        {/* Small Line Divider */}
        <div className="w-20 h-[1px] bg-gray-400 mb-5"></div>

        {/* Event Details */}
        <div className="relative p-4 shadow-md border border-gray-300 bg-white rounded-t-full">
          <div className="bg-white mt-20">
            <div className="flex flex-col items-center">
              <h2 className="text-4xl font-semibold font-playfair mb-8">
                {event.title}
              </h2>
              <div className="mb-6">{event.icon}</div>
              <p className="text-2xl mb-3 font-serif">{event.location}</p>
              <p className="text-xl mb-3 font-serif">{event.date}</p>
              <p className="text-xl mb-16 font-serif">{event.time}</p>
            </div>

            <div>
              {event.mapLink && (
                <button className="bg-[#E0C9C2] text-black btn btn-wide border border-gray-300 rounded-lg p-2 mb-10">
                  <a
                    href={event.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Buka di Google Maps
                    <FaMapMarkedAlt className="ml-2 text-2xl" />
                  </a>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="block absolute bottom-4 left-5 transform -translate-x-1/2 text-gray-600 text-sm pulse-animation">
        <p>&lt;&lt;&lt;</p>
      </div>
      <div className="block absolute bottom-4 right-5 transform -translate-x-1/2 text-gray-600 text-sm pulse-animation">
        <p>&gt;&gt;&gt;</p>
      </div>
    </div>
  );
});

AgendaWeddContract.displayName = "AgendaWeddContract";

export default AgendaWeddContract;
