import React, { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieConsent from "react-cookie-consent";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", "G-TNGFQVTXJQ", {
        page_path: url,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <CookieConsent
        disableStyles="true"
        containerClasses="w-full fixed bottom-0 bg-gray-900 text-white px-8 py-4 transition duration-300 text-center"
        location="bottom"
        buttonText="Sí, utilizar cookies."
        buttonClasses="bg-indigo-600 hover:bg-indigo-800 text-white px-4 py-2 rounded-md m-2"
        cookieName="CookieConsent"
        expires={150}
        enableDeclineButton="true"
        declineButtonText="No, no utilizar cookies"
        declineButtonClasses="bg-rose-600 hover:bg-rose-800 text-white px-4 py-2 rounded-md m-2"
      >
        <p>
          Esta página web utiliza cookies con finalidades técnicas y estadísticas, no recaba ni cede datos de carácter personal de los usuarios sin su conocimiento.
        </p>
        <a
          className="hover:text-indigo-300 font-bold text-lg my-4 inline-block"
          href="/politica-cookies"
        >
          Política de Cookies
        </a>
      </CookieConsent>
      <Footer />
    </>
  );
}

export default MyApp;
