import React from "react";
import About from "../components/About";
import Intalaciones from "../components/Intalaciones";
import OurTeam from "../components/OurTeam";

export default function sobreNostros({ teamData }) {
  return (
    <>
      <About />
      <Intalaciones />
      <OurTeam team={teamData} />
    </>
  );
}

export async function getStaticProps() {
  const team = await (
    await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/equipos?populate=*`)
  ).json();

  return {
    props: {
      teamData: team.data,
    },
  };
}
