import { renderHook, act } from '@testing-library/react'
import { useCounter } from '../../hooks/useCount'

describe('useCounter hook', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useCounter())

    expect(result.current.count).toBe(0)
    expect(result.current.step).toBe(1)
  })

  it('should initialize with a custom initial value', () => {
    const { result } = renderHook(() => useCounter(10))

    expect(result.current.count).toBe(10)
  })

  it('should increment the count by the given value', () => {
    const { result } = renderHook(() => useCounter())

    act(() => {
      result.current.increment(5)
    })

    expect(result.current.count).toBe(5)
  })

  it('should decrement the count by the given value', () => {
    const { result } = renderHook(() => useCounter(10))

    act(() => {
      result.current.decrement(3)
    })

    expect(result.current.count).toBe(7)
  })

  it('should use default increment value if no value is provided', () => {
    const { result } = renderHook(() => useCounter())

    act(() => {
      result.current.increment()
    })

    expect(result.current.count).toBe(1)
  })

  it('should use default decrement value if no value is provided', () => {
    const { result } = renderHook(() => useCounter(10))

    act(() => {
      result.current.decrement()
    })

    expect(result.current.count).toBe(9)
  })

  it('should update the step value', () => {
    const { result } = renderHook(() => useCounter())

    act(() => {
      result.current.setStep(5)
    })

    expect(result.current.step).toBe(5)
  })
})
