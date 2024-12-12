import emailjs from '@emailjs/browser';
import { getEnvConfig } from '../config/env';
import { EMAIL_ERRORS } from '../config/constants';
import { logger } from '../utils/logger';
import type { EmailData, EmailTemplateParams } from '../types';

class EmailService {
  private static instance: EmailService;
  private initialized = false;
  private readonly config = getEnvConfig().emailjs;

  private constructor() {}

  public static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  private initialize(): void {
    if (this.initialized) return;
    emailjs.init(this.config.publicKey);
    this.initialized = true;
    logger.info('EmailJS service initialized');
  }

  private getTemplateId(data: EmailData): string {
    return data.serviceType 
      ? this.config.consultationTemplateId
      : this.config.contactTemplateId;
  }

  public async sendEmail(data: EmailData, emailContent: string): Promise<boolean> {
    try {
      if (!this.initialized) this.initialize();

      const templateParams: EmailTemplateParams = {
        to_email: this.config.notificationEmail,
        from_name: data.fullName,
        from_email: data.email,
        subject: data.serviceType 
          ? `Consultation Request: ${data.serviceType}`
          : `Contact Form: ${data.subject}`,
        message: emailContent
      };

      const response = await emailjs.send(
        this.config.serviceId,
        this.getTemplateId(data),
        templateParams
      );

      if (response.status === 200) {
        logger.info('Email sent successfully', { 
          template: this.getTemplateId(data),
          subject: templateParams.subject 
        });
        return true;
      }

      throw new Error(EMAIL_ERRORS.SEND_FAILED);
    } catch (error) {
      logger.error('Failed to send email:', error);
      return false;
    }
  }
}

export const emailService = EmailService.getInstance();