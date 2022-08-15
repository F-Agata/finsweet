import React, { useState } from 'react'
import styled from 'styled-components'
import pricingItems from '../components/routes/pricing/pricingItems'
import TitleAndText from '../styles/TitleAndText'
import Box from '../styles/Box'
import OneOptionOnePrice from '../components/routes/pricing/OneOptionOnePrice'
import ChoiceMonthlyYearly from '../components/routes/pricing/ChoiceMonthlyYearly'
import BtnsChoiceProduct from '../components/BtnsChoiceProduct'
import products from '../components/routes/products/productSingle/productInfoItems'

const Pricing = ({ productInfoItems }) => {
  const [isChoiceMonthly, setIsChoiceMonthly] = useState(false)
  const [isChoiceYearly, setIsChoiceYearly] = useState(true)

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
            Pricing plans that suit you
          </TitleAndText>
          <TitleAndText variant={'textLarge'} mb={42}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </TitleAndText>
        </Box>
        <Box>
          <ChoiceMonthlyYearly
            setIsChoiceMonthly={setIsChoiceMonthly}
            setIsChoiceYearly={setIsChoiceYearly}
          />
        </Box>
        <Box p={'0px 40px 40px 40px'}>
          <OneOptionOnePrice
            pricingItems={pricingItems}
            isChoiceMonthly={isChoiceMonthly}
            isChoiceYearly={isChoiceYearly}
          />
        </Box>
        <BtnsChoiceProduct productInfoItems={productInfoItems} />
      </Box>
    </Box>
  )
}

export default Pricing

export async function getStaticProps(context) {
  // const productInfoItems = products
  let productInfoItems
  // console.log(productInfoItems, "productInfoItems")

  await fetch('http://localhost:4000/data')
    .then((res) => res.json())
    .then((data) => {
      // console.log('data', data)
      productInfoItems = data
    })
    .catch((err) => console.log(err))

  return {
    props: { productInfoItems: productInfoItems }, // will be passed to the page component as props
  }
}

const BoxStyledGradient1 = styled(Box)`
  position: absolute;
  top: 20%;
  left: 0%;
  width: 656px;
  height: 656px;
  border-radius: 50%;
  background: ${(props) => props.theme.gradients.gradientBlur};
  filter: blur(300px);
  @media (min-width: 1024px) {
    top: 20%;
    left: -20%;
    width: 556px;
    height: 556px;
  }
`

const BoxStyledGradient2 = styled(Box)`
  position: absolute;
  width: 860px;
  height: 890px;
  top: 66%;
  left: 30%;
  border-radius: 50%;
  background: ${(props) => props.theme.gradients.gradientBlur};
  filter: blur(300px);
  @media (min-width: 1024px) {
    top: 30%;
    left: 40%;
    width: 660px;
    height: 690px;
  }
`
