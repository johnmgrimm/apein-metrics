import { avalancheChainId, contractIdAvalanche } from './consts';
import { fetchGraphQL } from './fetchGraphQL';
import { getInflationHistory, ItemInflation } from './getInflationHistory';
import { getInitialHistory } from './getInitialHistory';
import { getTotalBurned } from './getTotalBurned';
import { getTotalSupply } from './getTotalSupply';

const pangolinQuery = `
query {
  token(id: "${contractIdAvalanche}") {
    id
    symbol
    name
    totalSupply
    tokenDayData(last: 21) {
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
    tokenDayData(last: 21) {
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
    dayData(last: 21) {
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

  const inflationHistory = await getInflationHistory(
    avalancheChainId,
    contractIdAvalanche,
  );

  const priceHistoryPangolin = pangolinData.data.data.token.tokenDayData;
  const priceHistoryJoe = joeData.data.data.token.dayData;
  const priceHistoryDdm = ddmData.data.data.token.tokenDayData;

  const initialHistory = getInitialHistory(21);

  const priceHistory = initialHistory.map((item: ItemInflation) => {
    const pricePointPangolin = priceHistoryPangolin.find(
      (point: { date: number }) => point.date * 1000 === item.date,
    );
    const pricePointJoe = priceHistoryJoe.find(
      (point: { date: number }) => point.date * 1000 === item.date,
    );
    const pricePointDdm = priceHistoryDdm.find(
      (point: { date: number }) => point.date * 1000 === item.date,
    );
    return {
      date: item.date,
      value:
        ((pricePointPangolin ? parseFloat(pricePointPangolin.priceUSD) : 0) +
          (pricePointJoe ? parseFloat(pricePointJoe.priceUSD) : 0) +
          (pricePointDdm ? parseFloat(pricePointDdm.priceUSD) : 0)) /
        3,
    };
  });

  const price = priceHistory[priceHistory.length - 1].value;

  const burned = await getTotalBurned(avalancheChainId, contractIdAvalanche);

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
