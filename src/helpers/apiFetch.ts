import axios from 'axios';

type EthApiResponse = {
  status: string;
  message: string;
  result: string;
};
export async function apiFetch(url: string) {
  return axios.get<EthApiResponse>(url);
}
