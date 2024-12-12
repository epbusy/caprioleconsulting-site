import type { EmailParams } from '../types/email';
import { formatDateTime } from './dateUtils';

interface Section {
  title: string;
  fields: Array<{ label: string; value?: string | boolean }>;
}

const formatSection = (section: Section): string => {
  const fields = section.fields
    .filter(field => field.value !== undefined)
    .map(field => `${field.label}: ${field.value || 'Not provided'}`)
    .join('\n');
  
  return `
${section.title}
${'-'.repeat(section.title.length)}
${fields}`;
};

export const formatEmailContent = (data: EmailParams): string => {
  const submissionTime = formatDateTime(new Date());
  
  const sections: Section[] = [
    {
      title: 'CONTACT INFORMATION',
      fields: [
        { label: 'Full Name', value: data.fullName },
        { label: 'Email', value: data.email },
        { label: 'Phone Number', value: data.phoneNumber },
        { label: 'SMS Consent', value: data.textConsent ? 'Yes' : 'No' }
      ]
    },
    {
      title: 'COMPANY INFORMATION',
      fields: [
        { label: 'Company Name', value: data.companyName }
      ]
    },
    {
      title: 'PROJECT DETAILS',
      fields: [
        { label: 'Service Type', value: data.serviceType },
        { label: 'Project Description', value: data.projectDescription }
      ]
    },
    {
      title: 'BUDGET & TIMELINE',
      fields: [
        { label: 'Budget Range', value: data.budgetRange },
        { label: 'Timeline', value: data.timeline }
      ]
    }
  ];

  return `
=== CONSULTATION REQUEST DETAILS ===
${sections.map(formatSection).join('\n')}

SUBMISSION INFORMATION
${'-'.repeat(21)}
Submission Time: ${submissionTime}

=== END OF REQUEST ===`;
};