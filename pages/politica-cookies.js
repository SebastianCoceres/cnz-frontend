import React from "react";
import Head from "next/head";

const title = "Politica de cookies";
const description = "Página de politica de cookies";

export default function politicaCookies() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <section className="px-4 lg:px-24 h-[90vh] w-screen max-w-3xl mx-auto flex flex-col justify-center">
        <div className="flex items-baseline">
          <h2 className="font-bold text-3xl">Política de cookies</h2>
          <p className="text-slate-600 text-sm px-4">
            - Última revisión 9 de Enero de 2023
          </p>
        </div>
        <div className="my-8 text-lg">
          <p className="mb-4">
            El <strong>Club Náutico Zaragoza</strong> no utiliza cookies para
            recoger información de las personas usuarias. Únicamente se usan con
            finalidad técnica y estadística.
          </p>
          <p className="mb-4">
            Utilizamos <strong>Google Analytics</strong> para revisar las
            visitas a nuestra web, asi como las páginas mas visitadas, con el
            objetivo de conseguir mejorar nuestros servicios.
          </p>
        </div>
      </section>
    </>
  );
}
