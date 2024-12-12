import { readFileSync, writeFileSync } from 'fs';
import { paths } from '../utils/paths.js';
import { log } from '../utils/logger.js';

export function updatePackageJson() {
  try {
    const packageJson = JSON.parse(readFileSync(paths.packageJson, 'utf8'));
    
    packageJson.type = 'module';
    
    if (!packageJson.scripts?.dev?.includes('--host')) {
      packageJson.scripts.dev = 'vite --host';
    }
    
    writeFileSync(paths.packageJson, JSON.stringify(packageJson, null, 2));
    log('Updated package.json configuration', 'success');
  } catch (error) {
    log(`Failed to update package.json: ${error.message}`, 'error');
    throw error;
  }
}