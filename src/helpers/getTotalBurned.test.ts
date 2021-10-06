import { getTotalBurned } from './getTotalBurned';
import { apiFetch } from './apiFetch';
import { contractIdEthereum } from './consts';

jest.mock('./apiFetch');

describe('getTotalBurned', () => {
  test('returns only required data', async () => {
    (apiFetch as jest.Mock).mockResolvedValueOnce({
      data: {
        data: {
          address: '0xc0bb9ee4d0691d3733b3fcd01728e571fe9e8b27',
          updated_at: '2021-10-06T11:16:51.953874247Z',
          next_update_at: '2021-10-06T11:21:51.953874607Z',
          quote_currency: 'USD',
          chain_id: 1,
          items: [
            {
              block_signed_at: '2021-10-02T17:33:04Z',
              block_height: 13341207,
              tx_hash:
                '0xc12c5466c27a70fc1b7ca3f25267349fc8a1d615428906537dec505064c321f0',
              tx_offset: 280,
              successful: true,
              from_address: '0xc0bb9ee4d0691d3733b3fcd01728e571fe9e8b27',
              from_address_label: null,
              to_address: '0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698',
              to_address_label: null,
              value: '0',
              value_quote: null,
              gas_offered: 84384,
              gas_spent: 51062,
              gas_price: 50095751975,
              gas_quote: 8.685036234703254,
              gas_quote_rate: 3395.259033203125,
              transfers: [
                {
                  block_signed_at: '2021-10-02T17:33:04Z',
                  tx_hash:
                    '0xc12c5466c27a70fc1b7ca3f25267349fc8a1d615428906537dec505064c321f0',
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
                  transfer_type: 'OUT',
                  delta: '7500000000000000000000',
                  balance: null,
                  quote_rate: 99.54181671142578,
                  delta_quote: 746563.6253356934,
                  balance_quote: null,
                  method_calls: null,
                },
              ],
            },
            {
              block_signed_at: '2021-09-20T16:19:50Z',
              block_height: 13263670,
              tx_hash:
                '0xee3511f879094d6cb61b70e4117babf4b4718e9b022624149a6a5e14fdb1a781',
              tx_offset: 189,
              successful: true,
              from_address: '0xc0bb9ee4d0691d3733b3fcd01728e571fe9e8b27',
              from_address_label: null,
              to_address: '0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698',
              to_address_label: null,
              value: '0',
              value_quote: null,
              gas_offered: 84384,
              gas_spent: 51062,
              gas_price: 160383426248,
              gas_quote: 24.43506628929629,
              gas_quote_rate: 2983.707275390625,
              transfers: [
                {
                  block_signed_at: '2021-09-20T16:19:50Z',
                  tx_hash:
                    '0xee3511f879094d6cb61b70e4117babf4b4718e9b022624149a6a5e14fdb1a781',
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
                  transfer_type: 'OUT',
                  delta: '30200000000000000000000',
                  balance: null,
                  quote_rate: 5.70520544052124,
                  delta_quote: 172297.20430374146,
                  balance_quote: null,
                  method_calls: null,
                },
              ],
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
    expect(supply).toStrictEqual(37700);
  });
});
