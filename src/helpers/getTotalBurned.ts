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

const match = encodeURI(
  JSON.stringify({
    'transfers.0.transfer_type': 'IN',
    block_signed_at: { $gt: '2021-09-19' }, // first burning ever of APEIN
  }),
);

export async function getTotalBurnedAggregated(
  chainId: number,
  contractId: string,
) {
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

export async function getTotalBurned(chainId: number, contractId: string) {
  // TODO: only last 10 months (page-size) are analyzed this is API limitation
  const response = await apiFetch<CovalentApiResponse>(
    `https://api.covalenthq.com/v1/${chainId}/address/${blackHoleAddress}/transfers_v2/?contract-address=${contractId}&key=${covalentApiKey}&match=${match}`,
  );

  const burnedTotal =
    response.data.data.items.reduce(
      (all, item) => all + parseInt(item.transfers[0].delta),
      0,
    ) / 1e18;

  return burnedTotal;
}
