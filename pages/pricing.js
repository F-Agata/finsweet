import React  from "react";
import styled, { css } from "styled-components";
import TitleAndText from "../styles/TitleAndText";
import Box from "../styles/Box";
import Btn from "../styles/Btn";
import Link from "../styles/Link"
import OneOption from "../components/routes/pricing/OneOption";



const Pricing = () => {

    return (
        <Box
            // border={'orange 2px solid'}
            m={'0 auto'}
            p={{_: '100px 0px 40px 0px', tablet: '150px 0px 40px 0px', }}
            textAlign={'center'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignContent={'center'}
            alignItems={'center'}
            position={'relative'}
        >
            <BoxStyledGradient1/>
            <BoxStyledGradient2/>
            <Box zIndex={'1'}
                // border={'yellow 2px solid'}
                 display={'flex'}
                 flexDirection={'column'}
                 justifyContent={'center'}
                 alignItems={'center'}>
                <Box
                    maxWidth={846}
                    p={{_: '0px 40px ', tablet: '0px 60px', }}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <TitleAndText variant={'title1'} mb={34}>Pricing plans that suit you</TitleAndText>
                    <TitleAndText variant={'textLarge'} mb={42} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                    </TitleAndText>

                </Box>
                <Box mb={42}
                     p={{_: '0px 40px ', tablet: '0px 40px', }}
                >
                    <OneOption/>

                </Box>

            </Box>
        </Box>
    );
}

export default Pricing;

const BoxStyledGradient1 = styled(Box)`
  position: absolute;
  top: 0%;
  left: 60%;
  width: 510px;
  height: 510px;
  border-radius:50%;
  background: ${props => props.theme.gradients.gradientBlur};
  filter: blur(80px);
 `

const BoxStyledGradient2 = styled(Box)`
  position: absolute;
  top: 0%;
  left: 60%;
  width: 510px;
  height: 510px;
  border-radius:50%;
  background: ${props => props.theme.gradients.gradientBlur};
  filter: blur(80px);
`