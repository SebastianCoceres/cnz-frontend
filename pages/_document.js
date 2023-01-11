import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-TNGFQVTXJQ`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
               
                    gtag('consent', 'default', {
                        'analytics_storage': 'denied'
                    });
            
                    gtag('js', new Date());
            
                    
                    function getCookie() {
                        const value = "; " + document.cookie;
                        const parts = value.split("; CookieConsent=");
                        if (parts.length === 2) return parts.pop().split(';').shift();
                    }
            
                    
                    if(getCookie() === "true"){
                        gtag('consent', 'update', {
                            'analytics_storage': 'granted'
                        });
                    }
            
                    gtag('config', 'G-TNGFQVTXJQ', {
                        page_path: window.location.pathname,
                    });
                `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
