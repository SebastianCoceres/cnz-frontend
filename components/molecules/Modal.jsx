import React from "react";

function Modal({ children , onClick}) {
  return (
    <div onClick={onClick} className="fixed inset-0 bg-neutral-700/50 p-4 lg:p-32 max-h-screen ">
      <div className="relative h-full w-full m-auto flex justify-center items-center scale-in-center">
        {children}
      </div>
    </div>
  );
}

export default Modal;
