import styled from 'styled-components'

import Box from '../../../styles/Box'
import TitleAndText from '../../../styles/TitleAndText'
import GetTheBestList from './GetTheBestList'

const GetTheBest = () => {
  return (
    <Box
      m={'0 auto'}
      pt={100}
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
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box
          maxWidth={846}
          textAlign={'center'}
          mb={{ _: '40px', tabletL: '0px' }}
          p={'0px 40px'}
        >
          <TitleAndText variant={'title2'} mb={24}>
            Get the best out of your company with our service
          </TitleAndText>
        </Box>
        <Box
          bg={'rgba(255, 255, 255, 0.69)'}
          borderTopRightRadius={'67px'}
          mr={40}
          p={'60px 40px 20px 40px'}
        >
          <GetTheBestList />
        </Box>
      </Box>
    </Box>
  )
}

export default GetTheBest

const BoxStyledGradient = styled(Box)`
  position: absolute;
  bottom: 0%;
  right: 0%;
  width: 1689px;
  height: 1917px;
  border-radius: 700px;
  background: ${(props) => props.theme.gradients.gradientBlur};
  filter: blur(200px);
`
