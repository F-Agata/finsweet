import React  from "react";
import styled, { css } from "styled-components";
import TitleAndText from "../../../styles/TitleAndText"
import Box from "../../../styles/Box"
import Btn from "../../../styles/Btn";
import Link from "../../../styles/Link"





const ChoiceMonthlyYearly = () => {

    return (
        <Box
            border={'orange 2px solid'}
            m={'0 auto'}
            p={{_: '10px 0px 40px 0px', tablet: '15px 0px 40px 0px', }}
            textAlign={'center'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignContent={'center'}
            alignItems={'center'}
            position={'relative'}
            width={300}
            hight={60}
        >

            <TitleAndText variant={'textSmall'} mb={34}>Monthly/Yearly</TitleAndText>

        </Box>
    );
}

export default ChoiceMonthlyYearly;

