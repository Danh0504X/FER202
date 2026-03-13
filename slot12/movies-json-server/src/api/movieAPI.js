import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001', // Base URL của json-server
  timeout: 5000, // Thời gian chờ (milliseconds)
  headers: {
    'Content-Type': 'application/json',
  },
});
export default instance;