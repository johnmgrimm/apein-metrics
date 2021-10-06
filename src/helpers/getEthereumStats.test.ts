import { getEthereumStats } from './getEthereumStats';
import { getTotalSupply } from './getTotalSupply';
import { fetchGraphQL } from './fetchGraphQL';
import { getTotalBurned } from './getTotalBurned';

jest.mock('./getTotalSupply');
jest.mock('./getTotalBurned');
jest.mock('./fetchGraphQL');

describe('getEthereumStats', () => {
  test('returns only required data', async () => {
    (getTotalSupply as jest.Mock).mockResolvedValueOnce(227287.968);
    (getTotalBurned as jest.Mock).mockResolvedValueOnce(30200);

    (fetchGraphQL as jest.Mock).mockResolvedValueOnce({
      data: {
        data: {
          token: {
            dayData: [
              {
                date: 1628985600,
                priceUSD: '14.75296046357589169756107956183043',
              },
              {
                date: 1629072000,
                priceUSD: '13.64942801144816875015932881131023',
              },
            ],
            id: '0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698',
            name: 'Ape In',
            symbol: 'APEIN',
            totalSupply: '17720',
          },
        },
      },
    });
    const stats = await getEthereumStats();
    expect(stats).toStrictEqual({
      burned: 30200,
      marketCap: 3102350.757084335,
      price: 13.649428011448169,
      totalSupply: 227287.968,
      priceHistory: [
        {
          date: 1628985600,
          priceUSD: 14.752960463575892,
        },
        {
          date: 1629072000,
          priceUSD: 13.649428011448169,
        },
      ],
    });
  });
});