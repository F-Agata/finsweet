import React from 'react'
import styled, { css } from 'styled-components'

import TitleAndText from '../styles/TitleAndText'
import Box from '../styles/Box'
import Link from '../styles/Link'
import Btn from '../styles/Btn'

import ContactPartForm from '../components/routes/contact/ContactPartForm'
import ContactPartInfo from '../components/routes/contact/ContactPartInfo'

const Contact = () => {
  return (
    <Box
      // border={'orange 2px solid'}
      width={'100%'}
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
        // border={'yellow 2px solid'}
        display={'flex'}
        width={'100%'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        p={'40px 40px 40px 40px'}
      >
        <Box mb={20} maxWidth={846}>
          <TitleAndText variant={'title1'} mb={40}>
            Get in touch with us
          </TitleAndText>
        </Box>

        <Box
          bg={'colorLight50'}
          borderRadius={24}
          width={'100%'}
          p={'40px 40px'}
          display={'flex'}
          flexDirection={{ _: 'column', tabletL: 'row' }}
          justifyContent={{ _: 'center', tabletL: 'space-between' }}
          alignItems={{ _: 'center', tabletL: 'stretch' }}
        >
          <ContactPartForm />
          <ContactPartInfo />
        </Box>
      </Box>
    </Box>
  )
}

export default Contact

const BoxStyledGradient = styled(Box)`
  position: absolute;
  top: 10%;
  left: -10%;
  width: 755px;
  height: 755px;
  border-radius: 490px;
  background: ${(props) => props.theme.gradients.gradientBlur};
  filter: blur(100px);
`
