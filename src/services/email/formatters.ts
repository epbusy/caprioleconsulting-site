import type { EmailData } from './types';
import { formatContactEmail } from './templates/contact';
import { formatConsultationEmail } from './templates/consultation';

export function formatEmailContent(data: EmailData): string {
  return data.serviceType 
    ? formatConsultationEmail(data)
    : formatContactEmail(data);
}