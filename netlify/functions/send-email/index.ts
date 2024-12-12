import { Handler } from '@netlify/functions';
import { withSecurity } from './middleware/security';
import { emailHandler } from './handlers/email-handler';

export const handler: Handler = withSecurity(emailHandler);