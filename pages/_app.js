import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Provider } from "next-auth/client";
import useTranslation from "next-translate/useTranslation"; 

function MyApp({ Component, pageProps }) {
  let { t } = useTranslation();
  return (
    <Provider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} langue={t}/>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
