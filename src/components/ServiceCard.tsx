import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export function ServiceCard({ icon: Icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <Icon className="w-12 h-12 text-secondary-400 mb-4" />
      <h3 className="text-xl font-bold mb-3 text-brown-400">{title}</h3>
      <p className="text-teal-400 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-secondary-400 font-bold">•</span>
            <span className="text-teal-400">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}