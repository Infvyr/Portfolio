import {NextSeo} from "next-seo";
import {ThemeProvider} from 'styled-components';
import withDarkMode, { useDarkMode } from 'next-dark-mode';
import { lightTheme, darkTheme } from '../themes/default';
import GlobalStyles from "../styles/globals";

const description = "I'm a passionate front-end developer from Moldova. I create full UI from scratch or using UI libraries, React or websites using Next.js"
const title = "Vasile Novatchii Projects Portfolio"

function App({ Component, pageProps }) {
  const { darkModeActive } = useDarkMode();
  const theme = darkModeActive ? darkTheme : lightTheme;

  return (
    <>
      <ThemeProvider theme={{darkMode: darkModeActive, ...theme}}>
        <NextSeo
          title={title}
          description={description}
          openGraph={{
            type: 'website',
            locale: 'en_GB',
            url: '',
            description,
            site_name: title,
          }}
        />
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default withDarkMode(App);