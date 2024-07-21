import { useState, useRef } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center">
      <audio
        ref={audioRef}
        src="src/assets/Together_We_Fly.mp3" // Replace with the path to your song
        autoPlay
        loop
      />
      <button
        onClick={toggleMute}
        className="bg-gray-700 text-white rounded-full p-2 flex items-center justify-center shadow-md"
      >
        {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
      </button>
    </div>
  );
};

export default MusicPlayer;
