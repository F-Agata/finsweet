import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Box from '../../../styles/Box'
import TitleAndText from '../../../styles/TitleAndText'

import FormPanel from './FormPanel'

const Form = () => {
  const [isSubmited, setIsSubmitted] = useState(false)

  const submittedForm = () => {
    setIsSubmitted(true)
  }

  useEffect(() => {
    const successInfo = setTimeout(() => setIsSubmitted(false), 5000)
    return () => clearTimeout(successInfo)
  }, [isSubmited])

  return (
    <>
      <Box
        // border={'orange 2px solid'}
        width={'100%'}
      >
        <FormPanel submittedForm={submittedForm} />
        {isSubmited && (
          <TitleAndText
            variant={'textLarge'}
            color={'colorIcon'}
            m={'20px 0'}
            textAlign={'center'}
          >
            Twoja wiadomość została wysłana. Odpowiemy na nią najszybciej jak to
            możliwe
          </TitleAndText>
        )}
      </Box>
    </>
  )
}

export default Form
