
import React, { createContext, useState, useContext, useEffect } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  error: string | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if there's a token in localStorage
    const token = localStorage.getItem('auth_token');
    if (token) {
      try {
        // In a real app, you would validate the token on the backend
        // Here we just check if there's any user data
        const userData = localStorage.getItem('user_data');
        if (userData) {
          setUser(JSON.parse(userData));
        }
      } catch (err) {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user_data');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setError(null);
    try {
      // Simulate API call
      // In a real app, you would make an API call to your backend
      if (email === 'demo@example.com' && password === 'password') {
        const mockUser = { id: '1', name: 'Demo User', email: 'demo@example.com' };
        const mockToken = 'mock-jwt-token';
        
        // Store the token and user data
        localStorage.setItem('auth_token', mockToken);
        localStorage.setItem('user_data', JSON.stringify(mockUser));
        
        setUser(mockUser);
        return true;
      } else {
        setError('Invalid email or password');
        return false;
      }
    } catch (err) {
      setError('Login failed. Please try again.');
      return false;
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setError(null);
    try {
      // Simulate API call
      // In a real app, you would make an API call to your backend
      const mockUser = { id: Date.now().toString(), name, email };
      const mockToken = 'mock-jwt-token';
      
      // Store the token and user data
      localStorage.setItem('auth_token', mockToken);
      localStorage.setItem('user_data', JSON.stringify(mockUser));
      
      setUser(mockUser);
      return true;
    } catch (err) {
      setError('Registration failed. Please try again.');
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        login,
        register,
        logout,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

