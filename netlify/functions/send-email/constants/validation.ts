export const VALIDATION_MESSAGES = {
  REQUIRED: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  MIN_LENGTH: (min: number) => `Must be at least ${min} characters`,
  MAX_LENGTH: (max: number) => `Must not exceed ${max} characters`,
  INVALID_PHONE: 'Please enter a valid phone number',
  INVALID_NAME: 'Must contain only letters, spaces, hyphens, and apostrophes',
  INVALID_COMPANY: 'Can contain letters, numbers, spaces, and basic punctuation'
} as const;

export const FIELD_LIMITS = {
  NAME: { min: 2, max: 100 },
  EMAIL: { max: 254 },
  SUBJECT: { min: 3, max: 100 },
  MESSAGE: { min: 10, max: 1000 },
  PHONE: { min: 10, max: 20 },
  COMPANY: { max: 100 },
  PROJECT: { min: 10, max: 1000 }
} as const;