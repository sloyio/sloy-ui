import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'node:path';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
    svgr(),
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      name: 'sloy-ui',
      formats: ['es', 'umd'],
      fileName: (format) => `sloy-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled-components',
        },
      },
    },
  },
});
