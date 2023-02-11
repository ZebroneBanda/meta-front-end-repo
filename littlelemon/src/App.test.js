import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders the BookingForm heading', () => {
  render(<BookingForm />);
  const linkElement = screen.getByText("Booking");
  expect(linkElement).toBeInTheDocument();
});
