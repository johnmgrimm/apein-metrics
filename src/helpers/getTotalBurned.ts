import { apiFetch, CovalentApiResponse } from './apiFetch';
import { blackHoleAddress, covalentApiKey } from './consts';

const group = encodeURI(
  JSON.stringify({
    _id: {
      year: { $year: 'block_signed_at' },
      month: { $month: 'block_signed_at' },
    },
    monthlyTotal: { $sum: 'transfers.0.delta' },
  }),
);

const match = encodeURI(JSON.stringify({ 'transfers.0.transfer_type': 'IN' }));

export async function getTotalBurned(chainId: number, contractId: string) {
  // TODO: only last 10 months (page-size) are analyzed this is API limitation
  const response = await apiFetch<CovalentApiResponse>(
    `https://api.covalenthq.com/v1/${chainId}/address/${blackHoleAddress}/transfers_v2/?contract-address=${contractId}&key=${covalentApiKey}&page-size=10&match=${match}&group=${group}`,
  );
  const burnedTotal = response.data.data.items.reduce(
    (sum: number, item: { monthlyTotal: number }) =>
      sum + item.monthlyTotal / 1e18,
    0,
  );

  return burnedTotal;
}
