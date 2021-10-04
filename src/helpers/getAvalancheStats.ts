import { fetchGraphQL } from './fetchGraphQL';

const pangolinQuery = `
query {
  token(id: "0x938fe3788222a74924e062120e7bfac829c719fb") {
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
  token(id: "0x938fe3788222a74924e062120e7bfac829c719fb") {
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
  token(id: "0x938fe3788222a74924e062120e7bfac829c719fb") {
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
  const pangolinData = await fetchGraphQL(
    'https://api.thegraph.com/subgraphs/name/dasconnor/pangolin-dex',
    pangolinQuery,
  );
  const joeData = await fetchGraphQL(
    'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/exchange',
    joeQuery,
  );

  // source: https://thegraph.com/legacy-explorer/subgraph/dynamic-amm/dmm-exchange-avax
  const ddmData = await fetchGraphQL(
    'https://api.thegraph.com/subgraphs/name/dynamic-amm/dmm-exchange-avax',
    ddmQuery,
  );

  const priceHistoryPangolin = pangolinData.data.token.tokenDayData;
  const priceHistoryJoe = joeData.data.token.dayData;
  const priceHistoryDdm = ddmData.data.token.tokenDayData;
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
  };
}
