import {NextSeo} from "next-seo";
import {ThemeProvider} from 'styled-components';
import withDarkMode, { useDarkMode } from 'next-dark-mode';
import { lightTheme, darkTheme } from '../themes/default';
import GlobalStyles from "../styles/globals";

function App({ Component, pageProps }) {
  const { darkModeActive } = useDarkMode();
  const theme = darkModeActive ? darkTheme : lightTheme;

  return (
    <>
      <ThemeProvider theme={{darkMode: darkModeActive, ...theme}}>
        <NextSeo
          title="Vasile Novatchii Projects Portfolio"
          description="I'm a passionate front-end developer from Moldova. I create full UI from scratch or using UI libraries, React or websites using Next.js"
          openGraph={{
            type: 'website',
            locale: 'en_GB',
            url: '',
            description: "I'm a passionate front-end developer from Moldova. I create full UI from scratch or using UI libraries, React or websites using Next.js",
            site_name: "Vasile Novatchii Projects Portfolio",
          }}
        />
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default withDarkMode(App);