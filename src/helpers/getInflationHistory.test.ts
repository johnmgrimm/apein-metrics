import { getInflationHistory } from './getInflationHistory';
import { getLatestMintTransfers } from './getLatestMintTransfers';
import { getLatestBurnTransfers } from './getLatestBurnTransfers';
import { contractIdEthereum } from './consts';
import { getInitialHistory } from './getInitialHistory';

jest.mock('./getLatestMintTransfers');
jest.mock('./getLatestBurnTransfers');
jest.mock('./getInitialHistory');

describe('getInflationHistory', () => {
  test('returns only required data', async () => {
    (getInitialHistory as jest.Mock).mockReturnValue([
      { date: 1633478400000, value: 0 }, // 2021-10-06
      { date: 1633564800000, value: 0 }, // 2021-10-07
      { date: 1633651200000, value: 0 }, // 2021-10-08
    ]);
    // burn
    (getLatestBurnTransfers as jest.Mock).mockResolvedValueOnce([
      {
        id: {
          year: 2021,
          month: 10,
          day: 7,
        },
        dailySubtotal: 1.5093807e22,
      },
      {
        id: {
          year: 2021,
          month: 9,
          day: 29,
        },
        dailySubtotal: 3.0200000000000002e22,
      },
    ]);
    // mint
    (getLatestMintTransfers as jest.Mock).mockResolvedValueOnce([
      {
        id: {
          year: 2021,
          month: 10,
          day: 7,
        },
        dailySubtotal1: 1.8093807e22,
        dailySubtotal2: 1.8093807e22,
      },
      {
        id: {
          year: 2021,
          month: 10,
          day: 8,
        },
        dailySubtotal1: 3.0200000000000002e22,
        dailySubtotal2: 3.0200000000000002e22,
      },
    ]);

    const transfers = await getInflationHistory(1, contractIdEthereum, 3);
    expect(transfers).toStrictEqual([
      { date: 1633478400000, value: 0 },
      { date: 1633564800000, value: 3000 },
      { date: 1633651200000, value: 30200.000000000004 },
    ]);
  });
});
