import type { ContactEmailData } from '../types/contact';
import { formatDateTime } from '../../../utils/dateUtils';

export const formatContactEmail = (data: ContactEmailData) => ({
  from_name: data.fullName,
  from_email: data.email,
  subject: `Contact Form: ${data.subject}`,
  message: `
=== CONTACT FORM MESSAGE ===

From: ${data.fullName}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

Submission Time: ${formatDateTime(new Date())}

=== END OF MESSAGE ===
`.trim()
});