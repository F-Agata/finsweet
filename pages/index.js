import styled, {ThemeProvider} from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";

import GoToTopOfPage from "../components/GoToTopOfPage";

import Box from '../styles/Box'

import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import {default as HomeContent} from "./home"

export default function Home() {
    return (
        <>
        {/*<ThemeProvider theme={theme}>*/}
             {/*<GlobalStyle/>*/}
            {/*<Box maxWidth={1440}*/}
            {/*     minWidth={375}*/}
            {/*     minHeight={'100vh'}*/}
            {/*     width={'100%'}*/}
            {/*     m={'0 auto'}*/}
            {/*     bg={'colorWhite'}*/}
            {/*     // bg={'lightblue'}*/}
            {/*     boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}*/}
            {/*     overflow={'hidden'}*/}
            {/*     display={'flex'}*/}
            {/*     flexDirection={'column'}*/}
            {/*     // border={'orange 2px solid'}*/}
            {/*     position={'relative'}*/}

            {/*>*/}

                <HomeContent/>

            {/*</Box>*/}
        {/*</ThemeProvider>*/}
        </>
    );
}

