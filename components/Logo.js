import React from "react";
import styled , { css } from "styled-components";

import Box from '../styles/Box'
import LogoVector from '../public/LogoVector.svg'



const Logo = () => {
    // useEffect(()=>{console.log(iconClosed)},[])


    return (
        <BoxLogo >
            <LogoIcon src={LogoVector.src} alt={"logo"} />
        </BoxLogo>
    );
};

export default Logo;

const BoxLogo = styled(Box)`
   //border: purple 2px solid;
   height: 32px;
  width: 140px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const LogoIcon = styled.img`
    width: 100%;
    

`
