import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextProps {
  authToken: string | null;
  setToken: (token: string | null) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authToken, setAuthToken] = useState<string | null>(null);

  useEffect(() => {
    // Load the authentication token from AsyncStorage on app startup
    const loadAuthToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('authToken');
        setAuthToken(storedToken);
      } catch (error) {
        console.error('Error loading authentication token:', error);
      }
    };

    loadAuthToken();
  }, []); // Run this effect only once on component mount

  const setToken = (token: string | null) => {
    // Save the authentication token to AsyncStorage
    if (token) {
      AsyncStorage.setItem('authToken', token);
    } else {
      AsyncStorage.removeItem('authToken');
    }

    setAuthToken(token);
  };

  return (
    <AuthContext.Provider value={{ authToken, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};