import React from "react";
import exteriorClub from "../public/exterior_club.jpg";
import banderin from "../public/Banderin.png";
import Image from "next/image";
import Link from "next/link";

function About({ link = false }) {
  return (
    <section className="container px-4 mx-auto text-gray-600 body-font py-24 flex flex-col justify-center">
      <div className="lg:w-4/6 mx-auto">
        <div className=" relative rounded-lg h-64 overflow-hidden">
          <Link href="/exterior_club.jpg">
            <a>
              <Image
                src={exteriorClub}
                layout="fill"
                className="object-cover"
              />
            </a>
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row mt-10 mb-8">
          <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div className="relative w-32 h-32 rounded-full inline-flex items-center justify-center">
              <Image src={banderin} layout="fill" className="object-contain" />
            </div>
            <div className="flex flex-col items-center  justify-center">
              <h2 className="font-bold mt-4 text-center text-gray-900 text-2xl">
                Club Náutico Zaragoza
              </h2>
            </div>
          </div>
          <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0">
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
              En la actualidad gestionamos un edificio de propiedad municipal de
              reciente construcción, pero los cimientos que sustentan el club
              son los mismos que en sus inicios:{" "}
              <strong>los deportes náuticos</strong>, que son la razón de ser de
              nuestra entidad.
            </p>
          </div>
        </div>

        {link ? (
          <div className="flex justify-center">
            <Link href="./sobre-nosotros">
              <a className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Conócenos
              </a>
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default About;
