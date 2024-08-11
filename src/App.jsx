import { BrowserRouter } from "react-router-dom";
import MyBook from "./components/myBook/MyBook";
import Modal from "./components/modal/Modal";
import MusicPlayer from "./components/musicPlayer/MusicPlayer";
import WoodBackground from "./assets/wood-background.png";

function App() {
  return (
    <BrowserRouter>
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
