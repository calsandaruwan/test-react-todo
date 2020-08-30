import '../setupTests';
import {TodoComponent} from '../components/todo/';
import React from 'react';
import {render, fireEvent, screen, queryByAttribute} from '@testing-library/react';
import '@testing-library/jest-dom'

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

test('Todo show no data message when no task available', () => {
    const rendered = render(<TodoComponent/>);
    const getById = queryByAttribute.bind(null, 'id');
    expect(getById(rendered.container, 'noTaskMessage'))
});

test('Add new todo item in to the list and I can see it in the list below', () => {
    const rendered = render(<TodoComponent/>);
    const placeholder = "Anything in your mind"
    const value = 'hello there';

    // add new list item
    fireEvent.change(screen.getByPlaceholderText(placeholder), {
        target: {
            value
        }
    });

    // save it
    fireEvent.click(screen.getByText(/Create/i));

    expect(screen.getByText(value)).toBeInTheDocument()
});