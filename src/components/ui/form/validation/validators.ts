import { validationRules } from './rules';
import { getFieldLabel } from '../utils/labels';
import type { ValidationField, ValidationResult } from '../types';

export const validateField = (
  field: ValidationField,
  value: string
): ValidationResult => {
  const rule = validationRules[field];
  if (!rule) {
    return { isValid: true };
  }

  const trimmedValue = value.trim();
  const fieldLabel = getFieldLabel(field);

  // Skip validation for optional empty fields
  if (!rule.required && !trimmedValue) {
    return { isValid: true };
  }

  // Required field validation
  if (rule.required && !trimmedValue) {
    return { 
      isValid: false, 
      error: `${fieldLabel} is required` 
    };
  }

  // Length validation
  if (rule.minLength && trimmedValue.length < rule.minLength) {
    return { 
      isValid: false, 
      error: `${fieldLabel} must be at least ${rule.minLength} characters` 
    };
  }

  if (rule.maxLength && trimmedValue.length > rule.maxLength) {
    return { 
      isValid: false, 
      error: `${fieldLabel} must not exceed ${rule.maxLength} characters` 
    };
  }

  // Pattern validation
  if (rule.pattern && !rule.pattern.test(trimmedValue)) {
    return { 
      isValid: false, 
      error: rule.message 
    };
  }

  return { isValid: true };
};

export const validateForm = (
  data: Record<string, string>, 
  fields: ValidationField[]
): ValidationResult[] => {
  return fields.map(field => validateField(field, data[field]));
};