import React  from "react";
import styled, { css } from "styled-components";

import footerItems from "./footerItems";

import Logo from "../Logo";
import IconsFooterPart from "./IconsFooterPart";
import InputFooterPart from "./InputFooterPart"
import OneColumn from "./OneColumn";

import Box from '../../styles/Box'
import TitleAndText from "../../styles/TitleAndText";



const Footer = () => {
    // useEffect(()=>{console.log(iconClosed)},[])


    return (
        <Box
             maxWidth={1440}
             width={'100%'}
             minHeight={500}
             overflow={'hidden'}
             bg={'transparent'}
             borderTop={'1px solid '}
             borderColor={'colorLightFooter'}
            position={'fixed'}
            bottom={0}
            mt={40}
        >

            <BoxStyledGradient/>

            <Box
                position={'fixed'}
                bottom={0}
                maxWidth={1440}
                          width={'100%'}
                          minHeight={300}
                          p={{_: '34px 40px 34px 40px', tablet: '64px 80px 64px 80px', }}
                          bg={'colorPrimary'}
                          display={'flex'}
                          flexDirection={'column'}
                          justifyContent={'space-between'}
            >
                <Box width={'100%'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    flexDirection={{_: 'column', tabletL: 'row', }}
                    // border={'yellow 2px solid'}
                >

                  <OneColumn footerItems={footerItems}/>

                  <Box
                      border={'pink 2px solid'}
                        display={'flex'}
                        flexDirection={'column'}
                        alignItems={{_: 'center', tablet: 'flex-start', }}
                        pt={{_: '20px', tablet: '0', }}
                  >
                    <Logo color={'Light'} />
                    <Box
                        // border={'purple 2px solid'}
                         display={'flex'}
                         flexDirection={'column'}
                         alignItems={{_: 'center', tablet: 'flex-start', }}
                    >
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
     top: 20px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 1977px;
    height: 1154px;
    border-radius: 50%;
    background: ${props => props.theme.gradients.gradientBlur};
    filter: blur(20px);
  `