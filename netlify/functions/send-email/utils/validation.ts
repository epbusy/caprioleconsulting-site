import { z } from 'zod';
import { logger } from './logger';

export const validateSchema = <T>(schema: z.ZodSchema<T>, data: unknown): data is T => {
  try {
    schema.parse(data);
    return true;
  } catch (error) {
    if (error instanceof z.ZodError) {
      logger.warn('Validation failed:', error.errors);
    }
    return false;
  }
};

export const createValidationError = (field: string, message: string) => ({
  field,
  message,
  type: 'validation_error' as const
});