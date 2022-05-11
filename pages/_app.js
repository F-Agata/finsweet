import '../styles/globals.css'
import theme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";
import Box from '../styles/Box'

import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";

import {ThemeProvider} from "styled-components";
import GoToTopOfPage from "../components/GoToTopOfPage";

function MyApp({ Component, pageProps }) {
  return <>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Box maxWidth={1440}
           minWidth={375}
           minHeight={'100vh'}
           width={'100%'}
           m={'0 auto'}
           bg={'colorWhite'}
           boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
           overflow={'hidden'}
           display={'flex'}
           flexDirection={'column'}
           justifyContent={'space-between'}
           // border={'orange 2px solid'}
           >
      <Navigation />
      <Component {...pageProps} />
      <Footer />
      <GoToTopOfPage/>
    </Box>
    </ThemeProvider>
  </>
}

export default MyApp
