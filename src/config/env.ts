// Environment variable validation and configuration
interface EnvConfig {
  emailjs: {
    serviceId: string;
    contactTemplateId: string;
    consultationTemplateId: string;
    publicKey: string;
    notificationEmail: string;
  };
  recaptcha: {
    siteKey: string;
  };
}

// Validate environment variables at startup
const validateEnvVariables = (): EnvConfig => {
  const required = [
    'VITE_EMAILJS_SERVICE_ID',
    'VITE_EMAILJS_CONTACT_TEMPLATE_ID',
    'VITE_EMAILJS_CONSULTATION_TEMPLATE_ID',
    'VITE_EMAILJS_PUBLIC_KEY',
    'VITE_NOTIFICATION_EMAIL',
    'VITE_RECAPTCHA_SITE_KEY'
  ] as const;

  const missing = required.filter(key => !import.meta.env[key]);
  
  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables:\n${missing.join('\n')}\n` +
      'Please check your .env file and ensure all required variables are set.'
    );
  }

  return {
    emailjs: {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
      consultationTemplateId: import.meta.env.VITE_EMAILJS_CONSULTATION_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      notificationEmail: import.meta.env.VITE_NOTIFICATION_EMAIL,
    },
    recaptcha: {
      siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
    }
  };
};

export const config = validateEnvVariables();