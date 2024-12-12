import { z } from 'zod';

export const emailConfigSchema = z.object({
  serviceId: z.string().min(1, 'EmailJS Service ID is required'),
  contactTemplateId: z.string().min(1, 'Contact Template ID is required'),
  consultationTemplateId: z.string().min(1, 'Consultation Template ID is required'),
  publicKey: z.string().min(1, 'EmailJS Public Key is required'),
  notificationEmail: z.string().email('Invalid notification email')
});

export const emailDataSchema = z.object({
  fullName: z.string().min(2, 'Full name is required').max(100),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(3, 'Subject is required').max(100).optional(),
  message: z.string().min(10, 'Message is too short').max(1000),
  phoneNumber: z.string().optional(),
  serviceType: z.string().optional()
});

export type EmailConfig = z.infer<typeof emailConfigSchema>;
export type EmailData = z.infer<typeof emailDataSchema>;