import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
// https://vite.dev/config/
const resolvePath = (dir) => path.resolve(__dirname, dir);
const staticsBase = resolvePath('src/assets');
const templateBase = resolvePath('src/Template');

export default defineConfig({
  plugins: [react()],
  resolve: {
  alias: {
      // Dùng biến gốc
      '@Assets': staticsBase,
      '@Template': templateBase,
      '@Translation': resolvePath('src/i18n/useTranslation.js'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@ScssGlobal" as *;`
      }
    }
  }
})
