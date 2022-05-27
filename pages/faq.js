import React, {useState, useEffect} from "react";
import styled, { css } from "styled-components";
import TitleAndText from "../styles/TitleAndText";
import Box from "../styles/Box";

import BoxSingleQuestion from "../components/routes/faq/BoxSingleQuestion";

import faqItems from "../components/routes/faq/faqItems";


const Faq = (  ) => {

    const faqItem = faqItems.map((item, index) => (

        <BoxSingleQuestion
            key={item.question}
            question={item.question}
            smallDescription={item.smallDescription}
            opened={index === 0}
        />
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


