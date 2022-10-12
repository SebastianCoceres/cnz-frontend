import React from "react";
import Card from "/components/Card";

function News({ posts }) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Noticias CNZ
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            ullamcorper purus vel risus gravida accumsan. Morbi vel augue nibh.
            Morbi mattis volutpat tellus. In sodales mollis velit quis
            efficitur. Maecenas laoreet nulla sit amet felis euismod auctor.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {posts.map((post, key) => {
            return <Card key={key} postData={post} aosDelay={100 * key} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default News;

export async function getStaticProps() {
  const res = await fetch(
    "http://localhost:1337/api/posts?populate=*&sort[0]=publishedAt%3Adesc"
  );
  const posts = await res.json();

  return {
    props: {
      posts: posts.data,
    },
  };
}
