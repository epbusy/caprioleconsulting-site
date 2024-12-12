import { z } from 'zod';
import { logger } from '../../../utils/logger';

const envSchema = z.object({
  serviceId: z.string().min(1, 'Service ID is required'),
  contactTemplateId: z.string().min(1, 'Contact template ID is required'),
  consultationTemplateId: z.string().min(1, 'Consultation template ID is required'),
  publicKey: z.string().min(1, 'Public key is required'),
  notificationEmail: z.string().email('Valid notification email is required')
});

export type EnvConfig = z.infer<typeof envSchema>;

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

export const getEnvConfig = (): EnvConfig => {
  validateEnvVars();

  return envSchema.parse({
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
    consultationTemplateId: import.meta.env.VITE_EMAILJS_CONSULTATION_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    notificationEmail: import.meta.env.VITE_NOTIFICATION_EMAIL
  });
};