
import styled, { css } from "styled-components";
import React, {useState, useEffect} from "react";


import Box from "../../styles/Box";
import Link from "../../styles/Link";
import TitleAndText from "../../styles/TitleAndText";


const LinksPart = ( {menuItems} ) => {

    const menuItem = menuItems.map((item) => (
        <StyledNavigationLi key={item.id}>
            <Link href={`${item.id}`}>
                <TitleAndText variant={'textSmall'}> {item.name}</TitleAndText>
            </Link>
            {/*<a href={`${item.id}`}>{item.name}</a>*/}
            {/*<NavigationLink href={`#${item.id}`} onClick={changeMenu} >{item.name}</NavigationLink>*/}
        </StyledNavigationLi>
    ));

    return (
        <Box
            border={'orange 2px solid'}
                flexGrow={'1'}
            // justifySelfu={'flex-end'}
        >
            <StyledNavigationUl >
                {menuItem}
            </StyledNavigationUl>
        </Box>
    );
}

export default LinksPart;

const StyledNavigationUl = styled.ul`
  //border: olivedrab 2px solid;
  display: flex;
  justify-content: flex-end;
  @media (min-width: 1024px) {
   justify-content: space-between;
  }
`

const StyledNavigationLi = styled.li`
  //border: blueviolet 2px solid;
padding-left: 10px;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;
  :hover a {
    ${({ theme }) => css`
    font-weight: ${theme.fontWeights.fontBold}; 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `};
  }
}
`
