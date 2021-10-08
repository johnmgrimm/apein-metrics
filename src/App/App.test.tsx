import React from 'react';
import { App } from './App';
import { render, screen, waitFor } from '@testing-library/react';
import { getAvalancheStats } from '../helpers/getAvalancheStats';
import { getEthereumStats } from '../helpers/getEthereumStats';
import { getNftMetrics } from '../helpers/getNftMetrics';

jest.mock('../helpers/getAvalancheStats');
jest.mock('../helpers/getEthereumStats');
jest.mock('../helpers/getNftMetrics');
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
(getNftMetrics as jest.Mock).mockResolvedValue({
  ava_ape_1: 123,
  eth_ape_1: 123,
  eth_ape_2: 123,
  eth_ape_3: 123,
  eth_ape_o: 123,
});

jest.mock('./PriceChart/PriceChart', () => ({
  PriceChart: () => {
    return <div data-testid="PriceChart" />;
  },
}));
jest.mock('./InflationChart/InflationChart', () => ({
  InflationChart: () => {
    return <div data-testid="InflationChart" />;
  },
}));

test('renders application with title', async () => {
  render(<App />);

  await waitFor(() => {
    const title = screen.getByText(/Ape in metrics/i);
    expect(title).toBeInTheDocument();
  });
});
