import React, { useState } from 'react'
import { useAppSelector } from '../app/hooks'
import { textSelector } from '../features/text/textSlice'

const Output = () => {
  // const [textState, setTextState] = useState("")
  const text = useAppSelector(textSelector)
  return (
    <div>This is state: {text}</div>
  )
}

export default Output