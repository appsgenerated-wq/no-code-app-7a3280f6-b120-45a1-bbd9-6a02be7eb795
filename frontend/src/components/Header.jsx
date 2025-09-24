import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { useAuth } from '../context/AuthContext';
import { BuildingOffice2Icon } from '@heroicons/react/24/solid';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <BuildingOffice2Icon className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">ConstructFlow</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-3">
            {user ? (
              <>
                <Button href="/dashboard" variant="secondary" size="sm">Dashboard</Button>
                <Button onClick={logout} variant="primary" size="sm">Logout</Button>
              </>
            ) : (
              <>
                <Button href="/login" variant="secondary" size="sm">Sign In</Button>
                <Button href="/register" size="sm">Get Started</Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
