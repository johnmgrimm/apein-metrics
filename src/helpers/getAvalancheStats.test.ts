import { getAvalancheStats } from './getAvalancheStats';
import { fetchGraphQL } from './fetchGraphQL';
import { contractIdAvalanche } from './consts';
import { getTotalSupply } from './getTotalSupply';
import { getTotalBurned } from './getTotalBurned';
import { getInflationHistory } from './getInflationHistory';
import { getInitialHistory } from './getInitialHistory';

jest.mock('./fetchGraphQL');
jest.mock('./getTotalSupply');
jest.mock('./getTotalBurned');
jest.mock('./getInflationHistory');
jest.mock('./getInitialHistory');

describe('getAvalancheStats', () => {
  test('returns only required data', async () => {
    (getTotalSupply as jest.Mock).mockResolvedValue(37500);
    (getTotalBurned as jest.Mock).mockResolvedValue(123);
    (getInflationHistory as jest.Mock).mockResolvedValue([]);
    (getInitialHistory as jest.Mock).mockReturnValue([
      {
        date: 1630972800000,
        value: 0,
      },
      {
        date: 1631577600000,
        value: 0,
      },
      {
        date: 1631664000000,
        value: 0,
      },
      {
        date: 1632096000000,
        value: 0,
      },
      {
        date: 1632182400000,
        value: 0,
      },
    ]);
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
              ],
              totalSupply: '20568',
            },
          },
        },
      });

    const stats = await getAvalancheStats();
    expect(stats).toStrictEqual({
      burned: 123,
      marketCap: 1129482.9146086217,
      price: 30.11954438956325,
      totalSupply: 37500,
      inflationHistory: [],
      priceHistory: [
        {
          date: 1630972800000,
          value: 5.085424624484486,
        },
        {
          date: 1631577600000,
          value: 20.10553947728331,
        },
        {
          date: 1631664000000,
          value: 21.87283912568958,
        },
        {
          date: 1632096000000,
          value: 30.11954438956325,
        },
      ],
    });
  });
});
