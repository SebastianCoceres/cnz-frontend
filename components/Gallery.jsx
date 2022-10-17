import React from "react";
import Link from "next/link";
import pilates from "/public/assets/pilates.jpg";
import funcional from "/public/assets/funcional.jpg";
import paddlesurf from "/public/assets/paddlesurf.jpg";
import piraguismo from "/public/assets/piraguismo.jpg";
import remo from "/public/assets/remo.jpg";
import yoga from "/public/assets/yoga.jpg";

function Gallery() {
  return (
    <section>
      <div className="section-container lg:container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full mb-20">
          <div className=" lg:w-1/2 w-full mb-6 lg:mb-0 pr-4">
            <h1 className="section-title sm:text-3xl text-2xl font-medium title-font pb-2 text-gray-900">
              <Link href="./deportes">
                <a>Nuestras actividades</a>
              </Link>
            </h1>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            ¿Conoces todas las actividades que brindamos? Desde deportes
            náuticos como remo o piragüismo hasta entrenamientos particulares
            que podrás disfrutar en nuestras instalaciones.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="grid grid-cols-4 gap-4 grid-rows-3 grid-flow-row auto-rows-fr text-white">
            <figure className=" relative col-span-4 row-span-2 md:col-span-3 md:row-span-1 lg:col-span-2 lg:row-span-2">
              <img
                alt=""
                className="w-full object-cover h-full object-center block"
                src={piraguismo.src}
              />
              <figcaption className=" text-lg  font-bold absolute inset-0 w-full p-4 transition bg-gradient-to-t from-black/50 to-transparent flex items-end">
                Piragüismo
              </figcaption>
            </figure>
            <figure className=" relative col-span-4 row-span-2 md:col-span-1 md:row-span-1">
              <img
                alt=""
                className="w-full object-cover h-full object-center block"
                src={pilates.src}
              />
              <figcaption className=" text-lg  font-bold absolute inset-0 w-full p-4 transition bg-gradient-to-t from-black/50 to-transparent flex items-end">
                Pilates
              </figcaption>
            </figure>
            <figure className=" relative col-span-4 row-span-2 md:col-span-1 md:row-span-1">
              <img
                alt=""
                className="w-full object-cover h-full object-center block"
                src={remo.src}
              />
              <figcaption className=" text-lg  font-bold absolute inset-0 w-full p-4 transition bg-gradient-to-t from-black/50 to-transparent flex items-end">
                Remo
              </figcaption>
            </figure>
            <figure className=" relative col-span-4 row-span-2 md:col-span-3 md:row-span-1 lg:col-span-2 lg:row-span-2 ">
              <img
                alt=""
                className="w-full object-cover h-full object-center block"
                src={yoga.src}
              />
              <figcaption className=" text-lg  font-bold absolute inset-0 w-full p-4 transition bg-gradient-to-t from-black/50 to-transparent flex items-end">
                Yoga
              </figcaption>
            </figure>
            <figure className=" relative col-span-4 row-span-2 md:col-span-3 md:row-span-1 lg:col-span-1">
              <img
                alt=""
                className="w-full object-cover h-full object-center block"
                src={paddlesurf.src}
              />
              <figcaption className=" text-lg  font-bold absolute inset-0 w-full p-4 transition bg-gradient-to-t from-black/50 to-transparent flex items-end">
                Paddle Surf
              </figcaption>
            </figure>
            <figure className=" relative col-span-4 row-span-2 md:col-span-1 md:row-span-1">
              <img
                alt=""
                className="w-full object-cover h-full object-center block"
                src={funcional.src}
              />
              <figcaption className=" text-lg  font-bold absolute inset-0 w-full p-4 transition bg-gradient-to-t from-black/50 to-transparent flex items-end">
                Entrenamiento Funcional
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
