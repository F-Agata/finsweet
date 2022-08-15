import React, { useEffect } from 'react'
import Box from '../../../styles/Box'
import TitleAndText from '../../../styles/TitleAndText'
import theBestSolutionItems from './theBestSolutionItems.js'

const TheBestSolution = () => {
  const theBestSolutionItem = theBestSolutionItems.map((item) => (
    <Box
      key={item.title}
      // border={'pink 2px solid'}
      width={{ _: '100%', tabletL: '30%' }}
      mb={{ _: '20px', tabletL: '0' }}
      textAlign={'left'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'flex-start'}
    >
      <Box
        // border={'pink 2px solid'}
        width={48}
        hight={48}
        mb={20}
      >
        <img src={`/home/${item.icon}.svg`} alt={'icon'} />
      </Box>
      <Box
        // border={'green 2px solid'}
        mb={20}
        flexGrow={'1'}
      >
        <TitleAndText variant={'title3'}>{item.title}</TitleAndText>
      </Box>
      <Box>
        <TitleAndText variant={'textSmall'}>
          {item.smallDescription}
        </TitleAndText>
      </Box>
    </Box>
  ))

  return (
    <Box
      // border={'orange 2px solid'}
      p={' 0px 40px '}
      textAlign={'center'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Box
        // border={'blue 2px solid'}
        mb={34}
        maxWidth={846}
      >
        <TitleAndText
          variant={'title1'}
          p={{ _: '0px 40px ', tablet: '0px 60px' }}
        >
          We have the Best Solution for your Business
        </TitleAndText>
      </Box>
      <Box
        mb={42}
        p={'40px 40px'}
        pb={{ _: '20px', tabletL: '40px' }}
        bg={'colorLight'}
        borderRadius={24}
        width={'100%'}
        display={'flex'}
        flexDirection={{ _: 'column', tabletL: 'row' }}
        justifyContent={{ _: 'center', tabletL: 'space-between' }}
        alignItems={{ _: 'center', tabletL: 'stretch' }}
      >
        {theBestSolutionItem}
      </Box>
    </Box>
  )
}

export default TheBestSolution
