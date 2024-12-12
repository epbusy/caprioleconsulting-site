import DOMPurify from 'dompurify';

// Sanitize input to prevent XSS and injection attacks
export const sanitizeInput = (input: string): string => {
  // First, sanitize HTML
  const sanitized = DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [], // No HTML tags allowed
    ALLOWED_ATTR: [], // No attributes allowed
    KEEP_CONTENT: true // Keep text content
  });

  // Then, apply additional sanitization
  return sanitized
    .replace(/[<>]/g, '') // Remove < and > characters
    .replace(/&/g, '&amp;') // Encode ampersands
    .replace(/"/g, '&quot;') // Encode quotes
    .replace(/'/g, '&#x27;') // Encode single quotes
    .replace(/\//g, '&#x2F;') // Encode forward slashes
    .trim(); // Remove leading/trailing whitespace
};

// Rate limiting implementation
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5;

export const checkRateLimit = (identifier: string): boolean => {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record) {
    rateLimitMap.set(identifier, { count: 1, timestamp: now });
    return true;
  }

  if (now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(identifier, { count: 1, timestamp: now });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  record.count++;
  rateLimitMap.set(identifier, record);
  return true;
};