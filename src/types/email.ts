export interface EmailParams {
  fullName: string;
  email: string;
  subject?: string;
  message?: string;
  phoneNumber?: string;
  textConsent?: boolean;
  companyName?: string;
  serviceType?: string;
  projectDescription?: string;
  budgetRange?: string;
  timeline?: string;
}