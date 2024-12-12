export interface ConsultationFormData {
  // Step 1: Contact Information
  email: string;
  fullName: string;
  phoneNumber: string;
  textConsent: boolean;

  // Step 2: Company Details
  companyName: string;

  // Step 3: Service Details
  serviceType: string;
  projectDescription: string;

  // Step 4: Budget and Timeline
  budgetRange: string;
  timeline: string;
}

export const INITIAL_FORM_DATA: ConsultationFormData = {
  email: '',
  fullName: '',
  phoneNumber: '',
  textConsent: false,
  companyName: '',
  serviceType: '',
  projectDescription: '',
  budgetRange: '',
  timeline: ''
};