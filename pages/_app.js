import React, { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/index.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ConstructionPage from "../components/ConstructionPage";

import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  const construction = useRouter();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {construction.query.test === "true" ||
      (construction.pathname != "/" && construction.route != "/_error") ? (
        <>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </>
      ) : (
        <ConstructionPage />
      )}
    </>
  );
}

export default MyApp;
