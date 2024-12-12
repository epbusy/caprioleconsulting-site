import React from 'react';
import { ChevronDown } from 'lucide-react';
import type { SelectProps } from './types';

export function FormSelect({
  id,
  name,
  value,
  onChange,
  onBlur,
  required,
  hasError,
  placeholder,
  options
}: SelectProps) {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        className={`
          w-full px-4 py-2 border rounded-lg appearance-none
          focus:ring-2 focus:ring-primary-500 focus:border-primary-500
          ${hasError ? 'border-red-500 bg-red-50' : 'border-secondary-200'}
          bg-white
        `}
      >
        <option value="">{placeholder || 'Select an option'}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>
    </div>
  );
}