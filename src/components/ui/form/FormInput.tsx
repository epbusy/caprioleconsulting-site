import React from 'react';
import { CharacterCount } from './CharacterCount';
import { validationRules } from './utils/rules';
import type { ValidationField } from './utils/types';

interface FormInputProps {
  type: 'text' | 'email' | 'tel';
  id: string;
  name: ValidationField;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  required?: boolean;
  hasError?: boolean;
  placeholder?: string;
}

export function FormInput({
  type,
  id,
  name,
  value,
  onChange,
  onBlur,
  required,
  hasError,
  placeholder
}: FormInputProps) {
  const rule = validationRules[name];
  const showCount = rule?.maxLength || rule?.minLength;

  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        maxLength={rule?.maxLength}
        minLength={rule?.minLength}
        placeholder={placeholder}
        className={`
          w-full px-4 py-2 border rounded-lg
          focus:ring-2 focus:ring-primary-500 focus:border-primary-500
          ${hasError ? 'border-red-500 bg-red-50' : 'border-secondary-200'}
          ${showCount ? 'pr-20' : ''}
        `}
      />
      {showCount && (
        <CharacterCount 
          current={value.length} 
          max={rule.maxLength}
          min={rule.minLength}
        />
      )}
    </div>
  );
}