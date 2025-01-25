import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  next: string | null;
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

  get = async (id: number | string) => {
    const res = await axiosInstance<T>(this.endpoint + '/' + id);
    return res.data;
  };
}

export default APIClient;

/**
 * The "key" ---> will be included in the query string every HTTP request is sent to the backend.
 * 
 * Imports: Imports Axios and its configuration types.
   - FetchResponse Interface: Defines a generic interface for API responses with count, next, and results properties.
   - Axios Instance: Creates an Axios instance with a base URL and API key.
   - APIClient Class:
     - Constructor: Takes an endpoint as a parameter.
     - getAll Method: Fetches all items from the endpoint with optional configuration.
     - get Method: Fetches a single item by ID from the endpoint.
 */
