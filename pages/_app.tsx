import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "../GraphQL/ApolloProvider";
import GlobalStyle from "../styles/global-style";
import { theme } from "../styles/theme";
import "../styles/fonts.css";
import Layout from "../components/layout";
import { AccountProvider } from "../contexts/AccountContext";
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
    return (
      <>
        <Head>
          <title>NOV-MINT 노브</title>
        </Head>
        <ApolloProvider>
          <AccountProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </AccountProvider>
        </ApolloProvider>
      </>
    );
  }
}

export default MyApp;
