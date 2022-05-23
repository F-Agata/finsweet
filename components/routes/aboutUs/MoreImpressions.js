import styled from "styled-components";

import TitleAndText from "../../../styles/TitleAndText"
import Box from "../../../styles/Box"
import Btn from "../../../styles/Btn";
import Link from "../../../styles/Link";

const MoreImpressions = () => {

    return (
        <Box
            overflow={'hidden'}
            bg={'transparent'}
            position={'relative'}
            display={'flex'}
            flexDirection={'column'}
        >
            <BoxStyledGradient/>

            <Box
                 p={'80px 40px 80px 40px'}
                 bg={'transparent'}
                 display={'flex'}
                 flexDirection={{_: 'column', tablet: 'row', }}
                 justifyContent={{_: 'center', tablet: 'space-between', }}
                 alignItems={'center'}
                 zIndex={2}
            >
                <Box
                    // border={'green 2px solid'}
                    width={{_: '100%', tablet: '47%', }}
                    m={{_: '0px 0px 40px 0px', tablet: '0px 0px 0px 0px', }}
                    display={'flex'}
                    flexDirection={'column'}
                >
                    <TitleAndText variant={'title3'}
                                  textAlign={'left'}
                                  mb={20}
                    >
                        More impressions, more conversions
                    </TitleAndText>

                    <TitleAndText variant={'textSmall'}
                                  textAlign={'left'}
                                  mb={40}
                    >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.
                    </TitleAndText>
                    <Link href={`/freeTrial`}><Btn variant="dark" m={0}> Get Free trial</Btn></Link>
                </Box>
                <Box
                    // border={'green 2px solid'}
                     width={{_: '100%', tablet: '47%', }}>
                    <StyledImgMoreImpressions src={`/aboutUs/imageMoreImpressions.png`} alt={"more impressions image"} />
                </Box>
            </Box>
        </Box>
     );
};

export default MoreImpressions;

const BoxStyledGradient = styled(Box)`
  border: 2px solid grey;
    position: absolute;
     top: -50%;
    left: 20%;
    transform: translate(-50%, 0);
    width: 1689px;
    height: 1215px;
    border-radius: 700px;
    background: ${props => props.theme.gradients.gradientBlur};
    filter: blur(200px);
      `

const StyledImgMoreImpressions = styled.img`
    width: 100%;
    `
