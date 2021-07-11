import Document, { Head, Html, Main, NextScript } from "next/document";

const css = ` *,
*:after,
*:before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  font-family: Noto Sans JP, sans-serif;
}

body {
  box-sizing: border-box;
}`;
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap"
            rel="stylesheet"
          />
          <style>{css}</style>
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
