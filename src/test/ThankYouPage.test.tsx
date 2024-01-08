import React from 'react';
import { render, screen } from '@testing-library/react';
import ThankYouPage from '../features/thankyou/ThankYouPage';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

test('renders thank you page', () => {
    const store = mockStore({
        form: {
            formData: {
                firstName: 'John',
                lastName: 'Doe',
                Email: 'john.doe@example.com',
            },
            formSent: true,
        },
    });

    render(
        <Provider store={store}>
            <ThankYouPage />
        </Provider>
    );

    const linkElement = screen.getByText(/Thank You!/i);
    expect(linkElement).toBeInTheDocument();
});


