import { Handler } from '@netlify/functions';
import { validateEmailData } from '../validation/validators';
import { formatEmailContent } from '../formatters';
import { emailService } from '../services/email-service';
import { logger } from '../utils/logger';
import { 
  createSuccessResponse, 
  createErrorResponse, 
  methodNotAllowed 
} from '../utils/response';
import type { EmailData } from '../types';

export const emailHandler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return methodNotAllowed();
  }

  try {
    const data: EmailData = JSON.parse(event.body || '{}');

    if (!validateEmailData(data)) {
      return createErrorResponse(400, 'Invalid email data');
    }

    const emailContent = formatEmailContent(data);
    const success = await emailService.sendEmail(data, emailContent);

    if (!success) {
      throw new Error('Failed to send email');
    }

    return createSuccessResponse({ success: true });
  } catch (error) {
    logger.error('Error sending email:', error);
    return createErrorResponse(500, 'Failed to send email');
  }
};