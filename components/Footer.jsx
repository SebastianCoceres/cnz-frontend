import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLaptopCode,
} from "react-icons/fa";
import Link from "next/link";

const date = new Date();

function Footer() {
  return (
    <footer className="text-gray-200 bg-gray-900 body-font mt-[auto]">
      <div className="container px-5 py-8 mx-auto flex justify-between items-center sm:flex-row flex-col">
        <p className="text-sm text-gray-200 sm:py-2 sm:mt-0 mt-4 flex items-center">
          {`© ${date.getFullYear()} Club Náutico Zaragoza —`}
          <a
            href="https://www.linkedin.com/in/sebastian-coceres/"
            className="text-gray-200 ml-1 text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLaptopCode />
            <span className="sr-only">
              Sebastián Cóceres - Desarrollador web
            </span>
          </a>
        </p>
        <div>
          <Link legacyBehavior href="/politica-cookies">
            <a>
              <span className="inline-block px-4">Politica de Cookies</span>
            </a>
          </Link>
          <Link legacyBehavior href="/patrocinadores">
            <a>
              <span className="inline-block px-4">Patrocinadores</span>
            </a>
          </Link>
        </div>
        <span className="inline-flex sm:mt-0 mt-4 items-center justify-center sm:justify-start">
          <Link legacyBehavior
            target="_blank"
            rel="noreferrer nofollow noopener"
            href="https://www.facebook.com/clubnauticozaragoza/"
          >
            <a className="text-gray-200">
              <FaFacebookF />
              <span className="sr-only">Facebook</span>
            </a>
          </Link>
          <Link legacyBehavior
            target="_blank"
            rel="noreferrer nofollow noopener"
            href="https://www.instagram.com/clubnauticozaragoza/"
          >
            <a className="ml-3 text-gray-200">
              <FaInstagram />
              <span className="sr-only">Instagram</span>
            </a>
          </Link>
          <Link legacyBehavior
            target="_blank"
            rel="noreferrer nofollow noopener"
            href="https://wa.me/34676610277?text=Hola%20¡Quiero%20unirme%20a%20CNZ!"
          >
            <a className="ml-3 text-gray-200">
              <FaWhatsapp />
              <span className="sr-only">Whatsapp</span>
            </a>
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
