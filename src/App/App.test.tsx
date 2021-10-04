import React from 'react';
import { App } from './App';
import { render, screen, waitFor } from '@testing-library/react';
import { getAvalancheStats } from '../helpers/getAvalancheStats';
import { getEthereumStats } from '../helpers/getEthereumStats';

jest.mock('../helpers/getAvalancheStats');
jest.mock('../helpers/getEthereumStats');
(getAvalancheStats as jest.Mock).mockResolvedValue({
  burned: 0,
  marketCap: 3695442,
  price: 98.55,
  supply: 37500,
});
(getEthereumStats as jest.Mock).mockResolvedValue({
  burned: 0,
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
