import React  from "react";
import styled, { css } from "styled-components";

import Logo from "../Logo";
import InputFooterPart from "./InputFooterPart"
import OneColumn from "./OneColumn";

import Box from "../Box";
import TitleAndText from "../../styles/TitleAndText";

const Footer = () => {
    // useEffect(()=>{console.log(iconClosed)},[])


    return (
        <BoxFooter >

            <BoxGradient />
            <BoxBgPrimary>
           <BoxTxt>
               <BoxLinksFooter>
                   <OneColumn/>
               </BoxLinksFooter>
               <BoxLogoSubscribeFooter>
                   <Logo color={'Light'}/>
                   <BoxSubscribe>
                       <TitleAndText variant={'title5'} color={"colorWhite"} mt={32} mb={16}>Subscribe to our Newsletter</TitleAndText>
                       <InputFooterPart/>
                   </BoxSubscribe>
               </BoxLogoSubscribeFooter>
           </BoxTxt>
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
 min-height: 500px;
  background-color: transparent;
  border-top: 1px solid;
  border-color: ${props => props.theme.colors.colorBtnHover};
  
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
`

const BoxBgPrimary = styled(Box)`
  position: absolute;
  top: 117px;
  width: 1440px;
  min-height: 383px;
  padding: 64px 80px 0px 80px;
  ${({ theme }) => css`
    background-color: ${theme.colors.colorPrimary};
  `};
`

const BoxTxt = styled(Box)`
  border: greenyellow 2px solid;
    width: 1280px;
  display: flex;
  justify-content: space-between;
  
`

const TitleAndTextBla = styled(TitleAndText)`
  color: ${props => props.theme.colors.colorWhite};

  
  //border: greenyellow 2px solid;
`

const BoxLinksFooter = styled(Box)`
    border: #0070f3 2px solid;
`

const BoxLogoSubscribeFooter = styled(Box)`
  border: #0070f9 2px solid;
`

const BoxSubscribe = styled(Box)`
`