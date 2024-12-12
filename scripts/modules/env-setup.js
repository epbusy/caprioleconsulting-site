import { writeFileSync, existsSync } from 'fs';
import { paths } from '../utils/paths.js';
import { log } from '../utils/logger.js';

export function createEnvFiles() {
  try {
    if (!existsSync(paths.envExample)) {
      const envExample = `# Server Configuration
VITE_API_URL=http://localhost:3000

# Feature Flags
VITE_ENABLE_FEATURE_X=false

# Third Party Services
VITE_ANALYTICS_ID=

# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# reCAPTCHA Configuration
VITE_RECAPTCHA_SITE_KEY=your_site_key
`;
      writeFileSync(paths.envExample, envExample);
      log('Created .env.example template', 'success');
    }
    
    if (!existsSync(paths.envLocal)) {
      writeFileSync(paths.envLocal, '# Local development overrides\n');
      log('Created .env.local for local development', 'success');
    }
  } catch (error) {
    log(`Failed to create environment files: ${error.message}`, 'error');
    throw error;
  }
}