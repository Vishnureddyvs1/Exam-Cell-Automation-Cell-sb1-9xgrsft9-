import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/layout/ProtectedRoute';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <div className="bg-blue-900 text-white py-12">
              <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-4">Welcome to Exam Cell Portal</h1>
                <p className="text-xl text-blue-100">Streamlined examination management system for students and faculty</p>
              </div>
            </div>
            <Dashboard />
          </main>
          <footer className="bg-gray-800 text-white py-6 mt-12">
            <div className="container mx-auto px-4 text-center">
              <p>© 2024 Vignan University Exam Cell. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </ProtectedRoute>
    </AuthProvider>
  );
}

export default App;