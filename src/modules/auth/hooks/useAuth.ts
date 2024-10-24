import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const login = async (credentials: { username: string; password: string }) => {
    try {
      await authService.login(credentials);
      setIsAuthenticated(true);
      navigate('/home'); 
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const logout = () => {
    authService.logout();
    setIsAuthenticated(false);
    navigate('/login');
  };

  return {
    isAuthenticated,
    login,
    logout,
  };
};

export default useAuth;
