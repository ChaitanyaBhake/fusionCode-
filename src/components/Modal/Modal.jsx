import React from 'react';

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-999 w-full h-full bg-transparent">
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
        <p className="text-lg font-semibold ">Added to waiting list!</p>
        <button
          onClick={onClose}
          className="mt-4 px-8 py-1  bg-[#FF97A8] text-white rounded-lg w-fit"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;
