interface EmailConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export const emailConfig: EmailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
};

// Validate config
if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
  console.error('Missing required EmailJS configuration. Please check your environment variables.');
}