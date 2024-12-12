import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <div className="p-6 bg-brown-50 rounded-xl">
      <Icon className="w-12 h-12 text-secondary-400 mb-4" />
      <h3 className="text-xl font-bold text-brown-400 mb-2">{title}</h3>
      <p className="text-teal-400">{description}</p>
    </div>
  );
}