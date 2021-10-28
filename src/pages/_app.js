import {NextSeo} from "next-seo";
import {ThemeProvider} from 'styled-components';
import withDarkMode from 'next-dark-mode'
import { useDarkMode } from 'next-dark-mode'
import { lightTheme, darkTheme } from '../themes/default'

import GlobalStyles from "../styles/globals";

function App({ Component, pageProps }) {
  const { darkModeActive } = useDarkMode();
  const theme = darkModeActive ? darkTheme : lightTheme;

  return (
    <>
      <ThemeProvider theme={{darkMode: darkModeActive, ...theme}}>
        <NextSeo
          title="Novatchii Vasile's Portfolio"
          openGraph={{
            type: 'website',
            locale: 'en_GB',
            url: '',
            description: 'The personal website for Novatchii Vasile, front-end developer.',
            site_name: 'Novatchii Vasile | domain.com',
          }}
        />
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default withDarkMode(App);