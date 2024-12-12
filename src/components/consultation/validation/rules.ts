// Input validation rules
export const validationRules = {
  fullName: {
    required: true,
    minLength: 2,
    maxLength: 100,
    pattern: /^[a-zA-Z\s-']+$/,
    message: 'Please enter a valid name (letters, spaces, hyphens, and apostrophes only)'
  },
  email: {
    required: true,
    maxLength: 254,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address'
  },
  phoneNumber: {
    required: false,
    pattern: /^\+?[\d\s-()]{10,20}$/,
    message: 'Please enter a valid phone number'
  },
  companyName: {
    required: false,
    maxLength: 100,
    pattern: /^[\w\s&'-]+$/,
    message: 'Please enter a valid company name'
  },
  projectDescription: {
    required: true,
    minLength: 10,
    maxLength: 1000,
    message: 'Project description must be between 10 and 1000 characters'
  }
} as const;