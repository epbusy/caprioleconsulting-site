import { EmailParams } from '../types';

export const validateEmailParams = (params: EmailParams): boolean => {
  const requiredFields: (keyof EmailParams)[] = ['fullName', 'email'];
  
  // Basic validation
  if (!requiredFields.every(field => !!params[field])) {
    return false;
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(params.email)) {
    return false;
  }

  return true;
};