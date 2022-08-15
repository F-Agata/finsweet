import React from 'react'
import styled, { css } from 'styled-components'

import Btn from '../styles/Btn'

const InputFreeTrial = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <FormStyledHome onSubmit={handleSubmit} noValidate>
      <InputStyledHome
        placeholder={'Enter your Email'}
        type={'email'}
        id={'email'}
        name={'email'}
        // value={values.email}
        // onChange={handleChange}
      ></InputStyledHome>
      <Btn
        type={'submit'}
        variant={'dark'}
        m={{ _: '5px 0px 0px 0px', mobileL: 0 }}
        position={{ mobileL: 'absolute' }}
        right={{ mobileL: '0' }}
        top={{ mobileL: '0' }}
        zIndex={{ mobileL: '2' }}
      >
        Get Free trial
      </Btn>
    </FormStyledHome>
  )
}

export default InputFreeTrial

const FormStyledHome = styled.form`
  //border: crimson 2px solid;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  @media (min-width: 568px) {
    width: 500px;
    position: relative;
  }
`

const InputStyledHome = styled.input`
  width: 100%;
  height: 60px;
  padding: 16px 22px 16px 22px;
  border-radius: 12px;
  border: 2px solid;
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.fs6};
    font-weight: ${theme.fontWeights.fontRegular};
    line-height: ${theme.lineHeight.lh6};
    border-color: ${(props) => props.theme.colors.colorPrimary};
    background-color: ${(props) => props.theme.colors.colorWhite};
    color: ${(props) => props.theme.colors.colorPrimary};
  `}
  ::placeholder {
  }
  :focus {
    //border-color: ${(props) => props.theme.colors.colorWhite};
  }
  :active {
    //border-color: ${(props) => props.theme.colors.colorWhite};
  }

  @media (min-width: 568px) {
    padding: 16px 177px 16px 22px;
  }
`
