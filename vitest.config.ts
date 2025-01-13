/// <reference types="vitest" />
import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/setup.ts'],
      include: ['**/*.{test,spec}.{ts,tsx}']
    }
  })
)