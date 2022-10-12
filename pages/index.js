import Head from "next/head";
import Hero from "../components/Hero";
import Location from "../components/Location";
import News from "./news";

export default function Home({ latestPosts }) {
  return (
    <div>
      <Head>
        <title>Club Náutico Zaragoza</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <News posts={latestPosts} />
        <Location />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "http://localhost:1337/api/posts?populate=*&pagination[pageSize]=3&sort[0]=publishedAt%3Adesc"
  );

  const latestPosts = await res.json();

  return {
    props: {
      latestPosts: latestPosts.data,
    },
  };
}
