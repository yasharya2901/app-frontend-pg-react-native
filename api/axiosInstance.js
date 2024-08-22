import axios from 'axios';
import { API_URL } from '@env';

const apiUrl = API_URL;

// console.log('apiUrl', apiUrl);

const axiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: 10000, // optional timeout setting
  headers: {
    'Content-Type': 'application/json',
    // Add any other default headers you need
  },
});

export default axiosInstance;
