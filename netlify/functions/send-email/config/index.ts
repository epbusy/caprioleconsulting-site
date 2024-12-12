import { getEmailConfig } from './email-config';
import { logger } from '../utils/logger';
import { EMAIL_ERRORS } from './constants';

export const config = (() => {
  try {
    return getEmailConfig();
  } catch (error) {
    logger.error('Failed to load email configuration:', error);
    throw new Error(EMAIL_ERRORS.INVALID_CONFIG);
  }
})();