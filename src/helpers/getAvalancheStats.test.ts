import { getAvalancheStats } from './getAvalancheStats';
import { fetchGraphQL } from './fetchGraphQL';
import { contractIdAvalanche } from './consts';
import { getTotalSupply } from './getTotalSupply';
import { getTotalBurned } from './getTotalBurned';

jest.mock('./fetchGraphQL');
jest.mock('./getTotalSupply');
jest.mock('./getTotalBurned');

describe('getAvalancheStats', () => {
  test('returns only required data', async () => {
    (getTotalSupply as jest.Mock).mockResolvedValue(37500);
    (getTotalBurned as jest.Mock).mockResolvedValue(123);
    (fetchGraphQL as jest.Mock)
      // pangolin
      .mockResolvedValueOnce({
        data: {
          data: {
            token: {
              id: contractIdAvalanche,
              name: 'Ape In',
              symbol: 'APEIN',
              tokenDayData: [
                {
                  date: 1631577600,
                  priceUSD: '60.31661843184992402693263676808807',
                },
                {
                  date: 1631664000,
                  priceUSD: '65.61851737706873985878758564982193',
                },
              ],
              totalSupply: '14208',
            },
          },
        },
      })
      // joe
      .mockResolvedValueOnce({
        data: {
          data: {
            token: {
              dayData: [
                {
                  date: 1632096000,
                  priceUSD: '10.19690474350542080541767651883189',
                },
                {
                  date: 1630972800,
                  priceUSD: '15.25627387345345912676056054111648',
                },
              ],
              id: contractIdAvalanche,
              name: 'Ape In',
              symbol: 'APEIN',
              totalSupply: '16440',
            },
          },
        },
      })
      // dmm
      .mockResolvedValueOnce({
        data: {
          data: {
            token: {
              id: contractIdAvalanche,
              name: 'Ape In',
              symbol: 'APEIN',
              tokenDayData: [
                {
                  date: 1632096000,
                  priceUSD: '80.16172842518431667975816007738979',
                },
                {
                  date: 1632182400,
                  priceUSD: '85.90615456749739095962579236282512',
                },
              ],
              totalSupply: '20568',
            },
          },
        },
      });

    const stats = await getAvalancheStats();
    expect(stats).toStrictEqual({
      burned: 123,
      marketCap: 3221480.7962811524,
      price: 85.9061545674974,
      totalSupply: 37500,
      priceHistory: [
        {
          date: 1630972800,
          priceUSD: 15.256273873453459,
        },
        {
          date: 1631577600,
          priceUSD: 60.316618431849925,
        },
        {
          date: 1631664000,
          priceUSD: 65.61851737706874,
        },
        {
          date: 1632096000,
          priceUSD: 45.179316584344875,
        },
        {
          date: 1632182400,
          priceUSD: 85.9061545674974,
        },
      ],
    });
  });
});
