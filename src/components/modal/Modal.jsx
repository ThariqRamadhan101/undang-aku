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
      className="modal fixed top-14 inset-x-0 bg-transparent flex justify-center items-start pt-4"
    >
      <div className="modal-box bg-white bg-opacity-40 backdrop-blur-sm p-4 rounded-lg shadow-md max-w-xs w-full">
        <div className="flex items-center space-x-2 mb-2">
          <BiPackage className="text-2xl" />
          <h3 className="font-bold text-xl">
            Hai, {sebagaiValue || "Orang Baik"}!
          </h3>
        </div>
        <p className="py-2 text-sm font-medium">
          Kamu dikirimin buku nih.
          <br /> Selamat membaca ya...
        </p>
        <div className="flex justify-center mt-4">
          <form method="dialog">
            <button className="btn btn-xs text-xs btn-wide bg-opacity-80">
              Terima
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
