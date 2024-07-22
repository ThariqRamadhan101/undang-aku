import { BrowserRouter } from "react-router-dom";
import MyBook from "./components/myBook/MyBook";
import Modal from "./components/modal/Modal";
import MusicPlayer from "./components/musicPlayer/MusicPlayer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Modal />
        <MyBook />
        {/* <Footer /> */}
        <MusicPlayer />
      </div>
    </BrowserRouter>
  );
}

export default App;
