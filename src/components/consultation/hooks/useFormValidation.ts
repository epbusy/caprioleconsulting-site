import { useState } from 'react';
import { validateFormData } from '../validation/validators';
import type { ConsultationFormData } from '../types';

export const useFormValidation = () => {
  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationFormData, string>>>({});

  const validateForm = (data: ConsultationFormData): boolean => {
    const { isValid, errors: validationErrors } = validateFormData(data);
    setErrors(validationErrors);
    return isValid;
  };

  const clearErrors = () => {
    setErrors({});
  };

  const getFieldError = (field: keyof ConsultationFormData): string | undefined => {
    return errors[field];
  };

  return {
    errors,
    validateForm,
    clearErrors,
    getFieldError
  };
};