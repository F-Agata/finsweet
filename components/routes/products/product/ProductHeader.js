import TitleAndText from "../../../../styles/TitleAndText"
import Box from "../../../../styles/Box"
import BoxColorFulBg from "../../../../styles/BoxColorFulBg"

import styled from "styled-components";



const ProductHeader  = () => {

    return (
        <Box
            // border={'orange 2px solid'}
            width={'100%'}
            m={'0 auto'}
            pt={60}
            pb={60}
            textAlign={'center'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignContent={'center'}
            alignItems={'center'}
            position={'relative'}
            overflow={'hidden'}
        >
            <BoxStyledGradient/>
            <Box zIndex={'1'}
                 width={'100%'}
                // border={'yellow 2px solid'}
                 display={'flex'}
                 flexDirection={'column'}
                 justifyContent={'center'}
                 alignItems={'center'}
                 p={'100px 40px 0px 40px'}
            >
                <Box  mb={20}
                      maxWidth={846}
                >
                    <TitleAndText variant={'title1'}
                                  mb={20}
                    >
                        We are proud of our products
                    </TitleAndText>
                    <TitleAndText variant={'textLarge'}
                                  mb={20}
                    >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </TitleAndText>
                </Box>
                <Box
                        // border={'purple 2px solid'}
                       mb={60}
                >
                        <StyledImg src={`/chartImage2.png`} alt={"icon"} />
                </Box>
                <Box
                      mb={20}
                      maxWidth={846}
                >
                    <BoxColorFulBg
                        mb={20}
                    >
                        <TitleAndText variant={'textColorful'}
                                      colorFulBg
                        >
                            Lorem lorem
                        </TitleAndText>
                    </BoxColorFulBg>
                    <TitleAndText variant={'title2'}
                                  mb={20}
                    >
                        We’re a team of data analysts
                    </TitleAndText>
                    <TitleAndText variant={'textLarge'}
                                  mb={20}
                    >
                        Lorem ipsum dolor sit amLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.et, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </TitleAndText>
                </Box>
             </Box>
        </Box>
    );
}

export default ProductHeader ;

const BoxStyledGradient = styled(Box)`
  position: absolute;
  top: 10%;
  left: 10%;
  width: 529px;
  height: 526px;
  border-radius: 470px;
  background: ${props => props.theme.gradients.gradientBlur};
  filter: blur(200px);
 `

const StyledImg = styled.img`
    width: 80%;
    `




