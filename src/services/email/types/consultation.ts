import { z } from 'zod';
import { baseEmailSchema } from './shared';

export const consultationEmailSchema = baseEmailSchema.extend({
  phoneNumber: z.string().optional(),
  textConsent: z.boolean().optional(),
  companyName: z.string().optional(),
  serviceType: z.string().min(1, 'Please select a service type'),
  projectDescription: z.string().min(10, 'Project description is required').max(1000),
  budgetRange: z.string().min(1, 'Please select a budget range'),
  timeline: z.string().min(1, 'Please select a timeline')
});

export type ConsultationEmailData = z.infer<typeof consultationEmailSchema>;