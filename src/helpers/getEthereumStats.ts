import { fetchGraphQL } from './fetchGraphQL';
import { apiFetch } from './apiFetch';
import { contractIdEthereum } from './consts';

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
  const ethData = await apiFetch(
    `https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=${contractIdEthereum}`,
  );
  // source: https://thegraph.com/legacy-explorer/subgraph/sushiswap/exchange
  const sushiData = await fetchGraphQL(
    'https://api.thegraph.com/subgraphs/name/sushiswap/exchange',
    sushiQuery,
  );

  const priceHistory = sushiData.data.data.token.dayData.map(
    (point: { date: number; priceUSD: string }) => ({
      date: point.date,
      priceUSD: parseFloat(point.priceUSD),
    }),
  );
  const price = priceHistory[priceHistory.length - 1].priceUSD;
  // There is probably some other way of calculating the totalsupply
  // const totalSupply = sushiData.data.token.totalSupply;
  const supply = parseInt(ethData.data.result) / 1e18;

  // TBD
  const burned = 30200;

  const marketCap = supply * price;
  return {
    price,
    supply,
    marketCap,
    burned,
    priceHistory,
  };
}
