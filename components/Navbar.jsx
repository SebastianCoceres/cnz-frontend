import React from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/Logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="text-gray-400 bg-gray-900 body-font fixed top-0 left-0 right-0 z-[1000]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col lg:flex-row justify-between">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="flex title-font font-medium items-center text-white lg:mb-0">
              <Image src={logo} layout="fixed" width={30} height={30} />

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
          </button>
        </div>
        <nav
          className={`navBar text-base flex flex-col items-center  justify-center lg:flex-row ${
            menuOpen ? "open" : ""
          }`}
        >
          <Link href="/news">
            <a
              className="p-4 lg:p-0 lg:mr-5 hover:text-white"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              Noticias
            </a>
          </Link>
          <Link href="#">
            <a
              className="p-4 lg:p-0 lg:mr-5 hover:text-white"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              Sobre Nosotros
            </a>
          </Link>
          <Link href="/deportes">
            <a
              className="p-4 lg:p-0 lg:mr-5 hover:text-white"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              Secciones deportivas
            </a>
          </Link>
          <Link href="#">
            <a
              className="p-4 lg:p-0 lg:mr-5 hover:text-white"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              Horarios
            </a>
          </Link>
          <Link href="#">
            <a
              className="p-4 lg:p-0 lg:mr-5 hover:text-white"
              onClick={() => {
                setMenuOpen(false);
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
