'use client'

import React, { createContext, useContext } from 'react'
import { useDarkMode } from '../hooks/useDarkMode'
import { ThemeHook } from '../types'

const ThemeContext = createContext<ThemeHook | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useDarkMode()
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export const useThemeContext = () => {
    const context = useContext(ThemeContext)
    if (context === undefined) {
      throw new Error('useThemeContext must be used within a ThemeProvider')
    }
    return context
  }