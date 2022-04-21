import styled, {ThemeProvider} from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";

import GoToTopOfPage from "../components/GoToTopOfPage";
import Title from "../styles/Title";
import Btn from "../styles/Btn";
import Box from '../components/Box'

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <AppWrapp>
                <Title variant='title1'>dskjskdj</Title>
                <Title variant='title2' color="green" py="20px">dskjskdj</Title>
                <Box color="colorIcon" p="100px">box</Box>
                <Btn variant="light">sfkskdf</Btn>
                <Btn variant="dark">dsfdsffdsfdff</Btn>
                {/*<Navigation/>*/}
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
  border: orange 2px solid;
  min-width: 375px;
  max-width: 1800px;
  margin: 0 auto;
  text-align: left;
  min-height: 100vh;
  //background: ${props => props.theme.gradients.gradientBlur};
  background-color: transparent;
  font-family:  'Roboto', sans-serif;
  color: ${props => props.theme.colors.colorPrimary};
  overflow: hidden;`
