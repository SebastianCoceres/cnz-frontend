import React from "react";
import Image from "next/image";
import Link from "next/link";

function Patrocinadores({ data }) {
  return (
    <section className="bg-gray-900">
      <div className="container mx-auto flex justify-center">
        {data.map((patr, i) => {
          return (
            <Link
              key={`patrocinador-${i}-${patr.attributes.title}`}
              href={patr.attributes.link}
            >
              <a
                target="_blank"
                rel="noreferrer noopener nofollow"
                className="inline-block px-8"
              >
                <figure
                  className="relative w-20 h-10 lg:w-40 lg:h-20 mx-auto "
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASEURL}${patr.attributes.logo.data.attributes.url}`}
                    alt={patr.attributes.title}
                    className=" object-contain"
                    layout="fill"
                    priority="true"
                  />
                </figure>
              </a>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Patrocinadores;
