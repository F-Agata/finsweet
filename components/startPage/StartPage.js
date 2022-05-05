import React  from "react";
import styled, { css } from "styled-components";
import TitleAndText from "../../styles/TitleAndText";
import Box from "../../styles/Box";
import Btn from "../../styles/Btn";


const StartPage = () => {
    // useEffect(()=>{console.log(iconClosed)},[])


    return (
        <Box
            // border={'orange 2px solid'}
            maxWidth={846}
            m={'0 auto'}
            p={'300px 60px 0px 60px'}
            textAlign={'center'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignContent={'center'}
            position={'relative'}
        >
            <BoxStyledGradient/>
            <TitleAndText variant={'title1'} mb={34}>Are you ready to grow your business with us?</TitleAndText>
            <TitleAndText variant={'textSmall'} mb={42} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
            </TitleAndText>
            <Btn variant={'dark'}  m={'0 auto'}>View Pricing</Btn>
        </Box>
    );
}

export default StartPage;

const BoxStyledGradient = styled(Box)`
  position: absolute;
  top: -50%;
  left: 70%;
  width: 510px;
  height: 510px;
  ////margin-left: -269px;
  //opacity:30%;
  border-radius:50%;
  background: ${props => props.theme.gradients.gradientBlur};
  filter: blur(40px);
  radius: 400px;
 `