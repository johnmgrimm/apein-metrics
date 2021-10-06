import { fetchGraphQL } from './fetchGraphQL';
import { contractIdEthereum, ethereumChainId } from './consts';
import { getTotalSupply } from './getTotalSupply';
import { getTotalBurned } from './getTotalBurned';

const sushiQuery = `
query {
  token(id: "${contractIdEthereum}") {
    id
    symbol
    name
    totalSupply
    dayData {
      date
      priceUSD
    }
  }
}`;

export async function getEthereumStats() {
  const totalSupply = await getTotalSupply(ethereumChainId, contractIdEthereum);

  // source: https://thegraph.com/legacy-explorer/subgraph/sushiswap/exchange
  const sushiData = await fetchGraphQL(
    'https://api.thegraph.com/subgraphs/name/sushiswap/exchange',
    sushiQuery,
  );

  const burned = await getTotalBurned(ethereumChainId, contractIdEthereum);

  const priceHistory = sushiData.data.data.token.dayData.map(
    (point: { date: number; priceUSD: string }) => ({
      date: point.date,
      priceUSD: parseFloat(point.priceUSD),
    }),
  );
  const price = priceHistory[priceHistory.length - 1].priceUSD;

  const marketCap = totalSupply * price;

  return {
    price,
    totalSupply,
    marketCap,
    burned,
    priceHistory,
  };
}
