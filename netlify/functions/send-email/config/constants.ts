export const EMAIL_ERRORS = {
  INITIALIZATION: 'Failed to initialize email service',
  INVALID_CONFIG: 'Invalid email service configuration',
  SEND_FAILED: 'Failed to send email',
  ACCOUNT_NOT_FOUND: 'Email service account not found',
  NETWORK_ERROR: 'Network error occurred',
  TEMPLATE_NOT_FOUND: 'Email template not found',
  RATE_LIMIT: 'Too many requests',
  INVALID_INPUT: 'Invalid input data',
  UNKNOWN: 'An unexpected error occurred'
} as const;

export const RATE_LIMIT = {
  WINDOW_MS: 15 * 60 * 1000, // 15 minutes
  MAX_REQUESTS: 5,
  ERROR_MESSAGE: 'Too many requests. Please try again later.'
} as const;

export const SECURITY = {
  MAX_CONTENT_LENGTH: 1024 * 100, // 100KB
  ALLOWED_METHODS: ['POST'] as const,
  REQUIRED_HEADERS: ['content-type'] as const
} as const;