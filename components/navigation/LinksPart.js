import  Link  from 'next/link';
import styled, { css } from "styled-components";
import React, {useState, useEffect} from "react";


import Box from "../../styles/Box";


const LinksPart = ( {menuItems} ) => {
    useEffect(()=>{console.log(menuItems.menuItems)},[])


    const menuItem = menuItems.map((item) => (
        <StyledNavigationLi key={item.id}>
            <a href={`#${item.id}`}>{item.name}</a>
            {/*<NavigationLink href={`#${item.id}`} onClick={changeMenu} >{item.name}</NavigationLink>*/}
        </StyledNavigationLi>
    ));

    return (
        <Box >
            <ul>
                {menuItem}
            </ul>
        </Box>
    );
}

export default LinksPart;



const StyledNavigationLi = styled.li`
    border: greenyellow 2px solid;
`

