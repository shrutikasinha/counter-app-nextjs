'use client'

import React, { createContext, useContext } from 'react'
import { useCounter } from '../hooks/useCount'
import { CounterHook } from '../types'

const CounterContext = createContext<CounterHook | undefined>(undefined)

export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const counter = useCounter()
  return <CounterContext.Provider value={counter}>{children}</CounterContext.Provider>
}

export const useCounterContext = (): CounterHook => {
    const context = useContext(CounterContext)
    if (context === undefined) {
      throw new Error('useCounterContext must be used within a CounterProvider')
    }
    return context
  }