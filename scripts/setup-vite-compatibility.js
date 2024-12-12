#!/usr/bin/env node

import { log } from './utils/logger.js';
import { updateVite } from './modules/vite-updater.js';
import { updatePackageJson } from './modules/package-updater.js';
import { updatePostcssConfig } from './modules/postcss-updater.js';
import { createEnvFiles } from './modules/env-setup.js';
import { updateViteConfig } from './modules/vite-config-updater.js';

async function main() {
  try {
    log('\n🚀 Starting Vite compatibility setup...\n');
    
    await updateVite();
    await updatePackageJson();
    await updatePostcssConfig();
    await createEnvFiles();
    await updateViteConfig();
    
    log('\n✨ Setup complete! Next steps:', 'success');
    log('\n1. Run the development server:', 'info');
    log('   npm run dev\n');
    log('2. Debug Node.js warnings if needed:', 'info');
    log('   node --trace-warnings node_modules/vite/bin/vite.js\n');
    log('3. Set up your environment variables in .env.local\n');
    log('4. Test the application in your browser at http://localhost:3000\n');
  } catch (error) {
    log(`\n❌ Setup failed: ${error.message}`, 'error');
    process.exit(1);
  }
}

main();