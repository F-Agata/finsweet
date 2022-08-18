import styled from 'styled-components'

import Btn from '../../../styles/Btn'
import Box from '../../../styles/Box'
import Link from '../../../styles/Link'
import TitleAndText from '../../../styles/TitleAndText'

const ProductsHeader = () => {
  return (
    <Box
      m={'0 auto'}
      p={{ _: '100px 0px 40px 0px', tabletL: '150px 0px 40px 0px' }}
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
        flexDirection={{ _: 'column', tabletL: 'row' }}
        justifyContent={{ _: 'center', tabletL: 'space-between' }}
        alignItems={'center'}
        p={'40px 40px 40px 40px'}
      >
        <Box
          width={{ _: '100%', tabletL: '47%' }}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'flex-start'}
          textAlign={'left'}
          mb={{ _: '40px', tabletL: '0px' }}
        >
          <TitleAndText variant={'title1'} mb={24}>
            Grow your Sales and Services
          </TitleAndText>
          <TitleAndText variant={'textLarge'} mb={32}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </TitleAndText>
          <Box
            display={'flex'}
            justifyContent={'flex-start'}
            alignItems={'center'}
          >
            <Link href={`/#`}>
              <Btn variant={'colorBgTransparent'} m={0}>
                {' '}
                Get started
              </Btn>
            </Link>
            <Link href={`/contact`}>
              <Btn variant={'colorBgTransparent'}> Contact us</Btn>
            </Link>
          </Box>
        </Box>
        <Box width={{ _: '100%', tabletL: '47%' }}>
          <StyledImgHeader src={'/Dashboard image.svg'} alt={'Header'} />
        </Box>
      </Box>
    </Box>
  )
}

export default ProductsHeader

const BoxStyledGradient = styled(Box)`
  position: absolute;
  top: -10%;
  left: 50%;
  width: 555px;
  height: 555px;
  border-radius: 600px;
  background: ${(props) => props.theme.gradients.gradientBlur};
  filter: blur(150px);
`

const StyledImgHeader = styled.img`
  width: 100%;
`
