import axios from 'axios';

const getUrl = (): string => {
  return 'https://api.rawg.io/api';
};

const getKey = (): string => {
  const key = import.meta.env.VITE_RAWG_API_KEY;
  if (!key) {
    throw new Error('RAWG API key not found');
  }
  return key;
};

const rawgUrl = getUrl();
const rawgKey = getKey();

export default axios.create({
  baseURL: rawgUrl,
  params: {
    key: rawgKey,
  },
});

/**
 * The "key" ---> will be included in the query string every HTTP request is sent to the backend
 */
