import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import Logo from '../Logo'

import Box from '../Box'
import Btn from "../../styles/Btn";
import LinksPart from "./LinksPart";

const Navigation = () => {
    // useEffect(()=>{console.log(iconClosed)},[])


    return (
        <BoxNavigation >
            <Logo color={"dark"}/>
            <LinksPart/>
            <Btn variant="dark"> Free trial</Btn>
            <Box display="flex" width="100%" height={{_: '200px', tablet: '400px'}} bg={{_: 'blue', tablet: 'red'}} mx={{_: 'xl', tablet: '2mg'}} >
                test box
            </Box>

        </BoxNavigation>
    );
};

export default Navigation;

const BoxNavigation = styled(Box)`
    //border: 2px solid red;
 display: flex; 
  justify-content: space-between;
  align-items: center;
 width: 100%;
 height: 70px;
 padding:  0 80px; 
  z-index: 100;
  position: fixed;

  ${({ theme }) => css`
    background-color: ${theme.colors.colorWhite};
  `};
`