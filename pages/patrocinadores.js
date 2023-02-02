import React from "react";
import Head from "next/head";
import Image from "next/image";
import SocialButton from "../components/molecules/SocialButton";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import img from "../public/kettle-sponsorship.png";

const title = "Politica de cookies";
const description = "Página de politica de cookies";

export default function politicaCookies() {
  return (
    <>
      <Head>
        <html lang="es" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <section className="px-4 py-28 min-h-[90vh] w-screen max-w-4xl mx-auto flex items-center flex-wrap">
        <div className="w-full md:w-2/3">
          <div className="flex items-baseline">
            <h2 className="font-bold text-3xl">
              ¿Te interesa ser patrocinador del Club Náutico Zaragoza?
            </h2>
          </div>
          <div className="my-8 text-lg">
            <p className="mb-4">
              Únete a nosotros como <em>sponsor</em> y forma parte de una
              comunidad dedicada a la promoción y difusión del deporte náutico
              en la región. Como <strong>patrocinador</strong>, tendrás la
              oportunidad de apoyar a nuestros deportistas y eventos, así como
              de <strong>dar a conocer tu marca</strong> a un amplio público.
            </p>
            <p className="mb-4">
              ¡No esperes más y contáctanos para más información sobre cómo ser
              parte de nuestro club!
            </p>
            <ul className="leading-relaxed mb-5 flex justify-around flex-wrap -mx-4">
              <li
                className="w-full md:w-1/2 px-4 mb-2"
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
                className="w-full md:w-1/2 px-4 mb-2"
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
                className="w-full md:w-1/2 px-4 mb-2"
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
              <li className="w-full md:w-1/2 px-4 mb-2" title="+34 676 610 277">
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
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <figure className="flex justify-center relative w-80 h-80 mx-auto">
            <Image
              src={img.src}
              alt=""
              className=" object-contain"
              layout="fill"
              priority="true"
            />
          </figure>
        </div>
      </section>
    </>
  );
}
