import { EmailData } from '../types/email';
import { formatDateTime } from './utils';

export const formatConsultationEmail = (data: EmailData): string => `
=== CONSULTATION REQUEST ===

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

Submission Time: ${formatDateTime(new Date())}

=== END OF REQUEST ===
`.trim();