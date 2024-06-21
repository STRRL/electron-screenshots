import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    return {
      plugins: [react(), svgr({
        include: './src/**/*.svg'
      })]
    }
  }

  if (mode === 'web') {
    return {
      base: './',
      plugins: [react(), svgr({
        include: './src/**/*.svg'
      })]
    }
  }

  if (mode === 'electron') {
    return {
      base: './',
      build: {
        outDir: 'electron',
        rollupOptions: {
          input: {
            index: './electron.html'
          }
        }
      },
      plugins: [react(), svgr({
        include: './src/**/*.svg'
      })]
    }
  }

  if (mode === 'lib') {
    return {
      build: {
        outDir: 'lib',
        lib: {
          entry: './src/Screenshots/index.tsx',
          formats: ['es', 'cjs'],
          fileName: format => `react-screenshots.${format}.js`
        },
        rollupOptions: {
          external: ['react', 'react-dom']
        }
      },
      plugins: [
        react({
          jsxRuntime: 'classic'
        }),
        svgr({
          include: '**/*.svg'
        })
      ]
    }
  }
})
