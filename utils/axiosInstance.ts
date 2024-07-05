import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://web-production-435e.up.railway.app/',
  withCredentials: true, // para permitir o envio de cookies (se necessário)
});

export default axiosInstance;
