import { useState } from 'react';
import { useFormState } from './useFormState';
import { useFormValidation } from './useFormValidation';
import { useEmailService } from '../../../hooks/useEmailService';
import { useRateLimit } from '../../../hooks/useRateLimit';
import toast from 'react-hot-toast';
import type { ConsultationFormData } from '../types';

export const useMultiStepForm = (initialData: ConsultationFormData) => {
  const [currentStep, setCurrentStep] = useState(1);
  const { formData, updateField, resetForm } = useFormState(initialData);
  const { validateForm, clearErrors, getFieldError } = useFormValidation();
  const { send, isLoading } = useEmailService();
  const { isLimited, incrementAttempts } = useRateLimit();

  const handleNext = () => {
    if (validateForm(formData)) {
      setCurrentStep(prev => Math.min(prev + 1, 5));
      clearErrors();
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    clearErrors();
  };

  const handleSubmit = async (captchaToken: string | null) => {
    if (isLimited) {
      toast.error('Rate limit exceeded. Please try again later.');
      return;
    }

    if (!captchaToken) {
      toast.error('Please complete the CAPTCHA verification');
      return;
    }

    if (!validateForm(formData)) {
      toast.error('Please correct the errors before submitting');
      return;
    }

    try {
      incrementAttempts();
      const success = await send({ ...formData, captchaToken });

      if (success) {
        toast.success('Your consultation request has been submitted successfully!');
        resetForm();
        setCurrentStep(1);
      } else {
        toast.error('Failed to submit request. Please try again.');
      }
    } catch (err) {
      toast.error('Failed to submit request. Please try again.');
    }
  };

  return {
    currentStep,
    formData,
    isLoading,
    getFieldError,
    handleNext,
    handleBack,
    handleSubmit,
    updateField,
  };
};