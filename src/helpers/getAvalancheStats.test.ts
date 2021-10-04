import { getAvalancheStats } from './getAvalancheStats';
import { fetchGraphQL } from './fetchGraphQL';
import { contractIdAvalanche } from './consts';

jest.mock('./fetchGraphQL');

describe('getAvalancheStats', () => {
  test('returns only required data', async () => {
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
                  priceUSD: '63.31661843184992402693263676808807',
                },
                {
                  date: 1631664000,
                  priceUSD: '67.61851737706873985878758564982193',
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
                  date: 1630886400,
                  priceUSD: '17.19690474350542080541767651883189',
                },
                {
                  date: 1630972800,
                  priceUSD: '14.25627387345345912676056054111648',
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
                  priceUSD: '83.16172842518431667975816007738979',
                },
                {
                  date: 1632182400,
                  priceUSD: '83.90615456749739095962579236282512',
                },
              ],
              totalSupply: '20568',
            },
          },
        },
      });

    const stats = await getAvalancheStats();
    expect(stats).toStrictEqual({
      burned: 30200,
      marketCap: 2072261.822725245,
      price: 55.2603152726732,
      supply: 37500,
      priceHistory: [
        {
          date: 1631577600,
          priceUSD: 63.316618431849925,
        },
        {
          date: 1631664000,
          priceUSD: 67.61851737706874,
        },
      ],
    });
  });
});
