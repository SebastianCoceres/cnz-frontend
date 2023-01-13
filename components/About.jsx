import React from "react";
import exteriorClub from "../public/exterior_club.jpg";
import banderin from "../public/Banderin.png";
import Image from "next/image";
import Link from "next/link";

function About({ link = false, aboutPage = true }) {
  return (
    <section
      className={`section-container py-24 mx-auto flex flex-wrap ${
        aboutPage ? "container px-4" : "lg:container px-5 "
      }`}
    >
      <div className="w-full lg:w-4/6 mx-auto">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-once="true"
          className="relative rounded-lg h-64 overflow-hidden"
        >
          <Link href="../public/exterior_club.jpg">
            <a className="relative block w-full h-full">
              <Image
                src={exteriorClub.src}
                alt="Vista exterior del club del lado del río"
                layout="fill"
                className="object-cover"
              />
            </a>
          </Link>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
        <div className={aboutPage? "lg:w-4/6 mx-auto" : ''}>
          <h2 className="section-title sm:text-3xl text-2xl font-medium title-font pb-4 text-gray-900 mt-8">
            Nuestra Historia
          </h2>
          <div className="flex flex-col lg:flex-row mt-10 mb-8">
            <div className="lg:w-1/3 text-center lg:pr-8 lg:py-8">
              <div className="relative w-32 h-32 rounded-full inline-flex items-center justify-center">
                <Image
                  src={banderin}
                  alt=""
                  layout="fill"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-center  justify-center">
                <h2 className="font-bold mt-4 text-center text-gray-900 text-2xl">
                  Club Náutico Zaragoza
                </h2>
              </div>
            </div>
            <div className="lg:w-2/3 lg:pl-8 lg:py-8 lg:border-l border-gray-200 lg:border-t-0 border-t mt-4 pt-4 lg:mt-0">
              <p className="leading-relaxed text-lg mb-4">
                Inaugurado en <strong>1964</strong>, el Club Náutico de Zaragoza
                es una Asociación Deportiva Básica, con{" "}
                <strong>Nº&nbsp;Reg.&nbsp;979/01</strong> , inscrita en el
                <strong>
                  registro general de asociaciones deportivas del Gobierno de
                  Aragón
                </strong>
              </p>
              <p className="leading-relaxed text-lg mb-4">
                En la actualidad gestionamos un edificio de propiedad municipal
                de reciente construcción, pero los cimientos que sustentan el
                club son los mismos que en sus inicios:{" "}
                <strong>los deportes náuticos</strong>, que son la razón de ser
                de nuestra entidad.
              </p>
            </div>
          </div>

          {link ? (
            <div className="flex justify-center">
              <Link href="./sobre-nosotros">
                <a className="flex mx-auto text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-800 rounded text-lg">
                  Conócenos
                </a>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default About;

// ""
