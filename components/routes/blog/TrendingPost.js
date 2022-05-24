import styled, { css } from "styled-components";
import TitleAndText from "../../../styles/TitleAndText";
import Box from "../../../styles/Box";
import BoxColorFulBg from "../../../styles/BoxColorFulBg";
import Link from "../../../styles/Link"



const TrendingPost = () => {

    return (
        <Box
            border={"2px solid"}
            borderColor={'colorLight50'}
            borderRadius={24}
            p={'40px 40px 20px 40px'}
            display={'flex'}
            flexDirection={{_: 'column', tabletL: 'row', }}
            justifyContent={{_: 'center', tabletL: 'space-between', }}
            alignItems={{_: 'center', tabletL: 'center', }}
        >
            <Box
                // border={'blue 2px solid'}
                width={{_: '100%', tabletL: '47%', }}
                textAlign={{_: 'center', tabletL: 'left', }}
            >
                <BoxColorFulBg
                    mb={20}
                >
                    <TitleAndText variant={'textColorful'}>
                        Trending Post
                    </TitleAndText>
                </BoxColorFulBg>
                <TitleAndText variant={'title2'}
                              mb={20}
                >
                        New invoicing features to help you get paid faster
                </TitleAndText>
                <TitleAndText variant={'textSmall'}
                              mb={20}
                >
                        Over the past few months, we’ve added several new features to SaaS Invoicing to help any business get paid faster and streamline their collection workflows.
                </TitleAndText>
                <TitleAndText variant={'textSmall'}
                              mb={20}
                >
                        autor, data
                </TitleAndText>
            </Box>
            <Box
                borderRadius={24}
                overflow={'hidden'}
                // border={'blue 2px solid'}
                width={{_: '100%', tablet: '70%', tabletL: '47%', }}
                textAlign={'center'}
                // textAlign={{_: 'center', tabletL: 'left', }}
            >
                <StyledImg src={'/Dashboard image.svg'}  alt={"Header"} />
            </Box>
        </Box>
    );
}

export default TrendingPost;

const StyledImg = styled.img`
    width: 100%;
    border-radius: 24px;
  `