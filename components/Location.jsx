import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

import { IoLogoWhatsapp } from "react-icons/io";

function Location() {
  return (
    <section className="body-font relative">
      <div className="container px-5 py-24 mx-auto flex lg:flex-nowrap flex-wrap min-h-[50em]">
        <div className="w-full lg:w-2/3 bg-gray-900 rounded-lg overflow-hidden lg:mr-10 p-10 flex items-end justify-start relative min-h-[30em]">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0 grayscale-[25%]"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.939362003065!2d-0.8797379987501218!3d41.65705213709476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5914ed584d8af7%3A0xa90c62df63e5fc41!2sGimnasio%20del%20Club%20N%C3%A1utico!5e0!3m2!1ses!2ses!4v1665268846948!5m2!1ses!2ses"
          ></iframe>
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className=" px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                DIRECCIÓN
              </h2>
              <p className="mt-1 text-white">
                P.º de Echegaray y C., 101, 50003 Zaragoza
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-black text-2xl mb-1 font-medium title-font">
            Encuéntranos en:
          </h2>
          <ul className="leading-relaxed mb-5 flex justify-around lg:flex-col">
            <li>
              <a
                target="_blank"
                rel="noopener nofollow noreferrer"
                href="https://www.facebook.com/clubnauticozaragoza/"
                className="py-8 flex "
              >
                <FaFacebook className="text-3xl text-[#0676e8] bg-white rounded-full" />
                <span className="ml-4 hidden lg:inline-block hover:text-[#0676e8]">facebook.com/clubnauticozaragoza/</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener nofollow noreferrer"
                href="https://www.instagram.com/clubnauticozaragoza/"
                className="py-8 flex "
              >
                <svg width="0" height="0">
                  <linearGradient
                    id="instagram-gradient"
                    x1="100%"
                    y1="100%"
                    x2="0%"
                    y2="0%"
                  >
                    <stop stopColor="#C13584" offset="0%" />
                    <stop stopColor="#E1306C" offset="50%" />
                    <stop stopColor="#FCAF45" offset="100%" />
                  </linearGradient>
                </svg>
                <FaInstagram
                  className="text-3xl"
                  style={{ fill: "url(#instagram-gradient)" }}
                />
                <span className="ml-4 hidden lg:inline-block hover:text-[#C13584]">instagram.com/clubnauticozaragoza/</span>
              </a>
            </li>
            <li>
              <a
                className="py-8 flex "
                target="_blank"
                rel="noopener nofollow noreferrer"
                href="mailto:clubnauticozaragoza@gmail.com"
              >
                <FaEnvelope className="text-3xl text-black" />
                <span className="ml-4 hidden lg:inline-block hover:text-slate-500">clubnauticozaragoza@gmail.com</span>
              </a>
            </li>
            <li>
              <a
                className="py-8 flex "
                target="_blank"
                rel="noopener nofollow noreferrer"
                href="https://wa.me/34676610277?text=Hola%20¡Quiero%20unirme%20a%20CNZ!"
              >
                <IoLogoWhatsapp className="text-3xl text-[#25D366] " />
                <span className="ml-4 hidden lg:inline-block hover:text-[#25D366]">+34 676 61 02 77</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Location;
