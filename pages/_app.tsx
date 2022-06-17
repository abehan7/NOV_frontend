import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "../GraphQL/ApolloProvider";
import GlobalStyle from "../styles/global-style";
import { theme } from "../styles/theme";
import "../styles/fonts.css";
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
      <ApolloProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default MyApp;
