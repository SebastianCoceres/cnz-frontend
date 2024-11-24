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
              <Link legacyBehavior href="/horarios">
                <a className="text-white bg-indigo-600 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-800 rounded">Ver Horarios</a>
              </Link>
            </div>
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
      process.env.NEXT_PUBLIC_APIURL + "/sports?populate=sports_group"
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
