import { execSync } from 'child_process';
import { log } from '../utils/logger.js';

export async function updateVite() {
  try {
    log('Upgrading Vite to latest version...');
    execSync('npm install vite@latest --save-dev', { stdio: 'inherit' });
    log('Successfully upgraded Vite!', 'success');
  } catch (error) {
    log(`Failed to upgrade Vite: ${error.message}`, 'error');
    throw error;
  }
}