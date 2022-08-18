import styled, { css } from 'styled-components'

import Box from '../../styles/Box'
import Link from '../../styles/Link'
import TitleAndText from '../../styles/TitleAndText'
import Btn from '../../styles/Btn'
import useBetterMediaQuery from '../../hooks/useBetterMediaQuery'

const LinksPart = ({ menuItems }) => {
  const addBtn = useBetterMediaQuery('min-width: 1024px')

  const menuItem = menuItems.map((item) => (
    <StyledNavigationLi key={item.id}>
      <Link href={`/${item.id}`}>
        <TitleAndText variant={'textSmall'}> {item.name}</TitleAndText>
      </Link>
    </StyledNavigationLi>
  ))

  return (
    <Box
      flexGrow={'1'}
      display={'flex'}
      justifyContent={'flex-end'}
      alignItems={'center'}
    >
      <StyledNavigationUl>{menuItem}</StyledNavigationUl>

      {addBtn && (
        <Link href={`/freeTrial`}>
          <Btn variant="dark" ml={20}>
            {' '}
            Free trial
          </Btn>
        </Link>
      )}
    </Box>
  )
}

export default LinksPart

const StyledNavigationUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`

const StyledNavigationLi = styled.li`
  list-style: none;
  margin-left: 10px;
  padding: 0 10px;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    ${({ theme }) => css`
      font-weight: ${theme.fontWeights.fontBold};
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `};
  }
  :active {
    ${({ theme }) => css`
      font-weight: ${theme.fontWeights.fontBold};
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `};
    :focus {
      ${({ theme }) => css`
        font-weight: ${theme.fontWeights.fontBold};
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      `};
    }
  }
`
