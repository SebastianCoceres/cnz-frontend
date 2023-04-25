import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import cover from "../public/fondo.jpg";
import Custom404 from "./404";
import SportCalendar from "../components/SportCalendar";
import Modal from "../components/molecules/Modal";
import { FaCalendarAlt } from "react-icons/fa";

const title = "Horarios de entrenamiento";
const description = "Consulta todos los horarios de los deportes que ofrecemos";

function Horarios({ sports, calendarImg }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!sports) {
    return <Custom404 />;
  }
  let sportsToCalendar = sports.filter((el) => {
    return el.attributes.calendario.length > 0;
  });
  function cmp(x, y) {
    return x > y ? 1 : x < y ? -1 : 0;
  }

  function getObjectPropAmount(obj, prop) {
    let count = 0;
    obj.forEach((el) => {
      count += el[prop].data.length;
    });

    return count;
  }

  sportsToCalendar.sort(function (a, b) {
    return (
      cmp(b.attributes.calendario.length, a.attributes.calendario.length) ||
      cmp(
        getObjectPropAmount(b.attributes.calendario, "horarios"),
        getObjectPropAmount(a.attributes.calendario, "horarios")
      )
    );
  });

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
        className={`section-container lg:container px-5 mx-auto py-48 w-full ${
          isModalOpen ? "h-[80vh] overflow-hidden" : ""
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="section-title sm:text-3xl text-2xl font-medium title-font pb-4 mb-4 md:mb-0 text-gray-900 ">
            Horarios de entrenamiento
          </h2>
          <div
            className="flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white cursor-pointer rounded-xl shadow-md hover:bg-indigo-800"
            onClick={() => setIsModalOpen(true)}
          >
            Horarios <FaCalendarAlt />
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 ">
          {sportsToCalendar.map((el, i) => {
            return (
              <SportCalendar
                key={`sportCalendar-${el.id}`}
                calendar={el}
                panelWidth={i !== 0 ? "lg:w-1/2" : null}
              />
            );
          })}
        </div>
      </section>
      {!!isModalOpen && (
        <Modal onClick={() => setIsModalOpen(false)}>
          <Image
            className="w-full h-full object-contain"
            src={`${process.env.NEXT_PUBLIC_BASEURL}${calendarImg.url}`}
            alt={calendarImg.alternativeText}
            layout="fill"
          />
        </Modal>
      )}
    </>
  );
}

export default Horarios;

export async function getStaticProps() {
  try {
    const sports = await (
      await fetch(`${process.env.NEXT_PUBLIC_APIURL}/sports/?populate=deep`)
    ).json();
    const calendarImg = await (
      await fetch(`${process.env.NEXT_PUBLIC_APIURL}/imghorario?populate=*`)
    ).json();

    return {
      props: {
        sports: sports.data,
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
