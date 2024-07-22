import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { BiPackage } from "react-icons/bi";

const Modal = () => {
  const [sebagaiValue, setSebagaiValue] = useState("");
  const modalRef = useRef();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const sebagaiValue = searchParams.get("sebagai");
    if (sebagaiValue) {
      setSebagaiValue(sebagaiValue);
    }
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }, [location]);

  return (
    <dialog
      ref={modalRef}
      id="my_modal_5"
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box">
        <div className="flex items-center space-x-2 mb-4">
          <BiPackage className="text-5xl" />
          <h3 className="font-bold text-2xl">
            Hai, {sebagaiValue || "Orang Baik"}!
          </h3>
        </div>
        <p className="py-4 text-xl">
          Kamu mendapatkan sebuah buku. Selamat membaca.
        </p>
        <p className="py-4"></p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn border-black">Terima</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
