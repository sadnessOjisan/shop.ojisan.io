import Document, { Head, Html, Main, NextScript } from "next/document";

import { META_TAG_CONTENT } from "../const";

const css = ` *,
*:after,
*:before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  font-family: sans-serif;
}

body {
  box-sizing: border-box;
}`;

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <style>{css}</style>
          <link rel="icon" type="image/png" href="/favicon.png" sizes="16x16" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta property="og:url" content={`${META_TAG_CONTENT.origin}`} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={META_TAG_CONTENT.siteTitle} />
          <meta
            property="og:description"
            content={META_TAG_CONTENT.description}
          />
          <meta property="og:site_name" content={META_TAG_CONTENT.siteTitle} />
          <meta
            property="og:image"
            content={`${META_TAG_CONTENT.origin}/shop.png`}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={META_TAG_CONTENT.twitterName} />
          <meta name="twitter:creator" content={META_TAG_CONTENT.twitterName} />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/__/firebase/8.7.0/firebase-app.js"></script>
          <script src="/__/firebase/8.7.0/firebase-analytics.js"></script>
          <script src="/__/firebase/init.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
