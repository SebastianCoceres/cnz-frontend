import React from "react";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import useFormatDate from "../../hooks/useFormateDate";
import useFormatTime from "../../hooks/useFormateTime";

function NewsPage({ article }) {
  const sanitizeHTML = DOMPurify.sanitize(article.content);
  const htmlFix = sanitizeHTML.replace(
    'src="/uploads',
    `src="${process.env.NEXT_PUBLIC_BASEURL}/uploads`
  );

  console.log(article);

  return (
    <main className="container mx-auto py-24 px-4 md:px-8">
      <section className="text-gray-600 body-font">
        <div className="flex flex-col lg:flex-row  items-start py-24 ">
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

        {article.calendario.length > 0 && (
          <section>
            <h3 className="text-2xl font-bold mt-2 mb-4">Horarios</h3>
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
                          <span key={`horaDeporte-${i}`} className="text-[.8em] inline-block mb-2  mr-2 px-4 py-2 bg-gray-900 text-white rounded-md">{`${useFormatTime(
                            hora.attributes.Hora
                          )}`}</span>
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
          <div className="my-16">
            <h3 className="text-2xl font-bold pb-2">Noticias relacionadas</h3>
            <div className="flex flex-wrap -m-2">
              {article.news.data.map((el) => {
                return (
                  <div className="w-full lg:w-1/2 p-2">
                    <div className="border border-l-4 p-4 flex flex-col md:flex-row md:items-center justify-between h-full">
                      <Link href={`/noticias/${el.id}`}>
                        <a className="text-xl flex items-center ">
                          <FaAngleRight className="hidden md:inline-block" />
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
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default NewsPage;

export async function getStaticProps({ params }) {
  try {
    const sport = await (
      await fetch(
        `${process.env.NEXT_PUBLIC_BASEURL}/api/sports/${params.id}?populate=deep`
      )
    ).json();

    return {
      props: {
        article: sport.data.attributes,
      },
    };
  } catch (err) {
    console.error(err);
  }
}

export async function getStaticPaths() {
  try {
    const sportList = await (
      await fetch("admin.clubnauticozaragoza.com:1337/api/sports")
    ).json();

    const paths = sportList.data.map((sport) => {
      return { params: { id: sport.id.toString() } };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    console.error(err);
  }
}
