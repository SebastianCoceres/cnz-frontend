import React, { useState } from "react";
import Card from "/components/Card";
import Link from "next/link";

const PAGESIZE = 6;

function News({ posts, meta, title = "Noticias CNZ", loadMore = true }) {
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

  return (
    <section className="text-gray-600 body-font py-24">
      <div className="section-container lg:container py-24 px-4 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="section-title sm:text-3xl text-2xl font-medium title-font pb-2 text-gray-900">
              <Link href="/noticias">
                <a>{title}</a>
              </Link>
            </h1>
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
              className="px-8 py-4 bg-indigo-500 text-white cursor-pointer rounded-xl shadow-md hover:bg-indigo-800"
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
  );
}

export default News;

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/posts?populate=*&sort[0]=publishedAt%3Adesc&pagination[page]=1&pagination[pageSize]=${PAGESIZE}`
  );
  const posts = await res.json();
  return {
    props: {
      posts: posts.data,
      meta: posts.meta,
    },
    revalidate: 60,
  };
}
