import React from "react";
import Link from "next/link";
import GalleryImg from "./GalleryImg";

function Gallery({ images }) {
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
          {images.length > 0 && (
            <div className="grid grid-cols-4 gap-4 grid-rows-3 grid-flow-row auto-rows-fr text-white">
              <GalleryImg
                imgArryTarget={images[0]}
                gridSize="col-span-4 row-span-2 md:col-span-3 md:row-span-1 lg:col-span-2 lg:row-span-2"
              />
              <GalleryImg
                imgArryTarget={images[1]}
                gridSize="col-span-4 row-span-2 md:col-span-1 md:row-span-1"
              />
              <GalleryImg
                imgArryTarget={images[2]}
                gridSize="col-span-4 row-span-2 md:col-span-1 md:row-span-1"
              />
              <GalleryImg
                imgArryTarget={images[3]}
                gridSize="col-span-4 row-span-2 md:col-span-3 md:row-span-1 lg:col-span-2 lg:row-span-2"
              />
              <GalleryImg
                imgArryTarget={images[4]}
                gridSize="col-span-4 row-span-2 md:col-span-3 md:row-span-1 lg:col-span-1"
              />
              <GalleryImg
                imgArryTarget={images[5]}
                gridSize="col-span-4 row-span-2 md:col-span-1 md:row-span-1"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
