import React from "react";
import logo from "../public/Logo.png";

function ConstructionPage() {
  return (
    <section className="flex justify-center items-center h-screen w-screen bg-gray-900 text-white">
      <div className="text-center flex flex-col justify-center items-center">
        <img
          className="w-[30em] h-[30em] object-contain"
          src={logo.src}
          alt="Club náutico de Zaragoza"
        />
        <h1 className="text-3xl">Página en construcción</h1>
        <hr className="w-full bg-white mx-auto my-8" />
        <h2 className="text-2xl">Estamos preparando algo maravilloso para vosotros</h2>
      </div>
    </section>
  );
}

export default ConstructionPage;
