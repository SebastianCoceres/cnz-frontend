import React from "react";
import Link from "next/link";

function GalleryImg({
  gridSize,
  imgArryTarget,
  aosAnimation = "fade-up",
  aosDuration = 1500,
}) {
  return (
    <figure
      data-aos={aosAnimation}
      data-aos-duration={aosDuration}
      data-aos-once="true"
      className={`relative ${gridSize}`}
    >
      <Link href={`./deportes/${imgArryTarget?.id}`}>
        <a>
          {!!imgArryTarget.attributes.photolink ? (
            <img
              className="object-cover object-center h-full w-full rounded-lg mb-8"
              alt=""
              src={imgArryTarget?.attributes.photolink}
            />
          ) : (
            <img
              className="object-cover object-center h-full w-full rounded-lg mb-8"
              alt=""
              src={`${process.env.NEXT_PUBLIC_BASEURL}${imgArryTarget?.attributes.portrait.data.attributes.url}`}
            />
          )}
          <figcaption className=" text-lg  font-bold absolute inset-0 w-full p-4 transition bg-gradient-to-t from-black/50 to-transparent flex items-end">
            {imgArryTarget?.attributes.title}
          </figcaption>
        </a>
      </Link>
    </figure>
  );
}

export default GalleryImg;
