import { apiFetch, CovalentApiResponse } from './apiFetch';
import {
  avalancheChainId,
  contractIdNftAvalanche1,
  contractIdNftEthereum1,
  contractIdNftEthereum2,
  contractIdNftEthereum3,
  covalentApiKey,
  ethereumChainId,
} from './consts';

export async function getNftMetrics() {
  const [nftData1, nftData2, nftDataO, avaApe1] = await Promise.all([
    apiFetch<CovalentApiResponse>(
      `https://api.covalenthq.com/v1/${ethereumChainId}/tokens/${contractIdNftEthereum1}/nft_token_ids/?&key=${covalentApiKey}&page-size=10`,
    ),
    apiFetch<CovalentApiResponse>(
      `https://api.covalenthq.com/v1/${ethereumChainId}/tokens/${contractIdNftEthereum2}/nft_token_ids/?&key=${covalentApiKey}&page-size=10`,
    ),
    apiFetch<CovalentApiResponse>(
      `https://api.covalenthq.com/v1/${ethereumChainId}/tokens/${contractIdNftEthereum3}/nft_token_ids/?&key=${covalentApiKey}&page-size=10`,
    ),
    apiFetch<CovalentApiResponse>(
      `https://api.covalenthq.com/v1/${avalancheChainId}/tokens/${contractIdNftAvalanche1}/nft_token_ids/?&key=${covalentApiKey}&page-size=10`,
    ),
  ]);

  const result = {
    eth_ape_1: parseInt(nftData1.data.data.pagination.total_count),
    eth_ape_2: parseInt(nftData2.data.data.pagination.total_count),
    eth_ape_o: parseInt(nftDataO.data.data.pagination.total_count),
    ava_ape_1: parseInt(avaApe1.data.data.pagination.total_count),
  };
  return result;
}
