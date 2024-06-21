import { XIcon } from "@/assets/icons";
import React from "react";

const Modal = ({ isOpen, children, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="relative bg-black text-white p-8 rounded-lg shadow-lg w-full max-w-md m-auto z-50">
      <button
        onClick={onClose}
        className="absolute top-12 right-12 text-white hover:text-gray-400 z-50"
      >
        <XIcon />
      </button>

      {children}
      <div
        className="fixed inset-0 flex items-center justify-center bg-black/90 -z-10"
        onClick={onClose}
      />
    </div>
  );
};

export default Modal;
