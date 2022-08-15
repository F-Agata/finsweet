import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import { GrClose } from 'react-icons/gr'

import Logo from '../Logo'

import Box from '../../styles/Box'
import Btn from '../../styles/Btn'
import Link from '../../styles/Link'
import TitleAndText from '../../styles/TitleAndText'

const NavSmall = ({ menuItems, setSmallNavIsOpen, changeNav }) => {
  const menuItem = menuItems.map((item) => (
    <StyledNavigationLi key={item.id}>
      <Link href={`/${item.id}`} onClick={changeNav}>
        <TitleAndText variant={'textSmall'}> {item.name}</TitleAndText>
      </Link>
    </StyledNavigationLi>
  ))

  return (
    <Box
      position={'fixed'}
      top={0}
      left={0}
      width={'100%'}
      height={'100vh'}
      zIndex={'999'}
    >
      <Box
        onClick={changeNav}
        position={'fixed'}
        top={0}
        left={0}
        bg={'colorWhite'}
        opacity={'80%'}
        width={'100%'}
        height={'100vh'}
      />
      <Box
        position={'fixed'}
        top={0}
        left={0}
        bg={'colorWhite'}
        width={'100%'}
        p={'40px'}
        borderBottom={'1px solid '}
        borderColor={'colorLightFooter'}
      >
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          pb={40}
        >
          <Logo color={'dark'} />
          <StyledGrClose onClick={changeNav} />
        </Box>

        <StyledNavigationUl>{menuItem}</StyledNavigationUl>
        <Link href={`/freeTrial`}>
          <Btn variant="dark" onClick={changeNav} ml={0}>
            {' '}
            Free trial
          </Btn>
        </Link>
      </Box>
    </Box>
  )
}

export default NavSmall

const StyledGrClose = styled(GrClose)`
  ${({ theme }) => css`
    background-color: ${theme.colors.colorWhite};
    color: ${theme.colors.colorPrimary};
    line-height: ${theme.lineHeight.lh4};
    font-size: ${theme.fontSizes.fs4};
    font-weight: ${theme.fontWeights.fontBold};
    transition: 0.3s;
    cursor: pointer;
  `};
  :hover {
    transform: scale(1.3, 1.3);
  }
`

const StyledNavigationUl = styled.ul`
  //border: green 2px solid;
  padding-bottom: 40px;
  //text-decoration: none;
`

const StyledNavigationLi = styled.li`
    //border: lightcoral 2px solid;
    padding: 20px 0;
   //text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.3s;
   :hover p {
    //display: inline;
    ${({ theme }) => css`
      //color: ${theme.colors.colorSecondary};
      font-weight: ${theme.fontWeights.fontBold};
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `};
   }
  }
`
