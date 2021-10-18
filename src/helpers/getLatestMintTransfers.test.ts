import {
  getLatestMintTransfersAggregated,
  getLatestMintTransfers,
} from './getLatestMintTransfers';
import { apiFetch } from './apiFetch';

jest.mock('./apiFetch');

describe('getLatestMintTransfersAggregated', () => {
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
    const transfers = await getLatestMintTransfersAggregated(
      1,
      '0x000',
      '0x00',
      30,
    );
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

describe('getLatestMintTransfers', () => {
  test('returns only required data', async () => {
    (apiFetch as jest.Mock).mockResolvedValueOnce({
      data: {
        data: {
          address: '0x0000000000000000000000000000000000000000',
          updated_at: '2021-10-18T20:07:59.624092447Z',
          next_update_at: '2021-10-18T20:12:59.624094887Z',
          quote_currency: 'USD',
          chain_id: 1,
          items: [
            {
              block_signed_at: '2021-10-18T11:29:20Z',
              transfers: [
                {
                  block_signed_at: '2021-10-18T11:29:20Z',
                  delta: '2550000000000000000',
                },
                {
                  block_signed_at: '2021-10-18T11:29:20Z',
                  delta: '76500000000000000',
                },
              ],
            },
            {
              block_signed_at: '2021-10-18T11:29:20Z',
              transfers: [
                {
                  block_signed_at: '2021-10-18T11:29:20Z',
                  delta: '2550000000000000000',
                },
                {
                  block_signed_at: '2021-10-18T11:29:20Z',
                  delta: '76500000000000000',
                },
              ],
            },
            {
              block_signed_at: '2021-09-09T11:25:02Z',
              transfers: [
                {
                  block_signed_at: '2021-09-09T11:25:02Z',
                  delta: '4400000000000000000',
                },
                {
                  block_signed_at: '2021-09-09T11:25:02Z',
                  delta: '132000000000000000',
                },
              ],
            },
            {
              block_signed_at: '2021-09-09T11:25:02Z',
              transfers: [
                {
                  block_signed_at: '2021-09-09T11:25:02Z',
                  delta: '4400000000000000000',
                },
                {
                  block_signed_at: '2021-09-09T11:25:02Z',
                  delta: '132000000000000000',
                },
              ],
            },
          ],
        },
        error: false,
        error_message: null,
        error_code: null,
      },
    });
    const transfers = await getLatestMintTransfers(1, '0x000', '0x00', 30);
    expect(transfers).toStrictEqual([
      {
        dailySubtotal1: 5.1e18,
        dailySubtotal2: 1.53e17,
        id: {
          day: 18,
          month: 10,
          year: 2021,
        },
      },
      {
        dailySubtotal1: 8.8e18,
        dailySubtotal2: 2.64e17,
        id: {
          day: 9,
          month: 9,
          year: 2021,
        },
      },
    ]);
  });
});
