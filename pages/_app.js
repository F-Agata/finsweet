import '../styles/globals.css'
import theme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";

import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";

import {ThemeProvider} from "styled-components";

function MyApp({ Component, pageProps }) {
  return <>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  </>
}

export default MyApp
