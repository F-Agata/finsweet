import React  from "react";
import styled, { css } from "styled-components";

import Logo from "../Logo";


import Btn from "../../styles/Btn";
import Box from "../Box";
import TitleAndText from "../../styles/TitleAndText";

const Footer = () => {
    // useEffect(()=>{console.log(iconClosed)},[])


    return (
        <BoxFooter >

            <BoxGradient />
            <BoxBgPrimary>
            <TitleAndTextBla variant={'title3'}>fsfffdsfsdffsdfdsfdfsdf</TitleAndTextBla>
            </BoxBgPrimary>
        </BoxFooter>
    );
}

export default Footer;

const BoxFooter = styled(Box)`
    //border: 2px solid red;
  position: absolute;
  top: 588px;
  overflow: hidden;
  width: 1440px;
 height: 500px;
  background-color: transparent;
  
  //Effect: Drop shadow;
  //Radius: 4px;
  //Offset: 0px, 4px;
`

const BoxGradient = styled(Box)`
  position: absolute;
  border: 2px solid red;
  width: 1977px;
  height: 1154px;
  top: 0px;
  margin-left: -269px;
  Opacity: 30%;
  //Blend: Pass through;
  border-radius: 50%;
  background: ${props => props.theme.gradients.gradientBlur};
  filter: blur(4px);
  radius: 4px;
  Offset: 0px, 4px;
  //z-index: -2;
`

const BoxBgPrimary = styled(Box)`
  position: absolute;
  top: 117px;
  //z-index: -1;
  width: 1440px;
  height: 383px;
  padding: 64px 80px 0px 80px;
  ${({ theme }) => css`
    background-color: ${theme.colors.colorPrimary};
  `};
`

const TitleAndTextBla = styled(TitleAndText)`
  color: ${props => props.theme.colors.colorWhite};

  
  //border: greenyellow 2px solid;
`