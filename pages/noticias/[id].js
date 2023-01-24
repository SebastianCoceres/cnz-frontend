import React from "react";
import useFormatDate from "../../hooks/useFormateDate";
import News from "./index";
import DOMPurify from "isomorphic-dompurify";
import fetch from "isomorphic-fetch";
import FileImage from "../../components/FileImage";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

function NewsPage({ article, latestPosts }) {
  if (!article) {
    return <Custom404 />;
  }
  const sanitizeHTML = DOMPurify.sanitize(article.content);
  const htmlFix = sanitizeHTML.replaceAll(
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
        <meta name="description" content={article.description} key="desc" />
        <meta name="og:title" content={article.title} />
        <meta name="og:description" content={article.description} key="desc" />
        <meta name={"og:image"} title={"og:title"} content={article.cover} />
      </Head>

      <main className="container mx-auto py-24 px-4 md:px-8">
        <section className="lg:max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="rounded-lg aspect-[2/1] lg:aspect-[3/1] overflow-hidden mb-8 relative">
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

            <div>
              <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink mx-4 text-gray-400 font-bold">
                  {useFormatDate(article.publishedAt)}
                </span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>
              <h2 className="sm:text-3xl text-2xl font-bold title-font pb-2 text-gray-900">
                {article.title}
              </h2>
              <p className="mb-2 leading-relaxed text-gray-500">
                {article.description}
              </p>
            </div>
          </header>
          {/*  */}
          <article
            className="article__content "
            dangerouslySetInnerHTML={{ __html: htmlFix }}
          ></article>
          {article.images.data && (
            <article>
              <h3 className="sm:text-2xl text-xl font-bold title-font pb-2 mb-4 text-gray-900">
                Galería
              </h3>
              <div className="-mx-4 flex flex-wrap">
                {article.images.data?.map((img) => {
                  return <FileImage key={img.id} file={img.attributes} />;
                })}
              </div>
            </article>
          )}
          <div className="mt-8">
            {article.categories.data.map((sport) => {
              return (
                <Link
                  href={`/secciones/${sport.attributes.sports_group.data.attributes.slug}/${sport.attributes.slug}`}
                  key={`deporte-${sport.id}`}
                >
                  <a className="inline-block px-4 py-2 mr-4 text-gray-100 bg-slate-600 hover:bg-slate-800 border rounded">
                    {sport.attributes.title}
                  </a>
                </Link>
              );
            })}
          </div>
        </section>
        {latestPosts.length > 0 && (
          <section className="-m-4">
            <News
              posts={latestPosts}
              title="Últimas noticias"
              loadMore={false}
            />
          </section>
        )}
      </main>
    </>
  );
}

export default NewsPage;

export async function getStaticProps({ params }) {
  try {
    const newsRes = await fetch(
      `${process.env.NEXT_PUBLIC_APIURL}/posts/${params.id}?populate=deep`
    );
    const news = await newsRes.json();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APIURL}/posts?populate=*&pagination[pageSize]=3&sort[0]=publishedAt%3Adesc&filters[id][$ne]=${params.id}`
    );

    const latestPosts = await res.json();

    return {
      props: {
        article: news.data.attributes,
        latestPosts: latestPosts.data,
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
  const res = await fetch("https://api.clubnauticozaragoza.com/posts");
  const newsList = await res.json();

  const paths = newsList.data.map((news) => {
    return { params: { id: news.id.toString() } };
  });

  return {
    paths,
    fallback: "blocking",
  };
}
