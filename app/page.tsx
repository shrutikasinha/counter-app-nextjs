'use client'

import { useEffect } from 'react'
import Counter from './components/Counter'
import DarkModeToggle from './components/DarkModeToggle'
import { useThemeContext } from './contexts/ThemeContext'
import { useCounter } from './hooks/useCount'
import { getCookie } from './utils/cookies'

const defaultCount = 0 

export default function Home() {
  const { isDarkMode, toggleDarkMode } = useThemeContext()
  const { count, increment, decrement, setCount, step, setStep } = useCounter(defaultCount)
  const { count: count2, increment: increment2, decrement: decrement2, setCount: setCount2, step: step2, setStep: setStep2 } = useCounter(defaultCount)

  useEffect(() => {
    const savedCount = parseInt(getCookie('count1') || '0', 10)
    const savedCount2 = parseInt(getCookie('count2') || '0', 10)
    const savedStep = parseInt(getCookie('step') || '1', 10)
    const savedStep2 = parseInt(getCookie('step2') || '1', 10)
    const savedDarkMode = getCookie('darkMode') === 'true'

    setCount(savedCount)
    setCount2(savedCount2)
    setStep(savedStep)
    setStep2(savedStep2)
    if (savedDarkMode !== isDarkMode) toggleDarkMode()
  }, [])

  return (
    <div className={`h-screen ${isDarkMode ? 'bg-slate-950' : ''}`}>
      <div className="container mx-auto p-4">
        <DarkModeToggle />
        <div className="flex justify-center items-center gap-4">
          <Counter
            count={count}
            step={step}
            increment={increment}
            decrement={decrement}
            setCount={setCount}
            setStep={setStep}
            name={'count1'}
          />
          <Counter
            count={count2}
            step={step2}
            increment={increment2}
            decrement={decrement2}
            setCount={setCount2}
            setStep={setStep2}
            name={'count2'}
          />
        </div>
      </div>
    </div>
  )
}