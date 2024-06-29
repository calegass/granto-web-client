import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  withCredentials: true, // para permitir o envio de cookies (se necessário)
});

export default axiosInstance;
