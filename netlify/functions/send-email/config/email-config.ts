import { z } from 'zod';
import { logger } from '../utils/logger';

const emailConfigSchema = z.object({
  serviceId: z.string().min(1, 'Service ID is required'),
  contactTemplateId: z.string().min(1, 'Contact template ID is required'),
  consultationTemplateId: z.string().min(1, 'Consultation template ID is required'),
  publicKey: z.string().min(1, 'Public key is required'),
  notificationEmail: z.string().email('Valid notification email is required')
});

export type EmailConfig = z.infer<typeof emailConfigSchema>;

export const getEmailConfig = (): EmailConfig => {
  try {
    return emailConfigSchema.parse({
      serviceId: process.env.EMAILJS_SERVICE_ID,
      contactTemplateId: process.env.EMAILJS_CONTACT_TEMPLATE_ID,
      consultationTemplateId: process.env.EMAILJS_CONSULTATION_TEMPLATE_ID,
      publicKey: process.env.EMAILJS_PUBLIC_KEY,
      notificationEmail: process.env.NOTIFICATION_EMAIL
    });
  } catch (error) {
    logger.error('Invalid email configuration:', error);
    throw new Error('Invalid email configuration');
  }
};