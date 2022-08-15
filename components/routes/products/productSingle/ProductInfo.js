import { useRouter } from 'next/router'
import styled, { css } from 'styled-components'
import TitleAndText from '../../../../styles/TitleAndText'
import Box from '../../../../styles/Box'
import Btn from '../../../../styles/Btn'
import Link from '../../../../styles/Link'

import productInfoItems from './productInfoItems'

const ProductInfo = ({ chosenProduct }) => {
  const router = useRouter()

  const productInfoItem = chosenProduct.moreInfo.map((oneInfo) => (
    <StyledBoxOneWorker
      key={oneInfo.icon}
      // border={'blue 2px solid'}
    >
      <Box
        // border={'blue 2px solid'}
        width={48}
        height={48}
        mb={20}
      >
        <img src={`/productSingle/${oneInfo.icon}.svg`} alt={'icon'} />
      </Box>
      <Box
        // border={'blue 2px solid'}
        // flexGrow={'1'}
        // width={"100%"}
        alignSelf={'stretch'}
      >
        <TitleAndText
          variant={'title3'}
          textAlign={{ _: 'center', tabletL: 'left' }}
          mb={20}
        >
          {oneInfo.title}
        </TitleAndText>
      </Box>
      <Box flexGrow={'2'}>
        <TitleAndText
          variant={'textLarge'}
          textAlign={{ _: 'center', tabletL: 'left' }}
        >
          {oneInfo.smallDescription}
        </TitleAndText>
      </Box>
    </StyledBoxOneWorker>
  ))

  return (
    <Box
      // border={'green 2px solid'}
      m={'0 auto'}
      width={'100%'}
      textAlign={'center'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      p={'60px 20px 80px 20px'}
    >
      <Box mb={20} maxWidth={846}>
        <TitleAndText variant={'title2'} mb={20}>
          {`Our corporate values ${chosenProduct.nameProduct}`}
        </TitleAndText>

        <TitleAndText variant={'textSmall'} mb={20}>
          Lorem ipsum dolor sit amet, ceirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua.
        </TitleAndText>
      </Box>

      <Box
        bg={'colorLight50'}
        borderRadius={24}
        p={'40px 40px'}
        display={'flex'}
        flexDirection={{ _: 'column', tabletL: 'row' }}
        justifyContent={{ _: 'center', tabletL: 'space-eleven' }}
        alignItems={{ _: 'center', tabletL: 'stretch' }}
        flexWrap={'wrap'}
      >
        {productInfoItem}
      </Box>
      <Box>
        <Link href={`/pricing`}>
          <Btn variant="dark" mt={40}>
            {' '}
            Pricing
          </Btn>
        </Link>
      </Box>
      <Box
        maxWidth={846}
        p={{ _: '0px 40px ', tablet: '0px 60px' }}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        mt={20}
      >
        {/*<Link href={`/products`}> */}
        <Btn variant={'dark'} onClick={() => router.back()}>
          Wróć do poprzedniej strony
        </Btn>
        {/*</Link>*/}
      </Box>
    </Box>
  )
}

export default ProductInfo

const StyledBoxOneWorker = styled(Box)`
  //border: 2px solid red;
  flex-grow: 1;
  margin: 0px 0;
  padding: 40px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    width: 31%;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 20px 40px 20px;
  }
`
