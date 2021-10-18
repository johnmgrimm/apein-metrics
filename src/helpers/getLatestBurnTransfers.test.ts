import {
  getLatestBurnTransfers,
  getLatestBurnTransfersAggregated,
} from './getLatestBurnTransfers';
import { apiFetch } from './apiFetch';

jest.mock('./apiFetch');

describe('getLatestBurnTransfersAggregated', () => {
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
    const transfers = await getLatestBurnTransfersAggregated(
      1,
      '0x000',
      '0x00',
      30,
    );
    expect(transfers).toStrictEqual([
      {
        dailySubtotal: 1.5093807e22,
        id: {
          day: 2,
          month: 10,
          year: 2021,
        },
      },
      {
        dailySubtotal: 3.02e22,
        id: {
          day: 20,
          month: 9,
          year: 2021,
        },
      },
    ]);
  });
});

describe('getLatestBurnTransfers', () => {
  test('returns only required data', async () => {
    (apiFetch as jest.Mock).mockResolvedValueOnce({
      data: {
        data: {
          address: '0x0000000000000000000000000000000000000000',
          updated_at: '2021-10-17T10:06:45.921364464Z',
          next_update_at: '2021-10-17T10:11:45.921364875Z',
          quote_currency: 'USD',
          chain_id: 1,
          items: [
            {
              block_signed_at: '2021-10-11T04:57:59Z',
              block_height: 13395311,
              tx_hash:
                '0x0a1242d8e3ed54185eca93e3dd74d52a53452a7645e2735240511e86837ef41c',
              tx_offset: 115,
              successful: true,
              from_address: '0xc0bb9ee4d0691d3733b3fcd01728e571fe9e8b27',
              from_address_label: null,
              to_address: '0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698',
              to_address_label: null,
              value: '0',
              value_quote: null,
              gas_offered: 84384,
              gas_spent: 51062,
              gas_price: 70559406568,
              gas_quote: 12.744752767400302,
              gas_quote_rate: 3537.355224609375,
              transfers: [
                {
                  block_signed_at: '2021-10-11T04:57:59Z',
                  tx_hash:
                    '0x0a1242d8e3ed54185eca93e3dd74d52a53452a7645e2735240511e86837ef41c',
                  from_address: '0xc0bb9ee4d0691d3733b3fcd01728e571fe9e8b27',
                  from_address_label: null,
                  to_address: '0x0000000000000000000000000000000000000000',
                  to_address_label: null,
                  contract_decimals: 18,
                  contract_name: 'Ape In',
                  contract_ticker_symbol: 'APEIN',
                  contract_address:
                    '0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698',
                  logo_url:
                    'https://logos.covalenthq.com/tokens/0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698.png',
                  transfer_type: 'IN',
                  delta: '28400000000000000000000',
                  balance: null,
                  quote_rate: 115.77456665039062,
                  delta_quote: 3287997.6928710938,
                  balance_quote: null,
                  method_calls: null,
                },
              ],
            },
            {
              block_signed_at: '2021-10-02T17:39:51Z',
              block_height: 13341238,
              tx_hash:
                '0xf74aa8ca639e1c33d4506191fe8185edf81f56948b2470471b4eb9bac4e5947b',
              tx_offset: 335,
              successful: true,
              from_address: '0x9ab983a45b5688039b3ed08bec6fea19a3340c0a',
              from_address_label: null,
              to_address: '0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698',
              to_address_label: null,
              value: '0',
              value_quote: null,
              gas_offered: 84384,
              gas_spent: 51062,
              gas_price: 55281999745,
              gas_quote: 9.58416935535343,
              gas_quote_rate: 3395.259033203125,
              transfers: [
                {
                  block_signed_at: '2021-10-02T17:39:51Z',
                  tx_hash:
                    '0xf74aa8ca639e1c33d4506191fe8185edf81f56948b2470471b4eb9bac4e5947b',
                  from_address: '0x9ab983a45b5688039b3ed08bec6fea19a3340c0a',
                  from_address_label: null,
                  to_address: '0x0000000000000000000000000000000000000000',
                  to_address_label: null,
                  contract_decimals: 18,
                  contract_name: 'Ape In',
                  contract_ticker_symbol: 'APEIN',
                  contract_address:
                    '0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698',
                  logo_url:
                    'https://logos.covalenthq.com/tokens/0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698.png',
                  transfer_type: 'IN',
                  delta: '7593807000000000000000',
                  balance: null,
                  quote_rate: 99.54181671142578,
                  delta_quote: 755901.3445359421,
                  balance_quote: null,
                  method_calls: null,
                },
              ],
            },
            {
              block_signed_at: '2021-10-02T17:39:51Z',
              block_height: 13341238,
              tx_hash:
                '0xf74aa8ca639e1c33d4506191fe8185edf81f56948b2470471b4eb9bac4e5947b',
              tx_offset: 335,
              successful: true,
              from_address: '0x9ab983a45b5688039b3ed08bec6fea19a3340c0a',
              from_address_label: null,
              to_address: '0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698',
              to_address_label: null,
              value: '0',
              value_quote: null,
              gas_offered: 84384,
              gas_spent: 51062,
              gas_price: 55281999745,
              gas_quote: 9.58416935535343,
              gas_quote_rate: 3395.259033203125,
              transfers: [
                {
                  block_signed_at: '2021-10-02T17:39:51Z',
                  tx_hash:
                    '0xf74aa8ca639e1c33d4506191fe8185edf81f56948b2470471b4eb9bac4e5947b',
                  from_address: '0x9ab983a45b5688039b3ed08bec6fea19a3340c0a',
                  from_address_label: null,
                  to_address: '0x0000000000000000000000000000000000000000',
                  to_address_label: null,
                  contract_decimals: 18,
                  contract_name: 'Ape In',
                  contract_ticker_symbol: 'APEIN',
                  contract_address:
                    '0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698',
                  logo_url:
                    'https://logos.covalenthq.com/tokens/0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698.png',
                  transfer_type: 'IN',
                  delta: '7593807000000000000000',
                  balance: null,
                  quote_rate: 99.54181671142578,
                  delta_quote: 755901.3445359421,
                  balance_quote: null,
                  method_calls: null,
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
    const transfers = await getLatestBurnTransfers(1, '0x000', '0x00', 30);
    expect(transfers).toStrictEqual([
      {
        dailySubtotal: 2.84e22,
        id: {
          day: 11,
          month: 10,
          year: 2021,
        },
      },
      {
        dailySubtotal: 1.5187614e22,
        id: {
          day: 2,
          month: 10,
          year: 2021,
        },
      },
    ]);
  });
});
