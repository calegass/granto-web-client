import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { isAuthenticated as checkAuth, login as loginUser, logout as logoutUser, signup as signupUser } from '@/utils/auth';

interface AuthContextType {
  loggedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = () => {
      const isAuthenticatedUser = checkAuth();
      setLoggedIn(isAuthenticatedUser);
      setLoading(false);
    };

    initializeAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Or a proper loading component
  }

  const login = async (email: string, password: string) => {
    const token = await loginUser(email, password);
    localStorage.setItem('email', email);
    localStorage.setItem('token', token);
    setLoggedIn(true);
  };

  const logout = async () => {
    await logoutUser();
    setLoggedIn(false);
  };

  const signup = async (email: string, password: string) => {
    await signupUser(email, password);
  }

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
