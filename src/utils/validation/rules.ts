export const validationRules = {
  fullName: {
    pattern: /^[\p{L}\s'-]{2,100}$/u, // Unicode letter class for international names
    minLength: 2,
    maxLength: 100,
    message: 'Full name must contain only letters, spaces, hyphens, and apostrophes'
  },
  email: {
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    maxLength: 254,
    message: 'Please enter a valid email address'
  },
  subject: {
    minLength: 3,
    maxLength: 100,
    message: 'Subject must be between 3 and 100 characters'
  },
  message: {
    minLength: 10,
    maxLength: 1000,
    message: 'Message must be between 10 and 1000 characters'
  },
  phoneNumber: {
    pattern: /^\+?[\d\s-()]{10,20}$/,
    optional: true,
    maxLength: 20,
    message: 'Please enter a valid phone number (10-20 characters)'
  },
  projectDescription: {
    minLength: 10,
    maxLength: 1000,
    message: 'Project description must be between 10 and 1000 characters'
  },
  companyName: {
    pattern: /^[\p{L}\d\s&'-]{0,100}$/u,
    optional: true,
    maxLength: 100,
    message: 'Company name can contain letters, numbers, spaces, and basic punctuation'
  }
} as const;

export type ValidationField = keyof typeof validationRules;

export const getFieldLabel = (field: ValidationField): string => {
  const labels: Record<ValidationField, string> = {
    fullName: 'Full Name',
    email: 'Email Address',
    subject: 'Subject',
    message: 'Message',
    phoneNumber: 'Phone Number',
    projectDescription: 'Project Description',
    companyName: 'Company Name'
  };
  return labels[field];
};

export const getFieldPlaceholder = (field: ValidationField): string => {
  const placeholders: Record<ValidationField, string> = {
    fullName: 'Enter your full name (e.g., John Smith)',
    email: 'Enter your email address',
    subject: 'Enter the subject of your message',
    message: 'Enter your message',
    phoneNumber: 'Enter your phone number (optional)',
    projectDescription: 'Describe your project in detail',
    companyName: 'Enter your company name (optional)'
  };
  return placeholders[field];
};