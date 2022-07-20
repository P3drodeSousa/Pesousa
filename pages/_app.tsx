import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import useTranslation from "next-translate/useTranslation";
import "nprogress/nprogress.css";
import Router from "next/router";
import NProgress from "nprogress";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  let { t } = useTranslation();

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} langue={t} />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
