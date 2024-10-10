import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Init AOS. Sets AOS default duration as 1s
  }, []);

  return (
    <>
      <Head>
        <title>Tech Start UCalgary</title>
        <link href="/favicon.png" rel="icon" />
      </Head>
      <ScrollToTop />
      <div className={inter.className}>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}
