import { getAvalancheStats } from './getAvalancheStats';
import { getEthereumStats } from './getEthereumStats';
import { DataPoint } from './getInflationHistory';

export type Chain = 'ethereum' | 'avalanche';

export type HistoryPoint = { date: number; value: number };

export type Stats = {
  price: number;
  totalSupply: number;
  marketCap: number;
  burned: number;
  priceHistory: HistoryPoint[];
  inflationHistory: DataPoint[];
};

export async function getStats(chain: Chain): Promise<Stats> {
  if (chain === 'ethereum') {
    return await getEthereumStats();
  }
  return await getAvalancheStats();
}
