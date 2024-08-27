import React, { createContext, useState, useContext, ReactNode } from 'react';
import axios from 'axios';

interface AuthContextType {
  isAuthenticated: boolean;
  user: any; 
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null); 

  const login = async (credentials: { email: string; password: string }) => {
    try {
      const response = await axios.post('/auth/login', credentials);
      setIsAuthenticated(true);
      setUser(response.data.user);
      // Store token if needed
    } catch (error) {
      console.error('Login failed:', error);
      throw error; // Handle login error
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    // Remove token if needed
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
