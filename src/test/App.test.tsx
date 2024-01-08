import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../app/store';
import App from '../App';

test('renders welcome message', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  
  const linkElement = screen.getByText(/Welcome to Dynamic Form App/i);
  expect(linkElement).toBeInTheDocument();
});
