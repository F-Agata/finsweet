import React from "react";
import styled, { css } from "styled-components";

import Logo from '../Logo'

import Box from '../../styles/Box'
import Btn from "../../styles/Btn";
import LinksPart from "./LinksPart";

const Navigation = () => {
    // useEffect(()=>{console.log(iconClosed)},[])


    return (
        <BoxNavigation >
            <Logo color={"dark"}/>
            <LinksPart/>
            <Btn variant="dark"> Free trial</Btn>
            {/*<Box display="flex" width="100%" height={{_: '200px', tablet: '400px'}} bg={{_: 'colorSecondary', tablet: 'colorIcon'}} mx={{_: 'xl', tablet: '2mg'}} >*/}
            {/*    test box*/}
            {/*</Box>*/}

        </BoxNavigation>
    );
};

export default Navigation;

const BoxNavigation = styled(Box)`
    border: 2px solid red;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
 display: flex; 
  justify-content: space-between;
  align-items: center;
 max-width: 1440px;
  width: 100%;
 height: 70px;
 padding:  0 80px; 
  z-index: 100;
  
  ${({ theme }) => css`
    background-color: ${theme.colors.colorWhite};
  `};
  
`
// p={{_: '34px 40px 34px 40px', tablet: '64px 80px 64px 80px', }}