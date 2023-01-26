import React, { useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/Logo-30x30.png";
import { useRouter } from "next/router";

function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  // const [haveNews, setHaveNews] = React.useState(false);
  const router = useRouter();

  // function handleNews(a) {
  //   setHaveNews(a);
  // }

  // useEffect(() => {
  //   function newsCount() {
  //     return fetch(`${process.env.NEXT_PUBLIC_APIURL}/posts`)
  //       .then((res) => res.json())
  //       .then((res) => res.meta.pagination.pageCount);
  //   }
  //   newsCount().then((res) => res > 0 && handleNews(true));
  // }, []);

  return (
    <header className="text-gray-200 bg-gray-900 body-font fixed top-0 left-0 right-0 z-[1000]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col lg:flex-row justify-between">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a
              className="flex title-font font-medium items-center text-white lg:mb-0"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <Image
                src={logo}
                alt="Logo del Club Náutico Zaragoza"
                layout="fixed"
                width={30}
                height={30}
              />

              <h1 className="ml-3 text-xl">Club Náutico Zaragoza</h1>
            </a>
          </Link>
          <button
            className="p-4 lg:hidden"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <FaBars />
            <span className="sr-only">Menú</span>
          </button>
        </div>
        <nav
          className={`navBar text-base flex flex-col items-center  justify-center lg:flex-row ${
            menuOpen ? "open" : ""
          }`}
        >
          <Link href="/noticias">
            <a
              className="p-4 lg:p-0 lg:mr-5 hover:text-white"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              Noticias
            </a>
          </Link>

          <Link href="/secciones">
            <a
              className="p-4 lg:p-0 lg:mr-5 hover:text-white"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              Secciones deportivas
            </a>
          </Link>
          <Link href="/horarios">
            <a
              className="p-4 lg:p-0 lg:mr-5 hover:text-white"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              Horarios
            </a>
          </Link>
          <Link href="/sobre-nosotros">
            <a
              className="p-4 lg:p-0 lg:mr-5 hover:text-white"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              Sobre Nosotros
            </a>
          </Link>
          <Link href="/#contacto">
            <a
              className="p-4 lg:p-0 lg:mr-5 hover:text-white"
              onClick={(e) => {
                // e.preventDefault();
                setMenuOpen(false);
                // useScrollSmooth("#contacto")
                //   ? null
                //   : router.push("/?scrollTo=contacto");
              }}
            >
              Contacto
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
