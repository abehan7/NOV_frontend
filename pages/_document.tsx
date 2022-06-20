import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
const BASE_URL = "https://www.novmint.xyz";

export default class MyDocument extends Document {
  //--------------For styled-components only------------//
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }
  //---------------------------------------------------//
  render() {
    return (
      <Html lang="en">
        {/* 여기서 이렇게 preload하니까 플리커링 없어짐 */}
        <Head>
          <link
            rel="preload"
            href="/fonts/FugazOne-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/IBMPlexSans-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Archivo-Medium.ttf"
            as="font"
            type="font/ttf"
            crossOrigin=""
          />

          <meta
            name="msapplication-TileImage"
            content={`${BASE_URL}/favicon.png`}
          />

          <meta
            id="meta_og_image"
            property="og:image"
            content={`${BASE_URL}/meta/NOV_banner.png`}
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="627" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
