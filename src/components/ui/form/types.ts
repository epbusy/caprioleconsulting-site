export interface SelectProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: () => void;
  required?: boolean;
  hasError?: boolean;
  placeholder?: string;
  options: string[];
}

export interface ValidationRule {
  pattern?: RegExp;
  minLength?: number;
  maxLength?: number;
  message: string;
  required: boolean;
}

export type ValidationField = 
  | 'fullName'
  | 'email'
  | 'phoneNumber'
  | 'companyName'
  | 'serviceType'
  | 'projectDescription'
  | 'budgetRange'
  | 'timeline'
  | 'subject'
  | 'message';

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}