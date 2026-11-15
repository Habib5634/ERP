import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#1E7A3C" />
        <meta name="color-scheme" content="light" />
        <link rel="icon" href="/logo-mark.png" />
        <link rel="apple-touch-icon" href="/logo-mark.png" />
      </Head>
      <body className="bg-background antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
