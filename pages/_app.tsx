import type { AppProps } from "next/app";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import GlobalStyle from "@/components/globalstyles";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";

export const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
    granto_color: "#4510A3",
    granto_button: "#0CD2AB",
    granto_button_hover: "#08ba94",
    granto_button_disabled: '#7A7A7A',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setTimeout(() => setLoading(false), 0);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      <Head>
      {/* GRANTO SEGUROS: Interpretando documentos com */}
      {/* Inteligência Artificial */}
        <title>Scriptors - GRANTO SEGUROS: Interpretando documentos Inteligência Artificial!</title>
        <meta name="description" content="scriptors project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AuthProvider>
          <Navbar />
          <Loading show={loading} />
          <Component {...pageProps} />
          <Footer />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}
