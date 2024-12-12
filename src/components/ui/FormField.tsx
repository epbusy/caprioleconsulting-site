import React from 'react';
import { AlertCircle } from 'lucide-react';

interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: () => void;
  error?: string;
  required?: boolean;
  rows?: number;
}

export function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  required = false,
  rows = 4
}: FormFieldProps) {
  const inputClasses = `
    w-full px-4 py-2 border rounded-lg
    focus:ring-2 focus:ring-primary-500 focus:border-primary-500
    ${error 
      ? 'border-red-500 bg-red-50' 
      : 'border-secondary-200'
    }
  `;

  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-sm font-medium text-brown-400">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          rows={rows}
          className={inputClasses}
          required={required}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={inputClasses}
          required={required}
        />
      )}

      {error && (
        <div className="flex items-center gap-1 text-red-500 text-sm mt-1">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}