import React, {useState} from "react";
import styled, { css } from "styled-components";
import { useMediaQuery } from 'react-responsive'

import {GrClose} from "react-icons/gr";

import Logo from '../Logo'

import Box from '../../styles/Box'
import Btn from "../../styles/Btn";
import LinksPart from "./LinksPart";

const NavSmall = ( {menuItems, setSmallNavIsOpen, changeNav} ) => {

    // const [smallNavIsOpen, setSmallNavIsOpen] = useState(false)

    // const modificationMenuSize = useMediaQuery({ query: `${props => props.theme.breakpoints.tablet} `})

    // const changeNav = () => {
    //     setSmallNavIsOpen(!smallNavIsOpen)
    // }

    const menuItem = menuItems.map((item) => (
        <StyledNavigationLi key={item.id}>
            <a href={`#${item.id}`} onClick={changeNav}>{item.name}</a>
            {/*<NavigationLink href={`#${item.id}`} onClick={changeMenu} >{item.name}</NavigationLink>*/}
        </StyledNavigationLi>
    ));

    return (
        <Box position={'fixed'}
             top={0}
             left={0}
             width={'100%'}
             height={'100vh'}
             zIndex={'999'}
        >
            <Box onClick={changeNav}
                 position={'fixed'}
                 top={0}
                 left={0}
                 bg={'colorWhite'}
                 opacity={'80%'}
                 width={'100%'}
                 height={'100vh'}
             />
           <Box position={'fixed'}
                top={0}
                left={0}
                bg={'colorWhite'}
                width={'100%'}
                p={'40px'}
                borderBottom={'1px solid '}
                borderColor={'colorLightFooter'}
                >
             <Box display={'flex'}
                 justifyContent={'space-between'}
                 alignItems={'center'}
                 pb={40}
             >
                <Logo color={"dark"}/>
                <StyledGrClose onClick={changeNav}/>
             </Box>
            <Box  pb={40}>
                {menuItem}
            </Box>
            <Btn variant="dark" onClick={changeNav} ml={0}> Free trial</Btn>
        </Box>
        </Box>
    );
};

export default NavSmall;

const StyledGrClose = styled(GrClose)`
  ${({ theme }) => css`
    background-color: ${theme.colors.colorWhite};
    color: ${theme.colors.colorPrimary};
    line-height: ${theme.lineHeight.lh4};
    font-size: ${theme.fontSizes.fs4};
    font-weight: ${theme.fontWeights.fontBold};
    transition: 0.3s;
  `};
  :hover  {
    transform: scale(1.3, 1.3);
  }
`
const StyledNavigationLi = styled.li`
    //border: lightcoral 2px solid;
    padding: 20px 0;
   text-decoration: none;
  cursor: pointer;
  transition: 0.3s;
  :hover a {
    ${({ theme }) => css`
    //color: ${theme.colors.colorSecondary};
    font-weight: ${theme.fontWeights.fontBold}; 
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
     
  `};
   }
  }
`
