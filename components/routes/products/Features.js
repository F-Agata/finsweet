import styled, { css } from "styled-components";
import TitleAndText from "../../../styles/TitleAndText"
import Box from "../../../styles/Box"


import featuresItems from "./featuresItems";

const Features = () => {

      const  featuresItem = featuresItems.map((item, index) => {

       const addVerticalOrHorizontalBorder = index % 2 !== 0;

        return(

        <StyledBoxOneWorker key={item.icon}
                            addVerticalOrHorizontalBorder={addVerticalOrHorizontalBorder}
        >
            <Box
                // border={'blue 2px solid'}
                width={53}
                height={47}
                mb={20}
            >
                <img src={`/products/${item.icon}.svg`} alt={"icon"} />
            </Box>
            <Box
                 alignSelf={'stretch'}
            >
                <TitleAndText variant={'title3'}
                              textAlign={{_: 'center', tabletL: 'left', }}
                              mb={20}
                >
                    {item.title}
                </TitleAndText>
            </Box>

            <Box
                // border={'blue 2px solid'}
                  flexGrow={'2'}
            >
            <TitleAndText variant={'textLarge'}
                          textAlign={{_: 'center', tabletL: 'left', }}
            >
                {item.smallDescription}
            </TitleAndText>
            </Box>
        </StyledBoxOneWorker>

    )});

    return (
        <Box
            // border={'green 2px solid'}
            m={'0 auto'}
            width={"100%"}
            textAlign={'center'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={ 'center'}
            alignItems={'center'}
            p={'20px 20px 80px 20px'}
        >
            <Box  mb={20}
                  maxWidth={846}
            >
                <TitleAndText variant={'title2'}>Features</TitleAndText>
            </Box>
            <Box
                // bg={'rgba(215, 152, 225, 0.15)'}
                bg={'colorLight50'}
                borderRadius={24}
                p={'40px 40px'}
                display={'flex'}
                flexDirection={{_: 'column', tabletL: 'row', }}
                justifyContent={{_: 'center', tabletL: 'space-eleven', }}
                alignItems={{_: 'center', tabletL: 'stretch', }}
            >
                {featuresItem}
            </Box>
        </Box>
    );
}

export default Features;

const StyledBoxOneWorker = styled(Box)`
  //border: 2px solid red;
  flex-grow: 1;
  margin: 0px 0;
  padding: 40px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  border-bottom: 2px solid;
  border-top: 2px solid;
  ${({ addVerticalOrHorizontalBorder, theme }) => css`
   border-color: ${addVerticalOrHorizontalBorder ? theme.colors.colorLightFooter : "transparent"};
  `};
  @media (min-width: 1024px) {
    width: 31%;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 20px;

     border-bottom: 0px solid;
     border-top: 0px solid;
     border-left: 2px solid;
     border-right: 2px solid;
     ${({ addVerticalOrHorizontalBorder, theme }) => css`
     border-color: ${addVerticalOrHorizontalBorder ? theme.colors.colorLightFooter : "transparent"};
   `};
  }
  
  
`


