import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const window = new JSDOM('').window;
const purify = DOMPurify(window);

export const sanitizeInput = (input: string): string => {
  // First, sanitize HTML
  const sanitized = purify.sanitize(input, {
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

export const validateContentLength = (content: string): boolean => {
  const byteLength = new TextEncoder().encode(content).length;
  return byteLength <= 100 * 1024; // 100KB limit
};