import { EmailParams } from '../types/email';

export const validateEmailParams = (params: EmailParams): boolean => {
  const requiredFields: (keyof EmailParams)[] = ['fullName', 'email'];
  
  if (!requiredFields.every(field => !!params[field])) {
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(params.email)) {
    return false;
  }

  return true;
};