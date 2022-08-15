import TitleAndText from '../../../styles/TitleAndText'
import Box from '../../../styles/Box'
import BoxColorFulBg from '../../../styles/BoxColorFulBg'

import analyzeItems from './analyzeItems'

const Analyze = () => {
  const analyzeItem = analyzeItems.map((item) => (
    <Box
      key={item.title}
      // border={'pink 2px solid'}
      p={'0px 0px 20px 0'}
      display={'flex'}
      justifyContent={'flex-start'}
      textAlign={'left'}
    >
      <Box mr={20} width={72}>
        <img src={`/aboutUs/${item.icon}.png`} alt={'icon'} />
      </Box>

      <Box>
        <TitleAndText variant={'title5'} mb={10}>
          {item.title}
        </TitleAndText>
        <TitleAndText variant={'textLarge'} mb={10}>
          {item.smallDescription}
        </TitleAndText>
      </Box>
    </Box>
  ))

  return (
    <Box
      // border={'orange 2px solid'}
      display={'flex'}
      flexDirection={{ _: 'column', tablet: 'row' }}
      justifyContent={{ _: 'center', tablet: 'space-between' }}
      alignItems={'flex-start'}
      p={'0 40px 40px 40px'}
    >
      <Box width={{ _: '100%', tablet: '47%' }}>
        <BoxColorFulBg mb={40}>
          <TitleAndText variant={'textColorful'} colorFulBg>
            Discover More
          </TitleAndText>
        </BoxColorFulBg>
        <TitleAndText variant={'title3'} mb={40} textAlign={'left'}>
          Analyze your sales and marketing leads
        </TitleAndText>
        <TitleAndText variant={'textSmall'} mb={40} textAlign={'left'}>
          Lorem Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua invidunt ut labore. ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut
          labore.
        </TitleAndText>
      </Box>
      <Box width={{ _: '100%', tablet: '47%' }}>{analyzeItem}</Box>
    </Box>
  )
}

export default Analyze
