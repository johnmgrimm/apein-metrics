import { getLatestMintTransfers } from './getLatestMintTransfers';
import { apiFetch } from './apiFetch';

jest.mock('./apiFetch');

describe('getLatestMintTransfers', () => {
  test('returns only required data', async () => {
    (apiFetch as jest.Mock).mockResolvedValueOnce({
      data: {
        data: {
          address: '0x0000000000000000000000000000000000000000',
          updated_at: '2021-10-07T20:37:24.491199267Z',
          next_update_at: '2021-10-07T20:42:24.491199658Z',
          quote_currency: 'USD',
          chain_id: 1,
          items: [
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
                day: 20,
              },
              dailySubtotal1: 3.0200000000000002e22,
              dailySubtotal2: 3.0200000000000002e22,
            },
          ],
          pagination: {
            has_more: false,
            page_number: 0,
            page_size: 100,
            total_count: 2,
          },
        },
        error: false,
        error_message: null,
        error_code: null,
      },
    });
    const transfers = await getLatestMintTransfers(1, '0x000', '0x00', 30);
    expect(transfers).toStrictEqual([
      {
        dailySubtotal1: 1.5093807e22,
        dailySubtotal2: 1.5093807e22,
        id: {
          day: 2,
          month: 10,
          year: 2021,
        },
      },
      {
        dailySubtotal1: 3.02e22,
        dailySubtotal2: 3.02e22,
        id: {
          day: 20,
          month: 9,
          year: 2021,
        },
      },
    ]);
  });
});
