import styled, { css } from "styled-components";
import TitleAndText from "../../../styles/TitleAndText";
import Box from "../../../styles/Box";
import Link from "../../../styles/Link"



const TrendingPost = () => {

    return (
        <Box
            bg={'colorLight50'}
            borderRadius={24}
            p={'40px 40px'}
            display={'flex'}
            flexDirection={{_: 'column', tabletL: 'row', }}
            justifyContent={{_: 'center', tabletL: 'space-eleven', }}
            alignItems={{_: 'center', tabletL: 'stretch', }}
        >
            <Box>

            </Box>
            <Box>
                <StyledImg src={'/Dashboard image.svg'}  alt={"Header"} />
            </Box>
        </Box>
    );
}

export default TrendingPost;

const StyledImg = styled.img`
    width: 100%;
  `