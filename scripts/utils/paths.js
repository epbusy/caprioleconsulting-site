import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
export const projectRoot = resolve(__dirname, '../..');

export const paths = {
  packageJson: resolve(projectRoot, 'package.json'),
  postcssConfig: resolve(projectRoot, 'postcss.config.js'),
  postcssConfigCjs: resolve(projectRoot, 'postcss.config.cjs'),
  viteConfig: resolve(projectRoot, 'vite.config.ts'),
  envExample: resolve(projectRoot, '.env.example'),
  envLocal: resolve(projectRoot, '.env.local')
};