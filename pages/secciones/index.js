import React from "react";
import CardSport from "/components/CardSport";
import Head from "next/head";
import cover from "../../public/fondo.jpg";
import Custom404 from "../404";
import SportsGroupsCard from "../../components/sportsGroupsCard";

const description =
  "Conoce todo las actividades que puedes realizar en nuestas instalaciones";

function SportGroups({ sections, title = "Secciones deportivas" }) {
  console.log(sections);
  if (!sections) {
    return <Custom404 />;
  }
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} key="desc" />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} key="desc" />
        <meta name={"og:image"} title={"og:title"} content={cover.src} />
      </Head>
      <section className="section-container text-gray-600 body-font min-h-[90vh] py-24 container mx-auto flex flex-col justify-center">
        <h2 className="self-start section-title sm:text-3xl text-2xl font-medium title-font pb-4 mb-8 text-gray-900 mt-8">
          Secciones deportivas
        </h2>
        <div className="-mx-4 flex items-center flex-wrap">
          {sections.map((section) => {
            return (
              <SportsGroupsCard key={"section-" + section.id} group={section} />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default SportGroups;

export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APIURL}/sports-groups?populate=*`
    );

    const sections = await res.json();

    return {
      props: {
        sections: sections.data,
        meta: sections.meta,
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
