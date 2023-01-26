import React, { useState } from "react";
import Card from "/components/Card";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import kettlebel from "../../public/Kettlebell_notFound.png";
import Head from "next/head";
import cover from "../../public/fondo.jpg";
import Custom404 from "../404";

const PAGESIZE = 6;
const description =
  "Todas la noticias sobre el Club Náutico Zaragoza. Entérate de todo lo que pasa en nuestro amado club en un par de clicks.";

function News({ posts, meta, title = "Noticias CNZ", loadMore = true }) {
  if (!posts) {
    return <Custom404 />;
  }

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [newPosts, setNewPosts] = useState([]);

  function pageSetter(page) {
    if (page < meta.pagination.pageCount) {
      setCurrentPage(page);
    } else {
      setHasNextPage(false);
    }
  }

  async function getNewPosts(page) {
    setLoading(true);
    let pageCount = page + 1;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APIURL}/posts?populate=*&sort[0]=publishedAt%3Adesc&pagination[page]=${pageCount}&pagination[pageSize]=${PAGESIZE}`
    );
    const posts = await res.json();
    pageSetter(pageCount);
    setNewPosts((prevState) => [...prevState, ...posts.data]);
    setLoading(false);

    return newPosts;
  }

  return posts.length > 0 ? (
    <>
      {router.asPath == "/noticias" && (
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0"
          />
          <title>{title}</title>
          <meta name="description" content={description} key="desc" />
          <meta name="og:title" content={title} />
          <meta name="og:description" content={description} key="desc" />
          <meta name={"og:image"} title={"og:title"} content={cover.src} />
        </Head>
      )}

      <section className="text-gray-600 body-font py-24">
        <div className="section-container lg:container py-24 px-5 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h2 className="section-title sm:text-3xl text-2xl font-medium title-font pb-2 text-gray-900">
                <Link href="/noticias">
                  <a>{title}</a>
                </Link>
              </h2>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Todas la noticias sobre el <strong>Club Náutico Zaragoza</strong>.
              Entérate de todo lo que pasa en nuestro amado club en un par de
              clicks.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {posts &&
              posts.map((post, key) => {
                return <Card key={key} postData={post} aosDelay={100 * key} />;
              })}
            {newPosts.map((post, key) => {
              return <Card key={key} postData={post} aosDelay={100 * key} />;
            })}
          </div>
        </div>
        {loadMore && !(posts.length < PAGESIZE) && (
          <div className="container mx-auto text-center">
            {hasNextPage ? (
              <button
                className="px-8 py-4 bg-indigo-600 text-white cursor-pointer rounded-xl shadow-md hover:bg-indigo-800"
                onClick={() => getNewPosts(currentPage)}
              >
                {loading ? "Cargando..." : "Ver más"}
              </button>
            ) : (
              ""
            )}
          </div>
        )}
      </section>
    </>
  ) : router.asPath == "/noticias" ? (
    <section className="my-24 px-24 flex flex-col justify-center items-center min-h-[70vh]">
      <Image src={kettlebel}></Image>
      <p className="text-xl lg:text-3xl font-medium text-center">
        <span className="text-2xl lg:text-4xl font-bold">¡Ups!</span>
        <br /> Aún no hay noticias aquí...
      </p>
    </section>
  ) : null;
}

export default News;

export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APIURL}/posts?populate=*&sort[0]=publishedAt%3Adesc&pagination[page]=1&pagination[pageSize]=${PAGESIZE}`
    );
    const posts = await res.json();
    return {
      props: {
        posts: posts.data,
        meta: posts.meta,
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
