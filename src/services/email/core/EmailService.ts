import emailjs from '@emailjs/browser';
import { emailConfig } from '../config';
import { logger } from '../../../utils/logger';
import { EMAIL_ERRORS } from '../constants';
import type { ContactEmailData } from '../types/contact';
import type { ConsultationEmailData } from '../types/consultation';
import { formatContactEmail } from '../formatters/contact';
import { formatConsultationEmail } from '../formatters/consultation';

class EmailService {
  private static instance: EmailService;
  private initialized = false;

  private constructor() {
    this.initialize();
  }

  public static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  private initialize(): void {
    if (this.initialized) return;

    try {
      emailjs.init(emailConfig.publicKey);
      this.initialized = true;
    } catch (error) {
      throw new Error(EMAIL_ERRORS.INITIALIZATION);
    }
  }

  private async sendEmail(
    templateId: string, 
    params: Record<string, unknown>
  ): Promise<boolean> {
    try {
      if (!this.initialized) {
        this.initialize();
      }

      const response = await emailjs.send(
        emailConfig.serviceId,
        templateId,
        {
          ...params,
          to_email: emailConfig.notificationEmail
        }
      );

      return response.status === 200;
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes('not found')) {
          throw new Error(EMAIL_ERRORS.ACCOUNT_NOT_FOUND);
        }
      }
      throw error;
    }
  }

  public async sendContactEmail(data: ContactEmailData): Promise<boolean> {
    try {
      const params = formatContactEmail(data);
      return await this.sendEmail(emailConfig.contactTemplateId, params);
    } catch (error) {
      throw error;
    }
  }

  public async sendConsultationEmail(data: ConsultationEmailData): Promise<boolean> {
    try {
      const params = formatConsultationEmail(data);
      return await this.sendEmail(emailConfig.consultationTemplateId, params);
    } catch (error) {
      throw error;
    }
  }
}

export const emailService = EmailService.getInstance();