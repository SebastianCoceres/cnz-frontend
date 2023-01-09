import React, { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieConsent from "react-cookie-consent";

import ConstructionPage from "../components/ConstructionPage";
function MyApp({ Component, pageProps }) {
  const construction = useRouter();
  const router = useRouter();
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", process.env.GOOGLE_ANALYTICS, {
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
      {construction.query.test === "true" ||
      (construction.pathname != "/" && construction.route != "/_error") ? (
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
            declineButtonClasses="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded-md m-2"
          >
            <p>
              Esta página web únicamente utiliza cookies propias con finalidad
              técnica, no recaba ni cede datos de carácter personal de los
              usuarios sin su conocimiento.
            </p>
            <a
              className="text-indigo-300 hover:text-indigo-500"
              href="/politica-cookies"
            >
              Política de Cookies
            </a>
            .
          </CookieConsent>
          <Footer />
        </>
      ) : (
        <ConstructionPage />
      )}
    </>
  );
}

export default MyApp;
