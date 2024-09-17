'use client'

import React from 'react'
import { useThemeContext } from '../contexts/ThemeContext'
import { darkModeToggleClasses } from '../styles/classNames'

const DarkModeToggle: React.FC = React.memo(() => {
  const { isDarkMode, toggleDarkMode } = useThemeContext()

    return (
        <button
        onClick={toggleDarkMode}
        className={darkModeToggleClasses}
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    )
  })
  
  DarkModeToggle.displayName = 'DarkModeToggle'
  
  export default DarkModeToggle