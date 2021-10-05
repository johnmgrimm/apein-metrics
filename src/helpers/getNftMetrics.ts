import { apiFetch, CovalentApiResponse } from './apiFetch';
import {
  contractIdNftEthereum1,
  contractIdNftEthereum2,
  contractIdNftEthereum3,
  covalentApiKey,
} from './consts';

export async function getNftMetrics() {
  const [nftData1, nftData2, nftDataO] = await Promise.all([
    apiFetch<CovalentApiResponse>(
      `https://api.covalenthq.com/v1/1/tokens/${contractIdNftEthereum1}/nft_token_ids/?&key=${covalentApiKey}&page-size=10`,
    ),
    apiFetch<CovalentApiResponse>(
      `https://api.covalenthq.com/v1/1/tokens/${contractIdNftEthereum2}/nft_token_ids/?&key=${covalentApiKey}&page-size=10`,
    ),
    apiFetch<CovalentApiResponse>(
      `https://api.covalenthq.com/v1/1/tokens/${contractIdNftEthereum3}/nft_token_ids/?&key=${covalentApiKey}&page-size=10`,
    ),
  ]);

  const result = {
    ape_1: parseInt(nftData1.data.data.pagination.total_count),
    ape_2: parseInt(nftData2.data.data.pagination.total_count),
    ape_o: parseInt(nftDataO.data.data.pagination.total_count),
  };
  return result;
}
