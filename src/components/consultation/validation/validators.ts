import { validationRules } from './rules';
import { sanitizeInput } from '../../../utils/security';
import type { ConsultationFormData } from '../types';

interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof ConsultationFormData, string>>;
}

export const validateFormData = (data: ConsultationFormData): ValidationResult => {
  const errors: Partial<Record<keyof ConsultationFormData, string>> = {};

  // Validate fullName
  if (!data.fullName && validationRules.fullName.required) {
    errors.fullName = 'Full name is required';
  } else if (data.fullName) {
    const sanitizedName = sanitizeInput(data.fullName);
    if (!validationRules.fullName.pattern.test(sanitizedName)) {
      errors.fullName = validationRules.fullName.message;
    }
    if (sanitizedName.length < validationRules.fullName.minLength) {
      errors.fullName = `Name must be at least ${validationRules.fullName.minLength} characters`;
    }
    if (sanitizedName.length > validationRules.fullName.maxLength) {
      errors.fullName = `Name must not exceed ${validationRules.fullName.maxLength} characters`;
    }
  }

  // Validate email
  if (!data.email && validationRules.email.required) {
    errors.email = 'Email is required';
  } else if (data.email) {
    const sanitizedEmail = sanitizeInput(data.email);
    if (!validationRules.email.pattern.test(sanitizedEmail)) {
      errors.email = validationRules.email.message;
    }
    if (sanitizedEmail.length > validationRules.email.maxLength) {
      errors.email = `Email must not exceed ${validationRules.email.maxLength} characters`;
    }
  }

  // Validate phone number if provided
  if (data.phoneNumber) {
    const sanitizedPhone = sanitizeInput(data.phoneNumber);
    if (!validationRules.phoneNumber.pattern.test(sanitizedPhone)) {
      errors.phoneNumber = validationRules.phoneNumber.message;
    }
  }

  // Validate company name if provided
  if (data.companyName) {
    const sanitizedCompany = sanitizeInput(data.companyName);
    if (!validationRules.companyName.pattern.test(sanitizedCompany)) {
      errors.companyName = validationRules.companyName.message;
    }
    if (sanitizedCompany.length > validationRules.companyName.maxLength) {
      errors.companyName = `Company name must not exceed ${validationRules.companyName.maxLength} characters`;
    }
  }

  // Validate project description
  if (!data.projectDescription && validationRules.projectDescription.required) {
    errors.projectDescription = 'Project description is required';
  } else if (data.projectDescription) {
    const sanitizedDescription = sanitizeInput(data.projectDescription);
    if (sanitizedDescription.length < validationRules.projectDescription.minLength) {
      errors.projectDescription = `Description must be at least ${validationRules.projectDescription.minLength} characters`;
    }
    if (sanitizedDescription.length > validationRules.projectDescription.maxLength) {
      errors.projectDescription = `Description must not exceed ${validationRules.projectDescription.maxLength} characters`;
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};