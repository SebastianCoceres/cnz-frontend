import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

import useFormatDate from "../hooks/useFormateDate";

function Card({ postData, aosDelay = 0 }) {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-delay={aosDelay}
      data-aos-once="true"
      className="group xl:w-1/3 p-4 "
    >
      <div className="bg-gray-100 p-6 rounded-lg h-full flex flex-col md:flex-row xl:flex-col">
        <figure className="h-40 rounded md:w-1/3 xl:w-full aspect-square  mb-6 relative">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASEURL}${postData.attributes.portrait.data.attributes.url}`}
            className="object-cover object-center lg:group-hover:scale-110 transition-all duration-1000"
            layout="fill"
          />
        </figure>
        <div className="flex flex-col justify-between flex-grow px-4 xl:px-0 md:w-2/3 xl:w-full">
          <div>
            <h3 className="tracking-widest text-indigo-600 text-xs font-medium title-font mb-2">
              {useFormatDate(postData.attributes.publishedAt)}
            </h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
              {postData.attributes.title}
              {postData.attributes.Icon}
            </h2>
            <p className="leading-relaxed text-base">
              {postData.attributes.description}
            </p>
          </div>
          <div className="mt-4">
            <Link href={`/noticias/${postData.id}`}>
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
