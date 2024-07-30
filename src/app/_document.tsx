// src/app/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
      <link rel="icon" href="/harish02.png" type="image/png" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r122/three.min.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
