import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import { sanitizeInput } from '../utils/sanitizer';
import { RateLimiter } from '../utils/rate-limiter';
import { logger } from '../utils/logger';
import { createErrorResponse } from '../utils/response';
import { RATE_LIMIT } from '../config/constants';

const rateLimiter = new RateLimiter();

export const withSecurity = (handler: Handler): Handler => {
  return async (event: HandlerEvent, context: HandlerContext) => {
    try {
      // Get client IP for rate limiting
      const clientIp = event.headers['client-ip'] || event.headers['x-forwarded-for'];
      
      // Check rate limit
      if (rateLimiter.isLimited(clientIp)) {
        logger.warn('Rate limit exceeded', { ip: '[REDACTED]' });
        return createErrorResponse(429, RATE_LIMIT.ERROR_MESSAGE);
      }

      // Parse and sanitize request body
      const body = JSON.parse(event.body || '{}');
      
      // Sanitize all string values in the request body
      const sanitizedBody = Object.entries(body).reduce((acc, [key, value]) => ({
        ...acc,
        [key]: typeof value === 'string' ? sanitizeInput(value) : value
      }), {});

      // Increment rate limit counter
      rateLimiter.increment(clientIp);

      // Pass sanitized request to handler
      return await handler({
        ...event,
        body: JSON.stringify(sanitizedBody)
      }, context);
    } catch (error) {
      logger.error('Security middleware error:', error);
      return createErrorResponse(500, 'Internal server error');
    }
  };
};