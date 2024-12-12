export const EMAIL_ERRORS = {
  INITIALIZATION: 'Failed to initialize email service',
  INVALID_CONFIG: 'Invalid email service configuration',
  SEND_FAILED: 'Failed to send email',
  ACCOUNT_NOT_FOUND: 'Email service account not found',
  NETWORK_ERROR: 'Network error occurred',
  TEMPLATE_NOT_FOUND: 'Email template not found',
  RATE_LIMIT: 'Too many requests',
  INVALID_CAPTCHA: 'Invalid CAPTCHA verification',
  INVALID_INPUT: 'Invalid input data',
  UNKNOWN: 'An unexpected error occurred'
} as const;

export type EmailError = keyof typeof EMAIL_ERRORS;