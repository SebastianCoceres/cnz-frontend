import React from "react";
import Link from "next/link";

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
          <div className="grid grid-cols-4 gap-4 grid-rows-3 grid-flow-row auto-rows-fr text-white">
            <figure className=" relative col-span-4 row-span-2 md:col-span-3 md:row-span-1 lg:col-span-2 lg:row-span-2">
              <Link href={`./deportes/${images[0].id}`}>
                <a>
                  <img
                    alt=""
                    className="w-full object-cover h-full object-center block"
                    src={`${process.env.NEXT_PUBLIC_BASEURL}${images[0].attributes.portrait.data.attributes.url}`}
                  />
                  <figcaption className=" text-lg  font-bold absolute inset-0 w-full p-4 transition bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    {images[0].attributes.title}
                  </figcaption>
                </a>
              </Link>
            </figure>
            <figure className=" relative col-span-4 row-span-2 md:col-span-1 md:row-span-1">
              <Link href={`./deportes/${images[1].id}`}>
                <a>
                  <img
                    alt=""
                    className="w-full object-cover h-full object-center block"
                    src={`${process.env.NEXT_PUBLIC_BASEURL}${images[1].attributes.portrait.data.attributes.url}`}
                  />
                  <figcaption className=" text-lg  font-bold absolute inset-0 w-full p-4 transition bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    {images[1].attributes.title}
                  </figcaption>
                </a>
              </Link>
            </figure>
            <figure className=" relative col-span-4 row-span-2 md:col-span-1 md:row-span-1">
              <Link href={`./deportes/${images[2].id}`}>
                <a>
                  <img
                    alt=""
                    className="w-full object-cover h-full object-center block"
                    src={`${process.env.NEXT_PUBLIC_BASEURL}${images[2].attributes.portrait.data.attributes.url}`}
                  />
                  <figcaption className=" text-lg  font-bold absolute inset-0 w-full p-4 transition bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    {images[2].attributes.title}
                  </figcaption>
                </a>
              </Link>
            </figure>
            <figure className=" relative col-span-4 row-span-2 md:col-span-3 md:row-span-1 lg:col-span-2 lg:row-span-2 ">
              <Link href={`./deportes/${images[3].id}`}>
                <a>
                  <img
                    alt=""
                    className="w-full object-cover h-full object-center block"
                    src={`${process.env.NEXT_PUBLIC_BASEURL}${images[3].attributes.portrait.data.attributes.url}`}
                  />
                  <figcaption className=" text-lg  font-bold absolute inset-0 w-full p-4 transition bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    {images[3].attributes.title}
                  </figcaption>
                </a>
              </Link>
            </figure>
            <figure className=" relative col-span-4 row-span-2 md:col-span-3 md:row-span-1 lg:col-span-1">
              <Link href={`./deportes/${images[4].id}`}>
                <a>
                  <img
                    alt=""
                    className="w-full object-cover h-full object-center block"
                    src={`${process.env.NEXT_PUBLIC_BASEURL}${images[4].attributes.portrait.data.attributes.url}`}
                  />
                  <figcaption className=" text-lg  font-bold absolute inset-0 w-full p-4 transition bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    {images[4].attributes.title}
                  </figcaption>
                </a>
              </Link>
            </figure>
            <figure className=" relative col-span-4 row-span-2 md:col-span-1 md:row-span-1">
              <Link href={`./deportes/${images[5].id}`}>
                <a>
                  <img
                    alt=""
                    className="w-full object-cover h-full object-center block"
                    src={`${process.env.NEXT_PUBLIC_BASEURL}${images[5].attributes.portrait.data.attributes.url}`}
                  />
                  <figcaption className=" text-lg  font-bold absolute inset-0 w-full p-4 transition bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    {images[5].attributes.title}
                  </figcaption>
                </a>
              </Link>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
