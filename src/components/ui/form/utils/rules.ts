import { ValidationField, ValidationRule } from './types';

export const validationRules: Record<ValidationField, ValidationRule> = {
  fullName: {
    pattern: /^[A-Za-z\s'-]+$/,
    minLength: 2,
    maxLength: 100,
    message: '${fieldLabel} must contain only letters, spaces, hyphens, and apostrophes',
    optional: false
  },
  email: {
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    maxLength: 254,
    message: 'Please enter a valid email address',
    optional: false
  },
  phoneNumber: {
    pattern: /^\+?[\d\s-()]{10,20}$/,
    maxLength: 20,
    message: 'Please enter a valid phone number (10-20 characters)',
    optional: true
  },
  companyName: {
    pattern: /^[\w\s&'-]*$/,
    maxLength: 100,
    message: '${fieldLabel} can contain letters, numbers, spaces, and basic punctuation',
    optional: true
  },
  serviceType: {
    minLength: 1,
    maxLength: 100,
    message: 'Please select a service type',
    optional: false
  },
  projectDescription: {
    minLength: 10,
    maxLength: 1000,
    message: '${fieldLabel} must be between 10 and 1000 characters',
    optional: false
  },
  budgetRange: {
    minLength: 1,
    maxLength: 100,
    message: 'Please select a budget range',
    optional: false
  },
  timeline: {
    minLength: 1,
    maxLength: 100,
    message: 'Please select a timeline',
    optional: false
  }
};