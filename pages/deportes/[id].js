import React from "react";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import useFormatDate from "../../hooks/useFormateDate";

function NewsPage({ article }) {
  const sanitizeHTML = DOMPurify.sanitize(article.content);
  const htmlFix = sanitizeHTML.replace(
    'src="/uploads',
    `src="${process.env.NEXT_PUBLIC_BASEURL}/uploads`
  );

  return (
    <main className="container mx-auto py-24 px-4 md:px-8">
      <section className="text-gray-600 body-font">
        <div className="flex flex-col lg:flex-row  items-start px-5 py-24 ">
          <div className="lg:max-w-lg  lg:w-1/3 xl:w-1/2 mb-4 lg:sticky top-32 ">
            <img
              className="object-cover object-center h-full w-full rounded-lg mb-8"
              alt=""
              src={`${process.env.NEXT_PUBLIC_BASEURL}${article.portrait.data.attributes.url}`}
            />
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
        {article.news.data.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold pb-2 text-gray-900">
              Noticias relacionadas
            </h3>
            {article.news.data.map((el) => {
              return (
                <div className="border border-l-4 p-4 flex flex-col md:flex-row md:items-center justify-between lg:w-1/2">
                  <Link href={`/noticias/${el.id}`}>
                    <a className="text-xl flex items-center ">
                      <FaAngleRight className="hidden md:inline-block"/>
                      {el.attributes.title}
                    </a>
                  </Link>
                  <small className="text-xs text-gray-500 md:ml-4">
                    ({useFormatDate(el.attributes.publishedAt)})
                  </small>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}

export default NewsPage;

export async function getStaticProps({ params }) {
  const sportRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASEURL}/api/sports/${params.id}?populate=*`
  );
  const sport = await sportRes.json();

  return {
    props: {
      article: sport.data.attributes,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("http://217.160.207.237:1337/api/sports");
  const sportList = await res.json();

  const paths = sportList.data.map((sport) => {
    return { params: { id: sport.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}
