import { z } from 'zod';

export const baseEmailSchema = z.object({
  fullName: z.string().min(2, 'Full name is required').max(100),
  email: z.string().email('Invalid email address')
});

export type BaseEmailData = z.infer<typeof baseEmailSchema>;