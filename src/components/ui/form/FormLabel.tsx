import React from 'react';

interface FormLabelProps {
  htmlFor: string;
  label: string;
  required?: boolean;
}

export function FormLabel({ htmlFor, label, required }: FormLabelProps) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-brown-400">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
}