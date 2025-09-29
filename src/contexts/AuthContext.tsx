"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { apiClient, User } from '@/lib/api';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = !!user;

  useEffect(() => {
    // Check if user is already authenticated on mount
    const checkAuth = async () => {
      if (apiClient.isAuthenticated()) {
        try {
          // You could add a "me" endpoint to get current user info
          // For now, we'll just set a placeholder user
          setUser({
            id: 1,
            account_type: 'web',
            email: 'user@example.com',
            created_at: new Date().toISOString(),
            is_active: true
          });
        } catch (error) {
          console.error('Auth check failed:', error);
          apiClient.logout();
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      await apiClient.login('web', { email, password });
      // Set user info - in a real app, you'd fetch this from a /me endpoint
      setUser({
        id: 1,
        account_type: 'web',
        email,
        created_at: new Date().toISOString(),
        is_active: true
      });
    } catch (error) {
      throw error;
    }
  };

  const register = async (email: string, password: string) => {
    try {
      const newUser = await apiClient.register('web', { email, password });
      setUser(newUser);
    } catch (error) {
      throw error;
    }
  };


  const logout = () => {
    apiClient.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
