export interface CounterState {
    count: number
  step: number
  name: string
  }
  
export interface CounterActions {
    increment: (value?: number, name?: string) => void
    decrement: (value?: number, name?: string) => void
    setCount: (value: number) => void
    setStep: (value: number) => void
  }

export type CounterHook = CounterState & CounterActions

export interface ThemeState {
  isDarkMode: boolean
}

export interface ThemeActions {
  toggleDarkMode: () => void
}

export type ThemeHook = ThemeState & ThemeActions