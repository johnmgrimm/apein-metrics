import { getNftMetrics } from './getNftMetrics';
import { apiFetch } from './apiFetch';

jest.mock('./apiFetch');

describe('getNftMetrics', () => {
  test('returns only required data', async () => {
    (apiFetch as jest.Mock).mockResolvedValueOnce({
      data: {
        data: {
          pagination: {
            total_count: 123,
          },
        },
      },
    });
    (apiFetch as jest.Mock).mockResolvedValueOnce({
      data: {
        data: {
          pagination: {
            total_count: 12,
          },
        },
      },
    });
    (apiFetch as jest.Mock).mockResolvedValueOnce({
      data: {
        data: {
          pagination: {
            total_count: 3,
          },
        },
      },
    });
    (apiFetch as jest.Mock).mockResolvedValueOnce({
      data: {
        data: {
          pagination: {
            total_count: 20,
          },
        },
      },
    });
    (apiFetch as jest.Mock).mockResolvedValueOnce({
      data: {
        data: {
          pagination: {
            total_count: 15,
          },
        },
      },
    });

    const stats = await getNftMetrics();

    expect(stats).toStrictEqual({
      eth_ape_1: 123,
      eth_ape_2: 12,
      eth_ape_3: 3,
      eth_ape_o: 20,
      ava_ape_3: 15,
    });
  });
});
