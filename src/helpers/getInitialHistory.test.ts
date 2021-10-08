import { getInitialHistory } from './getInitialHistory';

let dateNowSpy: any;

beforeAll(() => {
  // Lock Time
  dateNowSpy = jest.spyOn(Date, 'now').mockImplementation(() => 1633125600000);
});

afterAll(() => {
  // Unlock Time
  dateNowSpy.mockRestore();
});

describe('getInitialHistory', () => {
  test('returns only required data', async () => {
    expect(getInitialHistory(3)).toStrictEqual([
      {
        date: 1633125600000,
        value: 0,
      },
      {
        date: 1632088800000,
        value: 0,
      },
      {
        date: 1632175200000,
        value: 0,
      },
    ]);
  });
});
