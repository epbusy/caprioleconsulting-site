import { useState } from 'react';
import { emailService } from '../services/email/EmailService';
import type { EmailData } from '../services/email/validation';
import toast from 'react-hot-toast';

export const useEmailService = () => {
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (data: EmailData): Promise<boolean> => {
    setIsLoading(true);

    try {
      const success = await emailService.sendEmail(data);
      
      if (success) {
        toast.success('Message sent successfully!');
        return true;
      }
      
      throw new Error('Failed to send message');
    } catch (error) {
      const message = error instanceof Error 
        ? error.message 
        : 'Failed to send message. Please try again later.';
        
      toast.error(message);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendEmail,
    isLoading
  };
};