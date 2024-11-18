import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    historyApiFallback: true, // تفعيل إعادة توجيه المسارات إلى index.html
  },
});