import React from 'react'
import { CounterState, CounterActions } from '../types'
import { counterClasses } from '../styles/classNames'

interface CounterProps extends CounterState, CounterActions {}

const Counter: React.FC<CounterProps> = ({ count, step, increment, decrement, setStep, name }) => {
    return (
        <div className={counterClasses.container}>
            <h2 className={counterClasses.title}>Counter: {count}</h2>
            <div className={counterClasses.buttonContainer}>
                <button
                    onClick={() => decrement(step, name)}
                    className={`${counterClasses.button} ${counterClasses.decrementButton}`}
                >
                    -
                </button>
                <button
                    onClick={() => increment(step, name)}
                    className={`${counterClasses.button} ${counterClasses.incrementButton}`}
                >
                    +
                </button>
            </div>
            <div className={counterClasses.stepContainer}>
                <label htmlFor="step" className={counterClasses.stepLabel}>
                    Step:
                </label>
                <input
                    type="number"
                    id="step"
                    value={step}
                    onChange={(e) => setStep(Math.max(1, parseInt(e.target.value) || 1))}
                    className={counterClasses.stepInput}
                />
            </div>
        </div>
    )
}


export default Counter