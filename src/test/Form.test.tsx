import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import Form from '../features/form/Form';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { submittedForm } from '../features/form/formSlice';

const mockStore = configureStore([]);

test('renders form with error', async () => {
    const store = mockStore({
        form: {
            formData: {
                firstName: '',
                lastName: '',
                Email: '',
            },
            formSent: false,
        },
    });

    render(
        <Provider store={store}>
            <Form />
        </Provider>
    );

    const submitButton = screen.getByText(/Submit/i);

    await act(async () => {
        submitButton.click();
        await tick();
    });

    const errorElement = screen.getByText(/Field 'First name' is required./i);
    expect(errorElement).toBeInTheDocument();
});

test('submit form', async () => {
    const store = mockStore({
        form: {
            formData: {
                firstName: 'John',
                lastName: 'Doe',
                Email: 'john.doe@example.com',
                address1: '123 Main St',
                city: 'New York',
                state: 'NY',
                zip: '10001',
                phone: '555-555-5555',
                jobTitle: 'Engineer - lead',
                reason: 'I am a good fit for the job.',
            },
            formSent: false,
        },
    });

    jest.spyOn(store, 'dispatch');

    render(
        <Provider store={store}>
            <Form />
        </Provider>
    );

    const submitButton = screen.getByText(/Submit/i);

    await act(async () => {
        fireEvent.click(submitButton);
        await tick();
    });

    const actions = store.getActions();
    expect(actions).toEqual([submittedForm()]);
    expect(store.dispatch).toHaveBeenCalledWith(submittedForm());
});

function tick() {
    return new Promise(resolve => {
        setTimeout(resolve, 0);
    });
}
