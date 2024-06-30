// utils/auth.ts
import axiosInstance from './axiosInstance';

export const login = async (email: string, password: string) => {
  if (email === 'default@example.com' && password === 'default') return 'token-example'; // apenas para fins de demonstração
  try {
    const response = await axiosInstance.post('/login', { email, password });
    return response.data.token; // assuming your API returns a token
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const logout = async () => {
  if (typeof window !== 'undefined' && localStorage.getItem('token') && localStorage.getItem('email')) {
    localStorage.removeItem('email'); // remove the email from local storage
    localStorage.removeItem('token'); // remove the token from local storage
  }
};

export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') {
    return false; // return false if we're on the server
  }

  const token = localStorage.getItem('token'); // check local storage for the token
  return !!token; // return true if the token exists, otherwise false
};

export const checkAuthStatus = async () => {
  try {
    const response = await axiosInstance.get('/check-auth');
    return response.data.isAuthenticated; // assuming your API returns the authentication status
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
};
