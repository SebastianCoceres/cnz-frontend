import React from "react";
import useFormateTime from "../hooks/useFormateTime";
import Link from "next/link";

function Horarios({ sports }) {
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
    <section className="section-container container mx-auto py-48 w-full ">
      <h2 className="section-title sm:text-3xl text-2xl font-medium title-font pb-4 text-gray-900 mb-8">
        Horarios de entrenamiento
      </h2>
      <div className="flex flex-wrap -mx-4 ">
        {sportsToCalendar.map((el, i) => {
          return (
            <div key={`calendar-${i}`} className="w-full lg:w-1/2 mb-16 px-4">
              <div className="border rounded-lg overflow-hidden h-full">
                <p className="text-xl font-bold mb-4 bg-gray-900 p-4 text-white">
                  <Link href={`/deportes/${el.id}`}>
                    <a>{el.attributes.title}</a>
                  </Link>
                </p>
                <div className="px-4">
                  {el.attributes.calendario.map((d, i) => {
                    return (
                      <div
                        key={`dia-${i}`}
                        className="flex flex-col lg:flex-row mb-4 lg:items-center"
                      >
                        <span className="font-bold w-full lg:w-[5em] block mr-4 mb-2 lg:mb-0 text-xl ">
                          {d.dias.data[0].attributes.dias}:
                        </span>
                        <ul className="flex flex-wrap items-center">
                          {d.horarios.data.map((h, i) => {
                            return (
                              <li
                                className="inline-block mb-2 mr-2 lg:m-0 px-4 py-2  rounded-md"
                                key={`horario-${i}`}
                              >
                                <span className="text-md">{useFormateTime(h.attributes.Hora)}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Horarios;

export async function getStaticProps() {
  const sports = await (
    await fetch(
      `${process.env.NEXT_PUBLIC_APIURL}/sports/?populate[calendario][populate]=%2A`
    )
  ).json();
  return {
    props: {
      sports: sports.data,
    },
    revalidate: 60,
  };
}
