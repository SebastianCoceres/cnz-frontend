import React from "react";
import CardSport from "/components/CardSport";
import Head from "next/head";
import cover from "../../../public/fondo.jpg";
import Custom404 from "../../404";

const description =
  "Conoce todo las actividades que puedes realizar en nuestas instalaciones";

function Deportes({ sports, title = "Deportes" }) {
  if (!sports) {
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
      <section className="text-gray-600 body-font py-24">
        <div className="section-container sports lg:container py-24 px-4 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="section-title sm:text-3xl text-2xl font-medium title-font pb-2 text-gray-900">
                <a>{title}</a>
              </h1>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Conoce todo las actividades que puedes realizar en nuestas
              instalaciones
            </p>
          </div>
          <div className="sportCard__container flex flex-wrap -mx-4">
            {sports &&
              sports.map((sport, key) => {
                return <CardSport key={key} sportData={sport} />;
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Deportes;

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APIURL}/sports?populate=*&filters[sports_group][slug][$eq]=${params.slug}`
    );

    const sports = await res.json();

    return {
      props: {
        sports: sports.data,
        meta: sports.meta,
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

export async function getStaticPaths() {
  const sportGroup = await (
    await fetch("https://api.clubnauticozaragoza.com/sports-groups")
  ).json();

  const paths = sportGroup.data.map((group) => {
    return { params: { slug: group.attributes.slug } };
  });

  return {
    paths,
    fallback: "blocking",
  };
}