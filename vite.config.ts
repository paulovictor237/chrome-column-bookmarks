import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react(), tsconfigPaths()],
  plugins: [react()],
  resolve: {
    // alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    alias: [{ find: '@', replacement: '/src' }],
  },
});
