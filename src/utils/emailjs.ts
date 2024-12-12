import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/email';
import { formatDateTime } from './dateUtils';
import type { ConsultationFormData } from '../components/consultation/types';

let initialized = false;

export const initEmailJS = (): void => {
  if (!initialized) {
    emailjs.init(emailConfig.publicKey);
    initialized = true;
  }
};

export const sendEmail = async (data: ConsultationFormData): Promise<boolean> => {
  try {
    if (!initialized) {
      initEmailJS();
    }

    // Format the message content
    const messageContent = `
=== CONSULTATION REQUEST DETAILS ===

CONTACT INFORMATION
------------------
Full Name: ${data.fullName}
Email: ${data.email}
Phone Number: ${data.phoneNumber || 'Not provided'}
SMS Consent: ${data.textConsent ? 'Yes' : 'No'}

COMPANY INFORMATION
-----------------
Company Name: ${data.companyName || 'Not provided'}

PROJECT DETAILS
-------------
Service Type: ${data.serviceType}
Project Description: ${data.projectDescription}

BUDGET & TIMELINE
---------------
Budget Range: ${data.budgetRange}
Timeline: ${data.timeline}

SUBMISSION INFORMATION
-------------------
Submission Time: ${formatDateTime(new Date())}

=== END OF REQUEST ===`;

    const templateParams = {
      to_email: 'caprioleaiconsulting@gmail.com',
      from_name: data.fullName,
      from_email: data.email,
      subject: `Consultation Request from ${data.fullName} - ${data.serviceType}`,
      message: messageContent,
      submission_time: formatDateTime(new Date())
    };

    const response = await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      templateParams
    );

    return response.status === 200;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};