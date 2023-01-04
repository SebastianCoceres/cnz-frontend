import React from "react";
import About from "../components/About";
import Intalaciones from "../components/Intalaciones";
import OurTeam from "../components/OurTeam";
import Head from "next/head";
import cover from "../public/exterior_club.jpg";

const title = "Sobre nosotros";
const description =
  "Inaugurado en 1964, el Club Náutico de Zaragoza es una Asociación Deportiva Básica, con Nº Reg. 979/01 , inscrita en elregistro general de asociaciones deportivas del Gobierno de Aragón";

export default function sobreNostros({ teamData }) {
  if (!teamData) {
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
      <About />
      <Intalaciones />
      <OurTeam team={teamData} />
    </>
  );
}

export async function getStaticProps() {
  try {
    const team = await (
      await fetch(`${process.env.NEXT_PUBLIC_APIURL}/equipos?populate=*`)
    ).json();

    return {
      props: {
        teamData: team.data,
      },
      revalidate: 60,
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
