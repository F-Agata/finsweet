import Box from '../../../styles/Box'
import TitleAndText from '../../../styles/TitleAndText'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const BoxSingleQuestion = ({ question, smallDescription, opened = false }) => {
  const [isOpen, setIsOpen] = useState(opened)

  return (
    <StyledBoxSingleQuestion>
      <Box
        width={'100%'}
        // border={'green 2px solid'}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        mb={20}
        // p={'20px  0 0 20px'}
      >
        <TitleAndText variant={'title4'} textAlign={'left'}>
          {question}
        </TitleAndText>
        <Box pl={40}>
          {!isOpen && (
            <StyledAiOutlinePlus onClick={() => setIsOpen(!isOpen)} />
          )}
          {isOpen && (
            <StyledAiOutlineMinus onClick={() => setIsOpen(!isOpen)} />
          )}
        </Box>
      </Box>
      {isOpen && (
        <TitleAndText variant={'textSmall'} p={'20px 40px'}>
          {smallDescription}
        </TitleAndText>
      )}
    </StyledBoxSingleQuestion>
  )
}

export default BoxSingleQuestion

const StyledBoxSingleQuestion = styled(Box)`
  border: 2px solid;
  border-color: ${(props) => props.theme.colors.colorLight};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  margin: 20px 0;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  @media (min-width: 768px) {
    margin: 0px 0px 20px 0px;
  }
`

const StyledAiOutlinePlus = styled(AiOutlinePlus)`
  width: 34px;
  height: 34px;
  ${({ theme }) => css`
    background-color: ${theme.colors.colorWhite};
    color: ${theme.colors.colorIcon};
    line-height: ${theme.lineHeight.lh4};
    font-size: ${theme.fontSizes.fs4};
    font-weight: ${theme.fontWeights.fontBold};
    transition: 0.3s;
    cursor: pointer;
  `};
  :hover {
    transform: scale(1.3, 1.3);
  }
`

const StyledAiOutlineMinus = styled(AiOutlineMinus)`
  width: 34px;
  height: 34px;
  ${({ theme }) => css`
    background-color: ${theme.colors.colorWhite};
    color: ${theme.colors.colorIcon};
    line-height: ${theme.lineHeight.lh4};
    font-size: ${theme.fontSizes.fs4};
    font-weight: ${theme.fontWeights.fontBold};
    transition: 0.3s;
    cursor: pointer;
  `};
  :hover {
    transform: scale(1.3, 1.3);
  }
`
