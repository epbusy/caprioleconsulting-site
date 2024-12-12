import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';

export function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-primary-100">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <Logo />
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/services" className="text-brown-400 hover:text-brown-600 transition-colors">
                Services
              </Link>
              <Link to="/about" className="text-brown-400 hover:text-brown-600 transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-brown-400 hover:text-brown-600 transition-colors">
                Contact
              </Link>
              <button 
                onClick={() => navigate('/consultation')}
                className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
              >
                Get Started
              </button>
            </div>
          </nav>
        </div>
      </header>
      <main className="pt-16">
        {children}
      </main>
      <footer className="bg-brown-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Logo />
            <div className="flex items-center gap-8 text-brown-400">
              <Link to="/services" className="hover:text-brown-600 transition-colors">
                Services
              </Link>
              <Link to="/about" className="hover:text-brown-600 transition-colors">
                About
              </Link>
              <Link to="/contact" className="hover:text-brown-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}