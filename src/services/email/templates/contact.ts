import type { EmailData } from '../types';
import { formatDateTime } from '../../../utils/dateUtils';

export function formatContactEmail(data: EmailData): string {
  return `
=== CONTACT FORM MESSAGE ===

From: ${data.fullName}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

Submission Time: ${formatDateTime(new Date())}

=== END OF MESSAGE ===
`.trim();
}