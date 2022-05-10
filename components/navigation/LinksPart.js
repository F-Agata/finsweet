
import styled, { css } from "styled-components";
import { useMediaQuery } from 'react-responsive'

import Box from "../../styles/Box";
import Link from "../../styles/Link";
import TitleAndText from "../../styles/TitleAndText";
import Btn from "../../styles/Btn";


const LinksPart = ( {menuItems} ) => {

    const addBtn = useMediaQuery({ query: '(min-width: 1024px)'})

    const menuItem = menuItems.map((item) => (
        <StyledNavigationLi key={item.id}>
            <Link href={`/${item.id}`}>
                <TitleAndText variant={'textSmall'}> {item.name}</TitleAndText>
            </Link>
        </StyledNavigationLi>
    ));

    return (
        <Box
            // border={'orange 2px solid'}
            flexGrow={'1'}
            display={'flex'}
            justifyContent={'flex-end'}
            alignItems={'center'}
        >
            <StyledNavigationUl >
                {menuItem}
            </StyledNavigationUl>

            {addBtn &&  <Link href={`/freeTrial`}><Btn variant="dark" ml={20}> Free trial</Btn></Link>}
        </Box>
    );
};

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
  list-style: none;
padding-left: 20px;
   cursor: pointer;
  transition: 0.3s;
  :hover p {
    ${({ theme }) => css`
    font-weight: ${theme.fontWeights.fontBold}; 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `};
  }
}
`
