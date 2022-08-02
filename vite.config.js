import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [vue()],
});
