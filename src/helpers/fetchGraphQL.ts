import axios from 'axios';

// https://stackoverflow.com/questions/52816623/graphql-post-request-in-axios
export async function fetchGraphQL(url: string, query: string) {
  return axios.post<any>(
    url,
    { query },
    { headers: { 'Content-Type': 'application/json' } },
  );
}
