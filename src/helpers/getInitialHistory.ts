export function getInitialHistory(numberOfDaysBack: number) {
  const now = Date.now();
  const initHistory = Array.from({ length: numberOfDaysBack }, (v, i) => {
    const date = now - i * 1000 * 60 * 60 * 24;
    return {
      date: date,
      value: 0,
    };
  });

  return initHistory;
}
