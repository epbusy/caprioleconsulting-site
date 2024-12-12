import { useState } from 'react';
import { emailService } from '../services/email/core/EmailService';
import { EMAIL_ERRORS } from '../services/email/constants';
import type { ContactEmailData } from '../services/email/types/contact';
import toast from 'react-hot-toast';

export const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (data: ContactEmailData): Promise<boolean> => {
    setIsLoading(true);

    try {
      const success = await emailService.sendContactEmail(data);
      if (success) {
        toast.success('Message sent successfully!');
        return true;
      }
      throw new Error(EMAIL_ERRORS.SEND_FAILED);
    } catch (error) {
      let message = EMAIL_ERRORS.UNKNOWN;
      
      if (error instanceof Error) {
        if (Object.values(EMAIL_ERRORS).includes(error.message as any)) {
          message = error.message;
        }
      }
      
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