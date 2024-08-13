import { forwardRef } from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GiFlowerPot } from "react-icons/gi";
import PagePagination from "../pagePagination/PagePagination";

const event1 = {
  title: "Resepsi Pernikahan I",
  location: "Rumah Keluarga Sherly",
  locationDetail: "JL. A R Hakim Balai-Balai Padang Panjang Barat",
  mapLink: "https://maps.app.goo.gl/7eX1JcCKzwL91sap7",
  date: "Sabtu, 24 Agustus 2024",
  time: "11:00 - 16:00 WIB",
  icon: <GiFlowerPot className="text-xl text-[#E0C9C2]" />,
};

const event2 = {
  title: "Resepsi Pernikahan II",
  location: "Gedung Engku Syafe'i",
  mapLink: "https://maps.app.goo.gl/RitypTG4tTfu9QMA7",
  locationDetail:
    "BBPMP SUMBAR, Komplek Perguruan Tinggi UNP, Air Tawar Bar., Kec. Padang Utara",
  date: "Sabtu, 31 Agustus 2024",
  time: "10:00 - 15:30 WIB",
  icon: <GiFlowerPot className="text-xl text-[#E0C9C2]" />,
};

const AgendaWeddReception = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex items-center justify-center p-8 border bg-[#F4ECE8] border-gray-300 shadow-lg h-full w-full"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold mb-2 font-playfair">Save The Date</h1>

        {/* Small Line Divider */}
        <div className="w-20 h-[1px] bg-gray-400 mb-5"></div>

        {/* Event Details - Event 1 */}
        <div className="relative p-4 shadow-md border border-gray-300 bg-white rounded-t-3xl  w-72">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold font-playfair mb-2">
              {event1.title}
            </h2>
            <div className="mb-2">{event1.icon}</div>
            <p className="text-xs mb-1 font-semibold font-serif">
              {event1.location}
            </p>
            <p className="text-xs mb-1 mx-10 font-serif">
              {event1.locationDetail}
            </p>
            <p className="text-xs mb-1 font-serif">{event1.date}</p>
            <p className="text-xs mb-5 font-serif">{event1.time}</p>
            {event1.mapLink && (
              <button className="bg-[#E0C9C2] text-black btn btn-wide border border-gray-300 rounded-lg p-2 mb-1">
                <a
                  href={event1.mapLink}
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

        {/* Event Details - Event 2 */}
        <div className="relative p-4 shadow-md border border-gray-300 bg-white rounded-b-3xl w-72  mt-2">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold font-playfair mb-2">
              {event2.title}
            </h2>
            <div className="mb-2">{event2.icon}</div>
            <p className="text-xs mb-1 font-semibold font-serif">
              {event2.location}
            </p>
            <p className="text-xs mb-1 mx-5 font-serif">
              {event2.locationDetail}
            </p>
            <p className="text-xs mb-1 font-serif">{event2.date}</p>
            <p className="text-xs mb-5 font-serif">{event2.time}</p>
            {event2.mapLink && (
              <button className="bg-[#E0C9C2] text-black btn btn-wide border border-gray-300 rounded-lg p-2">
                <a
                  href={event2.mapLink}
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
      <PagePagination />
    </div>
  );
});

AgendaWeddReception.displayName = "AgendaWeddReception";

export default AgendaWeddReception;
