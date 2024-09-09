import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import axios from 'axios';
import { useUser } from './UserContext';

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
  const { userType } = useUser();
  const isDoctor = userType === 'doctor';

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('Token from localStorage on load:', token);
  
    if (token) {
      setIsAuthenticated(true);
      // Optionally, fetch user details with the token here if needed
    } else {
      setIsAuthenticated(false);
    }
  }, []);
  
  

  const login = async (credentials: { email: string; password: string }) => {
    try {
      const baseURL = import.meta.env.VITE_APP_BASE_URL;
      const endpoint = isDoctor ? '/auth/doctor.login' : '/auth/user.login';
      const url = `${baseURL}${endpoint}`;
      const apiKey = import.meta.env.VITE_APP_API_KEY;

      const response = await axios.post(url, credentials, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        }
      });

      // On successful login
      setIsAuthenticated(true);
      setUser(response.data.user);

      // Store token in localStorage
      const token = response.data.data?.token;
      if (token) {
        // localStorage.setItem('token', token);
        console.log('Token saved to localStorage:', localStorage.getItem('token')); // Debug log
      } else {
        console.error('Token not found in login response');
      }
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('token');
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
