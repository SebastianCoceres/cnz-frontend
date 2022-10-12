import React, {useEffect} from "react";
import mainBackground from "../public/fondo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={`relative`}>
      <div
        className="absolute inset-0"
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${mainBackground.src})`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-white/25"></div>

      <div data-aos="fade-up" data-aos-duration="1500" className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
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
