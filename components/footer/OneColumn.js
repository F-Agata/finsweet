import React, {useState, useEffect} from "react";
import styled, { css } from "styled-components";
import TitleAndText from "../../styles/TitleAndText";
import Box from "../../styles/Box";
import Link from "../../styles/Link";


const OneColumn = ( {footerItems} ) => {

    const footerItem = footerItems.map((item) => (
        <Box key={item.title}
             // border={'blue 2px solid'}
             pb={{_: '20px', tabletL: '0px', }}
             pr={{_: '0px', tabletL: '26px', }}
             textAlign={{_: 'center', tablet: 'left', }}
        >
            <TitleAndText variant={'title5'} color={"colorWhite"}>{item.title}</TitleAndText>
            {item.options.map((option) => <TitleAndText variant={'textSmall'} color={"colorWhite"} opacity={'50%'}>{option.name} </TitleAndText>)}
        </Box>
    ));

    return (
        <BoxOneColumn>
            {footerItem}
        </BoxOneColumn>
    );
};

export default OneColumn;

const BoxOneColumn = styled(Box)`
  flex-grow: 1;
   //border: 2px solid blue;
    display: flex;
    flex-direction: column;
   align-items: center;
  padding-top: 20px;
    @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
      padding-top: 0px;
  }
  @media (min-width: 1024px) {
     max-width: 60%;
  }
`
