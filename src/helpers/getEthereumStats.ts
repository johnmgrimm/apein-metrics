import { fetchGraphQL } from './fetchGraphQL';
import { contractIdEthereum, ethereumChainId } from './consts';
import { getTotalSupply } from './getTotalSupply';
import { getTotalBurned } from './getTotalBurned';
import { getInflationHistory } from './getInflationHistory';
import { getInitialHistory } from './getInitialHistory';

const sushiQuery = `
query {
  token(id: "${contractIdEthereum}") {
    dayData(orderBy: date, orderDirection: desc, first: 21) {
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
  const priceHistoryData = sushiData.data.data.token.dayData;

  const initialHistory = getInitialHistory(21);

  const priceHistory = initialHistory
    .map((item) => {
      const pricePoint = priceHistoryData.find(
        (point: { date: number }) => point.date * 1000 === item.date,
      );
      return {
        date: item.date,
        value: pricePoint ? parseFloat(pricePoint.priceUSD) : 0,
      };
    })
    .filter((point) => point.value > 0);

  const inflationHistory = await getInflationHistory(
    ethereumChainId,
    contractIdEthereum,
  );

  const burned = await getTotalBurned(ethereumChainId, contractIdEthereum);

  const price =
    priceHistory.length > 0 ? priceHistory[priceHistory.length - 1].value : 0;

  const marketCap = totalSupply * price;

  return {
    price,
    totalSupply,
    marketCap,
    burned,
    priceHistory,
    inflationHistory,
  };
}
