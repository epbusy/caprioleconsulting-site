import type { EmailData } from '../types';
import { formatDateTime } from '../../../utils/dateUtils';

export function formatConsultationEmail(data: EmailData): string {
  const sections = [
    {
      title: 'CONTACT INFORMATION',
      content: `
Full Name: ${data.fullName}
Email: ${data.email}
Phone Number: ${data.phoneNumber || 'Not provided'}
SMS Consent: ${data.textConsent ? 'Yes' : 'No'}`
    },
    {
      title: 'COMPANY INFORMATION',
      content: `Company Name: ${data.companyName || 'Not provided'}`
    },
    {
      title: 'PROJECT DETAILS',
      content: `
Service Type: ${data.serviceType}
Project Description: ${data.projectDescription}`
    },
    {
      title: 'BUDGET & TIMELINE',
      content: `
Budget Range: ${data.budgetRange}
Timeline: ${data.timeline}`
    }
  ];

  return `
=== CONSULTATION REQUEST ===

${sections.map(section => `
${section.title}
${'-'.repeat(section.title.length)}
${section.content}
`).join('\n')}

Submission Time: ${formatDateTime(new Date())}

=== END OF REQUEST ===
`.trim();
}