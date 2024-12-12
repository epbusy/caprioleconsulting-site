import React from 'react';
import { CharacterCount } from './CharacterCount';

interface FormTextareaProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: () => void;
  required?: boolean;
  rows?: number;
  hasError?: boolean;
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
}

export function FormTextarea({
  id,
  name,
  value,
  onChange,
  onBlur,
  required,
  rows = 4,
  hasError,
  maxLength,
  minLength,
  placeholder
}: FormTextareaProps) {
  return (
    <div className="relative">
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        rows={rows}
        required={required}
        maxLength={maxLength}
        minLength={minLength}
        placeholder={placeholder}
        className={`
          w-full px-4 py-2 border rounded-lg resize-y min-h-[100px]
          focus:ring-2 focus:ring-primary-500 focus:border-primary-500
          ${hasError ? 'border-red-500 bg-red-50' : 'border-secondary-200'}
          ${maxLength ? 'pr-20' : ''}
        `}
      />
      {(maxLength || minLength) && (
        <CharacterCount 
          current={value.length} 
          max={maxLength}
          min={minLength}
          position="bottom"
        />
      )}
    </div>
  );
}