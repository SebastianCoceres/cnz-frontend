import React, { useEffect } from "react";
import mainBackground from "../public/fondo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import useScrollSmooth from "../hooks/useScrollSmooth";
import Banderin from "../public/Banderin.png";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={`relative`}>
      <div
        className="herobg absolute inset-0"
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${mainBackground.src})`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="absolute inset-0 bg-black/25 md:bg-transparent md:bg-gradient-to-r md:from-black/75 md:to-transparent"></div>

      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 flex h-screen items-center justify-center md:justify-start lg:px-8"
      >
        <div className="max-w-xl text-center sm:text-left">
          <figure className="flex justify-center">
            <img src={Banderin.src} alt="" className="w-40 h-40 object-contain"/>
          </figure>
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
            Club Náutico Zaragoza
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white">
            Fundado en 1964
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link href="#contacto">
              <a
                className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                onClick={(e) => {
                  e.preventDefault();
                  useScrollSmooth("#contacto");
                }}
              >
                ¡Quiero unirme!
              </a>
            </Link>
            <Link href="/sobre-nosotros">
              <a className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto">
                Conócenos
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
