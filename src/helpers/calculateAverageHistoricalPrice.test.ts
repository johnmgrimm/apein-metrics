import { calculateAverageHistoricalPrice } from './calculateAverageHistoricalPrice';

const history1 = [
  {
    date: 1632096000,
    value: 15,
  },
  {
    date: 1632182400,
    value: 25,
  },
];
const history2 = [
  {
    date: 1632096000,
    value: 30,
  },
  {
    date: 1632182400,
    value: 40,
  },
];
const history3 = [
  {
    date: 1632095000,
    value: 50.5,
  },
];

describe('calculateAverageHistoricalPrice', () => {
  test('same history', () => {
    expect(calculateAverageHistoricalPrice([history1, history1])).toStrictEqual(
      history1,
    );
  });
  test('averaged history', () => {
    expect(calculateAverageHistoricalPrice([history1, history2])).toStrictEqual(
      [
        {
          date: 1632096000,
          value: 22.5,
        },
        {
          date: 1632182400,
          value: 32.5,
        },
      ],
    );
  });
  test('non-overlaping history', () => {
    expect(calculateAverageHistoricalPrice([history1, history3])).toStrictEqual(
      [
        {
          date: 1632095000,
          value: 50.5,
        },
        {
          date: 1632096000,
          value: 15,
        },
        {
          date: 1632182400,
          value: 25,
        },
      ],
    );
  });
});
