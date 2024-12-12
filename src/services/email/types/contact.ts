import { z } from 'zod';
import { baseEmailSchema } from './shared';

export const contactEmailSchema = baseEmailSchema.extend({
  subject: z.string().min(3, 'Subject is required').max(100),
  message: z.string().min(10, 'Message is too short').max(1000)
});

export type ContactEmailData = z.infer<typeof contactEmailSchema>;