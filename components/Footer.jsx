import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font mt-[auto]">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm text-gray-400 sm:py-2 sm:mt-0 mt-4">
          © 2020 Club Náutico Zaragoza —
          <a
            href="https://twitter.com/SebassCoceres"
            className="text-gray-500 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @SebassCoceres
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href="#">
            <a className="text-gray-400">
              <FaFacebookF />
            </a>
          </Link>
          <Link href="#">
            <a className="ml-3 text-gray-400">
              <FaInstagram />
            </a>
          </Link>
          <Link href="#">
            <a className="ml-3 text-gray-400">
              <FaWhatsapp />
            </a>
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
