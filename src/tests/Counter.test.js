// import necessary react testing library helpers here
// import the Counter component here
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByTestId("count");
  expect(initialCount).toBeInTheDocument();
  expect(initialCount).toHaveTextContent("0"); // FIXME: Problem
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByTestId("count");
  userEvent.click(screen.getByText("+"));

  expect(count).toBeInTheDocument();
  expect(count).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByTestId("count");
  userEvent.click(screen.getByText("-"));

  expect(count).toBeInTheDocument();
  expect(count).toHaveTextContent("-1");
});
