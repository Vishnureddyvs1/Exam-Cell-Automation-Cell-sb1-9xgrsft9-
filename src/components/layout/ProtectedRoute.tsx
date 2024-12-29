import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import LoginPage from '../../pages/LoginPage';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return <>{children}</>;
}