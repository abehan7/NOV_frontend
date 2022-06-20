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

          <meta
            name="description"
            content="🎁구독자에게만 무료로 주는 노브NFT"
          />
          <meta
            property="og:description"
            content="🎁구독자에게만 무료로 주는 노브NFT"
          />

          <link
            rel="apple-touch-icon-precomposed"
            sizes="57x57"
            href="https://cdn.imweb.me/thumbnail/20220602/22d3a8a96d294.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="72x72"
            href="https://cdn.imweb.me/thumbnail/20220602/a7f70a8aa9552.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="60x60"
            href="https://cdn.imweb.me/thumbnail/20220602/a46c2756ac8d5.png"
          ></link>
          <link
            rel="apple-touch-icon-precomposed"
            sizes="76x76"
            href="https://cdn.imweb.me/thumbnail/20220602/97980f6dba711.png"
          ></link>
          <link
            rel="apple-touch-icon-precomposed"
            sizes="114x114"
            href="https://cdn.imweb.me/thumbnail/20220602/fccb1c7e9f9e2.png"
          ></link>
          <link
            rel="apple-touch-icon-precomposed"
            sizes="120x120"
            href="https://cdn.imweb.me/thumbnail/20220602/f8e4ddcd9b530.png"
          ></link>
          <link
            rel="apple-touch-icon-precomposed"
            sizes="144x144"
            href="https://cdn.imweb.me/thumbnail/20220602/eaaff352f11e9.png"
          ></link>
          <link
            rel="apple-touch-icon-precomposed"
            sizes="152x152"
            href="https://cdn.imweb.me/thumbnail/20220602/ed03c1d9b66a2.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            href="https://cdn.imweb.me/thumbnail/20220602/fdfcc2c0536c5.png"
            sizes="16x16"
          ></link>
          <link
            rel="icon"
            type="image/png"
            href="https://cdn.imweb.me/thumbnail/20220602/5d5b82353c4e0.png"
            sizes="32x32"
          ></link>
          <link
            rel="icon"
            type="image/png"
            href="https://cdn.imweb.me/thumbnail/20220602/2844dfb25d3aa.png"
            sizes="96x96"
          ></link>
          <link
            rel="icon"
            type="image/png"
            href="https://cdn.imweb.me/thumbnail/20220602/74e0cf7986e88.png"
            sizes="128x128"
          ></link>
          <link
            rel="icon"
            type="image/png"
            href="https://cdn.imweb.me/thumbnail/20220602/156c3fed7a918.png"
            sizes="196x196"
          ></link>
          <meta
            name="msapplication-square70x70logo"
            content="https://cdn.imweb.me/thumbnail/20220602/4e43e85a1604c.png"
          ></meta>
          <meta
            name="msapplication-square150x150logo"
            content="https://cdn.imweb.me/thumbnail/20220602/cca72ecd6a479.png"
          ></meta>
          <meta
            name="msapplication-square310x150logo"
            content="https://cdn.imweb.me/thumbnail/20220602/59dd5a2272f57.png"
          ></meta>
          <meta
            name="msapplication-square310x310logo"
            content="https://cdn.imweb.me/thumbnail/20220602/15e5aa5c5f457.png"
          ></meta>
          <meta
            name="naver-site-verification"
            content="e02fc842bb82b20552405afbf1dbccd52bbc6041"
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
