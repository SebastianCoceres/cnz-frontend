import React from "react";
import Link from "next/link";
import GalleryImg from "./molecules/GalleryImg";

function Gallery({ images }) {
  return (
    <section className="section-container lg:container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex flex-wrap w-full mb-20">
        <div className=" lg:w-1/2 w-full mb-6 lg:mb-0 pr-4">
          <h2 className="section-title sm:text-3xl text-2xl font-medium title-font pb-2 text-gray-900">
            <Link legacyBehavior href="./deportes">
              <a>Nuestras actividades</a>
            </Link>
          </h2>
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
          ¿Conoces todas las actividades que brindamos? Desde deportes náuticos
          como remo o piragüismo hasta entrenamientos particulares que podrás
          disfrutar en nuestras instalaciones.
        </p>
      </div>
      <div className="flex flex-wrap w-full">
        {images.length > 0 && (
          <div className="w-full grid grid-cols-4 gap-4 grid-flow-row auto-rows-[15em] text-white overflow-hidden">
            <GalleryImg
              aosAnimation="fade-right"
              imgArryTarget={images[0]}
              gridSize="transition-all col-span-4 row-span-2 md:col-span-3 md:row-span-1 lg:col-span-2 lg:row-span-2"
            />
            <GalleryImg
              imgArryTarget={images[1]}
              gridSize="transition-all col-span-4 row-span-2 md:col-span-1 md:row-span-1"
            />
            <GalleryImg
              imgArryTarget={images[2]}
              gridSize="transition-all col-span-4 row-span-2 md:col-span-1 md:row-span-1"
            />
            <GalleryImg
              aosAnimation="fade-left"
              imgArryTarget={images[3]}
              gridSize="transition-all col-span-4 row-span-2 md:col-span-3 md:row-span-1 lg:col-span-2 lg:row-span-2"
            />
            <GalleryImg
              imgArryTarget={images[4]}
              gridSize="transition-all col-span-4 row-span-2 md:col-span-3 md:row-span-1 lg:col-span-1"
            />
            <GalleryImg
              imgArryTarget={images[5]}
              gridSize="transition-all col-span-4 row-span-2 md:col-span-1 md:row-span-1"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
