import { useState } from 'react'
import { setCookie } from '../utils/cookies'

export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState<number>(initialValue)
  const [step, setStep] = useState<number>(1)

  const increment = (value: number = 1, name: string = ""): void => {
    setCookie(name, (count + value).toString())
    setCount((prevCount) => prevCount + value)
  }
  
  const decrement = (value: number = 1, name: string = ""): void => {
    setCookie(name, (count - value).toString())
    setCount((prevCount) => prevCount - value)
  }

  return { count, setCount, increment, decrement, step, setStep, name: "" }
}