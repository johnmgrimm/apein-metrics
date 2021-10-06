import { getTotalSupply } from './getTotalSupply';
import { apiFetch } from './apiFetch';
import { contractIdEthereum } from './consts';

jest.mock('./apiFetch');

describe('getTotalSupply', () => {
  test('returns only required data', async () => {
    (apiFetch as jest.Mock).mockResolvedValueOnce({
      data: {
        data: {
          updated_at: '2021-10-06T07:34:45.249093045Z',
          items: [
            {
              contract_decimals: 18,
              contract_name: 'Ape In',
              contract_ticker_symbol: 'APEIN',
              contract_address: '0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698',
              supports_erc: null,
              logo_url:
                'https://logos.covalenthq.com/tokens/1/0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698.png',
              address: '0xaa8aad8f6718a18f7bc2fe8018da2540a4005085',
              balance: '104872804095636569446970',
              total_supply: '234254579000000000000000',
              block_height: 13364137,
            },
          ],
          pagination: {
            has_more: true,
            page_number: 0,
            page_size: 10,
            total_count: 116,
          },
        },
        error: false,
        error_message: null,
        error_code: null,
      },
    });

    const supply = await getTotalSupply(1, contractIdEthereum);
    expect(supply).toStrictEqual(234254.579);
  });
});
