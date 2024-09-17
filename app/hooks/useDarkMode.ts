import { useState, useEffect } from 'react'
import { getCookie, setCookie } from '../utils/cookies'
import { ThemeHook } from '../types'

export const useDarkMode = (): ThemeHook => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  useEffect(() => {
    const savedMode = getCookie('darkMode') === 'true'
    setIsDarkMode(savedMode)
  }, [])
    
  const toggleDarkMode = () => {
    setCookie('darkMode', String(!isDarkMode))
    setIsDarkMode((prevMode) => !prevMode)
  }

  return { isDarkMode, toggleDarkMode }
}