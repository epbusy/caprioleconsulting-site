import { getEnvConfig } from './env';
import { logger } from '../../../utils/logger';
import { EMAIL_ERRORS } from '../constants';

export const emailConfig = (() => {
  try {
    return getEnvConfig();
  } catch (error) {
    logger.error('Failed to load email configuration:', error);
    throw new Error(EMAIL_ERRORS.INVALID_CONFIG);
  }
})();