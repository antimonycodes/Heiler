// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext.tsx';
import { AuthProvider } from './contexts/AuthContext.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
   <UserProvider>
    <AuthProvider>
        <App />
    </AuthProvider>
    </UserProvider>
  </BrowserRouter>
);
