import emailjs from '@emailjs/browser';
import { emailConfig } from './config';
import { logger } from '../../utils/logger';

let initialized = false;

export const initializeEmailJS = (): void => {
  if (initialized) {
    return;
  }

  try {
    emailjs.init(emailConfig.publicKey);
    initialized = true;
    logger.log('EmailJS initialized successfully');
  } catch (error) {
    logger.log('Failed to initialize EmailJS', { error }, { level: 'error' });
    throw new Error('Failed to initialize EmailJS');
  }
};