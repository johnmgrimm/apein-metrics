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

    const stats = await getNftMetrics();

    expect(stats).toStrictEqual({
      ape_1: 123,
      ape_2: 12,
      ape_o: 3,
    });
  });
});
