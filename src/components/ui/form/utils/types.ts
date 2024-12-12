export interface ValidationRule {
  pattern?: RegExp;
  minLength?: number;
  maxLength: number;
  message: string;
  optional: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export type ValidationField = 
  | 'fullName'
  | 'email'
  | 'phoneNumber'
  | 'companyName'
  | 'serviceType'
  | 'projectDescription'
  | 'budgetRange'
  | 'timeline';

export interface FormFieldProps {
  label: string;
  name: ValidationField;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onBlur?: () => void;
  error?: string;
  required?: boolean;
  rows?: number;
  options?: string[];
}