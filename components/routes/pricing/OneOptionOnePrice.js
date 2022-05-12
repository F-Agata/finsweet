import React, {useState, useEffect} from "react";
import styled, { css } from "styled-components";
import TitleAndText from "../../../styles/TitleAndText"
import Box from "../../../styles/Box"
import Btn from "../../../styles/Btn";
import Link from "../../../styles/Link"
import iconPricingList from "../../../public/iconPricingList.svg";


const OneOptionOnePrice = ( { pricingItems } ) => {

   useEffect(() => {
       console.log(pricingItems)
   },[])

    const pricingItem = pricingItems.map((item) => (
        <Box key={item.title}
            border={'blue 2px solid'}
             bg={"colorWhite"}
             pb={20}
               >
            <Box>
                <Box>
                    <img src={`/${item.icon}.png`} alt={"icon"}/>
                </Box>
                <Box>
                    <TitleAndText variant={'title3'}>{item.title}</TitleAndText>
                    <TitleAndText variant={'textSmall'}>{item.smallInfo}</TitleAndText>
                </Box>
            </Box>
            <Box width={"100%"}
                hight={'10px'}
            bg={"colorLightFooter"}/>
            <Box>
                {item.listInfo.map((oneLine)=> (
                    <Box key={`${item.title}.${oneLine.infoName}`}>
                        <Box>
                            <img
                                src={iconPricingList.src}
                                // src={iconPricingList.svg}
                                alt={"icon"} />
                        </Box>
                        <TitleAndText variant={'textSmall'}>{oneLine.infoName}</TitleAndText>
                    </Box>
                ))}
            </Box>
            <TitleAndText>{item.smallDescription}</TitleAndText>
            <TitleAndText>{item.price}</TitleAndText>
            <TitleAndText>{item.time}</TitleAndText>
            <Btn variant={'dark'}>Get started</Btn>
        </Box>
        ));

    return (
        <Box
            border={'orange 2px solid'}
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
            {pricingItem}

        </Box>
    );
}

export default OneOptionOnePrice;

// width: 360px;
// @media (min-width: 768px) {
//     width: 450px;
//     margin-top: 0px;
// }

