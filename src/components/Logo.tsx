import React from 'react';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';

export function Logo() {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-2 text-xl font-bold text-primary-500 hover:text-primary-600 transition-colors"
    >
      <Eye className="w-8 h-8" />
      <span>Capriole Consulting</span>
    </Link>
  );
}