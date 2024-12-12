import { useState } from 'react';
import { sanitizeInput } from '../../../utils/security';
import type { ConsultationFormData } from '../types';

export const useFormState = (initialData: ConsultationFormData) => {
  const [formData, setFormData] = useState<ConsultationFormData>(initialData);

  const updateField = (field: keyof ConsultationFormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: typeof value === 'string' ? sanitizeInput(value) : value
    }));
  };

  const resetForm = () => {
    setFormData(initialData);
  };

  return {
    formData,
    updateField,
    resetForm
  };
};