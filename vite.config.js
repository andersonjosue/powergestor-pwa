import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // input: {
      //   powergestor: resolve(__dirname, 'powergestor/index.html'),
      //   planilhas: resolve(__dirname, 'planilhas/index.html'),
      //   powerchats: resolve(__dirname, 'powerchats/index.html')
      // },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    },
    outDir: 'dist'
  },
  base: '', // importante para servir do subdomínio raiz
});
