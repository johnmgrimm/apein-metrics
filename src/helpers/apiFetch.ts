import axios from 'axios';

export type EtherscanApiResponse = {
  status: string;
  message: string;
  result: string;
};
export type CovalentApiResponse = {
  data: {
    items: any[];
    pagination: any;
  };
};
export async function apiFetch<T>(url: string) {
  return axios.get<T>(url);
}
