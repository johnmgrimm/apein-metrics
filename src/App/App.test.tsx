import React from 'react';
import { App } from './App';
import { render, screen, waitFor } from '@testing-library/react';
import { apiFetch } from '../helpers/apiFetch';

jest.mock('../helpers/apiFetch');
(apiFetch as jest.Mock).mockResolvedValue({
  burned: 0,
  lastUpdated: '2021-10-03T12:14:33.760Z',
  marketCap: 3695442,
  price: 98.55,
  supply: 37500,
});

test('renders application with title', async () => {
  render(<App />);

  await waitFor(() => {
    const title = screen.getByText(/Ape in metrics/i);
    expect(title).toBeInTheDocument();
  });
});
