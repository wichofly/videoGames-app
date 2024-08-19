import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '35f38480039a4843bcc86b3eeb3a4e4f',
  },
});

/**
 * The "key" ---> will be included in the query string every HTTP request is sent to the backend
 */
