import React from "react";
import styled from "styled-components";

import Box from '../styles/Box'
import { IoIosGitCompare } from 'react-icons/io'



const Logo = () => {
    // useEffect(()=>{console.log(iconClosed)},[])


    return (
        <Box width={1440} color={'orange'} border={2px solid red}>
            <WrappLogoIcon>
                {IoIosGitCompare}
            </WrappLogoIcon>
            <WrappLogoName>
                <p>finsweet</p>
            </WrappLogoName>
        </Box>
    );
};

export default Logo;