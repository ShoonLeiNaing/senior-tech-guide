import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Senior Tech Guide</title>
        <meta name="og:description" content="Senior Tech Guide" />
        <meta property="og:title" content="Senior Tech Guide" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
