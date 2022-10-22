import React from "react";

function Horarios() {
  return (
    <section className="container mx-auto py-24 w-full">
      <div></div>
    </section>
  );
}

export default Horarios;

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASEURL}/api/sports?populate=deep`
  );
  const posts = await res.json();
  return {
    props: {
      posts: posts.data,
      meta: posts.meta,
    },
  };
}
