import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

export function TeamMember({ name, role, image, description }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-indigo-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}