import styled, { css } from 'styled-components'

import TitleAndText from '../../../styles/TitleAndText'
import Box from '../../../styles/Box'
import BoxColorFulBg from '../../../styles/BoxColorFulBg'

import chartsItems from './chartsItems'

const OneCharts = () => {
  const chartItem = chartsItems.map((item, index) => {
    let changeOrder

    if (index % 2 !== 0) {
      changeOrder = 1
    } else {
      changeOrder = 0
    }

    return (
      <Box
        key={item.img}
        // border={'pink 2px solid'}
        p={'40px 40px 40px 40px'}
        display={'flex'}
        flexDirection={{ _: 'column', tabletL: 'row' }}
        justifyContent={{ _: 'center', tabletL: 'space-between' }}
        alignItems={{ _: 'center', tabletL: 'center' }}
      >
        <Box
          // border={'blue 2px solid'}
          width={{ _: '100%', tabletL: '47%' }}
          order={{ _: '0', tabletL: `${changeOrder}` }}
          // order={`${changeOrder}`}
        >
          <BoxColorFulBg mb={20}>
            <TitleAndText variant={'textColorful'} colorFulBg>
              {item.titleBgColorful}
            </TitleAndText>
          </BoxColorFulBg>
          <TitleAndText
            variant={'title2'}
            mb={20}
            textAlign={{ _: 'center', tabletL: 'left' }}
          >
            {item.title}
          </TitleAndText>
          <TitleAndText
            variant={'textSmall'}
            mb={20}
            textAlign={{ _: 'center', tabletL: 'left' }}
          >
            {item.smallDescription}
          </TitleAndText>
        </Box>

        <Box
          // border={'blue 2px solid'}
          width={{ _: '100%', tablet: '70%', tabletL: '47%' }}
        >
          <StyledChartImg src={`/products/${item.img}.png`} alt={'chart'} />
        </Box>
      </Box>
    )
  })

  return <Box>{chartItem}</Box>
}

export default OneCharts

const StyledChartImg = styled.img`
  width: 100%;
`
