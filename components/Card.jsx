import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function formatDate(value, locale = "es-ES") {
  return new Date(value).toLocaleDateString(locale);
}

function Card({ postData, aosDelay = 0 }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-delay={aosDelay}
      className="group xl:w-1/3 md:w-1/2 p-4 "
    >
      <div className="bg-gray-100 p-6 rounded-lg h-full flex flex-col">
        <figure className="h-40 rounded w-full mb-6 relative">
          <Image
            src={`http://localhost:1337${postData.attributes.portrait.data.attributes.url}`}
            className="object-cover object-center group-hover:scale-2"
            layout="fill"
          />
        </figure>
        <div className="flex flex-col justify-between flex-grow">
          <div>
            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
              {formatDate(postData.attributes.publishedAt)}
            </h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4 group-hover:text-red-500">
              {postData.attributes.title}{postData.attributes.Icon}
            </h2>
            <p className="leading-relaxed text-base">
              {postData.attributes.description}
            </p>
          </div>
          <div className="mt-4">
            <Link href={`/news/${postData.id}`}>
              <a className="text-indigo-500 md:mb-2 lg:mb-0 hover:text-indigo-900 block">
                Ver más <FaLongArrowAltRight className="inline-block" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
