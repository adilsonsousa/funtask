import axios from 'axios';

const client = axios.create({
  baseURL: 'https://localhost:5001/api/',
  timeout: 10000,
  headers: {
    'X-Custom-Header': 'foobar',
    // Authorization: 'Bearer {token}'
  }
});

export default client;