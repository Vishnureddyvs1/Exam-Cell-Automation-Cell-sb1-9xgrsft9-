import React from 'react';
import { GraduationCap, Menu, X, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="bg-blue-900 text-white">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8" />
            <div>
              <h1 className="text-xl font-bold">VIGNAN UNIVERSITY</h1>
              <p className="text-xs">Exam Cell Portal</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-blue-200">Dashboard</a>
            <a href="#" className="hover:text-blue-200">Exam Schedule</a>
            <a href="#" className="hover:text-blue-200">Results</a>
            <a href="#" className="hover:text-blue-200">Downloads</a>
            <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-blue-700">
              <span className="text-sm">{user?.name}</span>
              <button 
                onClick={logout}
                className="p-2 hover:bg-blue-800 rounded-full"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#" className="block hover:text-blue-200">Dashboard</a>
            <a href="#" className="block hover:text-blue-200">Exam Schedule</a>
            <a href="#" className="block hover:text-blue-200">Results</a>
            <a href="#" className="block hover:text-blue-200">Downloads</a>
            <div className="pt-4 mt-4 border-t border-blue-700">
              <div className="flex items-center justify-between">
                <span className="text-sm">{user?.name}</span>
                <button 
                  onClick={logout}
                  className="p-2 hover:bg-blue-800 rounded-full"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}