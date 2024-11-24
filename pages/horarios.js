import Head from "next/head";
import Image from "next/image";
import cover from "../public/fondo.jpg";
import Custom404 from "./404";

const title = "Horarios de entrenamiento";
const description = "Consulta todos los horarios de los deportes que ofrecemos";

function Horarios({ calendarImg }) {
  if (!calendarImg) {
    return <Custom404 />;
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name={"og:image"} title={"og:title"} content={cover.src} />
      </Head>

      <section
        className={`section-container lg:container px-5 mx-auto py-48 w-full`}
      >
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="section-title sm:text-3xl text-2xl font-medium title-font pb-4 mb-4 md:mb-0 text-gray-900 ">
            Horarios de entrenamiento
          </h2>

        </div>

        <Image
          className="w-100 h-auto"
          src={`${process.env.NEXT_PUBLIC_BASEURL}${calendarImg.url}`}
          alt={calendarImg.alternativeText}
          width={calendarImg.width}
          height={calendarImg.height}
        />

      </section>
    </>
  );
}

export default Horarios;

export async function getStaticProps() {
  try {
    const calendarImg = await (
      await fetch(`${process.env.NEXT_PUBLIC_APIURL}/imghorario?populate=*`)
    ).json();

    return {
      props: {
        calendarImg: calendarImg.data.attributes.imagen.data.attributes,
      },
      revalidate: 10,
    };
  } catch (err) {
    return {
      props: {
        notfound: true,
      },
      revalidate: 10,
    };
  }
}
