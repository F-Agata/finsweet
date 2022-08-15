import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'

import useForm from './useForm'
import validationRules from './validationRules'

import Box from '../../../styles/Box'
import Btn from '../../../styles/Btn'
import TitleAndText from '../../../styles/TitleAndText'

function FormPanel({ submittedForm }) {
  const { values, errors, handleChange, handleSubmit } = useForm(
    validationRules,
    submittedForm,
  )

  return (
    <WrappPanel onSubmit={handleSubmit} noValidate>
      <Box
        // border={'purple 2px solid'}
        display={'flex'}
        flexDirection={{ _: 'column', tablet: 'row' }}
        justifyContent={{ _: 'center', tablet: 'space-between' }}
        flexWrap={'wrap'}
        alignItems={{ _: 'center', tablet: 'flex-start' }}
      >
        <Box width={{ _: '100%', tablet: '47%' }} mb={10}>
          <InputF
            type={'text'}
            id={'username'}
            name={'username'}
            placeholder={'write your name...'}
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && (
            <TitleAndText
              variant={'textLarge'}
              color={'colorIcon'}
              m={'10px 0'}
              textAlign={'right'}
            >
              {errors.username}
            </TitleAndText>
          )}
        </Box>
        <Box width={{ _: '100%', tablet: '47%' }} mb={10}>
          <InputF
            type={'text'}
            id={'company'}
            name={'company'}
            placeholder={'write company name...'}
            value={values.company}
            onChange={handleChange}
          />
          {errors.company && (
            <TitleAndText
              variant={'textLarge'}
              color={'colorIcon'}
              m={'10px 0'}
              textAlign={'right'}
            >
              {errors.company}
            </TitleAndText>
          )}
        </Box>
      </Box>
      <Box
        // border={'purple 2px solid'}
        mb={10}
      >
        <InputF
          type={'email'}
          id={'email'}
          name={'email'}
          placeholder={'write e-mail...'}
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && (
          <TitleAndText
            variant={'textLarge'}
            color={'colorIcon'}
            m={'10px 0'}
            textAlign={'right'}
          >
            {errors.email}
          </TitleAndText>
        )}
      </Box>
      <Box mb={10}>
        <InputF
          type={'text'}
          id={'subject'}
          name={'subject'}
          placeholder={'write subject...'}
          value={values.subject}
          onChange={handleChange}
        />
        {errors.subject && (
          <TitleAndText
            variant={'textLarge'}
            color={'colorIcon'}
            m={'10px 0'}
            textAlign={'right'}
          >
            {errors.subject}
          </TitleAndText>
        )}
      </Box>
      <Box mb={10}>
        <TextAreaF
          type={'text'}
          id={'message'}
          name={'message'}
          placeholder={'write message...'}
          value={values.message}
          onChange={handleChange}
        />
        {errors.message && (
          <TitleAndText
            variant={'textLarge'}
            color={'colorIcon'}
            m={'10px 0'}
            textAlign={'right'}
          >
            {errors.message}
          </TitleAndText>
        )}
      </Box>
      <Btn variant={'dark'} type={'submit'} m={0}>
        Send
      </Btn>
    </WrappPanel>
  )
}
export default FormPanel

const WrappPanel = styled.form`
  width: 100%;
  //border: chartreuse 2px solid;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`

const InputF = styled.input`
  width: 100%;
  line-height: 24px;
  flex-grow: 1;
  border: ${(props) => props.theme.colors.colorLight50} 1px solid;
  border-radius: 8px;
  padding: 20px 20px;

  ${({ theme }) => css`
    background-color: ${theme.colors.colorWhite};
    font-size: ${theme.fontSizes.fs6};
    font-weight: ${theme.fontWeights.fontRegular};
    color: ${theme.colors.colorPrimary};
    line-height: ${theme.lineHeight.lh6}; ;
  `};

  ::placeholder {
    ${({ theme }) => css`
      font-size: ${theme.fontSizes.fs6};
      font-weight: ${theme.fontWeights.fontRegular};
      color: ${theme.colors.colorPrimary};
      line-height: ${theme.lineHeight.lh6}; ;
    `}
  }
  :focus {
    border: ${(props) => props.theme.colors.colorIcon} 1px solid;
  }
`

const TextAreaF = styled.textarea`
  width: 100%;
  min-height: 150px;
  min-width: 100px;
  padding: 20px 20px;
  border: ${(props) => props.theme.colors.colorLight50} 1px solid;
  border-radius: 8px;

  ${({ theme }) => css`
    background-color: ${theme.colors.colorWhite};
    font-size: ${theme.fontSizes.fs6};
    font-weight: ${theme.fontWeights.fontRegular};
    color: ${theme.colors.colorPrimary};
    line-height: ${theme.lineHeight.lh6}; ;
  `};

  ::placeholder {
    ${({ theme }) => css`
      font-size: ${theme.fontSizes.fs6};
      font-weight: ${theme.fontWeights.fontRegular};
      color: ${theme.colors.colorPrimary};
      line-height: ${theme.lineHeight.lh6}; ;
    `}
  }
  :focus {
    border: ${(props) => props.theme.colors.colorIcon} 1px solid;
  }
`
