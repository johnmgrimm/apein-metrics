import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export function formatDateString(timestamp: number) {
  // https://day.js.org/docs/en/display/format
  return dayjs.utc(timestamp).format('MM/DD/YY');
}
