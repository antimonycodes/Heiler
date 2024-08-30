import { createContext, useState, useContext, ReactNode } from 'react';
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
  const {userType} = useUser()
  const isDoctor = userType === 'doctor';
  const isPatient = userType === 'patient'; 

  const login = async (credentials: { email: string; password: string }) => {
    try {
      const baseURL = import.meta.env.VITE_APP_BASE_URL;
          const endpoint = isDoctor ? '/auth/doctor.register' : '/auth/user.register';
          const url = `${baseURL}${endpoint}`;
          
          const apiKey = import.meta.env.VITE_APP_API_KEY;

          const response = await axios.post(url, credentials, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`,
            }
          });
  
      setIsAuthenticated(true);
      setUser(response.data.user);
      // Store token if needed
    } catch (error) {
      console.error('Login failed:', error);
      throw error; 
    }
  };
  

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('token'); // Remove token
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
