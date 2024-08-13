import { BrowserRouter } from "react-router-dom";
import ImagePreloader from "./components/imagePreloader/ImagePreloader";
import MyBook from "./components/myBook/MyBook";
import Modal from "./components/modal/Modal";
import MusicPlayer from "./components/musicPlayer/MusicPlayer";
import WoodBackground from "./assets/wood-background.jpg";
import BookLogo from "./assets/book-logo.png";
import FlowerDoodle from "./assets/flower-doodle.avif";
import ThariqImage from "./assets/thariq.jpg";
import SherlyImage from "./assets/sherly.jpg";
import Image1 from "./assets/photo-1.jpg";
import Image2 from "./assets/photo-2.jpg";
import Image3 from "./assets/photo-3.jpg";
import Image4 from "./assets/photo-4.jpg";
import Image5 from "./assets/photo-5.jpg";
import BackCoverImg from "./assets/back-cover.png";

const images = [
  BookLogo,
  FlowerDoodle,
  ThariqImage,
  SherlyImage,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  BackCoverImg,
];

function App() {
  return (
    <BrowserRouter>
      <ImagePreloader images={images} />
      <div
        className="App min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${WoodBackground})` }}
      >
        <Modal />
        <MyBook />
        {/* <Footer /> */}
        <MusicPlayer />
      </div>
    </BrowserRouter>
  );
}

export default App;
