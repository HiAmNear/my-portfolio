import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
// https://vite.dev/config/
const resolvePath = (dir) => path.resolve(__dirname, dir);
const staticsBase = resolvePath('src/assets');
const templateBase = resolvePath('src/template');

export default defineConfig({
  plugins: [react()],
  resolve: {
  alias: {
      // Dùng biến gốc
      '@Assets': staticsBase,
      '@Template': templateBase,
      '@NavigationBar': path.join(templateBase,'pages/navbar/navbar'),
      '@FooterBar': path.join(templateBase,'pages/footer/footer'),
      '@Icon': path.join(templateBase,'components/icon'),
      '@Data': path.join(staticsBase,'data'),
      '@WindowWidth': path.join(templateBase,'components/window_width'),

      '@ScssGlobal': path.join(staticsBase, 'scss/global.scss'),
      '@Translation': resolvePath('src/assets/i18n/useTranslation.js'),
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
