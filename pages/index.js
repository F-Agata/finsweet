import styled, {ThemeProvider} from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";

import GoToTopOfPage from "../components/GoToTopOfPage";

import Box from '../styles/Box'

import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import StartPage from "../components/startPage/StartPage"

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Box maxWidth={1440}
                 minWidth={375}
                 minHeight={'100vh'}
                 m={'0 auto'}
                 bg={'colorWhite'}
                 boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
                 overflow={'hidden'}
                 position={'relative'}
                border={'orange 2px solid'}
            >
                <Navigation/>
                <StartPage/>
                <Footer/>
                <GoToTopOfPage/>
            </Box>
        </ThemeProvider>
    );
}

