import React from 'react';
import { render, screen } from '@testing-library/react';
import App,{UserInfo} from './App';

test('renders learn react link', () => {
  render(<App />);
  render(<UserInfo />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
