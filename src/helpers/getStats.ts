import { getAvalancheStats } from './getAvalancheStats';
import { getEthereumStats } from './getEthereumStats';

export type Chain = 'ethereum' | 'avalanche';

export type HistoryPoint = { date: number; priceUSD: number };

export type Stats = {
  price: number;
  supply: number;
  marketCap: number;
  burned: number;
  priceHistory: HistoryPoint[];
};

export async function getStats(chain: Chain): Promise<Stats> {
  if (chain === 'ethereum') {
    return await getEthereumStats();
  }
  return await getAvalancheStats();
}
