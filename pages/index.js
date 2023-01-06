import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Location from "../components/Location";
import News from "./noticias";
import About from "../components/About";
import fondo from "../public/fondo.jpg";

import useScrollSmooth from "../hooks/useScrollSmooth";

const title = "Club Náutico Zaragoza";
const descriptionIndex = "";

export default function Home({ latestPosts, sports, bg, heroLogo }) {
  if (!latestPosts && !sports) {
    return <Custom404 />;
  }

  const router = useRouter();

  useEffect(() => {
    let params = router.query;
    params.scrollTo && setTimeout(() => useScrollSmooth("#contacto"), 1500);
  }, []);

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={descriptionIndex} key="desc" />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={descriptionIndex} key="desc" />
        <meta name={"og:image"} title={"og:title"} content={fondo.src} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero fondo={bg ? bg : fondo} heroLogo={heroLogo} />
        <About link={true} aboutPage={false} />
        <Gallery images={sports} />
        <News posts={latestPosts} loadMore={false} />
        <Location />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const latestPosts = await (
      await fetch(
        `${process.env.NEXT_PUBLIC_APIURL}/posts?populate=*&pagination[pageSize]=3&sort[0]=publishedAt%3Adesc`
      )
    ).json();
    const sports = await (
      await fetch(
        `${process.env.NEXT_PUBLIC_APIURL}/sports?populate=portrait&sort[0]=order&pagination[pageSize]=6&filters[order][$gte]=1`
      )
    ).json();

    const fondo = await (
      await fetch(`${process.env.NEXT_PUBLIC_APIURL}/background?populate=*`)
    ).json();

    const heroLogo = await (
      await fetch(`${process.env.NEXT_PUBLIC_APIURL}/hero-logo?populate=*`)
    ).json();

    return {
      props: {
        latestPosts: latestPosts.data,
        sports: sports.data,
        bg: fondo.data,
        heroLogo: heroLogo.data,
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
