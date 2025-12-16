import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
      ,
      build: {
        // Raise the chunk size warning limit to avoid noisy warnings for intentional large chunks
        chunkSizeWarningLimit: 1200,
        rollupOptions: {
          output: {
            manualChunks(id: string) {
              if (id.includes('node_modules')) {
                if (id.includes('three')) return 'three-vendors';
                if (id.includes('@react-three/fiber')) return 'r3f';
                if (id.includes('@react-three/drei')) return 'drei';
                if (id.includes('framer-motion')) return 'framer-motion';
                if (id.includes('lucide-react')) return 'lucide';
                if (id.includes('@google/genai')) return 'genai';
                return 'vendor';
              }
            }
          }
        }
      }
    };
});
