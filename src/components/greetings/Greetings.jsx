import { useState, useEffect } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "./Greetings.css"; // Import the custom animation CSS

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  });
}
const firestore = firebase.firestore();

const Greetings = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, loading, error] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt", "desc")
  );
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isLocked, setIsLocked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    try {
      await firestore.collection("messages").add({
        name,
        text: message,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setName("");
      setMessage("");
      setSubmitStatus("success");
      setIsLocked(true);
      setTimeout(() => {
        setIsLocked(false);
      }, 30000); // Unlock the button after 30 seconds
    } catch (err) {
      console.error("Error adding message: ", err);
      setSubmitStatus("error");
    }
    setTimeout(() => setSubmitStatus(null), 3000); // Hide the status message after 3 seconds
  };

  useEffect(() => {
    if (messages) {
      setVisibleMessages(messages.slice(0, messages.length));
    }
  }, [messages]);

  return (
    <div className="flex flex-col items-center justify-center p-8 border bg-gray-400 border-gray-300 shadow-lg h-full w-full relative fade-in-up">
      {submitStatus === "success" && (
        <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-md">
          Ucapan berhasil dikirim 😆
        </div>
      )}
      {submitStatus === "error" && (
        <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow-md">
          Ucapan gagal dikirim 😓
        </div>
      )}
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold mb-5 font-playfair">Kirim Ucapan</h1>

        {/* Small Line Divider */}
        <div className="w-20 h-[1px] bg-black mb-5"></div>

        <form onSubmit={handleSubmit} className="mb-8">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama kamu ..."
            className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-gray-400"
            maxLength={20}
            disabled={isLocked}
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tulis pesan kamu..."
            className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-gray-400"
            rows="4"
            maxLength={100}
            disabled={isLocked}
          ></textarea>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none"
            disabled={isLocked}
          >
            Kirim
          </button>
        </form>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <h1 className="text-3xl font-bold mb-5 font-playfair">
          Kumpulan Ucapan
        </h1>

        {/* Small Line Divider */}
        <div className="w-20 h-[1px] bg-black mb-5"></div>
        <div className="max-h-72 overflow-y-auto w-full">
          {visibleMessages.map((msg, index) => (
            <div
              key={index}
              className="p-2 m-2 border bg-white border-gray-300 rounded-xl grid grid-cols-[auto_1fr] items-start"
            >
              <div className="flex items-start">
                <IoChatbubbleEllipsesOutline className="text-gray-500 m-1 w-5" />
              </div>
              <div className="text-left">
                <p className="font-bold">{msg.name}</p>
                <p className="max-w-xl">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Greetings;
