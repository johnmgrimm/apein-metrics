import { getInitialHistory } from './getInitialHistory';
import MockDate from 'mockdate';

MockDate.set('2021-10-02');

describe('getInitialHistory', () => {
  test('returns only required data', async () => {
    expect(getInitialHistory(3)).toStrictEqual([
      {
        date: 1632960000000,
        value: 0,
      },
      {
        date: 1633046400000,
        value: 0,
      },
      {
        date: 1633132800000,
        value: 0,
      },
    ]);
  });
});
