import React  from "react";
import styled, { css } from "styled-components";

import Logo from "../Logo";
import IconsFooterPart from "./IconsFooterPart";
import InputFooterPart from "./InputFooterPart"
import OneColumn from "./OneColumn";

import Box from '../../styles/Box'
import TitleAndText from "../../styles/TitleAndText";



const Footer = () => {
    // useEffect(()=>{console.log(iconClosed)},[])


    return (
        <Box position={'absolute'}
             bottom={0}
             width={1440}
             minHeight={500}
             overflow={'hidden'}
             bg={'transparent'}
             borderTop={'1px solid '}
             borderColor={'colorLightFooter'}
        >

            <BoxStyledGradient/>

            <Box position={'absolute'}
                          top={117}
                          maxWidth={1440}
                          width={'100%'}
                          minHeight={383}
                          p={{_: '34px 40px 34px 40px', tablet: '64px 80px 64px 80px', }}
                          bg={'colorPrimary'}
                          display={'flex'}
                          flexDirection={'column'}
                          justifyContent={'space-between'}
            >
                <Box width={'100%'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    flexDirection={{_: 'column', tablet: 'row', }}
                    border={'yellow 2px solid'}
                >
                  <Box border={'green 2px solid'}
                       flexGrow={{_: '0', tablet: '1', }}
                  >
                    <OneColumn/>
                  </Box>
                  <Box pt={{_: '20px', tablet: '0px', }} >
                    <Logo color={'Light'} />
                    <Box >
                       <TitleAndText variant={'title5'} color={"colorWhite"} mt={32} mb={16}>Subscribe to our Newsletter</TitleAndText>
                       <InputFooterPart/>
                    </Box>
                   </Box>
                </Box>
                <IconsFooterPart/>
            </Box>
        </Box>
    );
}

export default Footer;

const BoxStyledGradient = styled(Box)`
  //border: 2px solid grey;
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 1977px;
    height: 1154px;
    //margin-left: -269px;
    opacity:30%;
    border-radius:50%;
    background: ${props => props.theme.gradients.gradientBlur};
    filter: blur(4px);
    radius: 4px;
    offset: 0px 4px;
`