import React from 'react'
import styled, { css } from 'styled-components'

import Btn from '../../styles/Btn'
import Box from '../../styles/Box'

const InputFooterPart = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <FormStyledFooter onSubmit={handleSubmit} noValidate>
      <InputStyledFooter
        placeholder={'Enter your Email'}
        type={'email'}
        id={'email'}
        name={'email'}
        // value={values.email}
        // onChange={handleChange}
      ></InputStyledFooter>
      <Btn
        type={'submit'}
        variant={'light'}
        ml={0}
        mr={0}
        position={'absolute'}
        right={'0'}
        zIndex={'2'}
      >
        Subscribe
      </Btn>
    </FormStyledFooter>
  )
}

export default InputFooterPart

const FormStyledFooter = styled.form`
  //border: crimson 2px solid;
  flex-grow: 1;
  width: 360px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  margin-top: 20px;
  @media (min-width: 768px) {
    width: 450px;
    margin-top: 0px;
  }
`

const InputStyledFooter = styled.input`
  flex-grow: 1;
  width: 100%;
  height: 60px;
  padding: 16px 177px 16px 22px;
  border-radius: 12px;
  border: 2px solid;
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.fs6};
    font-weight: ${theme.fontWeights.fontRegular};
    line-height: ${theme.lineHeight.lh6};
    border-color: ${(props) => props.theme.colors.colorBtnHover};
    background-color: ${(props) => props.theme.colors.colorBtnHover};
    color: ${(props) => props.theme.colors.colorWhite};
  `}
  ::placeholder {
  }
  :focus {
    //border-color: ${(props) => props.theme.colors.colorWhite};
  }
  :active {
    //border-color: ${(props) => props.theme.colors.colorWhite};
  }
`
