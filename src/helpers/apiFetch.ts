import axios from 'axios';

export function apiFetch(url: string) {
  return axios.get(url);
}
