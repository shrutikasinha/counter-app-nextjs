import { renderHook, act } from '@testing-library/react'
import { useDarkMode } from '../../hooks/useDarkMode'
import * as cookieUtils from '../../utils/cookies'

// Mock the cookies utility module
jest.mock('../../utils/cookies', () => ({
    getCookie: jest.fn(),
    setCookie: jest.fn(),
  }))
  
  describe('useDarkMode hook', () => {
    // TypeScript type casting for the mocked functions
    const getCookie = cookieUtils.getCookie as jest.Mock
    const setCookie = cookieUtils.setCookie as jest.Mock
  
    beforeEach(() => {
      jest.clearAllMocks()
    })
  
    it('should initialize with dark mode off', () => {
      getCookie.mockReturnValue('false')
      const { result } = renderHook(() => useDarkMode())
  
      expect(result.current.isDarkMode).toBe(false)
    })
  
    it('should initialize with dark mode on', () => {
      getCookie.mockReturnValue('true')
      const { result } = renderHook(() => useDarkMode())
  
      expect(result.current.isDarkMode).toBe(true)
    })
  
    it('should toggle dark mode on', () => {
      getCookie.mockReturnValue('false')
      const { result } = renderHook(() => useDarkMode())
  
      act(() => {
        result.current.toggleDarkMode()
      })
  
      expect(result.current.isDarkMode).toBe(true)
      expect(setCookie).toHaveBeenCalledWith('darkMode', 'true')
    })
  
    it('should toggle dark mode off', () => {
      getCookie.mockReturnValue('true')
      const { result } = renderHook(() => useDarkMode())
  
      act(() => {
        result.current.toggleDarkMode()
      })
  
      expect(result.current.isDarkMode).toBe(false)
      expect(setCookie).toHaveBeenCalledWith('darkMode', 'false')
    })
  
    it('should set the cookie when dark mode changes', () => {
      getCookie.mockReturnValue('false')
      const { result } = renderHook(() => useDarkMode())
  
      act(() => {
        result.current.toggleDarkMode()
      })
  
      expect(setCookie).toHaveBeenCalledWith('darkMode', 'true')
    })
  })