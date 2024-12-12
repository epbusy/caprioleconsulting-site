import type { ValidationRule, ValidationField } from '../types';

export const validationRules: Record<ValidationField, ValidationRule> = {
  fullName: {
    pattern: /^[\p{L}\s'-]+$/u,
    minLength: 2,
    maxLength: 100,
    message: 'Full Name must contain only letters, spaces, hyphens, and apostrophes',
    required: true
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    maxLength: 254,
    message: 'Please enter a valid email address',
    required: true
  },
  phoneNumber: {
    pattern: /^\+?[\d\s-()]{10,20}$/,
    maxLength: 20,
    message: 'Please enter a valid phone number (10-20 characters)',
    required: false
  },
  companyName: {
    pattern: /^[\p{L}\d\s&'-]*$/u,
    maxLength: 100,
    message: 'Company Name can contain letters, numbers, spaces, and basic punctuation',
    required: false
  },
  serviceType: {
    minLength: 1,
    maxLength: 100,
    message: 'Please select a service type',
    required: true
  },
  projectDescription: {
    minLength: 10,
    maxLength: 1000,
    message: 'Project Description must be between 10 and 1000 characters',
    required: true
  },
  budgetRange: {
    minLength: 1,
    maxLength: 100,
    message: 'Please select a budget range',
    required: true
  },
  timeline: {
    minLength: 1,
    maxLength: 100,
    message: 'Please select a timeline',
    required: true
  },
  subject: {
    minLength: 3,
    maxLength: 100,
    message: 'Subject must be between 3 and 100 characters',
    required: true
  },
  message: {
    minLength: 10,
    maxLength: 1000,
    message: 'Message must be between 10 and 1000 characters',
    required: true
  }
};