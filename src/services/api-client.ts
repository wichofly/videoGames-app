import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '35f38480039a4843bcc86b3eeb3a4e4f',
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config: AxiosRequestConfig) => {
    const res = await axiosInstance<FetchResponse<T>>(this.endpoint, config);
    return res.data;
  };
}

export default APIClient;

/**
 * The "key" ---> will be included in the query string every HTTP request is sent to the backend
 */
