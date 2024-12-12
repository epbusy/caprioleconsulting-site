export interface EmailData {
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

export interface EmailResponse {
  success: boolean;
  error?: string;
}

export interface EmailTemplateParams {
  to_email: string;
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}