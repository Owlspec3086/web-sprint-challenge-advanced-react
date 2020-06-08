import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CheckoutForm from '../components/CheckoutForm';
// import App from './App';

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {
  const { getByText, findByText } = render(<CheckoutForm />);

  const header = getByText(/Checkout form/i);

  expect(header).toBeInTheDocument();
});

test('form shows success message on submit with form details', () => {
  const { getByText, getByLabelText, getByTestId } = 
  render(<CheckoutForm />);

  // type into all 6 inputs,
  //1. query for all Input

  const firstNameInput = screen.getByLabelText(/first Name/i);
  const lastNameInput = screen.getByLabelText(/last Name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);
console.log(firstNameInput)
  //run the change event to add text

  fireEvent.change(firstNameInput, { target: { value: 'Eric' } });
  fireEvent.change(lastNameInput, { target: { value: 'Anderson' } });
  fireEvent.change(addressInput, { target: { value: '3086 OwlspecLane' } });
  fireEvent.change(cityInput, { target: { value: 'Bronx' } });
  fireEvent.change(stateInput, { target: { value: 'NewYork' } });
  fireEvent.change(zipInput, { target: { value: '10453' } });

  //click submit button / query for the button
  const checkoutButton = screen.getByText('Checkout')
 
  // run the click event on the button
  fireEvent.click(checkoutButton);   

  // // assert that my new Person is in the list
  // //1.query for the new Person text
  // const newPerson = screen.getByText(/lion/i);
  // // 2. assert that it is being rendered
  // expect(newPerson).toBeInTheDocument();
});
