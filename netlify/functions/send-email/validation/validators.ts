import { z } from 'zod';
import { logger } from '../utils/logger';
import type { EmailData } from '../types';

const emailDataSchema = z.object({
  fullName: z.string().min(2, 'Full name is required').max(100),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(3).max(100).optional(),
  message: z.string().min(10).max(1000).optional(),
  phoneNumber: z.string().optional(),
  textConsent: z.boolean().optional(),
  companyName: z.string().max(100).optional(),
  serviceType: z.string().optional(),
  projectDescription: z.string().min(10).max(1000).optional(),
  budgetRange: z.string().optional(),
  timeline: z.string().optional()
});

export const validateEmailData = (data: EmailData): boolean => {
  try {
    emailDataSchema.parse(data);
    return true;
  } catch (error) {
    if (error instanceof z.ZodError) {
      logger.warn('Email data validation failed:', error.errors);
    }
    return false;
  }
};