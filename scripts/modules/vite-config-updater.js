import { writeFileSync } from 'fs';
import { paths } from '../utils/paths.js';
import { log } from '../utils/logger.js';

export function updateViteConfig() {
  try {
    const config = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    host: true,
  },
  preview: {
    port: 4173,
    strictPort: true,
    host: true,
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
});
`;
    
    writeFileSync(paths.viteConfig, config);
    log('Updated Vite configuration', 'success');
  } catch (error) {
    log(`Failed to update Vite config: ${error.message}`, 'error');
    throw error;
  }
}