import styled, { css } from 'styled-components'
import TitleAndText from '../../../styles/TitleAndText'
import Box from '../../../styles/Box'
import Link from '../../../styles/Link'
import Btn from '../../../styles/Btn'
import TrendingPost from './TrendingPost'

const BlogHeader = ({ listPostsItems, listLinksToImg }) => {
  return (
    <Box
      // border={'orange 2px solid'}
      m={'0 auto'}
      p={{ _: '100px 0px 40px 0px', tablet: '150px 0px 40px 0px' }}
      textAlign={'center'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignContent={'center'}
      alignItems={'center'}
      position={'relative'}
    >
      <BoxStyledGradient1 />
      <BoxStyledGradient2 />
      <Box
        zIndex={'1'}
        // border={'yellow 2px solid'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box
          maxWidth={846}
          p={{ _: '0px 40px ', tablet: '0px 60px' }}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <TitleAndText variant={'title1'} mb={34}>
            Read our latest blogs
          </TitleAndText>
          <TitleAndText variant={'textLarge'} mb={42}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </TitleAndText>
        </Box>
        <Box mb={42} p={{ _: '0px 40px ', tablet: '0px 40px' }}>
          <TrendingPost
            listPostsItems={listPostsItems}
            listLinksToImg={listLinksToImg}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default BlogHeader

const BoxStyledGradient1 = styled(Box)`
  position: absolute;
  top: 40%;
  left: -10%;
  width: 446px;
  height: 446px;
  border-radius: 488px;
  background: ${(props) => props.theme.gradients.gradientBlur};
  filter: blur(100px);
`
const BoxStyledGradient2 = styled(Box)`
  position: absolute;
  top: 0%;
  left: 60%;
  width: 510px;
  height: 510px;
  border-radius: 600px;
  background: ${(props) => props.theme.gradients.gradientBlur};
  filter: blur(100px);
`
