import React, { useState, useEffect } from 'react'

const useForm = (validationRules, submittedForm) => {
  const [values, setValues] = useState({
    username: '',
    company: '',
    email: '',
    message: '',
    subject: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { type, name, value } = e.target

    if (type === 'text' || type === 'email' || type === 'textarea') {
      setValues({
        ...values,
        [name]: value,
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validationRules(values))
    setIsSubmitting(true)
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submittedForm()
      setValues({
        username: '',
        company: '',
        email: '',
        message: '',
        subject: '',
      })
      setIsSubmitting(false)
    }
  })

  return { values, errors, handleChange, handleSubmit }
}

export default useForm
