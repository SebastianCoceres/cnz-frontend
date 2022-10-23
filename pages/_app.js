import "../styles/index.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
