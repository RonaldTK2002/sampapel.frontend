import axios from 'axios';

const api = axios.create({
  baseUrl: 'https://localhost:3333',
});

export default api;