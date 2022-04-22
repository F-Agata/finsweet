import styled, { css } from "styled-components";
import { variant } from "styled-system";

const Btn = styled.button`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); 
  border-radius: 12px;
  margin: 10px;
  padding: 16px 40px;
  text-align: center;
  border: solid 2px;
  cursor: pointer;
  
  ${({ theme }) => css`
    line-height: ${theme.lineHeight.lh6};
    font-size: ${theme.fontSizes.fs6};
  `};

  ${({ theme }) =>
    variant({
      prop: 'variant',
      variants: {
        light: {
          color: "colorPrimary",
          bg: "colorWhite",
          borderColor: `${theme.colors.colorLight}`,
          '&:hover': {
            color: "colorWhite",
            bg: "colorPrimary",
            borderColor: `${theme.colors.colorPrimary}`,
          },
          '&:active': {
            color: "colorWhite",
            bg: "colorPrimary",
            borderColor: `${theme.colors.colorPrimary}`,
          },
          
        },
        dark: {
          color: "colorWhite",
          bg: "colorPrimary",
          borderColor: `${theme.colors.colorPrimary}`,
          '&:hover': {
            color: "colorWhite",
            bg: "colorBtnHover",
            borderColor: `${theme.colors.colorBtnHover}`,
          },
          '&:active': {
            color: "colorWhite",
            bg: "colorBtnHover",
            borderColor: `${theme.colors.colorBtnHover}`,
          },
        },
      },
    })
  }
`
export default Btn