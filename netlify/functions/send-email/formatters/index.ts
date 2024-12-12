import { formatContactEmail } from './contact';
import { formatConsultationEmail } from './consultation';
import type { EmailData } from '../types';

export const formatEmailContent = (data: EmailData): string => {
  return data.serviceType 
    ? formatConsultationEmail(data)
    : formatContactEmail(data);
};