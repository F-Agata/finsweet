import React, {useState, useEffect} from "react";
import styled, { css } from "styled-components";
import TitleAndText from "../../../styles/TitleAndText"
import Box from "../../../styles/Box"
import Btn from "../../../styles/Btn";

const OneOptionOnePrice = ( { pricingItems } ) => {

    const pricingItem = pricingItems.map((item, index) => {

        const isEven = index % 2 !== 0;

        return(

            <StyledBoxOnePlan key={item.title}
                              isEven={isEven}
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
                             pt={20}
                            // border={'purple 2px solid'}
                             justifyContent={'left'}
                        >
                            <Box pr={20}>
                                <img src={'/iconPricingList.svg'} alt={"icon"} />
                            </Box>
                            <TitleAndText variant={'textSmall'} textAlign={'left'}>{oneLine.infoName}</TitleAndText>
                        </Box>
                    ))}
                </Box>
                <TitleAndText variant={'textSmall'} p={'0px 40px'}  >{item.smallDescription}</TitleAndText>
                <TitleAndText variant={'title1'} pt={40} >{item.price}</TitleAndText>
                <TitleAndText variant={'textSmall'}>{item.time}</TitleAndText>
                <Btn variant={'dark'} m={"40px 100px 0px 100px"}  >Get started</Btn>
            </StyledBoxOnePlan>
        )

        });

    return (
        <Box
            // border={'orange 2px solid'}
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
};

export default OneOptionOnePrice;

const StyledBoxOnePlan = styled(Box)`
  width: 100%;
  max-width: 410px;
  border: 4px solid;
  border-radius: 24px;
  margin: 10px 0;
  padding: 48px 0px;
  display: flex;
  flex-direction: column;

  ${({ isEven, theme }) => css`
    border-color: ${isEven ? theme.colors.colorSecondary : theme.colors.colorWhite};
    background: ${isEven ? "linear-gradient(171deg, rgba(215,231,249,1) 0%, rgba(213,244,236,1) 100%)" : theme.colors.colorWhite};
   box-shadow: ${isEven ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : null};;
  `};
  
  @media (min-width: 1024px) {
   width: 32%;
  }
`
