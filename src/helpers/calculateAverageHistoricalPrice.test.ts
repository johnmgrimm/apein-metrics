import { calculateAverageHistoricalPrice } from './calculateAverageHistoricalPrice';

const history1 = [
  {
    date: 1632096000,
    priceUSD: '83.16172842518431667975816007738979',
  },
  {
    date: 1632182400,
    priceUSD: '83.90615456749739095962579236282512',
  },
];
const history2 = [
  {
    date: 1632096000,
    priceUSD: '83.16172842518431667975816007738979',
  },
  {
    date: 1632182400,
    priceUSD: '83.90615456749739095962579236282512',
  },
];
const history3 = [
  {
    date: 1632095000,
    priceUSD: '83.16172842518431667975816007738979',
  },
];

describe('calculateAverageHistoricalPrice', () => {
  test('same history', () => {
    expect(calculateAverageHistoricalPrice([history1, history1])).toStrictEqual(
      history1,
    );
  });
  test.skip('averaged history', () => {
    expect(calculateAverageHistoricalPrice([history1, history2])).toStrictEqual(
      [],
    );
  });
  test.skip('non-overlaping history', () => {
    expect(calculateAverageHistoricalPrice([history1, history3])).toStrictEqual(
      [],
    );
  });
});
