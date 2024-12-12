import { ConsultationFormData } from '../types';

export const validateStep = (step: number, formData: ConsultationFormData): boolean => {
  switch (step) {
    case 1:
      return !!formData.email && !!formData.fullName;
    case 2:
      return true; // Company step is optional
    case 3:
      return !!formData.serviceType && !!formData.projectDescription;
    case 4:
      return !!formData.budgetRange && !!formData.timeline;
    default:
      return true;
  }
};