import React, {useState} from "react";
import styled, { css } from "styled-components";
import { useMediaQuery } from 'react-responsive'

import {GrClose} from "react-icons/gr";

import Logo from '../Logo'

import Box from '../../styles/Box'
import Btn from "../../styles/Btn";
import LinksPart from "./LinksPart";

const NavSmall = ( {menuItems, setSmallNavIsOpen, changeNav} ) => {

    const [smallNavIsOpen, setSmallNavIsOpen] = useState(false)

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
        <Box position={'absolute'}
             top={0}
             left={0}
             bg={'colorWhite'}
             width={'100%'}
             // minHeight={'100vh'}
             p={'40px'}
        >
            <Box display={'flex'}
                 justifyContent={'space-between'}
                 alignItems={'center'}
                 pb={40}
             >
                <Logo color={"dark"}/>
                <StyledGrClose onClick={changeNav}/>
            </Box>
            <Box>
                {menuItem}
            </Box>
            <Btn variant="dark" onClick={changeNav}> Free trial</Btn>
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
  `};
`
const StyledNavigationLi = styled.li`
    //border: lightcoral 2px solid;
    padding: 20px 0;
   text-decoration: none;
  cursor: pointer;
  transition: 0.3s;
  :hover a {
    color: ${(props) => props.theme.colors.colorSecondary};
  }
  :hover {
    ::before {
      bottom: -9px;
    }
  }
`
