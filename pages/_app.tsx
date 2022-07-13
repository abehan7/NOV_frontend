import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "../GraphQL/ApolloProvider";
import GlobalStyle from "../styles/global-style";
import { theme } from "../styles/theme";
import "../styles/fonts.css";
import Layout from "../components/layout";
import { AccountProvider } from "../contexts/AccountContext";
// import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

// import { ReCaptchaProvider } from "next-recaptcha-v3";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  // useEffect(() => AOS.init({ duration: 1000 }), []);
  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    // console.log(process.env.NEXT_PUBLIC_RECAPCHA_SITE_KEY);
    return (
      <>
        <Head>
          <title>NOV-MINT 노브</title>
        </Head>
        <ApolloProvider>
          {/* <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPCHA_SITE_KEY}
            scriptProps={{
              async: false,
              defer: false,
              appendTo: "head",
              nonce: undefined,
            }}
          > */}
          <AccountProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </AccountProvider>
          {/* </GoogleReCaptchaProvider> */}
        </ApolloProvider>
      </>
    );
  }
}

export default MyApp;
