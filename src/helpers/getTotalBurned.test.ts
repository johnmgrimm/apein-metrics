import { getTotalBurned } from './getTotalBurned';
import { apiFetch } from './apiFetch';
import { contractIdEthereum } from './consts';

jest.mock('./apiFetch');

describe('getTotalBurned', () => {
  test('returns only required data', async () => {
    (apiFetch as jest.Mock).mockResolvedValueOnce({
      data: {
        data: {
          address: '0x0000000000000000000000000000000000000000',
          updated_at: '2021-10-09T17:25:45.761248328Z',
          next_update_at: '2021-10-09T17:30:45.761248408Z',
          quote_currency: 'USD',
          chain_id: 1,
          items: [
            {
              id: {
                year: 2021,
                month: 10,
              },
              monthlyTotal: 1.5093807e22,
            },
            {
              id: {
                year: 2021,
                month: 9,
              },
              monthlyTotal: 3.0200000000000002e22,
            },
          ],
          pagination: {
            has_more: false,
            page_number: 0,
            page_size: 10,
            total_count: 2,
          },
        },
        error: false,
        error_message: null,
        error_code: null,
      },
    });

    const supply = await getTotalBurned(1, contractIdEthereum);
    expect(supply).toStrictEqual(45293.807);
  });
});
