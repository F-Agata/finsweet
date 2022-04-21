import styled, { css } from "styled-components";

const BtnLight = styled.button`
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); 
  border-radius: 12px;
 margin: 10px;
  padding: 16px 40px;
  text-align: center;
  border: solid 2px;
  ${({ theme }) => css`
   color: ${props => props.theme.colors.colorPrimary};
    background-color: ${props => props.theme.colors.colorWhite};
    font-size: ${props => props.theme.fontSizes.fs6};
    line-height: ${props => props.theme.lineHeight.lh6};
    border-color: ${props => props.theme.colors.colorLight};
  `}
    :hover {
    ${({ theme }) => css`
  background-color: ${props => props.theme.colors.colorPrimary};
      border-color: ${props => props.theme.colors.colorPrimary};
      color: ${props => props.theme.colors.colorWhite};
    `}
}
`
export default BtnLight
