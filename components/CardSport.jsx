import React from "react";
import Link from "next/link";

function CardSport({ sportData }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-once="true"
      className="sportCard w-full mb-24 px-4 text-gray-600 md:flex"
    >
      <figure className="w-full rounded-lg overflow-hidden md:w-1/2 h-96">
        <img
          alt="content"
          className="object-cover object-center h-full w-full "
          src={`${process.env.NEXT_PUBLIC_BASEURL}${sportData.attributes.portrait.data.attributes.url}`}
        />
      </figure>
      <div className="flex flex-col items-start justify-center md:w-1/2">
        <h2 className="text-2xl w-full font-medium text-gray-900 mt-6 md:mt-0 mb-3">
          {sportData.attributes.title}
        </h2>
        <p className="leading-relaxed text-base">
          {sportData.attributes.description}
        </p>

        <Link href={`/deportes/${sportData.id}`}>
          <a className="btnSeeMore mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
            Ver más
          </a>
        </Link>
      </div>
    </div>
  );
}

export default CardSport;
