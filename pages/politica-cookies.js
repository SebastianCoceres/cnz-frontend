import React from "react";
import Head from "next/head";

const title = "Politica de cookies";
const description = "Página de politica de cookies";

export default function politicaCookies() {
  return (
    <>
      <Head>
        <html lang="es" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} key="desc" />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} key="desc" />
      </Head>
      <section className="px-4 lg:px-24 h-screen w-screen flex flex-col justify-center">
        <div className="flex items-baseline">
          <h1 className="font-bold text-3xl">Política de cookies</h1>
          <p className="text-slate-600 text-sm px-4">
             - Última revisión 9 de Enero de 2023
          </p>
        </div>

        <p className="my-8 text-lg">
          El Club Náutico Zaragoza no utiliza cookies para recoger información
          de las personas usuarias. Únicamente se utilizan con finalidad técnica
          y analítica.
        </p>
      </section>
    </>
  );
}
