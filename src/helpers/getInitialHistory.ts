import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export function getInitialHistory(numberOfDaysBack: number) {
  const nowWithoutTime = dayjs.utc(dayjs().format('YYYY-MM-DD'));
  const initHistory = Array.from({ length: numberOfDaysBack }, (_v, i) => {
    return {
      date: nowWithoutTime
        .subtract(numberOfDaysBack - (i + 1), 'day')
        .valueOf(),
      value: 0,
    };
  });

  return initHistory;
}
