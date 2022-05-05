import React  from "react";
import styled, { css } from "styled-components";


import Box from "../../styles/Box";
import TitleAndText from "../../styles/TitleAndText";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

const IconsFooterPart = () => {

    return (
        <Box mt={5}
             border={'orange 2px solid'}
             display={'flex'}
             justifyContent={'space-between'}
             alignItems={{_: 'space-between', tablet: 'center', }}
             width={'100%'}
             alignSelf={'flex-end'}
             flexDirection={{_: 'column', tablet: 'row', }}

             >
            <Box width={{_: '100%', tablet: '37%', }}
                 bg={'colorWhite'}
                 opacity={"50%"}
                 height={5} />
            <Box
                width={{_: '100%', tablet: '22%', }}
                 display={'flex'}
                 justifyContent={'space-between'}
                border={'red 2px solid'}
            >
                <TitleAndText fontSize={'12px'}
                              lineHeight={'18px'}
                              color={'colorWhite'}
                              opacity={"50%"}
                > © Copyright Finsweet 2022 </TitleAndText>
                <StyledFaFacebook/>
                <StyledFaTwitter/>
                <StyledFaInstagram/>
            </Box>
            <Box width={{_: '100%', tablet: '37%', }}
                 bg={'colorWhite'}
                 opacity={"50%"}
                 height={10} />
        </Box>
    );
}

export default IconsFooterPart;

const StyledFaFacebook = styled(FaFacebook)`
  font-size: 20px;
  opacity: 50%;
  color: ${props => props.theme.colors.colorWhite};
`

const StyledFaTwitter = styled(FaTwitter)`
  font-size: 20px;
  opacity: 50%;
  color: ${props => props.theme.colors.colorWhite};
`

const StyledFaInstagram = styled(FaInstagram)`
  font-size: 20px;
  opacity: 50%;
  color: ${props => props.theme.colors.colorWhite};
  `