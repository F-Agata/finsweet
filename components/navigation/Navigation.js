import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import Box from '../Box'


const Navigation = () => {
    // useEffect(()=>{console.log(iconClosed)},[])


    return (
        <Box display="flex" width="100%" height={{_: '200px', tablet: '400px'}} bg={{_: 'blue', tablet: 'red'}} mx={{_: 'xl', tablet: '2mg'}} >
          test box
        </Box>
    );
};

export default Navigation;