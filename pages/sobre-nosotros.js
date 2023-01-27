import React from "react";
import About from "../components/About";
import Intalaciones from "../components/Intalaciones";
import OurTeam from "../components/OurTeam";
import Head from "next/head";
import cover from "../public/exterior_club.jpg";
import Custom404 from "./404";
import DOMPurify from "isomorphic-dompurify";

const title = "Sobre nosotros";
const description =
  "Inaugurado en 1964, el Club Náutico de Zaragoza es una Asociación Deportiva Básica, con Nº Reg. 979/01 , inscrita en elregistro general de asociaciones deportivas del Gobierno de Aragón";

export default function sobreNostros({ about, instalaciones, teamData }) {
  if (!teamData) {
    return <Custom404 />;
  }

  const sanitizeHTML = DOMPurify.sanitize(about.attributes.description);
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
      <About content={sanitizeHTML} />
      <Intalaciones data={instalaciones} />
      <OurTeam team={teamData} />
    </>
  );
}

export async function getStaticProps() {
  try {
    const about = await (
      await fetch(`${process.env.NEXT_PUBLIC_APIURL}/about`)
    ).json();
    const team = await (
      await fetch(`${process.env.NEXT_PUBLIC_APIURL}/equipos?populate=*`)
    ).json();
    const instalaciones = await (
      await fetch(`${process.env.NEXT_PUBLIC_APIURL}/installations?populate=*`)
    ).json();

    return {
      props: {
        about: about.data,
        teamData: team.data,
        instalaciones: instalaciones.data,
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
