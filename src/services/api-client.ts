import axios from 'axios';

const api_key = import.meta.env.VITE_API_KEY;

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: api_key,
  },
});



/**
 * The "key" ---> will be included in the query string every HTTP request is sent to the backend
 */
