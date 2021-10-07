import { getInflationHistory } from './getInflationHistory';
import { getLatestTransfers } from './getLatestTransfers';
import { contractIdEthereum } from './consts';

jest.mock('./getLatestTransfers');

describe('getInflationHistory', () => {
  test('returns only required data', async () => {
    // burn
    (getLatestTransfers as jest.Mock).mockResolvedValueOnce([
      {
        id: {
          year: 2021,
          month: 10,
          day: 2,
        },
        dailySubtotal: 1.5093807e22,
      },
      {
        id: {
          year: 2021,
          month: 9,
          day: 20,
        },
        dailySubtotal: 3.0200000000000002e22,
      },
    ]);
    // mint
    (getLatestTransfers as jest.Mock).mockResolvedValueOnce([
      {
        id: {
          year: 2021,
          month: 10,
          day: 2,
        },
        dailySubtotal1: 1.5093807e22,
        dailySubtotal2: 1.5093807e22,
      },
      {
        id: {
          year: 2021,
          month: 9,
          day: 21,
        },
        dailySubtotal1: 3.0200000000000002e22,
        dailySubtotal2: 3.0200000000000002e22,
      },
    ]);

    const transfers = await getInflationHistory(1, contractIdEthereum);
    expect(transfers).toStrictEqual([
      {
        dailySubtotal: 15093.807,
        date: 1633125600000,
      },
      {
        dailySubtotal: -30200.000000000004,
        date: 1632088800000,
      },
      {
        dailySubtotal: 60400.00000000001,
        date: 1632175200000,
      },
    ]);
  });
});
