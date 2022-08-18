import styled from 'styled-components'
import Box from '../../../styles/Box'
import TitleAndText from '../../../styles/TitleAndText'
import InputFreeTrial from '../../InputFreeTrial'

const PartFirst = () => {
  return (
    <Box
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
          p={{ _: '0px 40px ', tablet: '0px 60px' }}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <TitleAndText variant={'title1'} mb={34}>
            The Best Software to Grow your Sales and Services
          </TitleAndText>
          <TitleAndText variant={'textLarge'} mb={42}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </TitleAndText>
          <InputFreeTrial />
        </Box>
        <Box mb={42} p={{ _: '0px 40px ', tablet: '0px 40px' }}>
          <StyledImgHeader src={'/Dashboard image.svg'} alt={'Header'} />
        </Box>
      </Box>
    </Box>
  )
}

export default PartFirst

const BoxStyledGradient = styled(Box)`
  position: absolute;
  top: 0%;
  left: 60%;
  width: 510px;
  height: 510px;
  border-radius: 50%;
  background: ${(props) => props.theme.gradients.gradientBlur};
  filter: blur(100px);
`

const StyledImgHeader = styled.img`
  width: 100%;
`
