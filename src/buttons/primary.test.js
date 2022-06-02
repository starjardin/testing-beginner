import { render, screen, fireEvent } from '@testing-library/react';
import PrimaryButton from './primary';

test('renders primary button', async() => {
  render(<PrimaryButton />);
  const primaryButton = screen.getByText(/Primary Button/)
  expect(primaryButton).toBeInTheDocument()
  const buttonText = screen.getByTestId(/primary-button/)

  fireEvent.click(primaryButton)
  expect(buttonText).toHaveTextContent("Off")
  fireEvent.click(primaryButton)
  expect(buttonText).toHaveTextContent("On")
  fireEvent.click(primaryButton)
  expect(buttonText).toHaveTextContent("Off")
});
