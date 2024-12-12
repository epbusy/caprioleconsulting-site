import { Handler } from '@netlify/functions';
import { withSecurity } from './middleware/security';
import { validateEmailData } from './validation/validators';
import { formatEmailContent } from './formatters';
import { emailService } from './services/emailjs';
import { logger } from './utils/logger';
import type { EmailData } from './types';

const baseHandler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const data: EmailData = JSON.parse(event.body || '{}');

    if (!validateEmailData(data)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid email data' })
      };
    }

    const emailContent = formatEmailContent(data);
    const success = await emailService.sendEmail(data, emailContent);

    if (!success) {
      throw new Error('Failed to send email');
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
      },
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    logger.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' })
    };
  }
};

export const handler = withSecurity(baseHandler);