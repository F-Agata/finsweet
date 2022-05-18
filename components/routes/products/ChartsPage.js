import styled, { css } from "styled-components";

import Box from "../../../styles/Box"
import OneChart from "./OneChart";

const ChartsPage = () => {

    return (
        <Box
            // border={'orange 2px solid'}
            m={'0 auto'}
            pt={60}
            pb={60}
            textAlign={'center'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignContent={'center'}
            alignItems={'center'}
            position={'relative'}
            overflow={'hidden'}
        >
            <BoxStyledGradient1/>
            <BoxStyledGradient2/>
            <Box zIndex={'1'}
                // border={'yellow 2px solid'}
                 display={'flex'}
                 flexDirection={'column'}
                 justifyContent={'center'}
                 alignItems={'center'}
                 p={'0px 40px 0px 40px'}
            >
                <OneChart/>
            </Box>
        </Box>
    );
}

export default ChartsPage;

const BoxStyledGradient1 = styled(Box)`
  position: absolute;
  top: 10%;
  left: 10%;
  width: 429px;
  height: 426px;
  border-radius: 300px;
  background: ${props => props.theme.gradients.gradientBlur};
  filter: blur(200px);
 `

const BoxStyledGradient2 = styled(Box)`
  position: absolute;
  bottom: 20%;
  right: 10%;
  width: 522px;
  height: 522px;
  border-radius: 430px;
  background: ${props => props.theme.gradients.gradientBlur};
  filter: blur(200px);
 `
