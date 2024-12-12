import { validationRules, ValidationField, getFieldLabel } from './rules';
import toast from 'react-hot-toast';

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export const validateField = (
  field: ValidationField,
  value: string,
  required = true
): ValidationResult => {
  const rule = validationRules[field];
  if (!rule) {
    return { isValid: true }; // Skip validation if no rule exists
  }

  const trimmedValue = value.trim();
  const fieldLabel = getFieldLabel(field);

  // Check if field is required
  if (required && !trimmedValue) {
    const error = `${fieldLabel} is required`;
    return { isValid: false, error };
  }

  // Skip validation if field is optional and empty
  if (!required && !trimmedValue) {
    return { isValid: true };
  }

  // Length validation
  if ('minLength' in rule && trimmedValue.length < rule.minLength) {
    const error = `${fieldLabel} must be at least ${rule.minLength} characters`;
    return { isValid: false, error };
  }

  if ('maxLength' in rule && trimmedValue.length > rule.maxLength) {
    const error = `${fieldLabel} must not exceed ${rule.maxLength} characters`;
    return { isValid: false, error };
  }

  // Pattern validation
  if ('pattern' in rule && !rule.pattern.test(trimmedValue)) {
    return { isValid: false, error: rule.message };
  }

  return { isValid: true };
};

export const validateForm = (
  data: Record<string, string>,
  fields: ValidationField[]
): boolean => {
  let isValid = true;
  const errors: string[] = [];

  fields.forEach(field => {
    const validation = validateField(field, data[field]);
    if (!validation.isValid && validation.error) {
      isValid = false;
      errors.push(validation.error);
    }
  });

  if (!isValid) {
    toast.error(errors[0]); // Show only the first error
  }

  return isValid;
};