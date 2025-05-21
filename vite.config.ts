import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@models': path.resolve(__dirname, 'src/models'),
      '@': path.resolve(__dirname, 'src/'),
    },
  },
})
