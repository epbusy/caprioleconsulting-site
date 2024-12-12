import { writeFileSync, existsSync } from 'fs';
import { execSync } from 'child_process';
import { paths } from '../utils/paths.js';
import { log } from '../utils/logger.js';

export function updatePostcssConfig() {
  if (existsSync(paths.postcssConfig)) {
    try {
      const config = `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`;
      writeFileSync(paths.postcssConfigCjs, config);
      execSync(`rm ${paths.postcssConfig}`);
      log('Updated PostCSS configuration to CJS format', 'success');
    } catch (error) {
      log(`Failed to update PostCSS config: ${error.message}`, 'error');
      throw error;
    }
  }
}