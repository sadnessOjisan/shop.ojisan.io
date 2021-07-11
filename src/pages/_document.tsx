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
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/__/firebase/8.7.0/firebase-app.js"></script>
          <script src="/__/firebase/8.7.0/firebase-analytics.js"></script>
          <script src="/__/firebase/init.js"></script>
          <script>firebase.analytics()</script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
