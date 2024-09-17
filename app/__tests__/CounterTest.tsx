// Counter.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../components/Counter';

// Mock implementations for props functions
const mockIncrement = jest.fn();
const mockDecrement = jest.fn();
const mockSetStep = jest.fn();
const mockSetCount = jest.fn();

const defaultProps = {
    count: 0,
    step: 1,
    increment: mockIncrement,
    decrement: mockDecrement,
    setStep: mockSetStep,
    name: 'Test Counter',
    setCount: mockSetCount 
};

describe('Counter Component', () => {
    test('renders counter with correct count and buttons', () => {
        render(<Counter {...defaultProps} />);

        expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
        expect(screen.getByText('-')).toBeInTheDocument();
        expect(screen.getByText('+')).toBeInTheDocument();
    });

    test('calls decrement function with correct arguments when "-" button is clicked', () => {
        render(<Counter {...defaultProps} />);

        const decrementButton = screen.getByText('-');
        fireEvent.click(decrementButton);

        expect(mockDecrement).toHaveBeenCalledWith(1, 'Test Counter');
    });

    test('calls increment function with correct arguments when "+" button is clicked', () => {
        render(<Counter {...defaultProps} />);

        const incrementButton = screen.getByText('+');
        fireEvent.click(incrementButton);

        expect(mockIncrement).toHaveBeenCalledWith(1, 'Test Counter');
    });

    test('calls setStep with correct value when input changes', () => {
        render(<Counter {...defaultProps} />);

        const stepInput = screen.getByLabelText(/Step:/i);
        fireEvent.change(stepInput, { target: { value: '5' } });

        expect(mockSetStep).toHaveBeenCalledWith(5);
    });

    test('ensures step input value does not go below 1', () => {
        render(<Counter {...defaultProps} />);

        const stepInput = screen.getByLabelText(/Step:/i);
        fireEvent.change(stepInput, { target: { value: '0' } });

        expect(mockSetStep).toHaveBeenCalledWith(1);
    });
});
