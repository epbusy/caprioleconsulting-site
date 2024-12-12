import type { ValidationField } from '../types';

export const getFieldLabel = (field: ValidationField): string => {
  const labels: Record<ValidationField, string> = {
    fullName: 'Full Name',
    email: 'Email Address',
    phoneNumber: 'Phone Number',
    companyName: 'Company Name',
    serviceType: 'Service Type',
    projectDescription: 'Project Description',
    budgetRange: 'Budget Range',
    timeline: 'Timeline',
    subject: 'Subject',
    message: 'Message'
  };
  return labels[field];
};

export const getFieldPlaceholder = (field: ValidationField): string => {
  const placeholders: Record<ValidationField, string> = {
    fullName: 'Enter your full name',
    email: 'Enter your email address',
    phoneNumber: 'Enter your phone number (optional)',
    companyName: 'Enter your company name (optional)',
    serviceType: 'Select a service type',
    projectDescription: 'Describe your project or requirements',
    budgetRange: 'Select your budget range',
    timeline: 'Select your preferred timeline',
    subject: 'Enter the subject of your message',
    message: 'Enter your message'
  };
  return placeholders[field];
};