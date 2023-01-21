import React from "react";
import Link from "next/link";
import Image from "next/image";

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
      <Link
        href={`/secciones/${imgArryTarget?.attributes.sports_group.data.attributes.slug}/${imgArryTarget?.id}`}
      >
        <a className="block h-full w-full relative">
          {!!imgArryTarget.attributes.photolink ? (
            <Image
              className="object-cover object-center h-full w-full rounded-lg mb-8"
              alt={imgArryTarget?.attributes.title}
              src={imgArryTarget?.attributes.photolink}
              layout="fill"
            />
          ) : (
            <Image
              className="object-cover object-center h-full w-full rounded-lg mb-8"
              alt={imgArryTarget?.attributes.title}
              src={`${process.env.NEXT_PUBLIC_BASEURL}${imgArryTarget?.attributes.portrait.data.attributes.url}`}
              layout="fill"
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
