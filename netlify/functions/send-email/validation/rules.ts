export const validationRules = {
  fullName: {
    required: true,
    minLength: 2,
    maxLength: 100,
    pattern: /^[\p{L}\s'-]+$/u, // Unicode-aware pattern for names with spaces
    message: 'Full name must contain only letters, spaces, hyphens, and apostrophes'
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    maxLength: 254,
    message: 'Please enter a valid email address'
  },
  subject: {
    required: true,
    minLength: 3,
    maxLength: 100,
    message: 'Subject must be between 3 and 100 characters'
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 1000,
    message: 'Message must be between 10 and 1000 characters'
  },
  phoneNumber: {
    required: false,
    pattern: /^\+?[\d\s-()]{10,20}$/,
    maxLength: 20,
    message: 'Please enter a valid phone number'
  },
  companyName: {
    required: false,
    maxLength: 100,
    pattern: /^[\p{L}\d\s&'-]*$/u,
    message: 'Company name can contain letters, numbers, spaces, and basic punctuation'
  },
  projectDescription: {
    required: false,
    minLength: 10,
    maxLength: 1000,
    message: 'Project description must be between 10 and 1000 characters'
  }
} as const;

export type ValidationField = keyof typeof validationRules;