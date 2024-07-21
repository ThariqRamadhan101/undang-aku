import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [beat, setBeat] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBeat((prevBeat) => !prevBeat);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const heartStyle = {
    animation: beat ? "beat 1s infinite" : "none",
  };

  return (
    <footer className="footer p-2 bg-base-300 text-base-content flex justify-center rounded-t-3xl">
      <aside className="flex flex-row items-center space-x-2">
        <p>Pernikahan Thariq</p>
        <FaHeart style={heartStyle} />
        <p>Sherly</p>
      </aside>
    </footer>
  );
};

export default Footer;
