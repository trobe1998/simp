/** @format */

import type { AppProps } from "next/app";
import Head from 'next/head'

import "../../styles/globals.css";
import "../assets/css/bootstrap.min.css";
import "../assets/mdi/css/materialdesignicons.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <>
     <Head>
        <title>lexo banking</title>
        <link rel="icon" href="/lexo-Bank-logo-muti.png" />
      </Head>
    <Component {...pageProps} />

      </>
  );
}

export default MyApp;
