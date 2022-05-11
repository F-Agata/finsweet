import React  from "react";
import styled, { css } from "styled-components";
import TitleAndText from "../../../styles/TitleAndText"
import Box from "../../../styles/Box"
import Btn from "../../../styles/Btn";
import Link from "../../../styles/Link"





const OneOption = () => {

    return (
        <Box
            // border={'orange 2px solid'}
            m={'0 auto'}
            p={{_: '100px 0px 40px 0px', tablet: '150px 0px 40px 0px', }}
            textAlign={'center'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignContent={'center'}
            alignItems={'center'}
            position={'relative'}
        >

                    <TitleAndText variant={'title1'} mb={34}>Opcja do wyboru</TitleAndText>

        </Box>
    );
}

export default OneOption;

