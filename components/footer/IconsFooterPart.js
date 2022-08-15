import React from 'react'
import styled, { css } from 'styled-components'

import Box from '../../styles/Box'
import TitleAndText from '../../styles/TitleAndText'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const IconsFooterPart = () => {
  return (
    <Box
      mt={15}
      // border={'orange 2px solid'}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={{ _: 'center', tabletL: 'center' }}
      width={'100%'}
      alignSelf={'flex-end'}
      flexDirection={{ _: 'column', tabletL: 'row' }}
    >
      <Box
        width={{ _: '100%', tabletL: '33%', laptop: '35%' }}
        bg={'colorWhite'}
        opacity={'50%'}
        height={1}
      />
      <Box
        width={{ _: '100%', mobileL: '50%', tabletL: '30%', laptop: '25%' }}
        p={{ _: '4px 0px ', tabletL: '0' }}
        display={'flex'}
        justifyContent={'space-between'}
        // border={'red 2px solid'}
      >
        <TitleAndText
          fontSize={'12px'}
          lineHeight={'18px'}
          color={'colorWhite'}
          opacity={'50%'}
        >
          {' '}
          © Copyright Finsweet 2022{' '}
        </TitleAndText>
        <StyledFaFacebook />
        <StyledFaTwitter />
        <StyledFaInstagram />
      </Box>
      <Box
        width={{ _: '100%', tabletL: '33%', laptop: '35%' }}
        bg={'colorWhite'}
        opacity={'50%'}
        height={1}
      />
    </Box>
  )
}

export default IconsFooterPart

const StyledFaFacebook = styled(FaFacebook)`
  font-size: 20px;
  opacity: 50%;
  color: ${(props) => props.theme.colors.colorWhite};
`

const StyledFaTwitter = styled(FaTwitter)`
  font-size: 20px;
  opacity: 50%;
  color: ${(props) => props.theme.colors.colorWhite};
`

const StyledFaInstagram = styled(FaInstagram)`
  font-size: 20px;
  opacity: 50%;
  color: ${(props) => props.theme.colors.colorWhite};
`
