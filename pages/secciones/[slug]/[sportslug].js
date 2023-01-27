import React from "react";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import { FaNewspaper } from "react-icons/fa";
import useFormatDate from "../../../hooks/useFormateDate";
import useFormatTime from "../../../hooks/useFormateTime";
import Custom404 from "../../404";
import Head from "next/head";
import Image from "next/image";

function NewsPage({ article }) {
  if (!article) {
    return <Custom404 />;
  }

  const sanitizeHTML = DOMPurify.sanitize(article.content);
  const htmlFix = sanitizeHTML.replace(
    'src="/uploads',
    `src="${process.env.NEXT_PUBLIC_BASEURL}/uploads`
  );
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>{article.title}</title>
        <meta name="description" content={article.description} />
        <meta name="og:title" content={article.title} />
        <meta name="og:description" content={article.description} />
        <meta name={"og:image"} title={"og:title"} content={article.cover} />
      </Head>
      <main className="lg:container mx-auto py-24 px-5">
        <section className="text-gray-600 body-font">
          <div className="flex flex-col lg:flex-row items-start py-24 relative">
            <div className="w-full lg:w-1/3 mb-4 lg:sticky lg:top-32 relative aspect-square">
              {!!article.photolink ? (
                <Image
                  className="object-cover rounded-lg mb-8"
                  alt=""
                  src={article.photolink}
                  layout="fill"
                />
              ) : (
                <Image
                  className="object-cover rounded-lg mb-8"
                  alt=""
                  src={`${process.env.NEXT_PUBLIC_BASEURL}${article.portrait.data.attributes.url}`}
                  layout="fill"
                />
              )}
            </div>
            <div className="lg:flex-grow lg:w-2/3 xl:w-1/2 lg:px-8 flex flex-col md:items-start mb-16 md:mb-0 items-center">
              <h2 className="sm:text-4xl text-2xl font-bold  text-gray-900">
                {article.title}
              </h2>
              <hr className="border-b-slate-200 border w-[50%] mb-4 mt-2" />
              <article
                className="article__content "
                dangerouslySetInnerHTML={{ __html: htmlFix }}
              ></article>
            </div>
          </div>
          <div className="flex flex-wrap lg:-mx-4">
            {article.calendario.length > 0 && (
              <section className="w-full lg:w-1/2 lg:px-4">
                <h3 className="text-2xl font-bold mt-2 mb-4">
                  <Link href="/horarios">
                    <a className="hover:text-indigo-800">Horarios</a>
                  </Link>
                </h3>
                <hr className="my-4" />
                <ul>
                  {article.calendario.map((el, i) => {
                    return (
                      <li
                        key={`diaDeporte-${i}`}
                        className="mb-4 w-full flex flex-wrap items-center
                  "
                      >
                        <span className="font-bold w-full lg:w-[5em] block mr-4 mb-2 text-xl ">
                          {el.dias.data[0].attributes.dias}:
                        </span>
                        <div className="flex flex-wrap">
                          {el.horarios.data.map((hora, i) => {
                            return (
                              <span
                                key={`horaDeporte-${i}`}
                                className="text-[.8em] inline-block mb-2  mr-2 px-4 py-2 bg-gray-900 text-white rounded-md"
                              >
                                {useFormatTime(hora.attributes.Hora)}
                              </span>
                            );
                          })}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </section>
            )}
            {article.news.data.length > 0 && (
              <section className="w-full lg:w-1/2 my-16 lg:my-0 lg:px-4">
                <h3 className="text-2xl font-bold pb-2">
                  <Link href="/noticias">
                    <a className="hover:text-indigo-800">
                      Noticias relacionadas
                    </a>
                  </Link>
                </h3>
                <div className="flex flex-wrap w-full">
                  <>
                    {article.news.data
                      .sort((a, b) =>
                        new Date(a.publishedAt) < new Date(b.publishedAt)
                          ? 1
                          : -1
                      )
                      .slice(0, 3)
                      .map((el) => {
                        return (
                          <div className="w-full mb-2" key={`news-${el.id}`}>
                            <div className="border border-l-4 p-4 flex flex-col md:flex-row md:items-center justify-between h-full ">
                              <Link href={`/noticias/${el.id}`}>
                                <a className="text-xl flex items-center ">
                                  <FaNewspaper className="hidden md:inline-block mr-2" />
                                  {el.attributes.title}
                                </a>
                              </Link>
                              <small className="text-xs text-gray-500 md:ml-4">
                                ({useFormatDate(el.attributes.publishedAt)})
                              </small>
                            </div>
                          </div>
                        );
                      })}
                  </>
                </div>
              </section>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default NewsPage;

export async function getStaticProps({ params }) {
  try {
    const sport = await (
      await fetch(
        `${process.env.NEXT_PUBLIC_APIURL}/sports/?populate=deep&filters[slug][$eq]=${params.sportslug}`
      )
    ).json();
    return {
      props: {
        article: sport.data[0].attributes,
      },
      revalidate: 10,
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        notfound: true,
      },
      revalidate: 10,
    };
  }
}

export async function getStaticPaths() {
  const sportList = await (
    await fetch(
      "https://api.clubnauticozaragoza.com/sports?populate=sports_group"
    )
  ).json();

  const paths = sportList.data.map((sport) => {
    return {
      params: {
        sportslug: sport.attributes.slug,
        slug: sport.attributes.sports_group.data.attributes.slug,
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

// id: sport.id.toString(),
