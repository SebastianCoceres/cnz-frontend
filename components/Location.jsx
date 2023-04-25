import React from "react";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

import { BsWhatsapp } from "react-icons/bs";
import { FcCalendar } from "react-icons/fc";
import SocialButton from "./molecules/SocialButton";

function Location() {
  return (
    <section id="contacto" className="body-font relative">
      <div className="lg:container px-5 py-24 mx-auto flex lg:flex-nowrap flex-wrap min-h-[50em]">
        <div className="w-full md:w-2/3 lg:w-3/4 bg-gray-900 rounded-lg overflow-hidden lg:mr-10 p-10 flex items-end justify-start relative min-h-[30em]">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0 grayscale-[25%]"
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
        <div className="md:w-1/3 lg:w-1/4 flex flex-col justify-center md:ml-auto w-full px-4 md:py-8 mt-8 md:mt-0">
          <h2 className="text-black text-2xl mb-4 font-medium title-font leading-4">
            <span className="block mb-0">Encuéntranos en:</span>
            <span className="inline-block border-b-2 border-b-gray-400 h-1 w-36"></span>
          </h2>
          <ul className="leading-relaxed mb-5 flex justify-around flex-wrap -mx-4">
            <li
              className="w-full px-4 mb-2"
              title="facebook.com/clubnauticozaragoza/"
            >
              <SocialButton
                title="Facebook"
                link="https://www.facebook.com/clubnauticozaragoza/"
              >
                <div className="relative">
                  <div className="bg-white w-5 h-5 absolute top-0 left-0 -translate-y-[50%] -translate-x-[50%] rounded-md"></div>
                  <FaFacebook className="w-6 h-6 absolute top-0 left-0 -translate-y-[50%] -translate-x-[50%]  text-[#0676e8] bg-white rounded-full" />
                </div>
              </SocialButton>
            </li>
            <li
              className="w-full px-4 mb-2"
              title="instagram.com/clubnauticozaragoza/"
            >
              <SocialButton
                title="Instagram"
                link="https://www.instagram.com/clubnauticozaragoza/"
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
                <div className="relative">
                  <div className="bg-white w-5 h-5 absolute top-0 left-0 -translate-y-[50%] -translate-x-[50%] rounded-md"></div>
                  <FaInstagram
                    className="w-6 h-6 absolute top-0 left-0 -translate-y-[50%] -translate-x-[50%] "
                    style={{ fill: "url(#instagram-gradient)" }}
                  />
                </div>
              </SocialButton>
            </li>
            <li
              className="w-full px-4 mb-2"
              title="clubnauticozaragoza@gmail.com"
            >
              <SocialButton
                title="Correo electrónico"
                link="mailto:clubnauticozaragoza@gmail.com"
              >
                <div className="relative">
                  <FaEnvelope className="w-6 h-6 absolute top-0 left-0  -translate-y-[50%] -translate-x-[50%] text-gray-500 group-hover:text-white" />
                </div>
              </SocialButton>
            </li>
            <li className="w-full px-4 mb-2" title="+34 676 610 277">
              <SocialButton
                title="Whatsapp"
                link="https://wa.me/34676610277?text=Hola%20¡Quiero%20unirme%20a%20CNZ!"
              >
                <div className="relative">
                  <div className="bg-white w-5 h-5 absolute top-0 left-0 -translate-y-[50%] -translate-x-[50%] rounded-md"></div>
                  <BsWhatsapp className="w-6 h-6 absolute top-0 left-0  -translate-y-[50%] -translate-x-[50%] text-[#25D366] icon-fill" />
                </div>
              </SocialButton>
            </li>
            <li className="w-full px-4 mb-2" title="+34 676 610 277">
              <SocialButton
                title="¿Eres Socio? Haz tu reserva"
                link="https://bookwhen.com/es/clubnauticozaragoza"
              >
                <div className="relative">
                  <div className="w-5 h-5 absolute top-0 left-0 -translate-y-[50%] -translate-x-[50%] rounded-md"></div>
                  <FcCalendar className="w-6 h-6 absolute top-0 left-0  -translate-y-[50%] -translate-x-[50%] text-[#25D366]" />
                </div>
              </SocialButton>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Location;
