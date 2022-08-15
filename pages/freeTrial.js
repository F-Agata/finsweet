import TitleAndText from '../styles/TitleAndText'
import Box from '../styles/Box'

import styled from 'styled-components'
import InputFreeTrial from '../components/InputFreeTrial'

const FreeTrial = () => {
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
      <BoxStyledGradient />
      <Box
        zIndex={'1'}
        width={'100%'}
        // border={'yellow 2px solid'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        p={'100px 40px 0px 40px'}
      >
        <Box mb={20} maxWidth={846}>
          <TitleAndText variant={'title1'} mb={20}>
            We are proud of our products
          </TitleAndText>
          <TitleAndText variant={'textLarge'} mb={20}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </TitleAndText>
        </Box>
        <Box
          width={'100%'}
          // border={'blue 2px solid'}
          borderRadius={24}
          // p={'40px 40px'}
          display={'flex'}
          flexWrap={'wrap'}
          flexDirection={{ _: 'column', tabletL: 'row' }}
          justifyContent={{ _: 'center', tabletL: 'space-around' }}
          alignItems={'center'}
        >
          <Box
            // border={'purple 2px solid'}
            width={'325px'}
            height={'288px'}
            mb={20}
            borderRadius={24}
          >
            <StyledTrialImg
              src={`/freeTrial/man-working-from-home-5198252.png`}
              alt={'photo'}
            />
          </Box>
          <Box
            // border={'purple 2px solid'}
            width={'325px'}
            height={'288px'}
            mb={20}
            borderRadius={24}
          >
            <StyledTrialImg
              src={`/freeTrial/people-working-in-front-of-the-computer-3184357.png`}
              alt={'photo'}
            />
          </Box>
          <Box
            // border={'purple 2px solid'}
            width={'325px'}
            height={'288px'}
            mb={20}
            borderRadius={24}
          >
            <StyledTrialImg
              src={`/freeTrial/person-using-macbook-pro-3861964.png`}
              alt={'photo'}
            />
          </Box>
        </Box>
        <Box mt={20}>
          <InputFreeTrial />
        </Box>
      </Box>
    </Box>
  )
}

export default FreeTrial

const BoxStyledGradient = styled(Box)`
  position: absolute;
  top: 10%;
  left: 10%;
  width: 529px;
  height: 526px;
  border-radius: 470px;
  background: ${(props) => props.theme.gradients.gradientBlur};
  filter: blur(200px);
`

const StyledTrialImg = styled.img`
  width: 100%;
`
