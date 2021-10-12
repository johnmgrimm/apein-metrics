import { formatDateString } from './formatDateString';

describe('formatDateString', () => {
  test('it works', () => {
    //1634578400000 - Monday, October 18, 2021 5:33:20 PM UTC
    expect(formatDateString(1634578400000)).toBe('10/18/21');
  });
});
