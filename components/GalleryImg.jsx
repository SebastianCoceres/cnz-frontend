import React from "react";
import Link from "next/link";

function GalleryImg({ gridSize, imgArryTarget }) {
  return (
    <figure className={`relative ${gridSize}`}>
      <Link href={`./deportes/${imgArryTarget?.id}`}>
        <a>
          <img
            alt=""
            className="w-full object-cover h-full object-center block"
            src={`${process.env.NEXT_PUBLIC_BASEURL}${imgArryTarget?.attributes.portrait.data.attributes.url}`}
          />
          <figcaption className=" text-lg  font-bold absolute inset-0 w-full p-4 transition bg-gradient-to-t from-black/50 to-transparent flex items-end">
            {imgArryTarget?.attributes.title}
          </figcaption>
        </a>
      </Link>
    </figure>
  );
}

export default GalleryImg;
