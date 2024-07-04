import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  withCredentials: true, // para permitir o envio de cookies (se necessário)
});

export default axiosInstance;
