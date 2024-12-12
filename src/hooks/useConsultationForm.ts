import { useState } from 'react';
import { emailService } from '../services/email/core/EmailService';
import { EMAIL_ERRORS } from '../services/email/constants';
import type { ConsultationEmailData } from '../services/email/types/consultation';
import toast from 'react-hot-toast';

export const useConsultationForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (data: ConsultationEmailData): Promise<boolean> => {
    setIsLoading(true);

    try {
      const success = await emailService.sendConsultationEmail(data);
      if (success) {
        toast.success('Consultation request sent successfully!');
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