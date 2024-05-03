import Link from "next/link";
import Image from "next/image";
import useScrollSmooth from "../hooks/useScrollSmooth";

function Hero({ fondo, heroLogo }) {
  return (
    <section className="relative">
      <div
        className="herobg absolute inset-0"
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${process.env.NEXT_PUBLIC_BASEURL}${fondo.attributes.image.data.attributes.url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="absolute inset-0 bg-black/25 md:bg-transparent md:bg-gradient-to-r md:from-black/75 md:to-transparent"></div>

      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="relative mx-auto lg:container px-5 py-32 flex h-screen items-center justify-center md:justify-start "
      >
        <div className="max-w-xl text-center sm:text-left">
          <figure className="flex justify-center relative w-40 h-40 mx-auto">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASEURL}${heroLogo.attributes.image.data.attributes.url}`}
              alt=""
              className=" object-contain"
              layout="fill"
              priority="true"
            />
          </figure>
          <h2 className="text-3xl font-extrabold sm:text-5xl text-white">
            Club Náutico Zaragoza
          </h2>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white">
            Fundado en 1964
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link  href="#contacto" legacyBehavior>
              <a
                className="block w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-800 focus:outline-none focus:ring active:bg-indigo-800 sm:w-auto"
                onClick={(e) => {
                  e.preventDefault();
                  useScrollSmooth("#contacto");
                }}
              >
                ¡Quiero unirme!
              </a>
            </Link>
            <a
              href="https://bookwhen.com/es/clubnauticozaragoza"
              target="_blank"
              rel="noreferrer nofollow noopener"
            >
              <span className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-indigo-600 shadow hover:text-indigo-800 focus:outline-none focus:ring active:text-indigo-800 sm:w-auto">
                Reservas
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
