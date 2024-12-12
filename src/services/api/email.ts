import { EmailData } from '../types/email';

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const response = await fetch('/.netlify/functions/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};