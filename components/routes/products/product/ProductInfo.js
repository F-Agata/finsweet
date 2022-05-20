import styled, { css } from "styled-components";
import TitleAndText from "../../../../styles/TitleAndText"
import Box from "../../../../styles/Box"
import Btn from "../../../../styles/Btn";
import Link from "../../../../styles/Link";

import productInfoItems from "./productInfoItems";

const ProductInfo = () => {

    const  productInfoItem = productInfoItems.map((item, index) => (

            <StyledBoxOneWorker key={item.id}
            >
                {item.moreInfo.map((oneInfo) => (
                    <Box key={oneInfo.icon}>
                    <Box
                        border={'blue 2px solid'}
                        width={48}
                        height={48}
                        mb={20}
                    >
                        <img src={`/${oneInfo.icon}`} alt={"icon"} />
                    </Box>
                    <Box
                    // border={'blue 2px solid'}
                    // flexGrow={'1'}
                    // width={"100%"}
                    alignSelf={'stretch'}
                    >
                    <TitleAndText variant={'title3'}
                    textAlign={{_: 'center', tabletL: 'left', }}
                    mb={20}
                    >
                {oneInfo.title}
                    </TitleAndText>
                    </Box>

                    <Box
                    // border={'blue 2px solid'}
                    flexGrow={'2'}
                    // alignSelf={'flex-end'}
                    // alignSelf={'stretch'}
                    >
                    <TitleAndText variant={'textLarge'}
                    textAlign={{_: 'center', tabletL: 'left', }}
                    >
                {oneInfo.smallDescription}
                    </TitleAndText>
                    </Box>
                    </Box>
                ))}

            </StyledBoxOneWorker>

        ));

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
            p={'60px 20px 80px 20px'}
        >
            <Box  mb={20}
                  maxWidth={846}
            >
                {productInfoItems.map((item) => (
                    <TitleAndText key={item.nameProduct}
                        variant={'title2'}
                                  mb={20}
                    >
                        {`  Our corporate values ${item.nameProduct}`}
                    </TitleAndText>
                ))}
                <TitleAndText variant={'textSmall'}
                              mb={20}
                >
                    Lorem ipsum dolor sit amet, ceirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </TitleAndText>
            </Box>

            <Box
                bg={'colorLight50'}
                borderRadius={24}
                p={'40px 40px'}
                display={'flex'}
                flexDirection={{_: 'column', tabletL: 'row', }}
                justifyContent={{_: 'center', tabletL: 'space-eleven', }}
                alignItems={{_: 'center', tabletL: 'stretch', }}
            >
                {productInfoItem}
            </Box>
            <Box>
                <Link href={`/pricing`}><Btn variant="dark" ml={20}> Pricing</Btn></Link>
            </Box>
        </Box>
    );
};

export default ProductInfo;

const StyledBoxOneWorker = styled(Box)`
  border: 2px solid red;
  flex-grow: 1;
  margin: 0px 0;
  padding: 40px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //
  // border-bottom: 2px solid;
  // border-top: 2px solid;
  // ${({ addVerticalOrHorizontalBorder, theme }) => css`
  //  border-color: ${addVerticalOrHorizontalBorder ? theme.colors.colorLightFooter : "transparent"};
  // `};
  @media (min-width: 1024px) {
    width: 31%;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 20px;

   //   border-bottom: 0px solid;
   //   border-top: 0px solid;
   //   border-left: 2px solid;
   //   border-right: 2px solid;
   //   ${({ addVerticalOrHorizontalBorder, theme }) => css`
   //     // padding: ${addVerticalOrHorizontalBorder ? '0px 20px' : "0px 0px"};
   //   border-color: ${addVerticalOrHorizontalBorder ? theme.colors.colorLightFooter : "transparent"};
   // `};
  }
  
  
`


