import { useState, useCallback } from 'react';
import { validateField } from '../utils/validators';
import type { ValidationField } from '../utils/types';
import toast from 'react-hot-toast';

export interface FormErrors {
  [key: string]: string | undefined;
}

export const useFormValidation = () => {
  const [errors, setErrors] = useState<FormErrors>({});

  const validateFormField = useCallback((field: ValidationField, value: string) => {
    const validation = validateField(field, value);
    setErrors(prev => ({
      ...prev,
      [field]: validation.error
    }));
    return validation.isValid;
  }, []);

  const validateForm = useCallback((data: Record<string, string>, fields: ValidationField[]): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    fields.forEach(field => {
      const validation = validateField(field, data[field]);
      if (!validation.isValid) {
        newErrors[field] = validation.error;
        isValid = false;
      }
    });

    setErrors(newErrors);

    if (!isValid) {
      const firstError = Object.values(newErrors).find(error => error);
      if (firstError) {
        toast.error(firstError);
      }
    }

    return isValid;
  }, []);

  const clearErrors = useCallback(() => {
    setErrors({});
  }, []);

  return {
    errors,
    validateFormField,
    validateForm,
    clearErrors
  };
};