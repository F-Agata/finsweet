import React  from "react";
import styled, { css } from "styled-components";

import Logo from "../Logo";
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
             borderColor={'colorBtnHover'}
        >

            <BoxStyledGradient/>

            <Box position={'absolute'}
                          top={117}
                          width={1440}
                          minHeight={383}
                          p={'64px 80px 0px 80px'}
                          bg={'colorPrimary'}>
            <Box width={1280}
                 display={'flex'}
                 justifyContent={'space-between'}
                  border={'yellow 2px solid'}
            >
               <Box border={'orange 2px solid'}>
                   <OneColumn/>
               </Box>
               <Box border={'tomato 2px solid'}>
                   <Logo color={'Light'}/>
                   <Box border={'greenyellow 2px solid'}>
                       <TitleAndText variant={'title5'} color={"colorWhite"} mt={32} mb={16}>Subscribe to our Newsletter</TitleAndText>
                       <InputFooterPart/>
                   </Box>
               </Box>
           </Box>
            </Box>
        </Box>
    );
}

export default Footer;

const BoxStyledGradient = styled(Box)`
  //border: 2px solid grey;
    position: absolute;
    top: 0px;
    width: 1977px;
    height: 1154px;
    margin-left: -269px;
    opacity:30%;
    border-radius:50%;
    background: ${props => props.theme.gradients.gradientBlur};
    filter: blur(4px);
    radius: 4px;
    offset: 0px 4px;
`