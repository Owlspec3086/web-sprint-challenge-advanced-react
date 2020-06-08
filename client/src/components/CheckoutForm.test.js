import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CheckoutForm from './CheckoutForm';

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {
  const { getByText, findByText } = render(<CheckoutForm />);

  const header = getByText(/checkout form/i);

  expect(header).toBeInTheDocument();
});

test('form shows success message on submit with form details', () => {
    const { getByText, getByLabelText, getByTestId } = render(<CheckoutForm />);

  // type into all 6 inputs,
  //1. query for all Input

  const firstNameInput = screen.findByText(/firstName/i);
  const lastNameInput = screen.findByText(/lastName/i);
  const addressInput = screen.findByText(/address/i);
  const cityInput = screen.findByText(/city/i);
  const stateInput = screen.findByText(/state/i);
  const zipInput = screen.findByText(/zip/i);

  //run the change event to add text

  fireEvent.change(firstNameInput, { target: {value:'Eric' } });
  fireEvent.change(lastNameInput, { target: {value: 'Anderson' } });
  fireEvent.change(addressInput, { target: {value: '3086 OwlspecLane' } });
  fireEvent.change(cityInput, { target: {value: 'Bronx' } });
  fireEvent.change(stateInput, {target: {value: 'NewYork'} })
  fireEvent.change(zipInput, { target: {value: '10453' } });

  //click submit button / query for the button
  const submitButton = screen.findByTestId(/submit!/i);
  // run the click event on the button
  fireEvent.click(submitButton);
});
