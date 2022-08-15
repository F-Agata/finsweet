import styled, { css } from 'styled-components'
import { variant, space, position, layout } from 'styled-system'

const Btn = styled.button`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 12px;
  margin: 10px;
  padding: 16px 40px;
  text-align: center;
  border: solid 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ theme }) => css`
    line-height: ${theme.lineHeight.lh6};
    font-size: ${theme.fontSizes.fs6};
  `};

  ${space};
  ${position};
  ${layout};

  ${({ theme }) =>
    variant({
      prop: 'variant',
      variants: {
        light: {
          color: 'colorPrimary',
          bg: 'colorWhite',
          borderColor: `${theme.colors.colorLight}`,
          '&:hover': {
            color: 'colorWhite',
            bg: 'colorPrimary',
            borderColor: `${theme.colors.colorPrimary}`,
          },
          '&:active': {
            color: 'colorWhite',
            bg: 'colorPrimary',
            borderColor: `${theme.colors.colorPrimary}`,
          },
        },
        dark: {
          color: 'colorWhite',
          bg: 'colorPrimary',
          borderColor: `${theme.colors.colorPrimary}`,
          '&:hover': {
            color: 'colorWhite',
            bg: 'colorBtnHover',
            borderColor: `${theme.colors.colorBtnHover}`,
          },
          '&:active': {
            color: 'colorWhite',
            bg: 'colorBtnHover',
            borderColor: `${theme.colors.colorBtnHover}`,
          },
        },
        colorLightFromTheme: {
          filter: 'drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.25))',
          color: 'colorWhite',
          bg: 'colorPrimary',
          borderColor: `${theme.colors.colorPrimary}`,
          '&:hover': {
            color: 'colorPrimary',
            bg: 'colorLight',
            borderColor: `${theme.colors.colorLight}`,
          },
          '&:active': {
            color: 'colorPrimary',
            bg: 'colorLight',
            borderColor: `${theme.colors.colorLight}`,
          },
        },
        colorBgTransparent: {
          filter: 'drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.25))',
          color: 'colorWhite',
          bg: 'colorPrimary',
          borderColor: `${theme.colors.colorPrimary}`,
          '&:hover': {
            color: 'colorPrimary',
            bg: 'transparent',
            borderColor: `${theme.colors.colorLight}`,
          },
          '&:active': {
            color: 'colorPrimary',
            bg: 'transparent',
            borderColor: `${theme.colors.colorLight}`,
          },
        },
      },
    })}
`
export default Btn
