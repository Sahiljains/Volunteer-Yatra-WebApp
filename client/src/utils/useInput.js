/* eslint-disable no-useless-escape */
import { useState, useCallback } from 'react'

const useInput = ({ initialValue = '', regex = /./, errorState = '', regexCheck = true }) => {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState(errorState)

  const onChange = useCallback(
    e => {
      if (e.target.value === '') setError('')
      else if (e.target.value && e.target.value.trim() === '') setError('true')
      else if (regexCheck && regex !== '' && regex.test(e.target.value)) setError('false')
      else if (regexCheck) setError('true')
      setValue(e.target.value)
    },
    [regex, regexCheck]
  )

  const reset = useCallback((val = '') => {
    setValue(val)
    setError(val)
  }, [])

  return {
    value,
    error,
    setValue,
    setError,
    reset,
    bind: {
      value,
      error,
      onChange,
    },
  }
}

export default useInput
