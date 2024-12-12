import { EmailData, EmailResponse } from './types';
import { validateEmailData } from './validation';
import { logger } from '../../utils/logger';

export const sendEmail = async (data: EmailData): Promise<EmailResponse> => {
  try {
    if (!validateEmailData(data)) {
      logger.log('Invalid email data', { validation: false }, { level: 'warn' });
      return {
        success: false,
        error: 'Invalid email data',
      };
    }

    const response = await fetch('/.netlify/functions/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      logger.log('Email sending failed', { status: response.status }, { level: 'error' });
      throw new Error(result.error || 'Failed to send email');
    }

    logger.log('Email sent successfully', { success: true });
    return { success: true };
  } catch (error) {
    logger.log('Error in sendEmail', { error }, { level: 'error' });
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send email',
    };
  }
};