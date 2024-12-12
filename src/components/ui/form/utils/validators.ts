import { ValidationField, ValidationResult } from './types';
import { validationRules } from './rules';
import { getFieldLabel } from './labels';

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

  // If field is optional and empty, it's valid
  if (rule.optional && !trimmedValue) {
    return { isValid: true };
  }

  // If field is required and empty, it's invalid
  if (!rule.optional && !trimmedValue) {
    return { 
      isValid: false, 
      error: `${fieldLabel} is required` 
    };
  }

  // Only validate non-empty values
  if (trimmedValue) {
    // Select field validation (for dropdowns)
    if (field === 'serviceType' && !trimmedValue) {
      return {
        isValid: false,
        error: 'Please select a service type'
      };
    }
    if (field === 'budgetRange' && !trimmedValue) {
      return {
        isValid: false,
        error: 'Please select a budget range'
      };
    }
    if (field === 'timeline' && !trimmedValue) {
      return {
        isValid: false,
        error: 'Please select a timeline'
      };
    }

    // Length validation
    if (rule.minLength && trimmedValue.length < rule.minLength) {
      return { 
        isValid: false, 
        error: `${fieldLabel} must be at least ${rule.minLength} characters` 
      };
    }

    if (trimmedValue.length > rule.maxLength) {
      return { 
        isValid: false, 
        error: `${fieldLabel} must not exceed ${rule.maxLength} characters` 
      };
    }

    // Pattern validation
    if (rule.pattern && !rule.pattern.test(trimmedValue)) {
      return { 
        isValid: false, 
        error: rule.message.replace('${fieldLabel}', fieldLabel)
      };
    }
  }

  return { isValid: true };
};