import { EmailData } from '../types';

interface Section {
  title: string;
  fields: Array<{ label: string; value?: string | boolean }>;
}

const formatSection = (section: Section): string => {
  const fields = section.fields
    .filter(field => field.value !== undefined)
    .map(field => `${field.label}: ${field.value || 'Not provided'}`)
    .join('\n');
  
  return `\n${section.title}\n${'-'.repeat(section.title.length)}\n${fields}`;
};

export const formatEmailContent = (data: EmailData): string => {
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

  return sections.map(formatSection).join('\n');
};