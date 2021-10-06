import { calculateAverageHistoricalPrice } from './calculateAverageHistoricalPrice';
import { avalancheChainId, contractIdAvalanche } from './consts';
import { fetchGraphQL } from './fetchGraphQL';
import { getTotalBurned } from './getTotalBurned';
import { getTotalSupply } from './getTotalSupply';

type BasePriceHistoryPoint = {
  date: number;
  priceUSD: string;
};

type BasePriceHistory = BasePriceHistoryPoint[];

const pangolinQuery = `
query {
  token(id: "${contractIdAvalanche}") {
    id
    symbol
    name
    totalSupply
    tokenDayData {
      date
      priceUSD
    }
  }
}`;

const ddmQuery = `
query {
  token(id: "${contractIdAvalanche}") {
    id
    symbol
    name
    totalSupply
    tokenDayData {
      date
      priceUSD
    }
  }
}
`;

const joeQuery = `
query {
  token(id: "${contractIdAvalanche}") {
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

export async function getAvalancheStats() {
  const totalSupply = await getTotalSupply(
    avalancheChainId,
    contractIdAvalanche,
  );

  const [pangolinData, joeData, ddmData] = await Promise.all([
    fetchGraphQL(
      'https://api.thegraph.com/subgraphs/name/dasconnor/pangolin-dex',
      pangolinQuery,
    ),
    fetchGraphQL(
      'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/exchange',
      joeQuery,
    ),
    // source: https://thegraph.com/legacy-explorer/subgraph/dynamic-amm/dmm-exchange-avax
    fetchGraphQL(
      'https://api.thegraph.com/subgraphs/name/dynamic-amm/dmm-exchange-avax',
      ddmQuery,
    ),
  ]);

  const priceHistoryPangolin = covertPricesToNumber(
    pangolinData.data.data.token.tokenDayData,
  );
  const priceHistoryJoe = covertPricesToNumber(joeData.data.data.token.dayData);
  const priceHistoryDdm = covertPricesToNumber(
    ddmData.data.data.token.tokenDayData,
  );
  const priceHistory = calculateAverageHistoricalPrice([
    priceHistoryPangolin,
    priceHistoryJoe,
    priceHistoryDdm,
  ]);
  const price = priceHistory[priceHistory.length - 1].priceUSD;

  const burned = await getTotalBurned(avalancheChainId, contractIdAvalanche);

  const marketCap = totalSupply * price;
  return {
    price,
    totalSupply,
    marketCap,
    burned,
    priceHistory,
  };
}

function covertPricesToNumber(history: BasePriceHistory) {
  return history.map((point: BasePriceHistoryPoint) => ({
    date: point.date,
    priceUSD: parseFloat(point.priceUSD),
  }));
}
