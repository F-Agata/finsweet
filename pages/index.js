import styled, {ThemeProvider} from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";

import GoToTopOfPage from "../components/GoToTopOfPage";
import TitleAndText from "../styles/TitleAndText";
import Btn from "../styles/Btn";
import Box from '../components/Box'

import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <AppWrapp>

                <Navigation/>
                <Footer/>
                {/*<TitleAndText variant='title6'>dskjskdj</TitleAndText>*/}
                {/*<TitleAndText variant='title2' color="green" py="20px">dskjskdj</TitleAndText>*/}
                {/*<Box color="colorIcon" p="100px">box</Box>*/}
                {/*<Btn variant="light">sfkskdf</Btn>*/}
                {/*<Btn variant="dark">dsfdsffdsfdff</Btn>*/}



                {/*<Header/>*/}
                {/*<Section1/>*/}
                {/*<Section2/>*/}
                {/*<Section3/>*/}
                {/*<Section4/>*/}
                {/*<Form/>*/}
                {/*<Footer/>*/}
                <GoToTopOfPage/>
            </AppWrapp>
        </ThemeProvider>
    );
}

const AppWrapp = styled.div`
  //border: orange 2px solid;
  min-width: 375px;
  max-width: 1440px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  text-align: left;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.colorWhite};
  font-family:  'Roboto', sans-serif;
  color: ${props => props.theme.colors.colorPrimary};
  overflow: hidden;`

