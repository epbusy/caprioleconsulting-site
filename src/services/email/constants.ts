export const EMAIL_ERRORS = {
  INITIALIZATION: 'Failed to initialize email service. Please check your configuration.',
  INVALID_CONFIG: 'Email service configuration is invalid or missing.',
  SEND_FAILED: 'Failed to send message. Please try again later.',
  ACCOUNT_NOT_FOUND: 'Email service account not found. Please check your configuration.',
  NETWORK_ERROR: 'Network error occurred. Please check your connection.',
  TEMPLATE_NOT_FOUND: 'Email template not found. Please try again later.',
  RATE_LIMIT: 'Too many requests. Please try again later.',
  UNKNOWN: 'An unexpected error occurred. Please try again later.'
} as const;