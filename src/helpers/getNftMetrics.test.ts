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

    const stats = await getNftMetrics();

    expect(stats).toStrictEqual({
      eth_ape_1: 123,
      eth_ape_2: 12,
      eth_ape_o: 3,
      ava_ape_1: 20,
    });
  });
});
