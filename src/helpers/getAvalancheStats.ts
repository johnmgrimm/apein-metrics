import { contractIdAvalanche } from './consts';
import { fetchGraphQL } from './fetchGraphQL';

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

  const priceHistoryPangolin = pangolinData.data.data.token.tokenDayData.map(
    (point: { date: number; priceUSD: string }) => ({
      date: point.date,
      priceUSD: parseFloat(point.priceUSD),
    }),
  );
  const priceHistoryJoe = joeData.data.data.token.dayData.map(
    (point: { date: number; priceUSD: string }) => ({
      date: point.date,
      priceUSD: parseFloat(point.priceUSD),
    }),
  );
  const priceHistoryDdm = ddmData.data.data.token.tokenDayData.map(
    (point: { date: number; priceUSD: string }) => ({
      date: point.date,
      priceUSD: parseFloat(point.priceUSD),
    }),
  );
  const price =
    (parseFloat(
      priceHistoryPangolin[priceHistoryPangolin.length - 1].priceUSD,
    ) +
      parseFloat(priceHistoryJoe[priceHistoryJoe.length - 1].priceUSD) +
      parseFloat(priceHistoryDdm[priceHistoryDdm.length - 1].priceUSD)) /
    3;
  // There is probably some other way of calculating the totalsupply
  // const totalSupply = sushiData.data.token.totalSupply;
  const supply = 37500;

  // TBD
  const burned = 30200;

  const marketCap = supply * price;
  return {
    price,
    supply,
    marketCap,
    burned,
    priceHistory: priceHistoryPangolin,
  };
}
