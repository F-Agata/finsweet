import TitleAndText from '../../../../styles/TitleAndText'
import Box from '../../../../styles/Box'
import BoxColorFulBg from '../../../../styles/BoxColorFulBg'

const Product2ColorfulTitle = () => {
  return (
    <Box
      width={'100%'}
      bg={'colorLight50'}
      display={'flex'}
      flexDirection={{ _: 'column', tablet: 'row' }}
      justifyContent={{ _: 'center', tablet: 'space-between' }}
      alignItems={'stretch'}
      p={'60px 40px'}
    >
      <Box
        // border={'green 2px solid'}
        width={{ _: '100%', tablet: '47%' }}
        m={{ _: '0px 0px 40px 0px', tablet: '0px 0px 0px 0px' }}
        display={'flex'}
        flexDirection={'column'}
      >
        <BoxColorFulBg mb={20}>
          <TitleAndText variant={'textColorful'} colorFulBg>
            Our Goals
          </TitleAndText>
        </BoxColorFulBg>
        <TitleAndText variant={'title2'} mb={20}>
          To upscale your business to the next level
        </TitleAndText>
        <TitleAndText variant={'textLarge'} mb={20}>
          Lorem ipsum dolor sit amLorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum.et, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua.
        </TitleAndText>
      </Box>
      <Box
        // border={'green 2px solid'}
        width={{ _: '100%', tablet: '47%' }}
        m={{ _: '0px 0px 40px 0px', tablet: '0px 0px 0px 0px' }}
        display={'flex'}
        flexDirection={'column'}
      >
        <BoxColorFulBg mb={20}>
          <TitleAndText variant={'textColorful'} colorFulBg>
            Our Vision
          </TitleAndText>
        </BoxColorFulBg>
        <TitleAndText variant={'title2'} mb={20}>
          To provide solutions for growing companies
        </TitleAndText>
        <TitleAndText variant={'textLarge'} mb={20}>
          Lorem ipsum invidunt ut labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo dolores et ea rebum.et,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua.
        </TitleAndText>
      </Box>
    </Box>
  )
}

export default Product2ColorfulTitle
