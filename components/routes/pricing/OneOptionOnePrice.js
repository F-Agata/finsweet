import React, {useState, useEffect} from "react";
import styled, { css } from "styled-components";
import TitleAndText from "../../../styles/TitleAndText"
import Box from "../../../styles/Box"
import Btn from "../../../styles/Btn";

import iconPricingList from "../../../public/iconPricingList.svg";


const OneOptionOnePrice = ( { pricingItems } ) => {


    const pricingItem = pricingItems.map((item) => (
        <Box key={item.title}
             width={{_: '100%', tabletL: '32%', }}
             maxWidth={410}
            // border={'blue 2px solid'}
             borderRadius={'20px'}
             bg={"colorWhite"}
             // m={{_: '10px 0px', tabletL: '0px', }}
            m={'10px 0'}
             p={"48px 0px"}
             display={'flex'}
             flexDirection={'column'}
               >
            <Box
                display={'flex'}
                p={'0 40px 20px 40px'}
            >
                <Box pr={24}>
                    <img src={`/${item.icon}.png`} alt={"icon"}/>
                </Box>
                <Box textAlign={'left'}>
                    <TitleAndText variant={'title3'}>{item.title}</TitleAndText>
                    <TitleAndText variant={'textSmall'}>{item.smallInfo}</TitleAndText>
                </Box>
            </Box>
            <Box width={"100%"}
                 borderBottom={'1px solid '}
                 borderColor={'colorLightFooter'}
            />
            <Box  p={'40px'}>
                {item.listInfo.map((oneLine)=> (
                    <Box key={`${item.title}.${oneLine.infoName}`}
                         display={'flex'}
                        pt={20}>
                        <Box pr={20}>
                            <img
                                src={iconPricingList.src}
                                // src={iconPricingList.svg}
                                alt={"icon"} />
                        </Box>
                        <TitleAndText variant={'textSmall'}>{oneLine.infoName}</TitleAndText>
                    </Box>
                ))}
            </Box>
            <TitleAndText variant={'textSmall'}>{item.smallDescription}</TitleAndText>
            <TitleAndText variant={'title1'} pt={40}>{item.price}</TitleAndText>
            <TitleAndText variant={'textSmall'}>{item.time}</TitleAndText>
            <Btn variant={'dark'} mt={40}>Get started</Btn>
        </Box>
        ));

    return (
        <Box
            border={'orange 2px solid'}
            m={'0 auto'}
            width={"100%"}
            p={{_: '10px 0px 40px 0px', tablet: '15px 0px 40px 0px', }}
            textAlign={'center'}
            display={'flex'}
            flexDirection={{_: 'column', tabletL: 'row', }}
            justifyContent={{_: 'center', tabletL: 'space-between', }}
            alignContent={'center'}
            alignItems={'center'}
            // position={'relative'}
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

