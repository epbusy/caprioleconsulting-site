import type { ConsultationEmailData } from '../types/consultation';
import { formatDateTime } from '../../../utils/dateUtils';

export const formatConsultationEmail = (data: ConsultationEmailData) => ({
  from_name: data.fullName,
  from_email: data.email,
  subject: `Consultation Request: ${data.serviceType}`,
  message: `
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
`.trim()
});