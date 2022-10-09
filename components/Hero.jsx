import React from "react";
import Image from "next/image";

function Hero({ mainBackground }) {
  const image = `http://localhost:1337${mainBackground.url}`;
  return (
    <section className={`relative`}>
      <div className="absolute inset-0">
        <Image
          src={image}
          layout="fill"
          alt="Picture of the author"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-white/25"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
            Club Náutico <strong className="text-red-600">Zaragoza</strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white">
            Fundado en 1964
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            >
              ¡Quiero unirme!
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
            >
              Conócenos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
