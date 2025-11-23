import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Footer from "@/components/Footer/Footer";
import GradientDef from "@/components/icons/GradientDef";
import "../components/ProjectSection/carousel-with-custom-dots.css"; // used in ProjectSection.tsx

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
      <div className={`${inter.variable} font-sans`}>
        <GradientDef />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
