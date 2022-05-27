import React, {useState, useEffect} from "react";
import styled, { css } from "styled-components";
import TitleAndText from "../styles/TitleAndText";
import Box from "../styles/Box";

import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai";

import faqItems from "../components/routes/faq/faqItems";


const Faq = (  ) => {

    // const [smallNavIsOpen, setSmallNavIsOpen] = useState(false)
    //
    //    const changeNav = () => {
    //     setSmallNavIsOpen(!smallNavIsOpen)
    // }

    const faqItem = faqItems.map((item) => (

        <StyledBoxSingleQuestion key={item.question}>
            <Box
                width={'100%'}
                // border={'green 2px solid'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
                mb={20}
                // p={'20px  0 0 20px'}
            >
                <TitleAndText variant={'title4'} textAlign={'left'}>{item.question}</TitleAndText>
                <Box
                    pl={40}>
                    <StyledAiOutlinePlus
                        // onClick={changeNav}
                    />
                </Box>
            </Box>
           <TitleAndText variant={'textSmall'} p={'20px 40px'}>{item.smallDescription}</TitleAndText>
        </StyledBoxSingleQuestion>

    ));

    return (
        <Box
            // border={'green 2px solid'}
            m={'0 auto'}
            width={"100%"}
            p={{_: '100px 0px 40px 0px', tablet: '150px 0px 40px 0px', }}
            textAlign={'center'}
            display={'flex'}
            flexDirection={{_: 'column', tablet: 'row', }}
            alignItems={{_: 'center', tablet: 'stretch', }}
            justifyContent={{_: 'center', tablet: 'space-between', }}

        >
            <Box
                // border={'blue 2px solid'}
                width={{_: '100%', tablet: '38%',}}
                textAlign={{_: 'center', tabletL: 'left',}}
                mb={20}
                p={'0px 40px'}
            >
                <TitleAndText variant={'title2'} mb={20}>Frequestly Asked Questions</TitleAndText>
                <TitleAndText variant={'textSmall'}
                              mb={20}
                >
                    Over the past  Over the past few months, we’ve added several new features to SaaS Invoicing to help any
                    business get paid faster and str
                </TitleAndText>
            </Box>
            <Box
                // border={'yellow 2px solid'}
                width={{_: '100%', tablet: '60%',}}
                textAlign={{_: 'center', tablet: 'left',}}
                p={'0px 40px'}
                textAlign={'center'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={{_: 'center', tablet: 'flex-start', }}
                alignItems={{_: 'center', tablet: 'flex-start', }}
                flexWrap={'wrap'}
            >
                {faqItem}
            </Box>
        </Box>
    );
};

export default Faq;

const StyledBoxSingleQuestion = styled(Box)`
  border: 2px solid;
  border-color: ${props => props.theme.colors.colorLight};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  margin: 20px 0;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  @media (min-width: 768px) {
    margin: 0px 0px 20px 0px ;
  }
`

  const StyledAiOutlinePlus = styled(AiOutlinePlus)`
     width: 34px;
    height: 34px;
  ${({theme}) => css`
    background-color: ${theme.colors.colorWhite};
    color: ${theme.colors.colorPrimary};
    line-height: ${theme.lineHeight.lh4};
    font-size: ${theme.fontSizes.fs4};
    font-weight: ${theme.fontWeights.fontBold};
    transition: 0.3s;
    cursor: pointer;
  `};
  :hover  {
    transform: scale(1.3, 1.3);
  }`

const StyledAiOutlineMinus = styled(AiOutlineMinus)`
  width: 34px;
  height: 34px;
  ${({theme}) => css`
    background-color: ${theme.colors.colorWhite};
    color: ${theme.colors.colorPrimary};
    line-height: ${theme.lineHeight.lh4};
    font-size: ${theme.fontSizes.fs4};
    font-weight: ${theme.fontWeights.fontBold};
    transition: 0.3s;
    cursor: pointer;
  `};
  :hover  {
    transform: scale(1.3, 1.3);
  }`



