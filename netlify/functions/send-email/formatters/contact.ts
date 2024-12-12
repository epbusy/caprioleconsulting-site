import { EmailData } from '../types/email';
import { formatDateTime } from './utils';

export const formatContactEmail = (data: EmailData): string => `
=== CONTACT FORM MESSAGE ===

From: ${data.fullName}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

Submission Time: ${formatDateTime(new Date())}

=== END OF MESSAGE ===
`.trim();