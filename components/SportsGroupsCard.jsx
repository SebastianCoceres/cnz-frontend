import React from "react";
import Link from "next/link";
import Image from "next/image";

function SportsGroupsCard({ group }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-once="true"
      className="sportCard w-full mb-8 px-4 text-gray-600 md:w-1/2 xl:w-1/3"
    >
      <Link legacyBehavior href={`/secciones/${group.attributes.slug}`}>
        <a>
          <figure className="relative group overflow-hidden bg-black m-auto aspect-[4/3] transition-all rounded-lg">
            <Image
              className="object-cover object-center h-full w-full "
              alt=""
              src={`${process.env.NEXT_PUBLIC_BASEURL}${group.attributes.portada.data.attributes.url}`}
              layout="fill"
            />
            <figcaption className="absolute h-full max-h-16 group-hover:max-h-full group-focus/keyboard:max-h-full bottom-0 bg-gradient-to-t from-black/90 to-black/50 w-full transform duration-500 flex place-content-center flex-col">
              <h2 className="font-bold px-4 text-lg md:text-2xl text-white">
                {group.attributes.groupname}
              </h2>
              <div className="w-full flex place-content-center opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-full group-focus/keyboard:opacity-100 group-focus/keyboard:max-h-full">
                <p className="w-full text-left text-white px-4">
                  {group.attributes.description}
                </p>
              </div>
            </figcaption>
          </figure>
        </a>
      </Link>
    </div>
  );
}

export default SportsGroupsCard;
