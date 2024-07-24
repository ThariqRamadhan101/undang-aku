import { useState, useRef, useEffect } from "react";
import { TbMusic, TbMusicOff } from "react-icons/tb";
import Music from "../../assets/Together_We_Fly.mp3";

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  const handleUserInteraction = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.log("Playback was prevented by the browser", error);
        });
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };
  }, [isPlaying]);

  return (
    <div className="absolute top-4 right-4 z-50 flex items-center">
      <audio ref={audioRef} src={Music} loop />
      <button
        onClick={toggleMute}
        className="bg-gray-700 text-white rounded-full p-2 flex items-center justify-center shadow-md"
      >
        {isMuted ? <TbMusicOff size={24} /> : <TbMusic size={24} />}
      </button>
    </div>
  );
};

export default MusicPlayer;
