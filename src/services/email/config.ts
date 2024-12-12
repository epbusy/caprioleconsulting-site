import { emailConfigSchema, type EmailConfig } from './validation';
import { EMAIL_ERRORS } from './constants';
import { logger } from '../../utils/logger';

const validateEnvVars = () => {
  const requiredVars = [
    'VITE_EMAILJS_SERVICE_ID',
    'VITE_EMAILJS_CONTACT_TEMPLATE_ID',
    'VITE_EMAILJS_CONSULTATION_TEMPLATE_ID',
    'VITE_EMAILJS_PUBLIC_KEY',
    'VITE_NOTIFICATION_EMAIL'
  ];

  const missing = requiredVars.filter(key => !import.meta.env[key]);
  
  if (missing.length > 0) {
    const message = `Missing required environment variables:\n${missing.join('\n')}`;
    logger.error(message);
    throw new Error(message);
  }
};

const getConfig = (): EmailConfig => {
  validateEnvVars();

  const config = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
    consultationTemplateId: import.meta.env.VITE_EMAILJS_CONSULTATION_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    notificationEmail: import.meta.env.VITE_NOTIFICATION_EMAIL
  };

  try {
    return emailConfigSchema.parse(config);
  } catch (error) {
    logger.error('Invalid email configuration:', error);
    throw new Error(EMAIL_ERRORS.INVALID_CONFIG);
  }
};

export const emailConfig = getConfig();