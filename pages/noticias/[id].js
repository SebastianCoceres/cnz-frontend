import React from "react";
import useFormatDate from "../../hooks/useFormateDate";
import News from ".";
import DOMPurify from "isomorphic-dompurify";
import FileImage from "../../components/FileImage";
import Link from "next/link";

function NewsPage({ article, latestPosts }) {
  const sanitizeHTML = DOMPurify.sanitize(article.content);
  const htmlFix = sanitizeHTML.replace(
    'src="/uploads',
    `src="${process.env.NEXT_PUBLIC_BASEURL}/uploads`
  );

  return (
    <main className="container mx-auto py-24 px-4 md:px-8">
      <section className="lg:w-4/6 mx-auto">
        <header className="mb-12">
          <div className="rounded-lg h-80 overflow-hidden mb-8">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src={`${process.env.NEXT_PUBLIC_BASEURL}${article.portrait.data.attributes.url}`}
            />
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
              <Link href={`/deportes/${sport.id}`}>
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
          <News posts={latestPosts} title="Últimas noticias" loadMore={false} />
        </section>
      )}
    </main>
  );
}

export default NewsPage;

export async function getStaticProps({ params }) {
  try {
    const newsRes = await fetch(
      `${process.env.NEXT_PUBLIC_BASEURL}/api/posts/${params.id}?populate=*`
    );
    const news = await newsRes.json();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASEURL}/api/posts?populate=*&pagination[pageSize]=3&sort[0]=publishedAt%3Adesc&filters[id][$ne]=${params.id}`
    );

    const latestPosts = await res.json();

    return {
      props: {
        article: news.data.attributes,
        latestPosts: latestPosts.data,
      },
    };
  } catch (err) {
    console.error(err);
  }
}

export async function getStaticPaths() {
  try {
    const res = await fetch("http://217.160.207.237:1337/api/posts");
    const newsList = await res.json();

    const paths = newsList.data.map((news) => {
      return { params: { id: news.id.toString() } };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    console.error(err);
  }
}
